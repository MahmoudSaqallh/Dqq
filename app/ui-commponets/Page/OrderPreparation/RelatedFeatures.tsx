import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma "ميزات مرتبطة" pills, pointed at this site's own feature pages
const ICON_SIZE = { width: 16, height: 22 };
const RELATED = [
  { href: "/traking", icon: { src: "/order-prep/rel-workflow.svg", ...ICON_SIZE }, ar: "المسارات", en: "Routes" },
  { href: "/order-processing", icon: { src: "/order-prep/rel-automation.svg", ...ICON_SIZE }, ar: "الأتمتة", en: "Automation" },
  { href: "/printing", icon: { src: "/order-prep/rel-printing.svg", ...ICON_SIZE }, ar: "الطباعة الآلية", en: "Auto printing" },
  { href: "/sites", icon: { src: "/order-prep/rel-locations.svg", ...ICON_SIZE }, ar: "المواقع والمستودعات", en: "Locations & warehouses" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
