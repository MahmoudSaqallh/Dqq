"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.delivery.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/delivery/chip.svg", width: 19.46, height: 16.22 }}
      titleLineOne={content.title}
      titleLineTwo={content.titleLineTwo}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
