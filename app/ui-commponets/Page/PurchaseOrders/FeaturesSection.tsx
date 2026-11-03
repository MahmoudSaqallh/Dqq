"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECTS = ["1600 / 1338", "1600 / 1120", "1600 / 1120", "1600 / 1120"];
// Figma marks the AI suggestions block with its own icon
const AI_BLOCK_ID = "smart-suggestions";
const AI_ICON = { src: "/purchase-orders/ai-title.svg", width: 43, height: 43 };

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.purchaseOrders.features;

  return (
    <ChecklistFeatures
      title={content.title}
      subtitle={content.subtitle}
      cases={content.cases.map((item, index) => ({
        ...item,
        imageAspect: IMAGE_ASPECTS[index],
        titleIcon: item.id === AI_BLOCK_ID ? AI_ICON : undefined,
      }))}
    />
  );
}
