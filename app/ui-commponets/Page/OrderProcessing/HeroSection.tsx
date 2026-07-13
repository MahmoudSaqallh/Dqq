"use client";

import { ArrowDown, Settings2 } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function HeroSection() {
  const { isEn } = useLanguage();
  const scrollToHowItWorks = () => {
    const section = document.getElementById("order-processing-how-it-works");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const content = isEn
    ? {
        badge: "Automation",
        title: "Smart Automation",
        titleLineTwo: "Let The System Handle It",
        subtitle:
          "Set the rules you always repeat, and the system will execute them every time.",
        cta: "Explore Features",
      }
    : {
        badge: "الأتمتة",
        title: "الأتمتة الذكية",
        titleLineTwo: "خلّي النظام يشتغل عنك",
        subtitle: "حدد القيود اللي تنساها دائمًا، والنظام بنفذها عنك كل مرة.",
        cta: "اكتشف الميزات",
      };

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden md:min-h-[700px]">
      <div aria-hidden className="order-processing-hero-gradient absolute inset-0" />
      <div aria-hidden className="tracking-hero-grid" />

      <div className="site-container relative z-[1] flex min-h-[620px] flex-col items-center justify-center py-16 text-center md:min-h-[700px] md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#24a259]/35 bg-[#eef9f3] px-5 py-2 text-sm font-medium text-[#24a259]">
            <Settings2 size={15} />
            {content.badge}
          </span>

          <h1 className="mt-8 text-[clamp(2.1rem,5.2vw,4rem)] font-bold leading-[1.28] text-[#22303e]">
            {content.title}
            <span className="mt-2 block">{content.titleLineTwo}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-8 text-[#5f7167] md:leading-9">
            {content.subtitle}
          </p>

          <button
            type="button"
            onClick={scrollToHowItWorks}
            className="order-processing-cta group mt-10 inline-flex h-[52px] min-w-[220px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#24a259] bg-white/70 px-8 text-base font-semibold text-[#24a259] backdrop-blur-[1px]"
          >
            <span className="order-processing-cta-text inline-block max-w-[240px] overflow-hidden whitespace-nowrap">
              {content.cta}
            </span>
            <ArrowDown
              size={17}
              aria-hidden
              className="order-processing-cta-arrow inline-block shrink-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
