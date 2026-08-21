import { Puzzle, Cpu } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ShotFrame from "./ShotFrame";

export default function SkillsModels() {
  return (
    <section id="skills" className="border-y border-white/5 bg-ink-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="手艺与大脑"
          title="本事能加，头脑能换"
          description="技能像抽屉，模型像大脑。开关、授权、定时，都收在设置里，和远程、检索做邻居。"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Puzzle className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">可加装的本事</h3>
            </div>
            <ul className="mb-8 min-h-[8rem] space-y-2.5 text-sm leading-6 text-ink-300">
              <li>· 给哪位同事开哪项本事，你说了算</li>
              <li>· SkillHub 按办公、创作、开发、数据、设计、知识分类，逛着装</li>
              <li>· 在技能里写上时刻，它就会按点开工</li>
            </ul>
            <ShotFrame src="/screenshots/skills.png" alt="技能与 SkillHub 页面" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Cpu className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">可以替换的大脑</h3>
            </div>
            <ul className="mb-8 min-h-[8rem] space-y-2.5 text-sm leading-6 text-ink-300">
              <li>· 云上多家：Anthropic、OpenAI、DeepSeek、通义、Moonshot…</li>
              <li>· 家里也能跑：Ollama、LM Studio、vLLM</li>
              <li>· 钥匙进钥匙串，校验过了才留下</li>
            </ul>
            <ShotFrame src="/screenshots/models.png" alt="设置中的 API / 模型面板" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
