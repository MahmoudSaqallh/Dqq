"use client";

import FeatureHero from "../Shared/FeatureHero";
import HeroStats from "../Shared/HeroStats";
import { useLanguage } from "../../../i18n/LanguageContext";

const STATS = [
  { value: 45, ar: "تقليل المرتجعات", en: "Fewer returns" },
  { value: 70, ar: "توفير بالوقت", en: "Time saved" },
  { value: 100, ar: "دقة التجهيز", en: "Picking accuracy" },
] as const;

export default function HeroSection() {
  const { isEn } = useLanguage();

  const content = isEn
    ? {
        badge: "Order Preparation",
        titleLineOne: "The warehouse problems eating your time,",
        titleSolved: "solved.",
        subtitle: "Every problem you face managing orders and stock — we built a ready solution for it inside DQQ. See how.",
        cta: "Explore features",
      }
    : {
        badge: "تجهيز الطلبات",
        titleLineOne: "مشاكل المستودع اللي تأكل وقتك",
        titleSolved: "حلّها.",
        subtitle: "كل مشكلة بتواجهك بإدارة الطلبات والمخزون — بنّينا لها حل جاهز داخل دقّق. شوف كيف.",
        cta: "اكتشف الميزات",
      };

  return (
    <FeatureHero
      badge={content.badge}
      badgeIcon={{ src: "/order-prep/chip-icon.svg", width: 21, height: 22 }}
      titleLineOne={content.titleLineOne}
      titleAfterBrand={content.titleSolved}
      subtitle={content.subtitle}
      cta={content.cta}
      scrollTargetId="features"
    >
      <HeroStats stats={STATS} />
    </FeatureHero>
  );
}
