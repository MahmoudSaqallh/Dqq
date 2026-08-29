"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../../../i18n/LanguageContext";

const LOGO_BY_ID: Record<string, string> = {
  organic: "/images/testimonial-organic.png",
  osan: "/images/testimonial-osan.png",
  roxa: "/images/testimonial-roxa.png",
};

export default function Slider() {
  const { t, dir, isEn } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = useMemo(
    () =>
      [...t.testimonials.items, ...t.testimonials.items].map((item, index) => ({
        ...item,
        key: `${item.id}-${index}`,
        logo: LOGO_BY_ID[item.id] ?? "/images/testimonial-organic.png",
      })),
    [t.testimonials.items]
  );

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;

    const navigation = swiper.params.navigation;
    if (typeof navigation === "object" && navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.changeLanguageDirection(dir);
  }, [dir]);

  return (
    <section id="testimonials" className="overflow-hidden bg-[#f7f8f7] py-12 md:py-16">
      <div className="site-container">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-madani-semibold text-[clamp(1.45rem,2.4vw,2.25rem)] text-[#333333]">
            {t.testimonials.title}
          </h2>
        </div>

        <Swiper
          key={dir}
          modules={[Navigation, Autoplay]}
          dir={dir}
          loop
          grabCursor
          speed={550}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: !isEn,
          }}
          spaceBetween={16}
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 2.15, spaceBetween: 16 },
            992: { slidesPerView: 3.15, spaceBetween: 18 },
            1280: { slidesPerView: 3.45, spaceBetween: 20 },
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="testimonial-swiper !overflow-visible pb-1"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.key} className="!h-auto">
              <article className="flex h-full min-h-[210px] flex-col rounded-2xl border border-[#e8ebe8] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] md:min-h-[220px] md:px-6 md:py-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4f6f5] p-1.5">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={72}
                      height={32}
                      className="h-7 w-auto max-w-[46px] object-contain"
                    />
                  </div>

                  <h3 className="font-madani-medium text-[1.05rem] text-[#2f2f2f] md:text-[1.12rem]">
                    {item.name}
                  </h3>
                </div>
                <p
                  className={`pt-5 font-madani-regular text-[0.88rem] leading-8 text-[#5a5a5a] md:text-[0.92rem] ${
                    isEn ? "text-left" : "text-center"
                  }`}
                  dir={dir}
                >
                  {item.quote}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-7 flex items-center justify-center gap-2.5">
          <button
            ref={nextRef}
            type="button"
            className="testimonial-nav-next flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#1d8a4a] disabled:pointer-events-none disabled:opacity-40"
            aria-label={t.testimonials.next}
          >
            <ArrowRight />
          </button>

          <button
            ref={prevRef}
            type="button"
            className="testimonial-nav-prev flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-primary bg-white text-primary transition hover:bg-[#f0faf4] disabled:pointer-events-none disabled:opacity-40"
            aria-label={t.testimonials.prev}
          >
            <ArrowLeft />
          </button>
        </div>
      </div>
    </section>
  );
}
