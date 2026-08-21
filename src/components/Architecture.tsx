import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const LAYERS = [
  { level: "L9", name: "入口 server/", desc: "HTTP / SSE / 远程通道 / 定时触发" },
  { level: "L8", name: "编排 orchestrator/", desc: "任务生命周期、会话" },
  { level: "L7", name: "执行 graphs/ agents/ runtime/", desc: "LangGraph、checkpoint、预算闸" },
  { level: "L6", name: "记忆 memory/", desc: "短期上下文 + 长期向量记忆" },
  { level: "L5", name: "可观测 observability/", desc: "Trace、日志脱敏、用量" },
  { level: "L4", name: "护栏 guardrails/", desc: "审批门、高危命令拒单、审计" },
  { level: "L3", name: "工具 tools/", desc: "fs / exec / 文档 / MCP / Skills" },
  { level: "L2", name: "模型 llm/", desc: "Provider 网关、token 计数" },
  { level: "L1", name: "沙箱 sandbox/", desc: "路径白名单、出网策略" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="架构"
        title="单机胖客户端，一切都在你的电脑上"
        description="Electron 启动时拉起本机 Python（FastAPI），渲染进程用 localhost HTTP + SSE 对话和看 Trace。工具调用都在本机进程内完成，没有「远端再回调本机」。"
      />

      <div className="grid items-center gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-ink-400">用户本机</span>
            </div>
            <div className="terminal-body space-y-1">
              <p className="text-ink-100">Electron 渲染进程 (React)</p>
              <p className="pl-4 text-ink-400">对话 / 工作区 / 助手 / 连接器 / 设置</p>
              <p className="pl-8 text-accent-400">│ HTTP + SSE</p>
              <p className="text-ink-100">Electron 主进程 (Node)</p>
              <p className="pl-4 text-ink-400">spawn 后端 · Keychain · PDF · 文件对话框</p>
              <p className="pl-8 text-accent-400">│ localhost</p>
              <p className="text-ink-100">Python (FastAPI + LangGraph)</p>
              <p className="pl-4 text-ink-400">编排 → Graph → 工具 / MCP / Skills</p>
              <p className="pl-4 text-ink-400">SQLite + sqlite-vec · APScheduler</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink-400">
            可选：设置 → 远程连接 · 飞书长连接 / 微信扫码
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="space-y-2">
            <p className="mb-4 text-sm text-ink-300">
              后端按 harness 九层划分，跨层依赖只允许向下，由
              <code className="mx-1 rounded bg-ink-800 px-1.5 py-0.5 text-xs text-accent-400">
                import-linter
              </code>
              在 CI 中强制约束。
            </p>
            {LAYERS.map((layer) => (
              <div
                key={layer.level}
                className="flex items-center gap-4 rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 transition-colors hover:border-accent-500/30"
              >
                <span className="w-8 shrink-0 font-mono text-xs font-semibold text-accent-400">
                  {layer.level}
                </span>
                <span className="w-44 shrink-0 truncate text-sm font-medium text-ink-100">
                  {layer.name}
                </span>
                <span className="truncate text-sm text-ink-400">{layer.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
