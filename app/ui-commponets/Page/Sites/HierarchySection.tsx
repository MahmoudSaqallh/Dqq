"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";
import img1 from "../../../../public/locations-desc.webp";

export default function HierarchySection() {
  const { t } = useLanguage();
  const content = t.sites.hierarchy;

  return (
    <section id="sites-features" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-madani-semibold text-[clamp(1.65rem,3.4vw,2.35rem)] leading-[1.45] text-[#22303e]">
            {content.title}
          </h2>
          <p className="mt-3 font-madani-regular text-[clamp(0.95rem,1.7vw,1.1rem)] leading-8 text-[#5f7167]">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10 w-full overflow-hidden rounded-2xl md:mt-12">
          <div className="sites-hierarchy-pulse">
            <Image
              src={img1}
              alt={content.imageAlt}
              width={1600}
              height={980}
              className="h-auto w-full max-w-none object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
