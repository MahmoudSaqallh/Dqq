"use client";

import Image from "next/image";
import { useLanguage } from "../../../../i18n/LanguageContext";

export default function EasyUse() {
  const { t, isEn, dir } = useLanguage();

  return (
    <section id="easy-use" className="bg-[#f7f8f7] py-14 md:py-16">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14" dir="ltr">
          <div className="order-1 lg:order-2 lg:col-start-2">
            <div className="relative ms-auto flex w-full max-w-[560px] items-end justify-end">
              <Image
                src="/images/easyuse-phone.png"
                alt={t.easyUse.imageAlt}
                width={760}
                height={760}
                className="relative z-[1] h-auto w-[86%] max-w-[480px] object-contain"
                priority={false}
              />
            </div>
          </div>

          <div
            className={`order-2 space-y-6 lg:order-1 lg:col-start-1 ${isEn ? "text-left" : "text-right"}`}
            dir={dir}
          >
            <h2 className="font-madani-semibold text-[clamp(1.4rem,2.2vw,2.1rem)] leading-[1.45] text-[#333333]">
              {t.easyUse.title}
            </h2>

            <p className="font-madani-regular text-[clamp(0.92rem,1.1vw,1.1rem)] leading-[1.9] text-[#666666]">
              {t.easyUse.subtitle}
            </p>

            <p className="max-w-[40rem] font-madani-regular text-[clamp(0.85rem,1vw,1rem)] leading-[1.9] text-[#5f6a67]">
              {t.easyUse.desc}
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-madani-medium text-base text-white transition-colors duration-300 hover:bg-[#1d8a4a]"
            >
              <span aria-hidden>{isEn ? "→" : "←"}</span>
              <span>{t.easyUse.join}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
