import { ArrowRight, Github } from "lucide-react";
import Reveal from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob animate-aurora left-[15%] top-[-30%] h-[400px] w-[400px] bg-accent-500/20" />
        <div className="aurora-blob animate-aurora-reverse right-[10%] bottom-[-40%] h-[400px] w-[400px] bg-indigo-500/15" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            雇一只永远在岗的
            <span className="text-accent-400">牛同事</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-ink-300">
            描述任务，拿到能直接打开的 Word / Excel / PPT。数据不出你的电脑，这就是 MyCowork。
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/xhthy00/my-cowork/releases"
              target="_blank"
              rel="noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-[0_8px_40px_-8px_rgba(240,152,25,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Github className="h-4 w-4" />
              从 GitHub Releases 下载
            </a>
            <a
              href="https://github.com/xhthy00/my-cowork"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-ink-600 px-6 py-3 text-sm font-medium text-ink-100 transition-colors hover:border-ink-400 hover:bg-ink-800"
            >
              查看源码
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/app-icon.png" alt="MyCowork" className="h-7 w-7 rounded-md" />
          <span className="text-sm font-medium text-ink-200">MyCowork</span>
          <span className="text-xs text-ink-500">本机办公数字员工</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-ink-400">
          <a
            href="https://github.com/xhthy00/my-cowork"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            功能
          </a>
          <a href="#quickstart" className="transition-colors hover:text-white">
            快速开始
          </a>
        </div>

        <p className="text-xs text-ink-500">
          Electron · React · FastAPI · LangGraph · OfficeCLI
        </p>
      </div>
    </footer>
  );
}
