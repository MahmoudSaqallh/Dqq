import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
  { href: "/sites", icon: { src: "/mega/locations.svg", ...ICON_SIZE }, ar: "المواقع والمستودعات", en: "Locations & warehouses" },
  { href: "/products", icon: { src: "/mega/products.svg", ...ICON_SIZE }, ar: "المنتجات", en: "Products" },
  { href: "/inventory", icon: { src: "/mega/stock.svg", ...ICON_SIZE }, ar: "المخزون", en: "Inventory" },
  { href: "/stocktaking", icon: { src: "/mega/inventoryCount.svg", ...ICON_SIZE }, ar: "جرد المخزون", en: "Stock Count" },
  { href: "/returns", icon: { src: "/mega/returns.svg", ...ICON_SIZE }, ar: "إدارة المرتجعات", en: "Returns management" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
