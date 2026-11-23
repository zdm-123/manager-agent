# Developer Guide

This page is for contributors running Manager Agent from a source checkout. If you are installing a released package, start with the [Quickstart](../getting_started/Quickstart.md) instead.

## Source Setup

Use Python 3.12. The recommended development environment is `uv`:

```bash
uv venv -p 3.12
uv sync --dev
source .venv/bin/activate
```

`uv sync --dev` installs the runtime package, test tools, and tracing integrations used during development.

The source checkout exposes the same console entry points as the installed package:

```bash
uv run manager --version
uv run manager-agent --version
```

Use these entry points in docs and scripts:

| Command | Purpose |
| --- | --- |
| `manager` | Interactive REPL and TUI |
| `manager-agent` | Batch commands such as `probe-llm`, `check-db`, `bootstrap-kb`, and `benchmark` |
| `manager-api` | REST API server |
| `manager-mcp` | MCP server |

`python -m manager.main` and `python -m manager.cli.main` still work for low-level debugging, but they are not the preferred user-facing commands.

The English and Chinese docs are built separately so each site has its own search index. From a fresh source checkout, provide the MkDocs plugins required by `mkdocs.yml` and select the locale:

```bash
DOCS_LOCALE=en uv run --with mkdocs-material --with mike --with mkdocs-static-i18n mkdocs build --strict --site-dir site/en
DOCS_LOCALE=zh uv run --with mkdocs-material --with mike --with mkdocs-static-i18n mkdocs build --strict --site-dir site/zh
```

Versioned English docs are published at `/<version>/`, while Chinese docs are published at `/zh/<version>/`.

## Configuration

Configuration lookup order is:

1. `--config <path>` if provided.
2. `./conf/agent.yml` in the current working directory.
3. `~/.manager/conf/agent.yml`.

For local source work, copy the example only if you do not already have a local config:

```bash
cp conf/agent.yml.example conf/agent.yml
```

Keep secrets in environment variables rather than committing literal API keys.

### Models

Current model configuration is provider-based. Put credentials under `agent.providers`, then use `/model` in the REPL to choose the active provider/model for the current project. The selection is written to `./.manager/config.yml`.

```yaml
agent:
  home: ~/.manager
  providers:
    openai:
      api_key: ${OPENAI_API_KEY}
    deepseek:
      api_key: ${DEEPSEEK_API_KEY}
    claude:
      api_key: ${ANTHROPIC_API_KEY}
    gemini:
      api_key: ${GEMINI_API_KEY}
```

Use `agent.models` only for custom or private endpoints that are not covered by `conf/providers.yml`.

### Datasources

For a quick local smoke test, use the bundled DuckDB sample:

```yaml
agent:
  services:
    datasources:
      local_duckdb:
        type: duckdb
        uri: duckdb:///manager/sample_data/duckdb-demo.duckdb
```

Then verify the connection and open the REPL:

```bash
uv run manager-agent check-db --config conf/agent.yml --datasource local_duckdb
uv run manager --config conf/agent.yml --datasource local_duckdb
```

Inside the REPL, press **Tab** on an empty line to switch to `sql>` mode before running SQL:

```text
                          # Tab switches to SQL mode
sql> show tables;
sql> select * from tree;
                          # Esc returns to chat mode
> /help
```

You can also configure datasources interactively with `/datasource`; it writes to `~/.manager/conf/agent.yml` by default.

### Storage Layout

Do not configure `storage_path` for new setups. Data paths are derived from `agent.home`:

| Path | Contents |
| --- | --- |
| `{agent.home}/data/` | RDB/vector storage backends |
| `{agent.home}/sessions/` | Persisted chat sessions |
| `{agent.home}/benchmark/` | Built-in and custom benchmark data |
| `{agent.home}/trajectory/` | Workflow checkpoints and local LLM trace YAML files |
| `{cwd}/subject/` | Project semantic models, SQL summaries, and external knowledge |
| `{cwd}/.manager/config.yml` | Project-local model, datasource, and service pins |

## Smoke Tests

Run a model probe after configuring at least one provider:

```bash
uv run manager-agent probe-llm --config conf/agent.yml
```

Run a datasource probe:

```bash
uv run manager-agent check-db --config conf/agent.yml --datasource local_duckdb
```

Start the REPL:

```bash
uv run manager --config conf/agent.yml --datasource local_duckdb
```

For one-shot workflow execution, use `manager-agent run`:

```bash
uv run manager-agent run \
  --config conf/agent.yml \
  --datasource local_duckdb \
  --task_db_name duckdb-demo \
  --task "List the top 5 rows from the tree table"
```

## Benchmarks

`bird_dev`, `spider2`, and `semantic_layer` are built-in benchmark names. Their paths are fixed by Manager and are resolved under `{agent.home}/benchmark`; do not override their `benchmark_path` in `agent.yml`.

Expected built-in locations:

```text
~/.manager/benchmark/bird/dev_20240627/
~/.manager/benchmark/spider2/spider2-snow/
~/.manager/benchmark/semantic_layer/
```

Only custom benchmarks need entries under `agent.benchmark`.

### BIRD

Download the BIRD dev dataset into the Manager home directory:

```bash
cd ~/.manager
wget https://bird-bench.oss-cn-beijing.aliyuncs.com/dev.zip
unzip dev.zip
mkdir -p benchmark/bird
mv dev_20240627 benchmark/bird/
cd benchmark/bird/dev_20240627
unzip dev_databases
```

Configure a SQLite datasource that points at the extracted databases:

```yaml
agent:
  services:
    datasources:
      bird_sqlite:
        type: sqlite
        path_pattern: ~/.manager/benchmark/bird/dev_20240627/dev_databases/**/*.sqlite
```

Bootstrap metadata and run selected tasks:

```bash
uv run manager-agent bootstrap-kb \
  --config conf/agent.yml \
  --datasource bird_sqlite \
  --benchmark bird_dev \
  --kb_update_strategy overwrite

uv run manager-agent benchmark \
  --config conf/agent.yml \
  --datasource bird_sqlite \
  --benchmark bird_dev \
  --workflow fixed \
  --schema_linking_rate medium \
  --benchmark_task_ids 14 15
```

### Spider 2.0 Snow

Download the [Spider2 dataset](../benchmark/benchmark_manual.md#spider2-data) into `{agent.home}/benchmark/spider2/` before running this benchmark. The source checkout does not contain it.

Configure a Snowflake datasource. The datasource name can be anything; the examples use `snowflake`.

```yaml
agent:
  services:
    datasources:
      snowflake:
        type: snowflake
        account: ${SNOWFLAKE_ACCOUNT}
        username: ${SNOWFLAKE_USER}
        password: ${SNOWFLAKE_PASSWORD}  # Use private_key, or exactly one of password/private_key_file
        # private_key: ${SNOWFLAKE_PRIVATE_KEY}
        # private_key_file: ${SNOWFLAKE_PRIVATE_KEY_FILE}
        # private_key_file_pwd: ${SNOWFLAKE_PRIVATE_KEY_FILE_PWD}  # Optional
        database: ${SNOWFLAKE_DATABASE}  # Optional
        schema: ${SNOWFLAKE_SCHEMA}  # Optional
        warehouse: ${SNOWFLAKE_WAREHOUSE}
        role: ${SNOWFLAKE_ROLE}  # Optional
```

Use `database` and `schema` for Snowflake namespaces. Do not set `catalog` for Snowflake.

Bootstrap and run selected tasks:

```bash
uv run manager-agent bootstrap-kb \
  --config conf/agent.yml \
  --datasource snowflake \
  --benchmark spider2 \
  --kb_update_strategy overwrite

uv run manager-agent benchmark \
  --config conf/agent.yml \
  --datasource snowflake \
  --benchmark spider2 \
  --benchmark_task_ids sf_bq104
```

Spider metadata bootstrap can take hours because the benchmark contains thousands of tables.

### Semantic Layer

Agent uses the bundled Dosi engine for semantic models and metrics. Configure a datasource:

```yaml
agent:
  services:
    datasources:
      duckdb:
        type: duckdb
        uri: duckdb:///path/to/duck.db
```

Install Agent dependencies with `uv sync --locked`. Dosi loads models from the project's `subject/semantic_models/<datasource>/` directory.

Place semantic-layer benchmark data under:

```text
~/.manager/benchmark/semantic_layer/
```

Then run:

```bash
uv run manager-agent bootstrap-kb \
  --config conf/agent.yml \
  --datasource duckdb \
  --components metrics \
  --kb_update_strategy overwrite

uv run manager-agent benchmark \
  --config conf/agent.yml \
  --datasource duckdb \
  --benchmark semantic_layer \
  --workflow gen_sql_agentic
```

## Observability

Observability setup and tracing examples now live in the dedicated [Observability](observability.md) guide. It covers local REPL traces, local YAML traces, OpenTelemetry-based external tracing, and adapter configuration for LangSmith, Langfuse, Datadog, Braintrust, and generic OTLP collectors.

## Useful References

- [Quickstart](../getting_started/Quickstart.md)
- [Configuration Guide](../configuration/introduction.md)
- [Agent Configuration](../configuration/agent.md)
- [Observability](observability.md)
- [Benchmark Manual](../benchmark/benchmark_manual.md)
- [Dosi Semantic Engine](../semantic/dosi_engine.md)
- [LLM Trace Usage](../training/llm_trace_usage.md)
