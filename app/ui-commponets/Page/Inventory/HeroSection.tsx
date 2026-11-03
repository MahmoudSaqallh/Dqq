"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.inventory.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/inventory/chip.svg", width: 19.46, height: 18.65 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="inventory-features"
    />
  );
}
