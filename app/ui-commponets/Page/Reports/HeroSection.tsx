"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.reports.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/reports/chip.svg", width: 16.22, height: 21.08 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
