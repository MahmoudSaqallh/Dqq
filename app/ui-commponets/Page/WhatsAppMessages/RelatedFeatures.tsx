import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
  { href: "/order-processing", icon: { src: "/mega/automation.svg", ...ICON_SIZE }, ar: "الأتمتة", en: "Automation" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
