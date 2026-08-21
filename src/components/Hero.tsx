import { ArrowRight, Download } from "lucide-react";
import { asset } from "../asset";
import Reveal from "./Reveal";
import LiveDemo from "./LiveDemo";

const CHIPS = [
  { strong: "数据不出门", rest: "· 文件写在你硬盘上" },
  { strong: "钥匙自己拿", rest: "· 进系统钥匙串" },
  { strong: "开口即成稿", rest: "· Word / Excel / PPT / 公文" },
  { strong: "人在外面也能喊", rest: "· 飞书 / 微信" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* 极光背景 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob animate-aurora left-[8%] top-[-12%] h-[420px] w-[420px] bg-accent-500/25" />
        <div className="aurora-blob animate-aurora-reverse right-[4%] top-[6%] h-[380px] w-[380px] bg-indigo-500/20" />
        <div className="aurora-blob animate-aurora bottom-[-20%] left-[35%] h-[460px] w-[460px] bg-rose-500/10 [animation-delay:-8s]" />
      </div>
      <div className="bg-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-sm font-medium tracking-[0.35em] text-accent-400">
            A COLLEAGUE ON YOUR MACHINE
          </p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white md:text-7xl md:leading-[1.05]">
            本机办公
            <span className="text-gradient">数字员工</span>
            <br />
            开口，桌上就是成稿
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ink-300 md:text-lg">
            不必在十个软件之间来回切。告诉它这周要什么，Word、Excel、PPT
            会写进你自己的文件夹，当场预览。人在飞书或微信，它也在。
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
            {CHIPS.map((chip) => (
              <span
                key={chip.strong}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur"
              >
                <span className="font-semibold text-accent-400">{chip.strong}</span>
                <span className="text-ink-300">{chip.rest}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#quickstart"
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 px-8 py-3.5 text-sm font-bold text-ink-950 shadow-[0_8px_40px_-8px_rgba(240,152,25,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              请它入职
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-900/60 px-8 py-3.5 text-sm font-medium text-ink-100 backdrop-blur transition-colors hover:border-accent-500/50 hover:text-white"
            >
              看看它能干嘛
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* 演示动画 + 截图 */}
        <div className="mt-20 grid items-center gap-8 lg:grid-cols-5">
          <Reveal delay={120} className="lg:col-span-2">
            <LiveDemo />
          </Reveal>
          <Reveal delay={200} className="lg:col-span-3">
            <div className="tilt-scene">
              <div className="tilt-item">
                <div className="shot-glow overflow-hidden rounded-xl text-left">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-800 px-4 py-2.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-ink-300">
                      一屏做完：聊 · 干 · 交 · 看
                    </span>
                  </div>
                  <img
                    src={asset("/screenshots/workspace.png")}
                    alt="MyCowork 工作区：对话、任务和成稿预览同屏"
                    className="w-full bg-white"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
