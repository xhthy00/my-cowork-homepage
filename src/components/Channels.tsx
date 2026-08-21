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
    desc: "官方长连接，填 App ID / Secret 即可。无需公网 URL，也无需 Cloudflare 隧道。",
  },
  {
    id: "weixin",
    name: "微信",
    status: "可用",
    logo: "/channels/weixin.svg",
    desc: "ClawBot 扫码登录，长轮询收消息。任务产出的 Word / PPT 可作为微信附件回发。",
  },
  {
    id: "telegram",
    name: "Telegram",
    status: "即将推出",
    logo: "/channels/telegram.svg",
    desc: "通过 Telegram 与办公助手对话，同样不需要公网隧道。",
  },
  {
    id: "dingtalk",
    name: "钉钉",
    status: "即将推出",
    logo: "/channels/dingtalk.svg",
    desc: "通过钉钉把本机数字员工接到工作群与单聊。",
  },
];

export default function Channels() {
  return (
    <section id="channels" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="远程连接"
          title="飞书长连接，微信扫码，随时喊牛同事"
          description="设置 → 远程连接。陌生人先配对授权，通过后即可对话；飞书与微信都不需要把本机端口暴露到公网。"
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
                <h3 className="mb-1.5 text-base font-semibold text-white">配对后才能对话</h3>
                <p className="text-sm leading-6 text-ink-300">
                  未授权用户发来消息，本机会弹出批准 / 拒绝。配对通过后，常规写盘会自动放行；危险命令仍拦截，必须在桌面操作的 Skill 远程会被拒绝。
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
                <h3 className="mb-1.5 text-base font-semibold text-white">保持唤醒</h3>
                <p className="text-sm leading-6 text-ink-300">
                  远程通道和定时任务只在电脑醒着时可靠运行。设置 → 通用打开「保持唤醒」，可阻止空闲休眠；合盖或手动睡眠仍会中断。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
