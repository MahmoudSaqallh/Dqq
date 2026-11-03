"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECTS = ["1600 / 1338", "1600 / 1120", "1600 / 1120", "1600 / 1120"];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.inventoryTransfer.features;

  return (
    <ChecklistFeatures
      title={content.title}
      subtitle={content.subtitle}
      cases={content.cases.map((item, index) => ({ ...item, imageAspect: IMAGE_ASPECTS[index] }))}
    />
  );
}
