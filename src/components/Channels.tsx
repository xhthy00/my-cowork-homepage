import { Coffee, ShieldCheck } from "lucide-react";
import { asset } from "../asset";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const CHANNELS = [
  {
    id: "lark",
    name: "飞书",
    status: "可用",
    logo: "/channels/lark.svg",
    desc: "官方长连接，填好身份就在。不用隧道，也不用把电脑端口敞到公网。",
  },
  {
    id: "weixin",
    name: "微信",
    status: "可用",
    logo: "/channels/weixin.svg",
    desc: "扫一扫就上岗。做完的 Word、PPT，可以直接当微信文件发回来。",
  },
  {
    id: "telegram",
    name: "Telegram",
    status: "即将推出",
    logo: "/channels/telegram.svg",
    desc: "即将在 Telegram 里碰面。人在外面，同事还在，同样不必打洞。",
  },
  {
    id: "dingtalk",
    name: "钉钉",
    status: "即将推出",
    logo: "/channels/dingtalk.svg",
    desc: "工作群里那只牛同事，很快就到。",
  },
];

export default function Channels() {
  return (
    <section id="channels" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="人在外面"
          title="飞书里喊一声，微信里扫个码"
          description="不必把这台电脑敞到公网。它自己连上来，你在哪都能交代活。"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {CHANNELS.map((ch, i) => {
            const soon = ch.status === "即将推出";
            return (
              <Reveal key={ch.id} delay={(i % 2) * 60}>
                <div
                  className={`h-full rounded-2xl border bg-ink-900 p-6 transition-all duration-300 ${
                    soon
                      ? "border-ink-700 opacity-80"
                      : "border-ink-700 hover:-translate-y-1 hover:border-accent-500/40"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                        <img src={asset(ch.logo)} alt="" className="h-6 w-6" />
                      </span>
                      <h3 className="text-lg font-semibold text-white">{ch.name}</h3>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        soon
                          ? "border border-ink-600 bg-ink-800 text-ink-400"
                          : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {ch.status}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-ink-300">{ch.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-900 p-6">
              <span className="shrink-0 rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-semibold text-white">陌生人先敲门</h3>
                <p className="text-sm leading-6 text-ink-300">
                  未授权的人发来消息，本机先弹出批准。你点头，它才答话。日常写文件可以放手；危险命令，和必须坐在桌前的活，仍然拦着。
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-900 p-6">
              <span className="shrink-0 rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Coffee className="h-5 w-5" />
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-semibold text-white">别让电脑偷睡</h3>
                <p className="text-sm leading-6 text-ink-300">
                  远程和定时要靠它醒着。设置里打开「保持唤醒」，空闲时也不打盹；合上盖，再勤快也得歇。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
