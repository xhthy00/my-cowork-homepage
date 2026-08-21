import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    title: "1 · 准备环境",
    code: "Node.js 20+ · Python 3.11+ · uv",
    comment: "macOS 或 Windows",
  },
  {
    title: "2 · 安装依赖",
    code: "cd backend && uv sync\ncd .. && npm install\nnpm run fetch:officecli   # 可选：办公文档高保真生成",
    comment: null,
  },
  {
    title: "3 · 启动开发模式",
    code: "npm run dev",
    comment: "同时拉起 Vite、TypeScript watch 和 Electron",
  },
  {
    title: "4 · 首次配置",
    code: "设置 → API / 模型 → 选厂商 · 填 API Key · 保存",
    comment: "校验通过才会写入系统钥匙串",
  },
];

export default function QuickStart() {
  return (
    <section id="quickstart" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="现在就开始"
        title="三分钟，它就坐到你桌边"
        description="开发者一条命令叫醒它；也可以直接下载安装包，请它正式入职。"
      />

      <div className="mx-auto max-w-3xl space-y-6">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 60}>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-ink-400">{step.title}</span>
              </div>
              <div className="terminal-body">
                <pre className="whitespace-pre-wrap">
                  <code>{step.code}</code>
                </pre>
                {step.comment && <p className="mt-2 text-xs text-ink-400"># {step.comment}</p>}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={240}>
          <div className="rounded-xl border border-accent-500/25 bg-accent-500/5 p-5 text-sm leading-7 text-ink-200">
            <p className="mb-1 font-medium text-white">试一句就知道</p>
            对它说：<span className="rounded bg-ink-800 px-2 py-0.5 font-mono text-xs">在桌面写 hello.txt，内容 hi</span>
            。你一点头，文件就该出现在桌面上。
          </div>
        </Reveal>
      </div>
    </section>
  );
}
