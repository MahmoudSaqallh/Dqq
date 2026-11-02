"use client";

import { useLanguage } from "../../../i18n/LanguageContext";

const CARD_TILT = ["-rotate-3", "rotate-3", "-rotate-3"];
const FLOAT_STAGGER_S = 1.2;

export default function SelfServiceSection() {
  const { t, dir } = useLanguage();
  const content = t.returns.selfService;

  return (
    <section id="returns-self-service">
      <div className="site-container">
        <div className="returns-coming-soon-box rounded-[30px] px-[clamp(20px,3.4vw,49px)] py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[454fr_628fr] lg:gap-14" dir="ltr">
            <div className="order-2 mx-auto flex w-full max-w-[280px] flex-col gap-4 lg:order-1">
              {content.cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`returns-float-card flex min-h-24 flex-col items-center justify-center gap-0.5 rounded-[48px] border-[0.8px] border-[#7cc79b]/20 bg-[linear-gradient(161deg,#fff_0%,#e9f6ee_50%,#d4eddf_100%)] px-5 py-3 text-center shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_20px_rgba(124,199,155,0.15)] ${CARD_TILT[index]}`}
                  style={{ animationDelay: `${index * FLOAT_STAGGER_S}s` }}
                >
                  <h3 className="text-[17px] font-semibold leading-[1.7] text-[#414141]">{card.title}</h3>
                  <p className="text-sm leading-[1.5] text-[#676767]">{card.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="order-1 flex flex-col items-start gap-2.5 text-start lg:order-2" dir={dir}>
              <span className="rounded-[30px] bg-[#ffeecc] px-3.5 py-[5px] text-base font-semibold leading-[1.5] text-[#ffab00]">
                {content.badge}
              </span>
              <h2 className="text-[clamp(22px,1.94vw,28px)] font-semibold leading-[1.4] text-[#414141]">{content.title}</h2>
              <p className="text-[15px] leading-[34px] text-[#8d8d8d]">{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
