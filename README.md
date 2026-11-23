# Manager Agent

基于开源项目 [Datus-ai/Datus-agent](https://github.com/Datus-ai/Datus-agent) 的 **Web Chatbot 部署脚手架**。

把官方 `datus-agent` 装进独立 venv，用本项目提供的脚本一键起停，并把**部署层**的 `datus`
统一改名为 `manager`（`datus→manager`、`Datus→Manager`、`DATUS→MANAGER`）。

- 上游版本：`datus-agent==0.4.5`（Python 3.12+）
- 形态：FastAPI + React 的 Web 对话界面，默认端口 `8501`
- 适用：Linux x86_64 / WSL2

## 快速开始

```bash
git clone https://github.com/zdm-123/manager-agent.git
cd manager-agent

# 1. 安装（Python 3.12）
python3 -m venv .venv
PIP_CACHE_DIR=$PWD/.pipcache .venv/bin/pip install datus-agent==0.4.5

# 2. 首次启动：会自动生成 conf/agent.yml、初始化 manager-home、拉起服务
DEEPSEEK_API_KEY=sk-xxx ./start.sh

# 3. 打开 http://localhost:8501
```

启动完成后：

```bash
./status.sh     # PID + HTTP 状态
./stop.sh       # 停止
tail -f logs/web.log
```

> 换 API Key / 换模型 / 加数据源，改 `conf/agent.yml` 后 `./stop.sh && ./start.sh`。

## 目录结构

```
.
├── start.sh / stop.sh / status.sh   # 启停与状态
├── conf/
│   ├── agent.yml.example            # 配置模板（__ROOT__ / __API_KEY__ 占位）
│   └── agent.yml                    # 实际配置（git 忽略，含 Key，权限 600）
├── web-assets/                      # 本地化前端产物（离线可用，不依赖 CDN）
├── manager-home/                    # 运行时数据（git 忽略）：样例库、会话、模板、缓存
├── runtime-home/                    # 伪 $HOME，其下 .datus 软链到 manager-home
├── logs/  run/                      # 日志与 PID（git 忽略）
└── README.md
```

`manager-home` 由 Datus 在首次启动时 bootstrap 生成，包含：

- `sample/duckdb-demo.duckdb` —— 内置示例库（17 张表）
- `benchmark/california_schools/` —— 内置 benchmark 数据
- `template/` —— 提示词模板；`sessions/`、`data/`、`cache/`

## 配置说明

`conf/agent.yml` 由 `conf/agent.yml.example` 生成，关键项：

```yaml
agent:
  home: <仓库绝对路径>/manager-home
  language: zh
  providers:
    deepseek:
      api_key: <DEEPSEEK_API_KEY>
  target_provider: deepseek
  target_model: deepseek-v4-pro     # 也可用 deepseek-flash
  services:
    datasources:
      duckdb_demo:                  # 默认数据源
        type: duckdb
        uri: .../manager-home/sample/duckdb-demo.duckdb
        default: true
```

### 接入自己的数据库

在 `services.datasources` 下新增条目，并把 `default: true` 移到该条目（支持 MySQL / PostgreSQL /
Snowflake / BigQuery / ClickHouse / StarRocks / Doris / Trino / Hive / Oracle 等 21 种）：

```yaml
      mysql_prod:
        type: mysql
        host: 10.0.0.12
        port: 3306
        username: readonly
        password: ${MYSQL_PASSWORD}   # 支持环境变量替换
        database: analytics
        default: true
```

## 命名：哪些改了，哪些没改

已改名：`datus-home` → `manager-home`、`datus-web.pid` → `manager-web.pid`、
配置/脚本/文档中的路径与文案。

仍有 4 处 `datus` 是**上游安装包硬编码**，部署层改不了（改了服务会挂）：

| 位置 | 原因 |
|------|------|
| `.venv/…/datus/`、`.venv/bin/datus` | 包自身的模块目录与可执行文件，脚本仍需调用它 |
| `runtime-home/.datus`（软链） | 包内 `Path.home()/".datus"` 硬编码，启动早期就依赖 |
| `web-assets/datus-chatbot.*` | 包内 `index.html` 模板写死了这些资源 URL |
| `manager-home/data/…/datus_db` | 包内向量库目录名硬编码 |

要彻底改名需要 fork 上游源码并同时修改包名/import/入口/模板，不在本项目范围内。

## 为什么改写 HOME

当前部署环境对用户家目录不可写，而 Datus 启动早期就会在 `~/.datus` 建日志目录，直接跑会
`PermissionError`。`start.sh` 因此：

1. `export HOME=$ROOT/runtime-home`
2. `ln -sfn $ROOT/manager-home $HOME/.datus`

配合 `conf/agent.yml` 里的 `agent.home`，让配置、`~/.datus`、数据目录三者指向同一处，
行为与标准安装一致。若家目录可写，可去掉这两步。

## 其他入口

安装包同时提供 REST API / CLI / MCP：

```bash
HOME=$PWD/runtime-home ./.venv/bin/datus-api --config conf/agent.yml --port 8000   # REST + /docs
HOME=$PWD/runtime-home ./.venv/bin/datus --config conf/agent.yml --datasource duckdb_demo
HOME=$PWD/runtime-home ./.venv/bin/datus-mcp --config conf/agent.yml --datasource duckdb_demo
```

## 排障

- 页面空白：`curl -I http://localhost:8501/chatbot-assets/datus-chatbot.umd.js` 应为 200（资源已本地化，离线可用）。
- 对话报模型错误：`tail -50 logs/web.log`，核对 Key、模型名与余额。
- 端口占用：`ss -lntp | grep 8501`，或 `./start.sh --port 8502`。
- pip 安装失败（`pyperclip` 构建报权限错误）：确保 `PIP_CACHE_DIR` 指向可写目录。

## License

- 本项目（脚本与文档）：Apache-2.0
- 上游 [Datus-agent](https://github.com/Datus-ai/Datus-agent)：Apache-2.0
- `web-assets/` 为上游 `@datus/web-chatbot` 2.0.0 构建产物与 React 18.3.1（MIT），版权归各自作者，详见 [NOTICE](NOTICE)
