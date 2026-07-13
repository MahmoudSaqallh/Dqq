"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";
import Link from "next/link";

export default function WhyAccount() {
  const { t, isEn } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const activate = () => setIsAnimated(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activate();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      activate();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-dqq"
      className="flex items-center bg-[url('/images/section-2-bg.webp')] bg-contain bg-center bg-no-repeat py-14 max-lg:py-12"
    >
      <div className="site-container">
  

        <div className="mt-12 md:mt-16">
          <div
            className={`why-cta-gradient flex flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-14 text-center md:rounded-[2rem] md:px-10 md:py-16 lg:py-[4.5rem] ${
              isAnimated ? "opacity-100 motion-safe:animate-[whyCtaFadeIn_0.8s_ease-out]" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.45s" }}
          >
            <h3 className="mx-auto max-w-[40rem] font-madani-semibold text-4xl leading-[1.45] text-white">
              {t.why.ctaTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-[42rem] font-madani-regular text-[clamp(0.95rem,1.35vw,1.12rem)] leading-[1.85] text-white/90">
              {t.why.ctaDesc}
            </p>
            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-madani-semibold text-[0.98rem] text-[#24a259] transition-colors duration-200 hover:bg-[#fafdfb]"
            >
              <span>{t.why.ctaButton}</span>
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
