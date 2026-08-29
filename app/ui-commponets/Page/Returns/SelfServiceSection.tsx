"use client";

import { useLanguage } from "../../../i18n/LanguageContext";

export default function SelfServiceSection() {
  const { t, dir } = useLanguage();
  const content = t.returns.selfService;

  return (
    <section id="returns-self-service" className="py-14 md:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2rem] bg-[#eef8f2] px-5 py-10 md:rounded-[2.5rem] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16" dir="ltr">
            <div className="order-2 mx-auto flex w-full max-w-[18rem] flex-col gap-7 sm:max-w-[20rem] lg:order-1 lg:mx-0 lg:max-w-[22rem] lg:gap-8">
              {content.cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-full bg-white px-5 py-4 text-center shadow-[0_12px_32px_rgba(25,52,38,0.08)] md:px-6 md:py-5 ${
                    index === 0
                      ? "returns-card-float-top"
                      : index === 1
                        ? "returns-card-float-mid"
                        : "returns-card-float-bottom"
                  }`}
                >
                  <h3 className="font-madani-semibold text-[1.02rem] leading-[1.45] text-[#22303e] md:text-[1.12rem]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 font-madani-regular text-[0.86rem] leading-[1.7] text-[#8a9690] md:text-[0.92rem]">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="order-1 space-y-5 text-start lg:order-2" dir={dir}>
              <span className="inline-flex rounded-lg bg-[#fff3dc] px-3.5 py-1.5 font-madani-medium text-sm text-[#b48e24]">
                {content.badge}
              </span>

              <h2 className="max-w-[28rem] font-madani-semibold text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.5] text-[#22303e]">
                {content.title}
              </h2>

              <p className="max-w-[34rem] font-madani-regular text-[clamp(0.92rem,1.2vw,1.05rem)] leading-[1.95] text-[#666666]">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
