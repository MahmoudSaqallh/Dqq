"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import AnmtionTow from "./AnmtionTow";
import { useLanguage } from "../../../../i18n/LanguageContext";

const heroDecorClass =
  "hero-decor-float h-auto w-[4.25rem] shrink-0 max-sm:w-[4rem] sm:w-24 md:absolute md:w-[8.5rem]";

export default function Hero() {
  const { t, isEn } = useLanguage();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#dbf2e5] to-[#bfe7d1] pt-10">
      <Image
        src="https://dqq.ai/images/bg-hero.webp"
        alt="bg-hero"
        fill
        priority
        className="pointer-events-none z-0 object-cover opacity-30"
      />

      <div aria-hidden className="tracking-hero-grid" />

      <div className="site-container relative z-[1] flex min-h-[86vh] flex-col items-center justify-between pt-20 pb-0 max-md:min-h-[78vh] max-md:pt-14">
        <div className="mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
          <div className="min-h-[120px] max-md:min-h-[104px] max-sm:min-h-[92px]">
            <h1 className="text-4xl font-bold leading-[1.28] text-[#22303e] max-md:text-3xl max-sm:text-[1.65rem]">
              <AnimatedText />
              <AnmtionTow />
            </h1>
          </div>

          <p className="mt-6 text-xl leading-9 text-[#22303e]/80 max-md:text-lg max-md:leading-8 max-sm:text-base max-sm:leading-7">
            {t.hero.desc}
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#24a259] px-7 py-3 text-lg font-medium text-white transition hover:bg-[#1f8d4d]"
          >
            {t.hero.join}
            {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          </button>
        </div>

        <div className="relative mt-8 flex w-full flex-col items-center justify-center overflow-visible">
          <div className="pointer-events-none z-[3] mb-3 flex w-full max-w-[min(100%,580px)] items-center justify-between gap-2 px-1 md:absolute md:top-3 md:left-1/2 md:mb-0 md:h-[28%] md:w-[35%] md:max-w-none md:-translate-x-1/2 md:justify-stretch">
            <div className="contents md:block md:relative md:h-full md:w-full">
              <Image
                src="https://dqq.ai/images/image-hero-1.webp"
                alt="Hero Decor"
                width={136}
                height={136}
                className={`${heroDecorClass} md:top-0 md:left-0`}
              />
              <Image
                src="https://dqq.ai/images/image-hero-2.webp"
                alt="Hero Decor"
                width={136}
                height={136}
                className={`${heroDecorClass} md:bottom-0 md:left-[15%] xl:left-24 [animation-delay:2.2s]`}
              />
              <Image
                src="https://dqq.ai/images/image-hero-3.webp"
                alt="Hero Decor"
                width={136}
                height={136}
                className={`${heroDecorClass} md:right-[15%] md:bottom-0 xl:right-24 [animation-delay:3.3s]`}
              />
              <Image
                src="https://dqq.ai/images/image-hero-4.webp"
                alt="Hero Decor"
                width={136}
                height={136}
                className={`${heroDecorClass} md:top-0 md:right-0 md:left-auto [animation-delay:1.1s]`}
              />
            </div>
          </div>

          <Image
            src="https://dqq.ai/images/image-hero.webp"
            alt="Hero Image"
            width={1120}
            height={600}
            priority
            className="relative z-[2] h-auto w-[min(100%,1320px)] object-contain pt-10 max-md:w-[min(118%,760px)]"
          />
        </div>
      </div>
    </section>
  );
}
