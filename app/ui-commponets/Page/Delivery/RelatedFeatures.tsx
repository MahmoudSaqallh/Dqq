import SharedRelatedFeatures from "../Shared/RelatedFeatures";

// Figma order; activity log and permissions have no page on this site yet
const ICON_SIZE = { width: 20, height: 20 };
const RELATED = [
  { href: "/inventory", icon: { src: "/mega/stock.svg", ...ICON_SIZE }, ar: "المخزون", en: "Inventory" },
  { href: "#", icon: { src: "/mega/activityLog.svg", ...ICON_SIZE }, ar: "سجل العمليات", en: "Activity Log" },
  { href: "#", icon: { src: "/mega/permissions.svg", ...ICON_SIZE }, ar: "الصلاحيات وإدارة الموظفين", en: "Roles & Staff Management" },
  { href: "/order-processing", icon: { src: "/mega/automation.svg", ...ICON_SIZE }, ar: "الأتمتة", en: "Automation" },
  { href: "/order-preparation", icon: { src: "/mega/orderPrep.svg", ...ICON_SIZE }, ar: "تجهيز الطلبات", en: "Order preparation" },
] as const;

export default function RelatedFeatures() {
  return <SharedRelatedFeatures items={RELATED} />;
}
