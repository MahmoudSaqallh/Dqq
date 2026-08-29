"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function BenefitsSection() {
  const { t, isEn, dir } = useLanguage();
  const content = t.printing.benefits;

  return (
    <section className="py-14 md:py-16">
      <div className="site-container">
        <div className="tracking-benefits-cta px-6 py-14 md:rounded-[2rem] md:px-10 md:py-16 lg:py-[4.5rem]">
          <div aria-hidden className="tracking-benefits-cta-bg absolute inset-0" />
          <div aria-hidden className="tracking-benefits-cta-grid absolute inset-0" />
          <div
            dir={dir}
            className="tracking-benefits-cta-content mx-auto flex max-w-[52rem] flex-col items-center text-center"
          >
            <h2 className="font-madani-semibold text-[clamp(1.55rem,3.2vw,2.35rem)] leading-[1.5] text-white">
              {content.title}
            </h2>

            <p className="mt-5 max-w-[42rem] font-madani-regular text-[clamp(0.92rem,1.35vw,1.08rem)] leading-[1.9] text-white/92">
              {content.subtitle}
            </p>

            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-madani-semibold text-[0.98rem] text-[#24a259] transition-colors duration-200 hover:bg-[#fafdfb]"
            >
              <span>{content.cta}</span>
              {isEn ? (
                <ArrowRight size={18} className="shrink-0" aria-hidden />
              ) : (
                <ArrowLeft size={18} className="shrink-0" aria-hidden />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
