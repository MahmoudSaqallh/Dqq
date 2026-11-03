"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.automation.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/automation/chip.svg", width: 21.08, height: 21.08 }}
      titleLineOne={content.titleLineOne}
      titleLineTwo={content.titleLineTwo}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="automation-steps"
    />
  );
}
