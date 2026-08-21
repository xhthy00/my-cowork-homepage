import { Puzzle, Cpu } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ShotFrame from "./ShotFrame";

export default function SkillsModels() {
  return (
    <section id="skills" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="技能与模型"
          title="技能可插拔，模型随你换"
          description="本机技能可开关、可授权给指定智能体；SkillHub 按分类推荐套件。模型与定时任务都在设置里，和远程连接、检索放在一起。"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Puzzle className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">Skills + SkillHub</h3>
            </div>
            <ul className="mb-8 min-h-[8rem] space-y-2.5 text-sm leading-6 text-ink-300">
              <li>· 本机技能可开关，授权粒度到指定智能体</li>
              <li>· SkillHub 覆盖办公效率、内容创作、开发、数据、设计、知识管理</li>
              <li>· skill.yaml 写 schedule 即可注册定时任务，入口在设置 → 定时任务</li>
            </ul>
            <ShotFrame src="/screenshots/skills.png" alt="技能与 SkillHub 页面" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Cpu className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">设置里的 API / 模型</h3>
            </div>
            <ul className="mb-8 min-h-[8rem] space-y-2.5 text-sm leading-6 text-ink-300">
              <li>· 云厂商：Anthropic / OpenAI / OpenRouter / DeepSeek / 通义 / Moonshot / MiniMax</li>
              <li>· 本地推理：Ollama、LM Studio、vLLM</li>
              <li>· 入口在设置 → API / 模型；API Key 存系统钥匙串，校验通过才保存</li>
            </ul>
            <ShotFrame src="/screenshots/models.png" alt="设置中的 API / 模型面板" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
