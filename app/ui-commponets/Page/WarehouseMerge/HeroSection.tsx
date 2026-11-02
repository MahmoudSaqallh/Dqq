"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.warehouseMerge.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/warehouse-merge/chip-merge.svg", width: 21, height: 21 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="merge-steps"
    />
  );
}
