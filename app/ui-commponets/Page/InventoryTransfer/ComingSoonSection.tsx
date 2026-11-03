"use client";

import HighlightBox from "../Shared/HighlightBox";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function ComingSoonSection() {
  const { t } = useLanguage();
  const content = t.inventoryTransfer.comingSoon;

  return (
    <HighlightBox
      badge={content.badge}
      title={content.title}
      description={content.description}
      image={{ src: "/inventory-transfer/transfer-4.png", alt: content.imageAlt, width: 2080, height: 1880 }}
      imageWidth={404}
    />
  );
}
