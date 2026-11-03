"use client";

import HighlightBox from "../Shared/HighlightBox";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HighlightSection() {
  const { t } = useLanguage();
  const content = t.delayedOrders.highlight;

  return (
    <HighlightBox
      title={content.title}
      description={content.description}
      image={{ src: "/delayed-orders/delayed-5.png", alt: content.imageAlt, width: 1248, height: 822 }}
      imageWidth={462}
      imageFlush="bottom"
    />
  );
}
