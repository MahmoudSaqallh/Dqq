"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECTS = ["1600 / 1128", "1600 / 1208", "1600 / 1128", "1600 / 1208", "1680 / 1128"];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.stocktaking.features;

  return (
    <ChecklistFeatures
      showChip
      title={content.title}
      subtitle={content.subtitle}
      cases={content.cases.map((item, index) => ({ ...item, imageAspect: IMAGE_ASPECTS[index] }))}
    />
  );
}
