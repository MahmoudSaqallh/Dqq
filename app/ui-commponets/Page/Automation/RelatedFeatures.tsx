import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
  { href: "/printing", icon: { src: "/mega/printing.svg", ...ICON_SIZE }, ar: "الطباعة الآلية", en: "Auto printing" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
