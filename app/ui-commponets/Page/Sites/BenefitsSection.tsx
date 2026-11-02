"use client";

import FeatureCta from "../Shared/FeatureCta";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function BenefitsSection() {
  const { t } = useLanguage();
  const content = t.sites.benefits;

  return <FeatureCta title={content.title} text={content.subtitle} cta={content.cta} href="/" />;
}
