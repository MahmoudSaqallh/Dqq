"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AnmtionTow from "../Hero/AnmtionTow";
import { useLanguage } from "../../../../i18n/LanguageContext";

type EquationVisibility = {
  step1: boolean;
  arrow1: boolean;
  step2: boolean;
  arrow2: boolean;
  step3: boolean;
};

const EQUATION_HIDDEN: EquationVisibility = {
  step1: false,
  arrow1: false,
  step2: false,
  arrow2: false,
  step3: false,
};

const EQUATION_PHASES: EquationVisibility[] = [
  { step1: true, arrow1: false, step2: false, arrow2: false, step3: false },
  { step1: true, arrow1: true, step2: false, arrow2: false, step3: false },
  { step1: true, arrow1: true, step2: true, arrow2: false, step3: false },
  { step1: true, arrow1: true, step2: true, arrow2: true, step3: false },
  { step1: true, arrow1: true, step2: true, arrow2: true, step3: true },
  { step1: true, arrow1: true, step2: true, arrow2: true, step3: true },
  EQUATION_HIDDEN,
  EQUATION_HIDDEN,
];

const EQUATION_PHASE_MS = [780, 720, 720, 720, 720, 1400, 700, 550] as const;

export default function Why() {
  const { t, isEn, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [equation, setEquation] = useState<EquationVisibility>(EQUATION_HIDDEN);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const activate = () => setIsAnimated(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activate();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      activate();
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAnimated) return;

    let phaseIndex = 0;
    let timeoutId = 0;

    const runPhase = () => {
      setEquation(EQUATION_PHASES[phaseIndex]);
      const delay = EQUATION_PHASE_MS[phaseIndex];
      phaseIndex = (phaseIndex + 1) % EQUATION_PHASES.length;
      timeoutId = window.setTimeout(runPhase, delay);
    };

    setEquation(EQUATION_HIDDEN);
    timeoutId = window.setTimeout(runPhase, 280);

    return () => window.clearTimeout(timeoutId);
  }, [isAnimated]);

  return (
    <section
      ref={sectionRef}
      id="why-dqq"
      className={`section-profits${isAnimated ? " animated" : ""}`}
    >
      <div className="site-container">
        <h2 className="section-profits-title">
          {t.why.titleBefore} <AnmtionTow inline withBang={false} />
          {isEn ? "?" : "؟"}
        </h2>

        <div className={`section-profits-row ${isEn ? "section-profits-row--en" : ""}`}>
          <div className="section-profits-content" dir={dir}>
            <p className="section-profits-line">{t.why.errorsHappen}</p>
            <p className="section-profits-line section-profits-line-brand">
              {t.why.butWith} <AnmtionTow inline withBang={false} />
            </p>
            <p className="section-profits-line section-profits-line-highlight">
              {t.why.ordersAccurate} {isEn ? "100%" : "100٪"}
            </p>
            <p className="section-profits-formula">{t.why.formula}</p>

            <div className="section-profits-flow">
              <span className={`why-flow-item why-flow-step-1${equation.step1 ? " is-visible" : ""}`}>
                {t.why.fewerErrors}
              </span>
              <span
                className={`section-profits-arrow why-flow-arrow-step-1${equation.arrow1 ? " is-visible" : ""}`}
                aria-hidden
              >
                <Image
                  src="https://dqq.ai/images/Arrow-green.webp"
                  alt=""
                  width={48}
                  height={24}
                  className="h-auto w-10 max-md:w-8"
                />
              </span>
              <span className={`why-flow-item why-flow-step-2${equation.step2 ? " is-visible" : ""}`}>
                {t.why.lowerCosts}
              </span>
              <span
                className={`section-profits-arrow why-flow-arrow-step-2${equation.arrow2 ? " is-visible" : ""}`}
                aria-hidden
              >
                <Image
                  src="https://dqq.ai/images/Arrow-green.webp"
                  alt=""
                  width={48}
                  height={24}
                  className="h-auto w-10 max-md:w-8"
                />
              </span>
              <span
                className={`why-flow-item why-flow-item-profit why-flow-step-3${equation.step3 ? " is-visible is-profit-active" : ""}`}
              >
                {t.why.moreProfit}
              </span>
            </div>
          </div>

          <div className="section-profits-visual">
            <Image
              src="https://dqq.ai/images/section-2-chart.webp"
              alt={t.why.chartAlt}
              width={720}
              height={520}
              className="profits-chart-float h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
