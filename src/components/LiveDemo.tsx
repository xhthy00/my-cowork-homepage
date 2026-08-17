import { useEffect, useRef, useState } from "react";
import { Check, FileText, Loader2, Presentation, Table2, Sparkles } from "lucide-react";

/** 演示剧本：用户消息 → 工具步骤 → 交付文件 */
const SCRIPT = {
  input: "根据这周的销售数据，生成一份汇报 PPT 和 Excel 台账",
  steps: [
    "读取 ~/Documents/AIS/本周销售数据.xlsx",
    "分析数据：汇总 8 个区域、3 条产品线",
    "生成 KPI 台账 sales-ledger.xlsx",
    "排版汇报 deck weekly-report.pptx",
  ],
  outputs: [
    { icon: Table2, name: "sales-ledger.xlsx", meta: "Excel 台账" },
    { icon: Presentation, name: "weekly-report.pptx", meta: "汇报 PPT" },
  ],
};

type Phase = "typing" | "thinking" | "steps" | "done";

/**
 * 自动循环播放的「对话 → 执行 → 交付」演示动画
 */
export default function LiveDemo() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [stepDone, setStepDone] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    const start = (delay = 0) => {
      schedule(() => {
        setPhase("typing");
        setTyped("");
        setStepDone(0);

        const chars = SCRIPT.input.split("");
        chars.forEach((_, i) => {
          schedule(() => setTyped(SCRIPT.input.slice(0, i + 1)), 500 + i * 55);
        });

        const typingEnd = 500 + chars.length * 55 + 500;
        schedule(() => setPhase("thinking"), typingEnd);
        schedule(() => setPhase("steps"), typingEnd + 1300);

        SCRIPT.steps.forEach((_, i) => {
          schedule(() => setStepDone(i + 1), typingEnd + 1300 + 700 * (i + 1));
        });

        const stepsEnd = typingEnd + 1300 + 700 * SCRIPT.steps.length + 500;
        schedule(() => setPhase("done"), stepsEnd);
        schedule(() => start(), stepsEnd + 4200);
      }, delay);
    };

    start();
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  return (
    <div className="neon-card overflow-hidden p-5 text-left md:p-6">
      {/* 对话输入 */}
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-xs font-bold text-ink-950">
          我
        </div>
        <div className="min-h-[3rem] flex-1 rounded-2xl rounded-tl-sm border border-ink-700 bg-ink-800/80 px-4 py-2.5 text-sm leading-6 text-ink-100">
          {typed}
          {phase === "typing" && (
            <span className="ml-0.5 inline-block h-4 w-[2px] animate-blink bg-accent-400 align-middle" />
          )}
        </div>
      </div>

      {/* 思考中 */}
      {phase === "thinking" && (
        <div className="mt-4 flex items-center gap-2.5 pl-11 text-sm text-ink-300">
          <Loader2 className="h-4 w-4 animate-spin text-accent-400" />
          牛同事正在拆解任务…
        </div>
      )}

      {/* 执行步骤 */}
      {(phase === "steps" || phase === "done") && (
        <div className="mt-4 space-y-2.5 pl-11">
          {SCRIPT.steps.map((step, i) => {
            const finished = i < stepDone;
            const running = i === stepDone && phase === "steps";
            return (
              <div
                key={step}
                className={`flex items-center gap-2.5 text-sm transition-all duration-500 ${
                  finished || running ? "opacity-100" : "opacity-30"
                }`}
              >
                {finished ? (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-3 w-3" />
                  </span>
                ) : running ? (
                  <Loader2 className="h-5 w-5 shrink-0 animate-spin text-accent-400" />
                ) : (
                  <span className="h-5 w-5 shrink-0 rounded-full border border-ink-600" />
                )}
                <span className={finished ? "text-ink-200" : "text-ink-300"}>{step}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* 交付文件 */}
      {phase === "done" && (
        <div className="mt-5 pl-11">
          <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-accent-400">
            <Sparkles className="h-3.5 w-3.5" />
            任务完成 · 已写入工作区
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {SCRIPT.outputs.map((file) => (
              <div
                key={file.name}
                className="flex animate-fade-up items-center gap-2.5 rounded-xl border border-accent-500/25 bg-accent-500/5 px-3 py-2.5"
              >
                <file.icon className="h-4 w-4 shrink-0 text-accent-400" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white">{file.name}</p>
                  <p className="text-[10px] text-ink-400">{file.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 底部状态 */}
      <div className="mt-5 flex items-center justify-between border-t border-ink-700 pt-4">
        <div className="flex items-center gap-2 text-xs text-ink-400">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
          本机运行中 · localhost
        </div>
        <div className="flex items-center gap-1.5 text-xs text-ink-500">
          <FileText className="h-3.5 w-3.5" />
          演示循环播放
        </div>
      </div>
    </div>
  );
}
