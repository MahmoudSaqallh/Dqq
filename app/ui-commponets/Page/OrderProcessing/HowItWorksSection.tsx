"use client";

import { BoxSelect, ListChecks, Settings2, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function HowItWorksSection() {
  const { isEn } = useLanguage();

  const content = isEn
    ? {
        title: "How Does Automation Work?",
        subtitle: "Three simple steps and everything runs automatically",
        steps: [
          {
            number: "01",
            icon: BoxSelect,
            title: "Set Your Rules",
            description: "City, courier, warehouse, order type",
          },
          {
            number: "02",
            icon: ListChecks,
            title: "Choose Actions",
            description: "Change status, print label, assign staff",
          },
          {
            number: "03",
            icon: Settings2,
            title: "System Executes",
            description: "Every matching order runs automatically",
          },
        ] satisfies Step[],
      }
    : {
        title: "كيف تشتغل الأتمتة؟",
        subtitle: "ثلاث خطوات بسيطة وكل شي يصير تلقائي",
        steps: [
          {
            number: "01",
            icon: BoxSelect,
            title: "حدد القيود",
            description: "المدينة، شركة الشحن، المستودع، نوع الطلب",
          },
          {
            number: "02",
            icon: ListChecks,
            title: "اختر الاجراءات",
            description: "تغيير حالة، طباعة بوليصة، تعيين موظف",
          },
          {
            number: "03",
            icon: Settings2,
            title: "النظام ينفذ",
            description: "كل طلب يطابق الشروط ينفذ تلقائياً",
          },
        ] satisfies Step[],
      };

  return (
    <section id="order-processing-how-it-works" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="site-container ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.35rem)] font-bold text-[#22303e]">
            {content.title}
          </h2>
          <p className="mt-3 text-[clamp(1rem,2vw,1.15rem)] leading-8 text-[#5f7167]">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-[#dceee3] bg-[#f3faf6] p-4 md:mt-12 md:p-6">
          <div className="grid gap-4 md:grid-cols-3 md:gap-0">
            {content.steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="order-processing-step group relative flex flex-col items-center px-4 py-8 text-center md:px-6"
                >
                  <div className="relative mb-6 flex h-32 w-full items-center justify-center overflow-hidden group-hover:overflow-visible">
                    <span
                      aria-hidden
                      className="order-processing-step-number pointer-events-none absolute left-1/2 top-1/2 z-0 select-none text-[clamp(4.6rem,10vw,6.3rem)] font-bold leading-none text-[#24a259]"
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-[#24a259]/25 bg-[#eef9f3] text-[#24a259] shadow-[0_10px_24px_rgba(36,162,89,0.08)]">
                      <Icon size={30} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-[#22303e]">{step.title}</h3>
                  <p className="relative z-10 mt-2 max-w-[17rem] text-sm leading-7 text-[#5f7167] md:text-[0.95rem]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
