import RelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/sites", icon: { src: "/mega/locations.svg", ...ICON_SIZE }, ar: "المواقع والمستودعات", en: "Locations & warehouses" },
  { href: "/products", icon: { src: "/mega/products.svg", ...ICON_SIZE }, ar: "المنتجات", en: "Products" },
  { href: "/permissions", icon: { src: "/mega/permissions.svg", ...ICON_SIZE }, ar: "الصلاحيات وإدارة الموظفين", en: "Roles & Staff Management" },
  { href: "/inventory", icon: { src: "/mega/stock.svg", ...ICON_SIZE }, ar: "المخزون", en: "Inventory" },
  { href: "/activity-log", icon: { src: "/mega/activityLog.svg", ...ICON_SIZE }, ar: "سجل العمليات", en: "Activity Log" },
  { href: "/integrations", icon: { src: "/mega/integrations.svg", ...ICON_SIZE }, ar: "خدمات الربط مع المتاجر وشركات الشحن", en: "Store & Courier Integrations" },
] as const;

export default function Advance() {
  return <RelatedFeatures items={RELATED} />;
}
