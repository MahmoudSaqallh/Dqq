"use client";

import {
  Boxes,
  ChevronLeft,
  ChevronRight,
  Link2,
  Package,
  ScrollText,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageContext";

type FeatureItem = {
  id: "locations" | "products" | "permissions" | "stock" | "activityLog" | "integrations";
  href: string;
  icon: LucideIcon;
};

const FEATURE_ITEMS: FeatureItem[] = [
  { id: "locations", href: "/sites", icon: Warehouse },
  { id: "products", href: "#", icon: Package },
  { id: "permissions", href: "#", icon: Users },
  { id: "stock", href: "#", icon: Boxes },
  { id: "activityLog", href: "#", icon: ScrollText },
  { id: "integrations", href: "#", icon: Link2 },
];

function getFeatureTitle(
  columns: readonly { items: readonly { id: string; title: string }[] }[],
  id: FeatureItem["id"]
) {
  for (const column of columns) {
    const item = column.items.find((entry) => entry.id === id);
    if (item) return item.title;
  }
  return id;
}

export default function Advance() {
  const { t, isEn } = useLanguage();
  const Chevron = isEn ? ChevronRight : ChevronLeft;

  return (
    <section className="pb-14 pt-2 md:pb-16">
      <div className="site-container">
        <div className="flex flex-wrap items-center gap-3 rounded-[1.75rem] bg-gradient-to-l from-[#e8f7ef] via-[#f3fbf7]/90 to-transparent px-5 py-5 md:gap-4 md:rounded-[2rem] md:px-8 md:py-6">
          <h3 className="shrink-0 font-madani-semibold text-[1.02rem] text-[#24a259] md:text-[1.08rem]">
            {t.advance.relatedFeatures}
          </h3>

          {FEATURE_ITEMS.map(({ id, href, icon: Icon }) => (
            <Link
              key={id}
              href={href}
              className="inline-flex items-center gap-2 rounded-full border border-[#24a259] bg-[#f8fffb]/90 px-4 py-2 font-madani-semibold text-[0.9rem] text-[#24a259] transition-colors duration-200 hover:bg-[#eefaf2] md:px-5 md:py-2.5 md:text-[0.94rem]"
            >
              <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} aria-hidden />
              <span>{getFeatureTitle(t.nav.megaMenu.columns, id)}</span>
              <Chevron className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
