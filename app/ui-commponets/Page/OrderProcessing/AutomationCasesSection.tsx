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

export default function AutomationCasesSection() {
  const { isEn } = useLanguage();

  const cases = useMemo<CaseItem[]>(
    () =>
      isEn
        ? [
            {
              id: "auto-handle",
              number: "01",
              label: "Automatic Handling",
              problem: "Delay in processing orders",
              solutionTitle: "Automatic order handling",
              solutionDescription:
                "Set rules (city, courier, warehouse), and every matched order moves automatically.",
              image: "/images/order-processing/hold-order.png",
            },
            {
              id: "print",
              number: "02",
              label: "Instant Printing",
              problem: "Forgetting shipment labels",
              solutionTitle: "Instant printing for paid orders",
              solutionDescription:
                "After \"Paid\" status, the shipment label prints instantly and automatically.",
              image: "/images/order-processing/print-policy.png",
            },
            {
              id: "hold",
              number: "03",
              label: "Auto Hold",
              problem: "Incomplete order info",
              solutionTitle: "Auto hold for orders",
              solutionDescription:
                "If shipment data is missing, the order is automatically held until completion.",
              image: "/images/order-processing/hold-order-2.png",
            },
            {
              id: "assign",
              number: "04",
              label: "Smart Assignment",
              problem: "Random order distribution",
              solutionTitle: "Smart employee assignment",
              solutionDescription:
                "Set city/warehouse rules for \"Assign employee\" and each order routes correctly.",
              image: "/images/order-processing/store-status.png",
            },
            {
              id: "review",
              number: "05",
              label: "Forced Review",
              problem: "High-value orders without review",
              solutionTitle: "Forced review via notification",
              solutionDescription:
                "Set amount + hold + notify manager, so orders wait for approval automatically.",
              image: "/images/order-processing/review-notification.png",
            },
          ]
        : [
            {
              id: "auto-handle",
              number: "01",
              label: "معالجة تلقائية",
              problem: "تأخر في معالجة طلباتك",
              solutionTitle: "معالجة تلقائية للطلبات",
              solutionDescription:
                "حدد القيود (المدينة، شركة الشحن، المستودع)، وكل طلب يطابق الشروط يتحول تلقائيًا.",
              image: "/images/order-processing/hold-order.png",
            },
            {
              id: "print",
              number: "02",
              label: "طباعة فورية",
              problem: "نسيان طباعة البوليصة",
              solutionTitle: "طباعة فورية للمدفوع",
              solutionDescription:
                "أضف قيد \"مدفوع\" مع حدث \"طباعة بوليصة الشحن\"، وكل طلب مدفوع تنطبع بوليصته فورًا.",
              image: "/images/order-processing/print-policy.png",
            },
            {
              id: "hold",
              number: "03",
              label: "تعليق تلقائي",
              problem: "معلومات الطلب مو كاملة",
              solutionTitle: "تعليق تلقائي للطلبات",
              solutionDescription:
                "في حال بيانات الشحن غير مكتملة، سيتم تعليق الطلب تلقائيًا لحين استكمالها.",
              image: "/images/order-processing/hold-order-2.png",
            },
            {
              id: "assign",
              number: "04",
              label: "توجيه ذكي",
              problem: "توزيع عشوائي للطلبات",
              solutionTitle: "توجيه ذكي للموظفين",
              solutionDescription:
                "حدد قيد المستودع أو المدينة مع حدث \"تعيين الموظف\"، وكل طلب يوجّه تلقائيًا للموظف المسؤول.",
              image: "/images/order-processing/store-status.png",
            },
            {
              id: "review",
              number: "05",
              label: "مراجعة إجبارية",
              problem: "طلبات عالية القيمة بدون مراجعة",
              solutionTitle: "مراجعة إجبارية بالإشعار",
              solutionDescription:
                "حدد قيد \"قيمة الطلب\" مع حدث \"تعليق + إشعار للمدير\"، فيتوقف الطلب تلقائيًا لحين المراجعة.",
              image: "/images/order-processing/review-notification.png",
            },
          ],
    [isEn]
  );

  const [activeId, setActiveId] = useState(cases[0].id);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navListRef = useRef<HTMLDivElement | null>(null);

  const activeCase = useMemo(
    () => cases.find((item) => item.id === activeId) ?? cases[0],
    [activeId, cases]
  );

  useEffect(() => {
    setActiveId(cases[0].id);
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
    const navList = navListRef.current;
    if (!navItem || !navList) return;

    setIndicatorTop(navItem.offsetTop);
  }, [activeId, cases]);

  const header = isEn
    ? {
        title: "How Did Automation Solve the Problems?",
        subtitle:
          "Every process that used to take your time and effort now runs automatically with ease.",
      }
    : {
        title: "كيف الأتمتة حلت المشاكل؟",
        subtitle:
          "كل عملية كانت تاخذ من وقتك ومجهودك، الآن يصير يتنفذ تلقائي بكل بساطة.",
      };

  return (
    <section id="order-processing-cases" className=" py-14 md:py-20">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 className="text-[clamp(2.1rem,4.8vw,3.25rem)] font-bold leading-[1.2] text-[#22303e]">
            {header.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(1.05rem,2.2vw,1.3rem)] leading-8 text-[#5f7167]">
            {header.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="order-processing-active-border rounded-2xl shadow-[0_10px_28px_rgba(23,56,40,0.06)]">
              <div className="order-processing-active-border-inner rounded-[14px] bg-white p-4">
                <p className="text-sm text-[#74857d]">{isEn ? "Current Step" : "الخطوة الحالية"}</p>
                <p className="mt-2 text-5xl font-bold leading-none text-[#24a259] transition-all duration-300">
                  {activeCase.number}
                </p>
                <p className="mt-3 text-lg font-semibold text-[#263832] transition-all duration-300">
                  {activeCase.label}
                </p>
              </div>
            </div>

            <div ref={navListRef} className="relative mt-4 flex flex-col gap-2.5">
              <div
                aria-hidden
                className="order-processing-active-border pointer-events-none absolute inset-x-0 rounded-xl transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ top: indicatorTop, height: 46 }}
              >
                <div className="order-processing-active-border-inner rounded-[10px] bg-[#eaf7ef]" />
              </div>

              {cases.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      navItemRefs.current[item.id] = el;
                    }}
                    className={`relative z-10 flex h-[46px] items-center justify-between rounded-xl px-4 text-sm transition-colors duration-300 ${
                      isActive ? "text-[#1f8f52]" : "text-[#7e8f87]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] transition-colors duration-300 ${
                        isActive ? "bg-[#d6f0e1] text-[#1f8f52]" : "bg-[#f2f4f3] text-[#96a29d]"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="space-y-8">
            {cases.map((item) => (
              <article
                key={item.id}
                id={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                className="flex min-h-[78vh] items-center scroll-mt-28"
              >
                <div className="w-full rounded-3xl bg-white p-3 shadow-[0_10px_30px_rgba(25,52,38,0.06)] md:p-5">
                  <div className="grid items-center gap-5 lg:grid-cols-[1.15fr_1fr]">
                    <div className="overflow-hidden rounded-3xl border border-[#e5efe9] bg-[#edf8f1]">
                      <Image
                        src={item.image}
                        alt={item.solutionTitle}
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="order-processing-active-border rounded-2xl">
                        <div className="order-processing-active-border-inner rounded-[14px] bg-white p-5">
                          <p className="mb-2 text-lg font-semibold text-[#2a3632]">
                            {isEn ? "What is the issue?" : "وش المشكلة؟"}
                          </p>
                          <p className="flex items-center gap-2 text-[1.7rem] leading-[1.35] text-[#1f2f2a] max-md:text-[1.35rem]">
                            <AlertTriangle className="text-[#f08ea1]" size={22} />
                            {item.problem}
                          </p>
                        </div>
                      </div>

                      <div className="order-processing-active-border rounded-2xl">
                        <div className="order-processing-active-border-inner rounded-[14px] bg-[#fcfffd] p-5">
                          <p className="mb-2 text-lg font-semibold text-[#2a3632]">
                            {isEn ? "How we solve it?" : "كيف حلّيناها؟"}
                          </p>
                          <p className="flex items-center gap-2 text-[2rem] font-bold leading-[1.2] text-[#24a259] max-md:text-[1.55rem]">
                            <Lightbulb className="text-[#24a259]" size={24} />
                            {item.solutionTitle}
                          </p>
                          <p className="mt-2 text-lg leading-8 text-[#3f4f48] max-md:text-base">
                            {item.solutionDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
