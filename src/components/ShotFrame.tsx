import { useRef, type MouseEvent } from "react";
import { asset } from "../asset";

interface ShotFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** 带应用窗口边框 + 鼠标跟随 3D 倾斜的产品截图 */
export default function ShotFrame({ src, alt, caption, className = "" }: ShotFrameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const item = itemRef.current;
    if (!item) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    item.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
  };

  const handleLeave = () => {
    const item = itemRef.current;
    if (!item) return;
    item.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <figure className={className}>
      <div
        ref={sceneRef}
        className="tilt-scene"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div ref={itemRef} className="tilt-item">
          <div className="shot-glow overflow-hidden rounded-xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-800 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate text-xs text-ink-300">MyCowork</span>
            </div>
            <img
              src={asset(src)}
              alt={alt}
              loading="lazy"
              className="w-full bg-white object-cover object-top"
            />
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-ink-400">{caption}</figcaption>
      )}
    </figure>
  );
}
