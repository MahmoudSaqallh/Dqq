"use client";

import { useEffect, useRef, useState } from "react";
import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

const STATS = [
  { value: 45, ar: "تقليل المرتجعات", en: "Fewer returns" },
  { value: 70, ar: "توفير بالوقت", en: "Time saved" },
  { value: 100, ar: "دقة التجهيز", en: "Picking accuracy" },
] as const;

const COUNT_UP_MS = 1400;

// Count-up stat (Figma "Hero Stat": animates 0 → target, Arabic numerals in AR)
function HeroStat({ value, label, isEn, start }: { value: number; label: string; isEn: boolean; start: boolean }) {
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
      <span dir="ltr" className="text-[28px] font-semibold leading-[1.5] text-[#24a259]">
        {number}
      </span>
      <span className="text-base leading-[1.7] text-[#414141]">{label}</span>
    </div>
  );
}

export default function HeroSection() {
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

  const content = isEn
    ? {
        badge: "Order Preparation",
        titleLineOne: "The warehouse problems eating your time,",
        titleSolved: "solved.",
        subtitle: "Every problem you face managing orders and stock — we built a ready solution for it inside DQQ. See how.",
        cta: "Explore features",
      }
    : {
        badge: "تجهيز الطلبات",
        titleLineOne: "مشاكل المستودع اللي تأكل وقتك",
        titleSolved: "حلّها.",
        subtitle: "كل مشكلة بتواجهك بإدارة الطلبات والمخزون — بنّينا لها حل جاهز داخل دقّق. شوف كيف.",
        cta: "اكتشف الميزات",
      };

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/order-prep/chip-icon.svg", width: 21, height: 22 }}
      titleLineOne={content.titleLineOne}
      titleAfterBrand={content.titleSolved}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    >
      <div ref={statsRef} className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
        {STATS.map((stat) => (
          <HeroStat
            key={stat.value}
            value={stat.value}
            label={isEn ? stat.en : stat.ar}
            isEn={isEn}
            start={statsVisible}
          />
        ))}
      </div>
    </FeatureHero>
  );
}
