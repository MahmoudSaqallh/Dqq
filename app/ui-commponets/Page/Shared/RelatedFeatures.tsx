"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageContext";

export type RelatedItem = {
  href: string;
  icon: { src: string; width: number; height: number };
  ar: string;
  en: string;
};

// "ميزات مرتبطة" pill bar, shared by feature pages (Figma "Section/Related Features")
export default function RelatedFeatures({ items }: { items: readonly RelatedItem[] }) {
  const { isEn } = useLanguage();

  return (
    <section className="pt-10 pb-20">
      <div className="site-container">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-[#f6fbf8] px-7 py-5 max-sm:px-4">
          <h2 className="text-xl font-medium leading-[1.5] text-[#414141]">{isEn ? "Related features" : "ميزات مرتبطة"}</h2>

          {items.map((item) => (
            <Link
              key={item.ar}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-[50px] border border-[#24a259] bg-[#e9f6ee] px-4 py-[11px] text-[17px] font-medium leading-[1.5] text-[#24a259] no-underline transition-colors hover:bg-[#dcf1e4]"
            >
              <Image src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} unoptimized />
              {isEn ? item.en : item.ar}
              <Image
                src="/order-prep/chevron.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className={isEn ? "-scale-x-100" : undefined}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
