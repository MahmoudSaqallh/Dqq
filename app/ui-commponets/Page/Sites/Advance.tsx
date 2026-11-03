import RelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/inventory-transfer", icon: { src: "/mega/transfer.svg", ...ICON_SIZE }, ar: "ترحيل المخزون", en: "Stock transfer" },
  { href: "/purchase-orders", icon: { src: "/mega/purchase.svg", ...ICON_SIZE }, ar: "طلبات الشراء", en: "Purchase orders" },
  { href: "/inventory", icon: { src: "/mega/stock.svg", ...ICON_SIZE }, ar: "المخزون", en: "Inventory" },
  { href: "/traking", icon: { src: "/mega/routes.svg", ...ICON_SIZE }, ar: "المسارات", en: "Routes" },
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
] as const;

export default function Advance() {
  return <RelatedFeatures items={RELATED} />;
}
