"use client";

import FeatureList from "../Shared/FeatureList";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGE_ASPECT = "1520 / 990";

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.warehouseMerge.features;

  return (
    <FeatureList
      variant="compact"
      title={content.title}
      subtitle={content.subtitle}
      problemLabel={content.problemLabel}
      solutionLabel={content.solutionLabel}
      // Figma alternates sides: text first on odd blocks, image first on even ones
      features={content.cases.map((item, index) => ({
        id: item.id,
        nav: item.label,
        problem: item.problem,
        solutionTitle: item.solutionTitle,
        solutionText: item.solutionDescription,
        image: item.image,
        imageAspect: IMAGE_ASPECT,
        imageFirst: index % 2 === 1,
      }))}
    />
  );
}
