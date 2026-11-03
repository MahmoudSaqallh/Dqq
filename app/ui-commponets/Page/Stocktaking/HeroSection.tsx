"use client";

import FeatureHero from "../Shared/FeatureHero";
import HeroStats from "../Shared/HeroStats";
import { useLanguage } from "../../../i18n/LanguageContext";

const STATS = [
  { value: 80, ar: "أسرع بالجرد", en: "Faster stocktakes" },
  { value: 100, ar: "توثيق للتالف", en: "Damage documented" },
  { value: 0, ar: "نقل يدوي للأرقام", en: "Manual data entry" },
] as const;

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.stocktaking.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/stocktaking/chip.svg", width: 21.08, height: 21.08 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="stocktaking-steps"
    >
      <HeroStats compact stats={STATS} />
    </FeatureHero>
  );
}
