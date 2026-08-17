import { User, Users, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ShotFrame from "./ShotFrame";

const MODES = [
  {
    icon: User,
    name: "单智能体",
    tagline: "一只牛同事",
    desc: "一个 ReAct Agent 走完全程，轻量、适合单一文档或问答。直接交代一件事，拿到一个可打开的交付文件。",
    steps: ["对话下达任务", "Agent 规划并调用工具", "写盘生成文档", "同窗口预览确认"],
    shot: "/screenshots/home-single-agent.png",
    alt: "单智能体主页",
  },
  {
    icon: Users,
    name: "多智能体 Workforce",
    tagline: "一整个牛团队",
    desc: "Planner 拆任务 → 你确认子任务 → Coordinator 按依赖并行委派文档 / 浏览 / 开发工人，失败可重规划。适合拆解、并行、多格式一起交付。",
    steps: ["Planner 拆解任务", "人工确认子任务", "按依赖并行执行", "汇总交付 + 失败重规划"],
    shot: "/screenshots/home-multi-agent.png",
    alt: "多智能体主页",
  },
];

export default function Modes() {
  return (
    <section id="modes" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="执行模式"
          title="简单的事交给一个人，复杂的事交给一个团队"
          description="两种执行模式按需切换：单智能体轻量直达，多智能体 Workforce 负责拆解、并行与多格式交付。"
        />

        <div className="space-y-20">
          {MODES.map((mode, idx) => (
            <div
              key={mode.name}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800 px-4 py-1.5 text-sm text-ink-200">
                    <mode.icon className="h-4 w-4 text-accent-400" />
                    {mode.tagline}
                  </div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">{mode.name}</h3>
                  <p className="mt-4 leading-7 text-ink-300">{mode.desc}</p>

                  <ol className="mt-7 space-y-3">
                    {mode.steps.map((step, i) => (
                      <li key={step} className="flex items-center gap-3 text-sm text-ink-200">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-xs font-semibold text-accent-400">
                          {i + 1}
                        </span>
                        {step}
                        {i < mode.steps.length - 1 && (
                          <ArrowRight className="hidden h-3.5 w-3.5 text-ink-600 sm:block" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ShotFrame src={mode.shot} alt={mode.alt} className="md:translate-y-2" />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
