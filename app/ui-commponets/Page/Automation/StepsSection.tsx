"use client";

import HoverSteps from "../Shared/HoverSteps";
import { useLanguage } from "../../../i18n/LanguageContext";

const STEP_ICONS = ["/automation/step-1.svg", "/automation/step-2.svg", "/automation/step-3.svg"];

export default function StepsSection() {
  const { t } = useLanguage();
  const content = t.automation.howItWorks;

  return <HoverSteps id="automation-steps" title={content.title} subtitle={content.subtitle} steps={content.steps} icons={STEP_ICONS} />;
}
