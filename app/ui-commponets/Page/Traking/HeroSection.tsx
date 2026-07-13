"use client";

import { ArrowDown, Route } from "lucide-react";
import AnmtionTow from "../Index/Hero/AnmtionTow";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const content = t.tracking.hero;

  const scrollToHowItWorks = () => {
    document.getElementById("tracking-two-paths")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden md:min-h-[700px]">
      <div aria-hidden className="order-processing-hero-gradient absolute inset-0" />
      <div aria-hidden className="tracking-hero-grid" />

      <div className="site-container relative z-[1] flex min-h-[620px] flex-col items-center justify-center py-16 text-center md:min-h-[700px] md:py-20">
        <div className="mx-auto max-w-[760px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#24a259]/35 bg-[#eef9f3] px-5 py-2 text-[0.95rem] font-medium text-[#24a259] md:text-base">
            <Route size={16} strokeWidth={2} aria-hidden />
            {content.badge}
          </span>

          <h1 className="mt-8 font-madani-semibold text-[clamp(1.75rem,4.2vw,3.1rem)] leading-[1.45] text-[#22303e]">
            {content.title}
            <span className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <AnmtionTow inline withBang={false} className="text-[clamp(1.75rem,4.2vw,3.1rem)]" />
              <span>{content.titleAfterBrand}</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] font-madani-regular text-[clamp(0.85rem,1.45vw,0.95rem)] leading-6 text-[#5f7167] md:leading-7">
            {content.subtitle}
          </p>

          <button
            type="button"
            onClick={scrollToHowItWorks}
            className="order-processing-cta group mt-10 inline-flex h-[52px] min-w-[220px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#24a259] bg-white/75 px-8 font-madani-semibold text-base text-[#24a259] backdrop-blur-[1px]"
          >
            <span className="order-processing-cta-text inline-block max-w-[240px] overflow-hidden whitespace-nowrap">
              {content.cta}
            </span>
            <ArrowDown size={17} aria-hidden className="order-processing-cta-arrow inline-block shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
