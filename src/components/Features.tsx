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
    title: "本机落盘",
    desc: "产物直接写到你的工作区（如 ~/Documents/AIS），不是云端草稿。过程发现记在笔记里；侧栏只展示写文件工具和终稿路径。",
  },
  {
    icon: Bot,
    title: "单 / 多智能体",
    desc: "单智能体一个 ReAct Agent 走完全程；多智能体 Workforce 由 Planner 拆任务、按依赖并行委派，失败可重规划。",
  },
  {
    icon: LayoutGrid,
    title: "办公助手目录",
    desc: "按场景预加载 Skill，一键开始写周报、公文、表单、仪表盘、财务模型或合同审查。",
  },
  {
    icon: Puzzle,
    title: "Skills + SkillHub",
    desc: "本机技能可开关、可授权给指定智能体；也可从 SkillHub 浏览并安装办公效率、内容创作、数据等套件。",
  },
  {
    icon: KeyRound,
    title: "自带模型面板",
    desc: "设置 → API / 模型。Anthropic / OpenAI / DeepSeek / 通义 / Moonshot 等云厂商，以及 Ollama、LM Studio、vLLM。Key 存系统钥匙串。",
  },
  {
    icon: Plug,
    title: "连接器：本地与远程 MCP",
    desc: "除本地 stdio 外，支持 Streamable HTTP 与 SSE；可填 URL、Headers，或导入 mcp.json。输入 @连接器名 只启用本轮对应工具。",
  },
  {
    icon: Search,
    title: "内置联网检索",
    desc: "Agent 可主动搜索并打开原文。设置 → 检索配置博查 / Brave / Tavily / Exa / SearXNG；未填 Key 时用 DuckDuckGo 兜底。",
  },
  {
    icon: MessagesSquare,
    title: "对话体验升级",
    desc: "思考过程用动态状态球展示检索 / 规划 / 执行；运行中发送钮变为停止；输入栏旁显示上下文占用。",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="功能特性"
        title="一只牛同事，还是一整个牛团队"
        description="从单一文档生成到多任务并行交付，从本机对话到飞书 / 微信远程召唤，办公 Agent 需要的能力都装进你自己的电脑。"
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
