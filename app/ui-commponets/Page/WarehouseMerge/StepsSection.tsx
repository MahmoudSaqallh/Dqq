"use client";

import HoverSteps from "../Shared/HoverSteps";
import { useLanguage } from "../../../i18n/LanguageContext";

const STEP_ICONS = ["/warehouse-merge/step-1.svg", "/warehouse-merge/step-2.svg", "/warehouse-merge/step-3.svg"];

export default function StepsSection() {
  const { t } = useLanguage();
  const content = t.warehouseMerge.howItWorks;

  return <HoverSteps id="merge-steps" title={content.title} subtitle={content.subtitle} steps={content.steps} icons={STEP_ICONS} />;
}
