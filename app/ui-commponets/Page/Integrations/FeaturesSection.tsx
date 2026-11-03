"use client";

import ChecklistFeatures from "../Shared/ChecklistFeatures";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECT = "1680 / 990";

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.integrations.features;

  return (
    <ChecklistFeatures
      title={content.title}
      subtitle={content.subtitle}
      cases={content.cases.map((item) => ({ ...item, imageAspect: IMAGE_ASPECT }))}
    />
  );
}
