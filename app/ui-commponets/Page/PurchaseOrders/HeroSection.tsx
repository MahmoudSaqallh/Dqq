"use client";

import FeatureHero from "../Shared/FeatureHero";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.purchaseOrders.hero;

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/purchase-orders/chip.svg", width: 21.08, height: 21.08 }}
      titleLineOne={
        <>
          {content.titleBefore}
          <span className="text-[#24a259]">{content.titleHighlight}</span>
          {content.titleAfter}
        </>
      }
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    />
  );
}
