"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.tracking.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/order-prep/rel-workflow.svg", width: 16, height: 22 }}
      titleLineOne={content.title}
      titleAfterBrand={content.titleAfterBrand}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="tracking-two-paths"
    />
  );
}
