interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** 统一的分区标题：小标签 + 大标题 + 描述 */
export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <span className="mb-4 inline-block rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium tracking-widest text-accent-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-ink-300">{description}</p>}
    </div>
  );
}
