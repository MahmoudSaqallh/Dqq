"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.sites.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/mega/locations.svg", width: 22, height: 22 }}
      titleLineOne={`${content.titleBefore}${content.titleHighlight}${content.titleAfter}`}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
