import { User, Users, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ShotFrame from "./ShotFrame";

const MODES = [
  {
    icon: User,
    name: "一只牛同事",
    tagline: "轻活，一个人就够",
    desc: "交代一件事，拿走一份成稿。不问流程，只问结果——适合单一文档、一次问答、马上能打开的那份文件。",
    steps: ["开口交代", "它开始动手", "文件写入硬盘", "当场预览"],
    shot: "/screenshots/home-single-agent.png",
    alt: "单智能体主页",
  },
  {
    icon: Users,
    name: "一整个牛团队",
    tagline: "重活，叫上全班",
    desc: "像带一个小团队：先拆题，你点头，再分头去写、去查、去敲。哪路翻了车，再排一次。适合拆解、并行、多种格式一起交。",
    steps: ["拆成可做的事", "你来拍板", "分头并行", "收拢，或重来"],
    shot: "/screenshots/home-multi-agent.png",
    alt: "多智能体主页",
  },
];

export default function Modes() {
  return (
    <section id="modes" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="怎么干活"
          title="一个人就够，还是叫上全班？"
          description="轻活用一只手做完；重活拆成并行的几路，再把结果收回来。两种班底，按这件事的分量切换。"
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
