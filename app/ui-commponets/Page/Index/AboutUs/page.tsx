"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import AnmtionTow from "../Hero/AnmtionTow";
import { useLanguage } from "../../../../i18n/LanguageContext";

// Figma "DQQ Fields": small = green/home, medium = yellow/warehouse, large = blue/moal
const CARD_META = [
  { id: "small", icon: { src: "/domains/home.svg", w: 49.99, h: 48.56 }, tone: "bg-[#d3ecde]", variant: "blob-card-green" },
  { id: "medium", icon: { src: "/domains/warehouse.svg", w: 49.99, h: 43.56 }, tone: "bg-[#f3f6dd]", variant: "blob-card-yellow" },
  { id: "large", icon: { src: "/domains/moal.svg", w: 49.98, h: 30.7 }, tone: "bg-[#cde3f5]", variant: "blob-card-blue" },
];

export default function AboutUs() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const storeCards = t.about.cards.map((card, index) => ({
    ...card,
    ...CARD_META[index],
  }));

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
      id="domains"
      className={`business-types-section relative overflow-hidden bg-white ${isAnimated ? "animated" : ""}`}
    >
      <div className="site-container relative z-[2]">
        <header className="business-types-header text-center">
          <h2
            className={`mb-2 font-madani-semibold text-[clamp(26px,3.5vw,38px)] leading-[1.55] text-[#414141] motion-safe:transition-all motion-safe:duration-[800ms] motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
            }`}
          >
            {t.about.titleBefore} <AnmtionTow inline /> {t.about.titleAfter}
          </h2>
          <p
            className={`mx-auto max-w-[42rem] text-[clamp(15px,1.6vw,18px)] leading-[1.8] text-[#8d8d8d] motion-safe:transition-all motion-safe:duration-[800ms] motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {t.about.subtitle}
          </p>
        </header>

        <div className="blob-cards-stage">
          <Image
            src="/domains/bg-lines.svg"
            alt=""
            aria-hidden
            width={1817}
            height={364}
            unoptimized
            className="blob-cards-bg"
          />

          <div className="blob-cards-row">
            {storeCards.map((card, index) => (
              <article
                key={card.id}
                className={`blob-card group ${card.tone} ${card.variant} ${isAnimated ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.12}s` } as CSSProperties}
              >
                <div className="blob-card-icon">
                  <Image src={card.icon.src} alt="" width={card.icon.w} height={card.icon.h} unoptimized />
                </div>

                <h3 className="blob-card-title m-0 font-madani-semibold text-[clamp(16px,1.6vw,20px)] leading-[1.45] text-[#22303e]">
                  {card.title}
                </h3>
                <p className="blob-card-text m-0 text-[clamp(12px,1.15vw,14px)] leading-[1.75] text-[rgba(34,48,62,0.5)]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
