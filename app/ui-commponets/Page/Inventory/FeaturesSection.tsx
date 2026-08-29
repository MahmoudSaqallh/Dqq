"use client";

import Image from "next/image";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type CaseItem = {
  id: string;
  number: string;
  label: string;
  problem: string;
  solutionTitle: string;
  solutionDescription: string;
  image: string;
};

export default function FeaturesSection() {
  const { t, isEn } = useLanguage();
  const content = t.inventory.features;
  const cases = content.cases as readonly CaseItem[];

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
    <section id="inventory-cases" className="scroll-mt-24 bg-white py-14 md:py-20">
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
          <div className="order-2 space-y-8 lg:order-1">
            {cases.map((item, index) => {
              const imageOnLeft = index % 2 === 0;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className="flex min-h-[72vh] items-center scroll-mt-28"
                >
                  <div className="w-full rounded-[1.75rem] bg-white p-3 shadow-[0_10px_30px_rgba(25,52,38,0.06)] md:p-5">
                    <div dir="ltr" className="grid items-center gap-5 lg:grid-cols-[1.05fr_1fr]">
                      <div
                        className={`overflow-hidden rounded-[1.5rem] border border-[#e5efe9] bg-[#edf8f1] ${
                          imageOnLeft ? "order-1" : "order-1 lg:order-2"
                        }`}
                      >
                        <div className="sites-hierarchy-pulse">
                          <Image
                            src={item.image}
                            alt={item.solutionTitle}
                            width={1200}
                            height={900}
                            className="h-auto w-full max-w-none object-cover"
                          />
                        </div>
                      </div>

                      <div
                        dir={isEn ? "ltr" : "rtl"}
                        className={`space-y-4 ${imageOnLeft ? "order-2" : "order-2 lg:order-1"}`}
                      >
                        <div>
                          <p className="mb-2 text-base font-semibold text-[#6f7f77]">
                            {content.problemLabel}
                          </p>
                          <p className="flex items-start gap-2 text-[clamp(1.15rem,2.2vw,1.55rem)] leading-[1.45] text-[#1f2f2a]">
                            <AlertTriangle className="mt-1 shrink-0 text-[#f08ea1]" size={20} />
                            <span>{item.problem}</span>
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[#d7eadf] bg-[#fcfffd] p-5">
                          <p className="mb-2 text-base font-semibold text-[#6f7f77]">
                            {content.solutionLabel}
                          </p>
                          <p className="flex items-start gap-2 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold leading-[1.35] text-[#24a259]">
                            <Lightbulb className="mt-1 shrink-0 text-[#24a259]" size={22} />
                            <span>{item.solutionTitle}</span>
                          </p>
                          <p className="mt-3 text-[0.98rem] leading-8 text-[#3f4f48] md:text-base">
                            {item.solutionDescription}
                          </p>
                        </div>
                      </div>
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

            {activeCase ? (
              <p className="mt-5 text-center text-sm text-[#74857d] lg:block">
                {isEn ? "Current feature" : "الميزة الحالية"}:{" "}
                <span className="font-semibold text-[#24a259]">{activeCase.label}</span>
              </p>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
