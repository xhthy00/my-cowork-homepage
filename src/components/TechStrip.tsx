const STACK = [
  "Electron",
  "React 19",
  "FastAPI",
  "LangGraph",
  "OfficeCLI",
  "SQLite + sqlite-vec",
  "Tailwind",
  "Playwright MCP",
  "Streamable HTTP",
  "APScheduler",
  "飞书长连接",
  "微信 iLink",
];

/** 技术栈跑马灯 */
export default function TechStrip() {
  const items = [...STACK, ...STACK];
  return (
    <section className="overflow-hidden border-y border-white/5 bg-ink-900/50 py-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-12">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-ink-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
