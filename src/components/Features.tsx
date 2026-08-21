import {
  HardDriveDownload,
  Bot,
  LayoutGrid,
  Puzzle,
  KeyRound,
  Plug,
  Search,
  MessagesSquare,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FEATURES = [
  {
    icon: HardDriveDownload,
    title: "文件落在你手里",
    desc: "写进你的工作区，不是云端链接。双击就能打开，过程记在笔记里，终稿路径一目了然。",
  },
  {
    icon: Bot,
    title: "一个人，或一整个班",
    desc: "小事交给一只牛同事一气呵成；大事拆开、并行、再收拢。哪路翻了车，它会重新排班。",
  },
  {
    icon: LayoutGrid,
    title: "从场景走进去",
    desc: "周报、公文、表单、看板、财务模型、合同审查——选一个场景，提问已经替你拟好。",
  },
  {
    icon: Puzzle,
    title: "本事可以加装",
    desc: "技能像工具箱，开关和授权都由你。SkillHub 里还有办公、创作、数据等现成套件。",
  },
  {
    icon: KeyRound,
    title: "大脑随你换",
    desc: "云上的 Anthropic、OpenAI、DeepSeek、通义、Moonshot，或家里的 Ollama、LM Studio。钥匙进系统钥匙串，不进配置文件。",
  },
  {
    icon: Plug,
    title: "把工具接到手上",
    desc: "本机进程或远程 MCP，浏览器、知识库、自定义工具都能接。对话里 @ 点名，它才伸那只手。",
  },
  {
    icon: Search,
    title: "它会自己去翻",
    desc: "调研时自己搜索、打开原文。你有检索钥匙就用；没有，DuckDuckGo 也能起步。",
  },
  {
    icon: MessagesSquare,
    title: "看得见它在想",
    desc: "检索、规划、执行，状态球一直在跳。忙的时候可以叫停；上下文还剩多少，一眼知道。",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="它能做什么"
        title="不只会聊天，还会把活干完"
        description="从一张空白页，到一叠能打开的文件；从你的桌面，到飞书和微信里的一声招呼。办公该有的本事，都装进这台电脑。"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={(i % 4) * 60}>
            <div className="neon-card group h-full p-6 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="mb-4 inline-flex rounded-xl bg-accent-500/10 p-3 text-accent-400 transition-all duration-300 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_24px_-4px_rgba(240,152,25,0.5)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-ink-300">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
