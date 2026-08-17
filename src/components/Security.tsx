import { ShieldCheck, FolderLock, Ban, Globe2, MinusCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "本地优先、单租户",
    desc: "不做云托管、多租户、计费或 SSO。各成员独立部署、互不共享。",
  },
  {
    icon: FolderLock,
    title: "路径白名单",
    desc: "默认含用户主目录，可在设置中收紧；禁止 ../ 路径穿越。",
  },
  {
    icon: Ban,
    title: "高危命令硬拒",
    desc: "针对根目录的破坏性命令（如 rm -rf /）直接拒单，不进入审批。",
  },
  {
    icon: Globe2,
    title: "远程通道收紧",
    desc: "含写盘 / exec / 文档生成的 Skill 不能经飞书远程触发；webhook 需配置校验 token 与来源 IP。",
  },
];

const NOT_DOING = ["桌面 GUI Computer Use", "自训练模型", "24 小时无人值守"];

export default function Security() {
  return (
    <section id="security" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="安全边界"
          title="模型、文件和密钥，都留在本机"
          description="密钥不写进配置文件：Electron 用系统钥匙串（macOS Keychain / Windows Credential Manager）保管，启动后端时注入环境变量。"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 2) * 60}>
              <div className="flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-900 p-6">
                <span className="shrink-0 rounded-lg bg-emerald-500/10 p-2.5 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-ink-300">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-ink-600 bg-ink-900/50 p-6 sm:flex-row sm:items-center">
            <span className="rounded-lg bg-ink-700 p-2.5 text-ink-300">
              <MinusCircle className="h-5 w-5" />
            </span>
            <div className="text-sm leading-6 text-ink-300">
              <span className="font-medium text-ink-100">明确不做：</span>
              {NOT_DOING.map((item) => (
                <span key={item} className="mx-1.5 rounded-md bg-ink-800 px-2 py-0.5 text-xs">
                  {item}
                </span>
              ))}
              <span className="ml-1 text-ink-400">（关机则定时与 webhook 都停）</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
