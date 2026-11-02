"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";
import img1 from "../../../../public/locations-desc.webp";

export default function HierarchySection() {
  const { t } = useLanguage();
  const content = t.sites.hierarchy;

  return (
    <section className="bg-[#f4faf7] py-[clamp(64px,7.8vw,112px)]">
      <div className="site-container flex flex-col gap-12">
        <header className="flex flex-col gap-2 text-center">
          <h2 className="text-[clamp(28px,3.125vw,45px)] font-medium leading-[1.7] text-[#414141]">{content.title}</h2>
          <p className="text-[clamp(16px,1.39vw,20px)] leading-[2] text-[#676767]">{content.subtitle}</p>
        </header>

        {/* The image file has wide empty margins: from md up, Figma's 1200×560 slot trims them,
            and the mask fades the cut so the image's glow doesn't end in a straight line */}
        <div className="flex w-full items-center overflow-hidden rounded-3xl md:aspect-[1200/560] md:[mask-image:linear-gradient(transparent,#000_6%,#000_94%,transparent)]">
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
