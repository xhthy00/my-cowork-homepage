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
  { value: 2, suffix: " 种", label: "执行模式", sub: "单智能体 · 多智能体 Workforce" },
  { value: 10, suffix: "+", label: "模型厂商", sub: "云端 + Ollama / vLLM 本地推理" },
  { value: 9, suffix: " 层", label: "Harness 分层", sub: "import-linter 在 CI 强制约束" },
  { value: 100, suffix: "%", label: "数据留在本机", sub: "无云托管 · 无多租户 · 无 SSO" },
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
