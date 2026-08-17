import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#features", label: "功能" },
  { href: "#modes", label: "执行模式" },
  { href: "#assistants", label: "办公助手" },
  { href: "#architecture", label: "架构" },
  { href: "#security", label: "安全" },
  { href: "#quickstart", label: "快速开始" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/app-icon.png" alt="MyCowork" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-semibold text-white">MyCowork</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/xhthy00/my-cowork"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-ink-200 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#quickstart"
            className="btn-shine rounded-lg bg-gradient-to-r from-accent-400 to-accent-600 px-4 py-1.5 text-sm font-semibold text-ink-950 shadow-[0_4px_24px_-6px_rgba(240,152,25,0.6)] transition-transform hover:scale-[1.04] active:scale-[0.97]"
          >
            下载安装
          </a>
        </div>

        <button
          className="text-ink-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换菜单"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/xhthy00/my-cowork"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-ink-200"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
