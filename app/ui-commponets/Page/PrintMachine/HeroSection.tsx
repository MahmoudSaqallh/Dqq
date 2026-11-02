"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.printing.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/mega/printing.svg", width: 22, height: 22 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="printing-features"
    />
  );
}
