"use client";

import HoverSteps from "../Shared/HoverSteps";
import { useLanguage } from "../../../i18n/LanguageContext";

const STEP_ICONS = ["/stocktaking/step-1.svg", "/stocktaking/step-2.svg", "/stocktaking/step-3.svg"];

export default function StepsSection() {
  const { t } = useLanguage();
  const content = t.stocktaking.howItWorks;

  return <HoverSteps id="stocktaking-steps" title={content.title} subtitle={content.subtitle} steps={content.steps} icons={STEP_ICONS} />;
}
