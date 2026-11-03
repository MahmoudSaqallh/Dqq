import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/inventory-transfer", icon: { src: "/mega/transfer.svg", ...ICON_SIZE }, ar: "ترحيل المخزون", en: "Stock transfer" },
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
  { href: "/returns", icon: { src: "/mega/returns.svg", ...ICON_SIZE }, ar: "إدارة المرتجعات", en: "Returns management" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
