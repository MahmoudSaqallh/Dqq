"use client";

import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import FaqWaveBackground from "./FaqWaveBackground";
import { useLanguage } from "../../../../i18n/LanguageContext";

export default function Acorden() {
  const { t, isEn, dir } = useLanguage();
  const faqItems = t.faq.items;
  const [openIds, setOpenIds] = useState<string[]>([faqItems[0]?.id ?? ""]);

  useEffect(() => {
    setOpenIds([faqItems[0]?.id ?? ""]);
  }, [faqItems]);

  const toggleItem = (id: string) => {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-14 md:py-20"
      aria-labelledby="faq-heading"
    >
      <FaqWaveBackground />

      <div className="site-container relative z-[1]">
        <h2
          id="faq-heading"
          className="mb-10 text-center font-madani-semibold text-[clamp(1.45rem,2.4vw,2.25rem)] text-[#333333] md:mb-12"
        >
          {t.faq.title}
        </h2>

        <div className="mx-auto max-w-[920px]" dir={dir}>
          {faqItems.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <article key={item.id} className="border-0">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className={`flex w-full items-start justify-between gap-5 py-5 md:py-6 ${
                    isEn ? "text-left" : "text-right"
                  }`}
                >
                  <span
                    className={`font-madani-semibold text-[clamp(1rem,1.35vw,1.2rem)] leading-[1.6] transition-colors ${
                      isOpen ? "text-primary" : "text-[#333333]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    aria-hidden
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center transition-colors ${
                      isOpen ? "text-primary" : "text-[#b0b8b3]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pb-5 font-madani-regular text-[clamp(0.88rem,1.05vw,1rem)] leading-[1.95] text-[#666666] md:max-w-[88%] md:pb-6 ${
                        isEn ? "md:me-auto" : "md:ms-auto"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
