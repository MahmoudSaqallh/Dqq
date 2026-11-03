"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

// Natural ratios of delivery-1/2/3; Figma lets each row grow with its image
const IMAGE_ASPECTS = ["1520 / 990", "1580 / 1316", "1580 / 1236"];
const CHECK_ICON = { src: "/delivery/list-check.svg", width: 20, height: 20 };

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.delivery.features;

  return (
    <ChecklistFeatures
      showChip
      topAligned
      title={content.title}
      subtitle={content.subtitle}
      checkIcon={CHECK_ICON}
      cases={content.cases.map((item, index) => ({ ...item, imageAspect: IMAGE_ASPECTS[index] }))}
    />
  );
}
