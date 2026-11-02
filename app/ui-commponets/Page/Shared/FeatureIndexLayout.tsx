"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

export type FeatureVariant = "default" | "compact";

type FeatureIndexLayoutProps = {
  title: string;
  subtitle: string;
  /** Each id must be the id of a block rendered in children */
  items: { id: string; nav: string }[];
  /** "compact" is the smaller Figma type scale of the Returns page */
  variant?: FeatureVariant;
  className?: string;
  children: ReactNode;
};

const VARIANTS = {
  default: {
    section: "py-[clamp(64px,7.8vw,112px)]",
    layout: "gap-14",
    title: "text-[clamp(28px,3.125vw,45px)] font-medium leading-[1.7]",
    subtitle: "text-[clamp(16px,1.53vw,22px)] leading-[2]",
    body: "gap-8",
    blocks: "gap-[120px] max-md:gap-16",
    nav: "gap-2 pt-2",
  },
  compact: {
    section: "pb-16",
    layout: "gap-[clamp(40px,7.8vw,112px)]",
    title: "text-[28px] font-semibold leading-[1.4]",
    subtitle: "text-[15px] leading-[2]",
    body: "gap-12",
    blocks: "gap-[135px] max-md:gap-16",
    nav: "",
  },
} as const;

// Fade + slide-up shared by feature blocks, played once when the block enters the screen
export function useRevealOnScroll() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealClass: shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0" };
}

// Section header + feature blocks + sticky scrollspy index, shared by feature pages
// (Figma "Section/Features"). The hero's button scrolls to this section's #features id.
export default function FeatureIndexLayout({
  title,
  subtitle,
  items,
  variant = "default",
  className = "",
  children,
}: FeatureIndexLayoutProps) {
  const { isEn } = useLanguage();
  const styles = VARIANTS[variant];
  const [activeId, setActiveId] = useState(items[0].id);
  const idList = items.map((item) => item.id).join(",");

  // Scrollspy: the active item is the last block whose top has passed 40% of the viewport
  useEffect(() => {
    const ids = idList.split(",");

    const update = () => {
      const marker = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveId(current);
    };

    const rafId = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [idList]);

  const scrollTo = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="features" className={`scroll-mt-20 ${styles.section} ${className}`}>
      <div className={`site-container flex flex-col ${styles.layout}`}>
        <header className="flex flex-col gap-2 text-start">
          <h2 className={`text-[#414141] ${styles.title}`}>{title}</h2>
          <p className={`text-[#8d8d8d] ${styles.subtitle}`}>{subtitle}</p>
        </header>

        <div className={`flex items-start ${styles.body}`}>
          <div className={`flex min-w-0 flex-1 flex-col ${styles.blocks}`}>{children}</div>

          <nav
            aria-label={isEn ? "Features index" : "فهرس الميزات"}
            className={`sticky top-28 flex w-[220px] shrink-0 flex-col max-lg:hidden ${styles.nav}`}
          >
            {items.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-[18px] py-[15px] text-start transition-colors ${
                    isActive ? "border-[#24a259]/35 bg-[#e9f6ee]" : "border-transparent bg-transparent hover:bg-[#f4faf7]"
                  }`}
                >
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-md text-[11px] leading-[1.5] ${
                      isActive ? "bg-[#24a259]/15 text-[#24a259]" : "bg-[#e8e8e8] text-[#8d8d8d]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-[15px] font-medium leading-[1.5] ${isActive ? "text-[#24a259]" : "text-[#8d8d8d]"}`}>
                    {item.nav}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
