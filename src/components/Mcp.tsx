import { AtSign, FileJson, Globe, Radio, Terminal, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const TRANSPORTS = [
  {
    icon: Terminal,
    name: "住在你电脑里",
    desc: "本机拉起一条工具链，像 Playwright、sequential-thinking，随叫随到，不必绕到云上。",
  },
  {
    icon: Globe,
    name: "远处伸过来一只手",
    desc: "填一个地址，可选带上 Headers，托管的 MCP 就能用——不必再在本机开进程。",
  },
  {
    icon: Radio,
    name: "细水长流的通道",
    desc: "SSE 把远程工具轻轻推过来。老派、稳定，一样能接到牛同事手上。",
  },
];

const ACTIONS = [
  {
    icon: FileJson,
    title: "把旧配置带过来",
    desc: "Cursor、Claude 的 mcp.json 贴进来就走。名字撞了会拦住你，免得盖掉已经在岗的那位。",
  },
  {
    icon: Wrench,
    title: "通不通，一眼便知",
    desc: "测连通、看工具数量，随时改、随时关。本地改命令，远程改地址。",
  },
  {
    icon: AtSign,
    title: "你点名，它才伸手",
    desc: "这一轮只要浏览器？打个 @playwright。别的手，先别伸。",
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
        eyebrow="接上世界"
        title="给它一双手，去够得到的工具"
        description="本机的、云上的，都能接到牛同事手上。你 @ 谁，它才用谁——不多伸手。"
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
            想让它自己上网点一点？Playwright 已经在工具箱里。
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
