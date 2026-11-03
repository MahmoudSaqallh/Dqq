"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECTS = ["1680 / 990", "1680 / 1088", "1680 / 990", "1680 / 1088"];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.reports.features;

  return (
    <ChecklistFeatures
      title={content.title}
      subtitle={content.subtitle}
      cases={content.cases.map((item, index) => ({ ...item, imageAspect: IMAGE_ASPECTS[index] }))}
    />
  );
}
