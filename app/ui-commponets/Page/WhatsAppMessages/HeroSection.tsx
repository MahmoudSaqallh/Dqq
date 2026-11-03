"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.whatsappMessages.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/whatsapp-messages/chip.svg", width: 21.08, height: 29.19 }}
      titleLineOne={content.title}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="whatsapp-steps"
    />
  );
}
