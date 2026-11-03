"use client";

import HoverSteps from "../Shared/HoverSteps";
import { useLanguage } from "../../../i18n/LanguageContext";

const STEP_ICONS = ["/whatsapp-messages/step-1.svg", "/whatsapp-messages/step-2.svg", "/whatsapp-messages/step-3.svg"];

export default function StepsSection() {
  const { t } = useLanguage();
  const content = t.whatsappMessages.howItWorks;

  return <HoverSteps id="whatsapp-steps" title={content.title} subtitle={content.subtitle} steps={content.steps} icons={STEP_ICONS} />;
}
