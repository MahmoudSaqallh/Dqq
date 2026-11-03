import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/products", icon: { src: "/mega/products.svg", ...ICON_SIZE }, ar: "المنتجات", en: "Products" },
  { href: "/returns", icon: { src: "/mega/returns.svg", ...ICON_SIZE }, ar: "إدارة المرتجعات", en: "Returns management" },
  { href: "/sites", icon: { src: "/mega/locations.svg", ...ICON_SIZE }, ar: "المواقع والمستودعات", en: "Locations & warehouses" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
