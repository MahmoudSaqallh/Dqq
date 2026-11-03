"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.products.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/products/chip.svg", width: 21.08, height: 21.08 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
