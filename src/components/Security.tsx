import { ShieldCheck, FolderLock, Ban, Globe2, MinusCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "只为你一个人",
    desc: "没有云上的合租、账单和公司账号。每人自己的牛同事，互不串门。",
  },
  {
    icon: FolderLock,
    title: "它只能走到你允许的路",
    desc: "默认可进家门，你可以收紧。想翻墙走 ../ 的，直接拦住。",
  },
  {
    icon: Ban,
    title: "危险的手，不经过你",
    desc: "冲着根目录的破坏，连审批都不给，直接拒。",
  },
  {
    icon: Globe2,
    title: "远程也要先敲门",
    desc: "陌生人先配对，你点头才答话。日常写盘可以放手；危险命令和必须坐在桌前的活，远程使不上。",
  },
];

const NOT_DOING = ["替你点遍整个桌面", "自训练模型", "通宵无人值守"];

export default function Security() {
  return (
    <section id="security" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="边界"
          title="秘密留在这台机器上"
          description="模型可以是别人的，文件和钥匙是你的。Key 进系统钥匙串，不进那份谁都能翻的配置。"
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
              <span className="font-medium text-ink-100">它不做什么：</span>
              {NOT_DOING.map((item) => (
                <span key={item} className="mx-1.5 rounded-md bg-ink-800 px-2 py-0.5 text-xs">
                  {item}
                </span>
              ))}
              <span className="ml-1 text-ink-400">你关机，它也下班。</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
