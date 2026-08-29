"use client";

import { BoxSelect, FileText, Printer, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

const CONNECTOR_ARROW_PATH =
  "M0 48.2545L11.2368 45.5961L3.31621 37.1939L0 48.2545ZM121.974 54.6691L121.469 55.5322L121.974 54.6691ZM244.667 41.6698C244.667 44.6154 247.054 47.0032 250 47.0032C252.946 47.0032 255.333 44.6154 255.333 41.6698C255.333 38.7243 252.946 36.3365 250 36.3365C247.054 36.3365 244.667 38.7243 244.667 41.6698ZM9.66766 40.8988L10.1573 41.7707C12.3287 40.5512 14.7437 39.4009 17.3916 38.3595L17.0256 37.4289L16.6596 36.4983C13.9307 37.5715 11.4328 38.7605 9.17797 40.0269L9.66766 40.8988ZM24.7648 34.8956L25.0227 35.8618C27.4965 35.2014 30.116 34.6359 32.8752 34.1862L32.7143 33.1993L32.5535 32.2123C29.7299 32.6724 27.0456 33.2517 24.5068 33.9295L24.7648 34.8956ZM40.7928 32.2565L40.865 33.2538C43.4511 33.0666 46.1361 32.979 48.9162 33.0043L48.9253 32.0043L48.9344 31.0044C46.1006 30.9786 43.3613 31.0679 40.7206 31.2591L40.7928 32.2565ZM57.0537 32.3864L56.97 33.3829C59.5723 33.6014 62.2456 33.9172 64.9875 34.3391L65.1396 33.3508L65.2917 32.3624C62.5049 31.9335 59.7859 31.6123 57.1374 31.3899L57.0537 32.3864ZM73.1433 34.848L72.9287 35.8247C75.4845 36.3863 78.0927 37.039 80.7515 37.7893L81.0231 36.8268L81.2946 35.8644C78.5986 35.1037 75.9524 34.4414 73.358 33.8713L73.1433 34.848ZM88.8121 39.2589L88.4885 40.205C90.9698 41.0538 93.4908 41.9866 96.0501 43.0083L96.4209 42.0795L96.7916 41.1508C94.2016 40.1169 91.6492 39.1724 89.1357 38.3127L88.8121 39.2589ZM103.915 45.2787L103.501 46.1891C105.903 47.2806 108.335 48.4499 110.798 49.7005L111.25 48.8088L111.703 47.9172C109.215 46.6538 106.757 45.472 104.328 44.3683L103.915 45.2787ZM118.418 52.6342L117.93 53.5069C119.103 54.1635 120.283 54.8385 121.469 55.5322L121.974 54.6691L122.479 53.8059C121.282 53.1057 120.091 52.4244 118.906 51.7615L118.418 52.6342ZM121.974 54.6691L121.469 55.5322C122.582 56.1834 123.701 56.8076 124.823 57.4054L125.293 56.5228L125.763 55.6401C124.664 55.0547 123.569 54.4436 122.479 53.8059L121.974 54.6691ZM132.11 59.8096L131.712 60.727C134.082 61.7553 136.466 62.6757 138.859 63.4947L139.183 62.5486L139.507 61.6025C137.163 60.8003 134.829 59.899 132.508 58.8922L132.11 59.8096ZM146.437 64.7192L146.188 65.6876C148.68 66.3295 151.176 66.8696 153.669 67.3151L153.845 66.3307L154.021 65.3463C151.576 64.9094 149.129 64.3799 146.687 63.7508L146.437 64.7192ZM161.345 67.3921L161.241 68.3866C163.796 68.6554 166.341 68.8318 168.87 68.9237L168.907 67.9244L168.943 66.9251C166.458 66.8348 163.958 66.6615 161.45 66.3975L161.345 67.3921ZM176.482 67.9513L176.511 68.9509C179.081 68.8773 181.626 68.7224 184.141 68.4948L184.051 67.4989L183.961 66.5029C181.486 66.727 178.981 66.8794 176.454 66.9517L176.482 67.9513ZM191.568 66.5942L191.717 67.5832C194.269 67.2006 196.779 66.7484 199.241 66.2366L199.037 65.2575L198.834 64.2785C196.408 64.7829 193.934 65.2284 191.42 65.6053L191.568 66.5942ZM206.412 63.5124L206.668 64.4789C209.174 63.8137 211.615 63.092 213.981 62.3259L213.673 61.3745L213.365 60.4232C211.032 61.1785 208.626 61.89 206.155 62.5459L206.412 63.5124ZM220.826 58.8419L221.185 59.775C223.645 58.8273 225.999 57.8393 228.234 56.8274L227.822 55.9164L227.409 55.0055C225.21 56.0015 222.891 56.9747 220.466 57.9087L220.826 58.8419ZM234.621 52.5761L235.091 53.4584C237.508 52.1694 239.723 50.8702 241.709 49.5918L241.168 48.7509L240.627 47.9101C238.69 49.1565 236.523 50.4281 234.15 51.6937L234.621 52.5761ZM247.279 44.2845L247.927 45.0457C249.027 44.109 249.972 43.201 250.745 42.3365L250 41.6698L249.255 41.0032C248.555 41.7858 247.678 42.631 246.63 43.5232L247.279 44.2845Z";

const START_DELAY = 220;
const STEP_GAP = 540;
const ARROW_GAP = 660;
const FINAL_HOLD = 900;
const HIDE_ANIM = 440;
const LOOP_GAP = 420;

type ItemPhase = "idle" | "visible" | "shown" | "exiting";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

function getStepPhase(globalPhase: number, isExiting: boolean, stepIndex: number): ItemPhase {
  if (isExiting) return "exiting";
  const revealPhase = stepIndex * 2;
  if (globalPhase < 0) return "idle";
  if (globalPhase === revealPhase) return "visible";
  if (globalPhase > revealPhase) return "shown";
  return "idle";
}

function getArrowPhase(globalPhase: number, isExiting: boolean, arrowIndex: number): ItemPhase {
  if (isExiting) return "exiting";
  if (globalPhase < 0) return "idle";
  const revealPhase = arrowIndex * 2 + 1;
  if (globalPhase < revealPhase) return "idle";
  if (globalPhase === revealPhase) return "visible";
  return "shown";
}

function ConnectorArrow({
  phase,
  drawKey,
}: {
  phase: ItemPhase;
  drawKey: number;
}) {
  const connectorState =
    phase === "visible" ? "is-active" : phase === "shown" ? "is-shown" : phase === "exiting" ? "is-exiting" : "";

  const arrowSvg = (vertical: boolean) => (
    <svg
      key={vertical ? `m-${drawKey}` : drawKey}
      width="256"
      height="100"
      viewBox="0 0 256 100"
      preserveAspectRatio="xMidYMid meet"
      className={`overflow-visible ${
        vertical ? "h-[5.75rem] w-[5.75rem] -rotate-90" : "h-14 w-full max-h-[3.75rem]"
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path className="two-paths-arrow-shape" d={CONNECTOR_ARROW_PATH} fill="#50B57A" />
    </svg>
  );

  return (
    <>
      <div
        className={`tracking-path-connector two-paths-arrow-connector hidden h-[5.5rem] w-[clamp(5.5rem,9vw,8rem)] shrink-0 items-center justify-center self-start pt-20 md:flex ${connectorState}`}
        aria-hidden
      >
        {arrowSvg(false)}
      </div>

      <div
        className={`tracking-path-connector two-paths-arrow-connector two-paths-arrow-connector--vertical flex h-[5.5rem] shrink-0 items-center justify-center py-3 md:hidden ${connectorState}`}
        aria-hidden
      >
        {arrowSvg(true)}
      </div>
    </>
  );
}

function PrintStep({
  step,
  phase,
}: {
  step: Step;
  phase: ItemPhase;
}) {
  const Icon = step.icon;
  const stepState =
    phase === "visible" ? "is-active" : phase === "exiting" ? "is-exiting" : phase === "shown" ? "is-shown" : "";

  return (
    <div
      className={`two-paths-step flex w-full max-w-[16.5rem] flex-col items-center px-3 py-5 text-center md:px-4 md:py-6 ${stepState}`}
      style={{ "--step-delay": "0ms" } as CSSProperties}
    >
      <div className="two-paths-step-icon mb-5 flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-[#e7f6ee] text-[#24a259]">
        <Icon size={28} strokeWidth={1.75} aria-hidden />
      </div>

      <div className="two-paths-step-text">
        <h3 className="font-madani-semibold text-xl text-[#22303e]">{step.title}</h3>
        <p className="mt-2 font-madani-regular text-sm leading-7 text-[#5f7167] md:text-[0.95rem]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const content = t.printing.howItWorks;
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [globalPhase, setGlobalPhase] = useState(-1);
  const [isExiting, setIsExiting] = useState(false);
  const [drawKey, setDrawKey] = useState(0);

  const icons: LucideIcon[] = [BoxSelect, Printer, FileText];
  const steps: Step[] = content.steps.map((step, index) => ({
    ...step,
    icon: icons[index] ?? BoxSelect,
  }));

  const lastPhase = steps.length * 2 - 2; // 3 steps => phases 0..4 (step,arrow,step,arrow,step)

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.28 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    const runCycle = () => {
      setIsExiting(false);
      setGlobalPhase(-1);
      setDrawKey((key) => key + 1);

      let phase = 0;

      const advance = () => {
        setGlobalPhase(phase);

        if (phase >= lastPhase) {
          schedule(() => {
            // Hide everything together at the same moment.
            setIsExiting(true);
            setGlobalPhase(lastPhase);

            schedule(() => {
              setIsExiting(false);
              setGlobalPhase(-1);
              schedule(runCycle, LOOP_GAP);
            }, HIDE_ANIM);
          }, FINAL_HOLD);
          return;
        }

        const delay = phase % 2 === 0 ? STEP_GAP : ARROW_GAP;
        phase += 1;
        schedule(advance, delay);
      };

      schedule(advance, START_DELAY);
    };

    runCycle();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [isInView, lastPhase]);

  return (
    <section
      ref={sectionRef}
      id="printing-features"
      className="scroll-mt-24 bg-white py-16 md:py-20"
    >
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-madani-semibold text-[clamp(1.75rem,3.5vw,2.35rem)] text-[#22303e]">
            {content.title}
          </h2>
          <p className="mt-3 font-madani-regular text-[clamp(1rem,2vw,1.15rem)] leading-8 text-[#5f7167]">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-[#dceee3] bg-[#f3faf6] p-4 md:mt-12 md:p-8">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
            {steps.map((step, index) => (
              <div key={step.number} className="contents">
                {index > 0 ? (
                  <ConnectorArrow
                    phase={getArrowPhase(globalPhase, isExiting, index - 1)}
                    drawKey={drawKey}
                  />
                ) : null}

                <PrintStep
                  step={step}
                  phase={getStepPhase(globalPhase, isExiting, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
