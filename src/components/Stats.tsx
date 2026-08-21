import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ target, suffix = "", duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 2, suffix: " 种", label: "干活的班底", sub: "一只同事，或一整个团队" },
  { value: 4, suffix: " 个", label: "可以喊到的地方", sub: "飞书 / 微信已在岗 · 钉钉 / Telegram 在路上" },
  { value: 9, suffix: " 层", label: "盖在本机的楼", sub: "一层托一层，梁不会架在屋顶上" },
  { value: 100, suffix: "%", label: "数据留在家里", sub: "不出租 · 不合租 · 不办云上的工牌" },
];

/** 数字滚动统计条 */
export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-b from-ink-900/60 to-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-4 py-10 text-center md:py-14">
            <p className="text-gradient text-4xl font-black tracking-tight md:text-5xl">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
            <p className="mt-1 text-xs text-ink-400">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
