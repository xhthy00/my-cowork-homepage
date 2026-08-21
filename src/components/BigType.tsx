import { asset } from "../asset";
import Reveal from "./Reveal";

/** 超大字排版展示区（WorkBuddy 大 logo 风格） */
export default function BigType() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob animate-aurora left-[-10%] top-[10%] h-[360px] w-[360px] bg-accent-500/15" />
        <div className="aurora-blob animate-aurora-reverse bottom-[0%] right-[-8%] h-[360px] w-[360px] bg-indigo-500/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="bigtype select-none text-white">
            <span className="block text-[18vw] leading-none md:text-[9rem]">MY</span>
            <span className="text-gradient block text-[18vw] leading-none md:text-[9rem]">
              COWORK<span className="text-white">.</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-ink-300 md:text-base">
            云端的 Agent 住在别人家里。
            <br className="hidden md:block" />
            这只，住在你的电脑上。
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex animate-float items-center justify-center gap-4">
            <img
              src={asset("/app-icon.png")}
              alt="MyCowork 牛同事"
              width={72}
              height={72}
              className="rounded-2xl shadow-2xl shadow-accent-500/30"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
