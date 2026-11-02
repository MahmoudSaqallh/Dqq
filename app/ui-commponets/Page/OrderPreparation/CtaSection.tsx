"use client";

import FeatureCta from "../Shared/FeatureCta";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function CtaSection() {
  const { isEn } = useLanguage();

  const content = isEn
    ? {
        title: "Faster picking, fewer mistakes, and customers who get their order right the first time.",
        text: "Simple, fast solutions that let your team receive and prepare orders from anywhere with ease.",
        cta: "Join DQQ",
      }
    : {
        title: "تجهيز أسرع، أخطاء أقل، وعميل يستلم طلبه صح من أول مرة.",
        text: "حلول بسيطة وسريعة تخلي فريقك يستقبل ويجهّز الطلبات من أي مكان بكل سهولة.",
        cta: "انضم إلى دقّق",
      };

  return <FeatureCta {...content} />;
}
