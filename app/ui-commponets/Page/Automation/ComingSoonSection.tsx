"use client";

import HighlightBox from "../Shared/HighlightBox";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function ComingSoonSection() {
  const { t } = useLanguage();
  const content = t.automation.comingSoon;

  return (
    <HighlightBox
      badge={content.badge}
      title={content.title}
      description={content.description}
      image={{ src: "/automation/coming-soon.png", alt: content.imageAlt, width: 1410, height: 888 }}
      imageWidth={538}
      imageFlush="end"
    />
  );
}
