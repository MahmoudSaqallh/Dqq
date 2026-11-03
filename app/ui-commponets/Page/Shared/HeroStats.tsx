"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type Stat = { value: number; ar: string; en: string };

type HeroStatsProps = {
  stats: readonly Stat[];
  /** The smaller Figma sizes of the Stocktaking hero */
  compact?: boolean;
};

const COUNT_UP_MS = 1400;

// Count-up stat (Figma "Hero Stat": animates 0 → target, Arabic numerals in AR)
function HeroStat({ value, label, isEn, start, compact }: { value: number; label: string; isEn: boolean; start: boolean; compact: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const begin = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - begin) / COUNT_UP_MS);
      setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  const number = isEn ? `${current}%` : `٪${current.toLocaleString("ar-EG")}`;

  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      {/* LTR run keeps the Arabic percent sign on the left of the digits, as in Figma (٪٤٥) */}
      <span dir="ltr" className={`font-semibold leading-[1.5] text-[#24a259] ${compact ? "text-[26px]" : "text-[28px]"}`}>
        {number}
      </span>
      <span className={`text-[#414141] ${compact ? "text-[15px] leading-[1.5]" : "text-base leading-[1.7]"}`}>{label}</span>
    </div>
  );
}

export default function HeroStats({ stats, compact = false }: HeroStatsProps) {
  const { isEn } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Count up only once the stats are on screen AND the page loader has opened
  // (PageLoader sets <html data-loaded>), so the 0 → target run is actually seen.
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const root = document.documentElement;
    let inView = false;

    const tryStart = () => {
      if (inView && root.dataset.loaded) {
        setStatsVisible(true);
        observer.disconnect();
        loaderWatch.disconnect();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      tryStart();
    });
    const loaderWatch = new MutationObserver(tryStart);

    observer.observe(el);
    loaderWatch.observe(root, { attributes: true, attributeFilter: ["data-loaded"] });
    return () => {
      observer.disconnect();
      loaderWatch.disconnect();
    };
  }, []);

  return (
    <div ref={statsRef} className={`flex flex-wrap items-center justify-center gap-y-6 ${compact ? "gap-x-8" : "gap-x-16"}`}>
      {stats.map((stat) => (
        <HeroStat key={stat.en} value={stat.value} label={isEn ? stat.en : stat.ar} isEn={isEn} start={statsVisible} compact={compact} />
      ))}
    </div>
  );
}
