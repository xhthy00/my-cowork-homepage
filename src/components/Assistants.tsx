import { Presentation, FileText, Table2, Scale3D, Shuffle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ShotFrame from "./ShotFrame";

const CATEGORIES = [
  {
    icon: Presentation,
    name: "演示文稿",
    assistants: "PPT 演示助手 · 路演 PPT 助手",
    output: ".pptx 汇报 / 融资 deck",
    shot: "/screenshots/assistants-docs.png",
  },
  {
    icon: FileText,
    name: "文档",
    assistants: "Word 文档助手 · 公文写作助手 · Word 表单助手",
    output: "周报、请示/通知、可填写表单",
    shot: "/screenshots/assistants-docs.png",
  },
  {
    icon: Table2,
    name: "表格",
    assistants: "Excel 表格助手 · 数据仪表盘助手 · 财务建模助手",
    output: "台账、KPI 看板、三表模型",
    shot: "/screenshots/assistants-tables.png",
  },
  {
    icon: Scale3D,
    name: "法务",
    assistants: "中国法务顾问（含大陆法规知识库）",
    output: "合同审查 / 起草",
    shot: "/screenshots/assistants-legal.png",
  },
  {
    icon: Shuffle,
    name: "通用",
    assistants: "办公协作助手",
    output: "同一任务在 PPT / Word / Excel 间切换",
    shot: "/screenshots/assistants-legal.png",
  },
];

export default function Assistants() {
  return (
    <section id="assistants" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="办公助手"
        title="按场景开始，而不是从空白文档开始"
        description="办公助手会预加载对应 Skill 并把推荐提问填进输入框。公文按机关常用稿面排版，套红发文对照 GB/T 9704-2012。"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ icon: Icon, name, assistants, output }, i) => (
          <Reveal key={name} delay={(i % 3) * 60}>
            <div className="h-full rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
              </div>
              <p className="text-sm leading-6 text-ink-300">{assistants}</p>
              <p className="mt-3 border-t border-ink-700 pt-3 text-sm text-accent-400">
                产出：{output}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={120}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-ink-600 bg-ink-900/50 p-6">
            <p className="text-sm leading-7 text-ink-300">
              文档生成优先走捆绑的 <span className="text-white">OfficeCLI</span> 二进制，本机预览同样走
              OfficeCLI watch；不可用时自动降级到内置 docx / xlsx / pptx 生成器。
            </p>
            <p className="mt-4 text-xs leading-6 text-ink-400">
              法务与公文均为辅助撰写 / 质检，不构成正式发文或法律意见。
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <Reveal>
          <ShotFrame
            src="/screenshots/assistants-docs.png"
            alt="文档类办公助手"
            caption="文档类：周报、公文、表单"
          />
        </Reveal>
        <Reveal delay={100}>
          <ShotFrame
            src="/screenshots/assistants-tables.png"
            alt="表格类办公助手"
            caption="表格类：台账、看板、财务模型"
          />
        </Reveal>
        <Reveal delay={200}>
          <ShotFrame
            src="/screenshots/assistants-legal.png"
            alt="法务与通用办公助手"
            caption="法务与通用：合同审查、多格式协作"
          />
        </Reveal>
      </div>
    </section>
  );
}
