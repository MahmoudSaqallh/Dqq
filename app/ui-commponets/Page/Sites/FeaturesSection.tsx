"use client";

import FeatureList from "../Shared/FeatureList";
import { useLanguage } from "../../../i18n/LanguageContext";

// Figma gives only blocks 01, 03 and 05 an image, and puts block 03's on the start side
const BLOCKS_WITH_IMAGE = [0, 2, 4];
const IMAGE_FIRST_BLOCK = 2;

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.sites.features;

  return (
    <FeatureList
      title={content.title}
      subtitle={content.subtitle}
      problemLabel={content.problemLabel}
      solutionLabel={content.solutionLabel}
      features={content.cases.map((item, index) => ({
        id: item.id,
        nav: item.label,
        problem: item.problem,
        solutionTitle: item.solutionTitle,
        solutionText: item.solutionDescription,
        image: BLOCKS_WITH_IMAGE.includes(index) ? item.image : undefined,
        imageFirst: index === IMAGE_FIRST_BLOCK,
      }))}
    />
  );
}
