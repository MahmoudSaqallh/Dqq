"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import AnmtionTow from "../Hero/AnmtionTow";
import StoreIcon from "./StoreIcons";
import { useLanguage } from "../../../../i18n/LanguageContext";

const CARD_META = [
  { id: "small", icon: "home" as const, tone: "bg-[#edf8f1]", variant: "blob-card-green" },
  { id: "medium", icon: "medium" as const, tone: "bg-[#faf5e8]", variant: "blob-card-yellow" },
  { id: "large", icon: "warehouse" as const, tone: "bg-[#edf4fa]", variant: "blob-card-blue" },
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
      className={`business-types-section relative overflow-hidden bg-white py-[4.5rem] pb-20 max-lg:py-14 max-lg:pb-16 ${isAnimated ? "animated" : ""}`}
    >
      <div className="site-container relative z-[2]">
        <header className="mb-14 text-center max-lg:mb-10">
          <h2
            className={`mb-4 font-madani-semibold text-[clamp(26px,3.5vw,38px)] leading-[1.55] text-[#414141] motion-safe:transition-all motion-safe:duration-[800ms] motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
            }`}
          >
            {t.about.titleBefore} <AnmtionTow inline /> {t.about.titleAfter}
          </h2>
          <p
            className={`mx-auto max-w-[42rem] text-[clamp(15px,1.6vw,18px)] leading-[1.8] text-[#6b7a73] motion-safe:transition-all motion-safe:duration-[800ms] motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {t.about.subtitle}
          </p>
        </header>

        <div className="blob-cards-row">
          {storeCards.map((card, index) => (
            <article
              key={card.id}
              className={`blob-card group ${card.tone} ${card.variant} ${isAnimated ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <div className="blob-card-icon">
                <StoreIcon variant={card.icon} className="blob-card-icon-svg" />
              </div>

              <h3 className="blob-card-title m-0 mt-1 mb-2 font-madani-semibold text-[clamp(16px,1.6vw,20px)] leading-[1.45] text-[#22303e]">
                {card.title}
              </h3>
              <p className="blob-card-text m-0 text-[clamp(12px,1.15vw,14px)] leading-[1.75] text-[#5f6f68]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
