"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type FeaturePoint = {
  title: string;
  description: string;
};

type CaseItem = {
  id: string;
  number: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  points: FeaturePoint[];
  image: string;
};

export default function FeaturesSection() {
  const { t, isEn } = useLanguage();
  const content = t.printing.features;
  const cases = content.cases as CaseItem[];

  const [activeId, setActiveId] = useState(cases[0]?.id ?? "");
  const [indicatorTop, setIndicatorTop] = useState(0);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const navItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCase = useMemo(
    () => cases.find((item) => item.id === activeId) ?? cases[0],
    [activeId, cases]
  );

  useEffect(() => {
    if (cases[0]) setActiveId(cases[0].id);
  }, [cases]);

  useEffect(() => {
    const sections = cases
      .map((item) => itemRefs.current[item.id])
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-30% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [cases]);

  useEffect(() => {
    const navItem = navItemRefs.current[activeId];
    if (!navItem) return;
    setIndicatorTop(navItem.offsetTop);
  }, [activeId, cases]);

  const scrollToCase = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="printing-cases" className="scroll-mt-24 bg-white py-14 md:py-20">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 className="font-madani-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.35] text-[#22303e]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-madani-regular text-[clamp(0.95rem,1.8vw,1.15rem)] leading-8 text-[#5f7167]">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
          <div className="order-2 space-y-10 lg:order-1">
            {cases.map((item, index) => {
              const imageOnLeft = index % 2 === 0;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className="flex min-h-[70vh] items-center scroll-mt-28"
                >
                  <div
                    dir="ltr"
                    className="grid w-full items-center gap-5 lg:grid-cols-[1.05fr_1fr]"
                  >
                    <div
                      className={`overflow-hidden rounded-[1.5rem] border border-[#e5efe9] bg-[#edf8f1] ${
                        imageOnLeft ? "order-1" : "order-1 lg:order-2"
                      }`}
                    >
                      <div className="sites-hierarchy-pulse">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={1200}
                          height={900}
                          className="h-auto w-full max-w-none object-cover"
                        />
                      </div>
                    </div>

                    <div
                      dir={isEn ? "ltr" : "rtl"}
                      className={`rounded-[1.5rem] border border-[#e5efe9] bg-white p-5 shadow-[0_10px_30px_rgba(25,52,38,0.05)] md:p-6 ${
                        imageOnLeft ? "order-2" : "order-2 lg:order-1"
                      }`}
                    >
                      <span className="inline-flex rounded-lg bg-[#24a259] px-3 py-1.5 text-[0.82rem] font-semibold text-white">
                        {item.badge}
                      </span>

                      <h3 className="mt-4 font-madani-semibold text-[clamp(1.2rem,2.2vw,1.65rem)] leading-[1.45] text-[#24a259]">
                        {item.title}
                      </h3>

                      <p className="mt-3 font-madani-regular text-[0.95rem] leading-7 text-[#5f7167]">
                        {item.description}
                      </p>

                      <ul className="mt-5 space-y-4">
                        {item.points.map((point) => (
                          <li key={point.title} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#24a259] text-white">
                              <Check size={14} strokeWidth={2.5} aria-hidden />
                            </span>
                            <span>
                              <span className="block font-madani-semibold text-[0.98rem] text-[#22303e]">
                                {point.title}
                              </span>
                              <span className="mt-1 block text-[0.88rem] leading-6 text-[#6f7f77]">
                                {point.description}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="order-1 lg:sticky lg:top-24 lg:order-2 lg:self-start">
            <div className="relative flex flex-col gap-2">
              <div
                aria-hidden
                className="sites-feature-border pointer-events-none absolute inset-x-0 rounded-full transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ top: indicatorTop, height: 48 }}
              >
                <div className="sites-feature-border-inner rounded-full bg-[#eaf7ef]" />
              </div>

              {cases.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    ref={(el) => {
                      navItemRefs.current[item.id] = el;
                    }}
                    onClick={() => scrollToCase(item.id)}
                    className={`relative z-10 flex h-12 items-center justify-between gap-3 rounded-full px-4 text-sm transition-colors duration-300 ${
                      isActive ? "text-[#1f8f52]" : "text-[#8a9a92]"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-1.5 text-[0.72rem] font-semibold transition-colors duration-300 ${
                        isActive ? "bg-[#d6f0e1] text-[#1f8f52]" : "bg-[#f2f4f3] text-[#96a29d]"
                      }`}
                    >
                      {item.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeCase && (
              <p className="mt-5 text-center text-sm text-[#74857d]">
                {isEn ? "Current feature" : "الميزة الحالية"}:{" "}
                <span className="font-semibold text-[#24a259]">{activeCase.label}</span>
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
