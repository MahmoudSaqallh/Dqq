"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.returns.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/retuern/journey/badge-cart.svg", width: 21, height: 22 }}
      titleLineOne={content.title}
      titleLineTwo={content.titleLineTwo}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
