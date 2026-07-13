"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../../i18n/LanguageContext";
import AnmtionTow from "../Hero/AnmtionTow";

const SEGMENT_COUNT = 4;

function FeatureCheck() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle
        cx="14"
        cy="14"
        r="13"
        stroke="currentColor"
        strokeWidth="2"
        className="transition-[fill,stroke] duration-[400ms]"
      />
      <path
        d="M8 14.5L12 18.5L20 10.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-[stroke] duration-[400ms]"
      />
    </svg>
  );
}

export default function SolvProblem() {
  const { t } = useLanguage();
  const FEATURES = t.solve.features;
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const viewport = viewportRef.current;
    if (!section || !image || !viewport) return;

    let ticking = false;

    const isDesktop = () => window.innerWidth >= 992;

    const updateStickySection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      let progress = 0;

      if (!isDesktop()) {
        image.style.transform = "";
        const textCol = section.querySelector<HTMLElement>("[data-sticky-text]");
        const textColHeight = textCol?.clientHeight ?? 100;
        const scrollIntoSection = scrollY - sectionTop + viewportHeight;

        if (scrollIntoSection > textColHeight) {
          progress = Math.max(
            0,
            Math.min(
              1,
              (scrollIntoSection - textColHeight) /
                (sectionHeight - textColHeight)
            )
          );
        }
      } else {
        const scrollableDistance = sectionHeight - viewportHeight;
        if (scrollableDistance <= 0) return;

        const scrollIntoSection = scrollY - sectionTop;
        progress = Math.max(0, Math.min(1, scrollIntoSection / scrollableDistance));

        const imageHeight =
          image.naturalHeight * (image.offsetWidth / image.naturalWidth);
        const viewportContainerHeight = viewport.offsetHeight;
        const maxTranslate = imageHeight - viewportContainerHeight;

        if (maxTranslate > 0) {
          image.style.transform = `translateY(-${progress * maxTranslate}px)`;
        }
      }

      setActiveIndex(
        Math.min(SEGMENT_COUNT - 1, Math.floor(progress * SEGMENT_COUNT))
      );
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStickySection();
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      setIsAnimated(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const onImageLoad = () => updateStickySection();
    if (image.complete) {
      updateStickySection();
    } else {
      image.addEventListener("load", onImageLoad);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      image.removeEventListener("load", onImageLoad);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-auto bg-[#e9f6ee] py-12 lg:h-[400vh] lg:py-16"
    >
      <div className="lg:sticky lg:top-[74px] lg:flex lg:h-[calc(100vh-74px)] lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="site-container">
          <div className="flex min-h-0 items-center gap-8 max-lg:flex-col lg:min-h-[70vh]">
            <div
              data-sticky-text
              className="flex max-w-full flex-[0_0_100%] flex-col items-start justify-center p-0 min-[992px]:max-w-[48%] min-[992px]:flex-[0_0_48%] min-[992px]:p-8 min-[992px]:min-h-[calc(100vh-74px)]"
            >
              <h2
                className={`mb-1 font-madani-semibold text-[clamp(2rem,3.2vw,3rem)] leading-[1.5] tracking-[-0.7px] text-primary motion-safe:transition-all motion-safe:duration-[600ms] motion-safe:ease-out ${
                  isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <AnmtionTow inline />
              </h2>

              <p
                className={`mb-8 font-madani-semibold text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.4] text-[#414141] motion-safe:transition-all motion-safe:duration-[600ms] motion-safe:ease-out ${
                  isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                {t.solve.idealSolution}
              </p>

              <p className="mb-8 max-w-[88%] font-madani-regular text-[clamp(0.95rem,1.4vw,1.25rem)] leading-[1.8] text-[#676767]/85 max-lg:max-w-full">
                {t.solve.desc}
              </p>

              <ul className="m-0 flex list-none flex-col gap-[1.1rem] p-0">
                {FEATURES.map((feature, index) => {
                  const isActive = index <= activeIndex;

                  return (
                    <li
                      key={feature}
                      data-index={index}
                      className={`flex items-center gap-4 text-[#c0c0c0] transition-colors duration-[400ms] ${
                        isActive ? "text-primary [&_circle]:fill-primary [&_circle]:stroke-primary [&_path]:stroke-white" : ""
                      }`}
                    >
                      <span className="flex shrink-0 items-center justify-center">
                        <FeatureCheck />
                      </span>
                      <span
                        className={`font-madani-light text-[clamp(0.95rem,1.2vw,1.2rem)] leading-[1.5] transition-[color,font-weight] duration-[400ms] ${
                          isActive ? "font-semibold text-[#414141]" : "font-normal text-[#676767]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex max-w-full flex-[0_0_100%] items-center justify-center min-[992px]:max-w-[50%] min-[992px]:flex-[0_0_50%]">
              <div className="w-full overflow-hidden rounded-3xl bg-inherit">
                <div
                  ref={viewportRef}
                  className="relative h-auto w-full overflow-visible rounded-3xl min-[992px]:h-[calc(100vh-120px)] min-[992px]:max-h-[760px] min-[992px]:overflow-hidden"
                >
                  <img
                    ref={imageRef}
                    src="/images/long-image-landing.webp"
                    alt={t.solve.imageAlt}
                    className="block h-auto w-full transition-transform duration-150 ease-out will-change-transform max-lg:!translate-y-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
