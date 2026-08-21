import { AtSign, FileJson, Globe, Radio, Terminal, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const TRANSPORTS = [
  {
    icon: Terminal,
    name: "本地 stdio",
    desc: "用 command / args / 环境变量拉起本机 MCP，例如 npx 跑 sequential-thinking 或 Playwright。",
  },
  {
    icon: Globe,
    name: "Streamable HTTP",
    desc: "填远程 URL 和可选 Headers，连到托管的 MCP 服务，不必在本机再起一个进程。",
  },
  {
    icon: Radio,
    name: "SSE",
    desc: "同样走远程 URL，适合仍以 Server-Sent Events 暴露工具的 MCP 端点。",
  },
];

const ACTIONS = [
  {
    icon: FileJson,
    title: "导入 mcp.json",
    desc: "粘贴 Cursor / Claude 格式；重名会拒绝。也可以直接编辑 ~/.my-cowork/mcp.json。",
  },
  {
    icon: Wrench,
    title: "测试、编辑、开关",
    desc: "每个连接器可测连通并显示工具数量，本地改命令和环境变量，远程改 URL 与 Headers。",
  },
  {
    icon: AtSign,
    title: "@连接器名 按轮限定",
    desc: "输入 @playwright 或从选择器插入，仅本轮启用对应 MCP 工具，其它工具不受影响。",
  },
];

const MCP_JSON = `{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}`;

export default function Mcp() {
  return (
    <section id="mcp" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="连接器 · MCP"
        title="把外部工具接到牛同事手上"
        description="Hub → 连接器。本地进程、远程 HTTP / SSE 都能加；对话里用 @ 点名，只把本轮需要的 MCP 工具交给 Agent。"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {TRANSPORTS.map(({ icon: Icon, name, desc }, i) => (
          <Reveal key={name} delay={i * 60}>
            <div className="h-full rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40">
              <span className="mb-4 inline-flex rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
              <p className="text-sm leading-6 text-ink-300">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-ink-400">mcp.json · Cursor / Claude 格式</span>
            </div>
            <div className="terminal-body">
              <pre className="overflow-x-auto whitespace-pre text-xs leading-6 text-ink-200 md:text-sm">
                <code>{MCP_JSON}</code>
              </pre>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-ink-400">
            内置浏览器自动化走 Playwright MCP，按需安装 Chromium
          </p>
        </Reveal>

        <div className="space-y-4">
          {ACTIONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={80 + i * 60}>
              <div className="flex gap-4 rounded-2xl border border-ink-700 bg-ink-900 p-5">
                <span className="shrink-0 rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-ink-300">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
