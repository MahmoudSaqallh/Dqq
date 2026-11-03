import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/inventory-transfer", icon: { src: "/mega/transfer.svg", ...ICON_SIZE }, ar: "ترحيل المخزون", en: "Stock transfer" },
  { href: "/purchase-orders", icon: { src: "/mega/purchase.svg", ...ICON_SIZE }, ar: "طلبات الشراء", en: "Purchase orders" },
  { href: "/inventory", icon: { src: "/mega/stock.svg", ...ICON_SIZE }, ar: "المخزون", en: "Inventory" },
  { href: "/integrations", icon: { src: "/mega/integrations.svg", ...ICON_SIZE }, ar: "خدمات الربط مع المتاجر وشركات الشحن", en: "Store & Courier Integrations" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
