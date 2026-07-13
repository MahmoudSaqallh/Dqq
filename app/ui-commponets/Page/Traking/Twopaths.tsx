"use client";

import {
  Monitor,
  Package,
  PackageCheck,
  ScanLine,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

const START_DELAY = 200;
const STEP_GAP = 540;
const ARROW_GAP = 660;
const FINAL_HOLD = 750;
const HIDE_ANIM = 440;
const LOOP_GAP = 420;

const PATH_ONE_PHASE_COUNT = 5;
const PATH_TWO_PHASE_COUNT = 7;
const PATH_TWO_PHASE_START = PATH_ONE_PHASE_COUNT;
const LAST_PHASE = PATH_ONE_PHASE_COUNT + PATH_TWO_PHASE_COUNT - 1;

const CONNECTOR_ARROW_PATH =
  "M0 48.2545L11.2368 45.5961L3.31621 37.1939L0 48.2545ZM121.974 54.6691L121.469 55.5322L121.974 54.6691ZM244.667 41.6698C244.667 44.6154 247.054 47.0032 250 47.0032C252.946 47.0032 255.333 44.6154 255.333 41.6698C255.333 38.7243 252.946 36.3365 250 36.3365C247.054 36.3365 244.667 38.7243 244.667 41.6698ZM9.66766 40.8988L10.1573 41.7707C12.3287 40.5512 14.7437 39.4009 17.3916 38.3595L17.0256 37.4289L16.6596 36.4983C13.9307 37.5715 11.4328 38.7605 9.17797 40.0269L9.66766 40.8988ZM24.7648 34.8956L25.0227 35.8618C27.4965 35.2014 30.116 34.6359 32.8752 34.1862L32.7143 33.1993L32.5535 32.2123C29.7299 32.6724 27.0456 33.2517 24.5068 33.9295L24.7648 34.8956ZM40.7928 32.2565L40.865 33.2538C43.4511 33.0666 46.1361 32.979 48.9162 33.0043L48.9253 32.0043L48.9344 31.0044C46.1006 30.9786 43.3613 31.0679 40.7206 31.2591L40.7928 32.2565ZM57.0537 32.3864L56.97 33.3829C59.5723 33.6014 62.2456 33.9172 64.9875 34.3391L65.1396 33.3508L65.2917 32.3624C62.5049 31.9335 59.7859 31.6123 57.1374 31.3899L57.0537 32.3864ZM73.1433 34.848L72.9287 35.8247C75.4845 36.3863 78.0927 37.039 80.7515 37.7893L81.0231 36.8268L81.2946 35.8644C78.5986 35.1037 75.9524 34.4414 73.358 33.8713L73.1433 34.848ZM88.8121 39.2589L88.4885 40.205C90.9698 41.0538 93.4908 41.9866 96.0501 43.0083L96.4209 42.0795L96.7916 41.1508C94.2016 40.1169 91.6492 39.1724 89.1357 38.3127L88.8121 39.2589ZM103.915 45.2787L103.501 46.1891C105.903 47.2806 108.335 48.4499 110.798 49.7005L111.25 48.8088L111.703 47.9172C109.215 46.6538 106.757 45.472 104.328 44.3683L103.915 45.2787ZM118.418 52.6342L117.93 53.5069C119.103 54.1635 120.283 54.8385 121.469 55.5322L121.974 54.6691L122.479 53.8059C121.282 53.1057 120.091 52.4244 118.906 51.7615L118.418 52.6342ZM121.974 54.6691L121.469 55.5322C122.582 56.1834 123.701 56.8076 124.823 57.4054L125.293 56.5228L125.763 55.6401C124.664 55.0547 123.569 54.4436 122.479 53.8059L121.974 54.6691ZM132.11 59.8096L131.712 60.727C134.082 61.7553 136.466 62.6757 138.859 63.4947L139.183 62.5486L139.507 61.6025C137.163 60.8003 134.829 59.899 132.508 58.8922L132.11 59.8096ZM146.437 64.7192L146.188 65.6876C148.68 66.3295 151.176 66.8696 153.669 67.3151L153.845 66.3307L154.021 65.3463C151.576 64.9094 149.129 64.3799 146.687 63.7508L146.437 64.7192ZM161.345 67.3921L161.241 68.3866C163.796 68.6554 166.341 68.8318 168.87 68.9237L168.907 67.9244L168.943 66.9251C166.458 66.8348 163.958 66.6615 161.45 66.3975L161.345 67.3921ZM176.482 67.9513L176.511 68.9509C179.081 68.8773 181.626 68.7224 184.141 68.4948L184.051 67.4989L183.961 66.5029C181.486 66.727 178.981 66.8794 176.454 66.9517L176.482 67.9513ZM191.568 66.5942L191.717 67.5832C194.269 67.2006 196.779 66.7484 199.241 66.2366L199.037 65.2575L198.834 64.2785C196.408 64.7829 193.934 65.2284 191.42 65.6053L191.568 66.5942ZM206.412 63.5124L206.668 64.4789C209.174 63.8137 211.615 63.092 213.981 62.3259L213.673 61.3745L213.365 60.4232C211.032 61.1785 208.626 61.89 206.155 62.5459L206.412 63.5124ZM220.826 58.8419L221.185 59.775C223.645 58.8273 225.999 57.8393 228.234 56.8274L227.822 55.9164L227.409 55.0055C225.21 56.0015 222.891 56.9747 220.466 57.9087L220.826 58.8419ZM234.621 52.5761L235.091 53.4584C237.508 52.1694 239.723 50.8702 241.709 49.5918L241.168 48.7509L240.627 47.9101C238.69 49.1565 236.523 50.4281 234.15 51.6937L234.621 52.5761ZM247.279 44.2845L247.927 45.0457C249.027 44.109 249.972 43.201 250.745 42.3365L250 41.6698L249.255 41.0032C248.555 41.7858 247.678 42.631 246.63 43.5232L247.279 44.2845Z";

const PATH_ONE_ICONS: LucideIcon[] = [Monitor, ScanLine, PackageCheck];
const PATH_TWO_ICONS: LucideIcon[] = [Monitor, ShoppingCart, Package, PackageCheck];

type ItemPhase = "idle" | "visible" | "shown" | "exiting";

type PathContent = {
  badge: string;
  title: string;
  description: string;
  steps: { title: string; subtitle: string }[];
};

function getPathPhaseOffset(pathIndex: 0 | 1) {
  return pathIndex === 0 ? 0 : PATH_TWO_PHASE_START;
}

function getPathPhaseCount(pathIndex: 0 | 1) {
  return pathIndex === 0 ? PATH_ONE_PHASE_COUNT : PATH_TWO_PHASE_COUNT;
}

function getStepPhase(globalPhase: number, isExiting: boolean, pathIndex: 0 | 1, stepIndex: number): ItemPhase {
  if (isExiting) return "exiting";

  const offset = getPathPhaseOffset(pathIndex);
  const end = offset + getPathPhaseCount(pathIndex) - 1;

  if (globalPhase < offset) return "idle";
  if (globalPhase > end) return "shown";

  const localPhase = globalPhase - offset;
  const revealPhase = stepIndex * 2;

  if (localPhase === revealPhase) return "visible";
  if (localPhase > revealPhase) return "shown";
  return "idle";
}

function getArrowPhase(globalPhase: number, isExiting: boolean, pathIndex: 0 | 1, arrowIndex: number): ItemPhase {
  if (isExiting) return "exiting";
  if (globalPhase < 0) return "idle";

  const offset = getPathPhaseOffset(pathIndex);
  const end = offset + getPathPhaseCount(pathIndex) - 1;
  const revealPhase = arrowIndex * 2 + 1;

  if (globalPhase < offset) return "idle";
  if (globalPhase > end) return "shown";

  const localPhase = globalPhase - offset;
  if (localPhase < revealPhase) return "idle";
  if (localPhase === revealPhase) return "visible";
  return "shown";
}

function resolvePhaseMeta(globalPhase: number) {
  if (globalPhase < PATH_ONE_PHASE_COUNT) {
    return { pathIndex: 0 as const, localPhase: globalPhase };
  }
  return { pathIndex: 1 as const, localPhase: globalPhase - PATH_TWO_PHASE_START };
}

function useTwoPathsOrchestrator(flowRef: RefObject<HTMLDivElement | null>, enabled: boolean) {
  const [globalPhase, setGlobalPhase] = useState(-1);
  const [isExiting, setIsExiting] = useState(false);
  const [cycleTick, setCycleTick] = useState(0);
  const [pathOneArrowKeys, setPathOneArrowKeys] = useState<number[]>(() => Array(2).fill(0));
  const [pathTwoArrowKeys, setPathTwoArrowKeys] = useState<number[]>(() => Array(3).fill(0));

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow || !enabled) {
      setGlobalPhase(-1);
      setIsExiting(false);
      return;
    }

    let running = false;
    let phase = -1;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timers.push(id);
    };

    const bumpArrowKey = (pathIndex: 0 | 1, arrowIndex: number) => {
      if (pathIndex === 0) {
        setPathOneArrowKeys((keys) => {
          const next = [...keys];
          next[arrowIndex] = (next[arrowIndex] ?? 0) + 1;
          return next;
        });
      } else {
        setPathTwoArrowKeys((keys) => {
          const next = [...keys];
          next[arrowIndex] = (next[arrowIndex] ?? 0) + 1;
          return next;
        });
      }
    };

    const setPhase = (next: number) => {
      phase = next;
      setGlobalPhase(next);

      if (next < 0 || next > LAST_PHASE) return;

      const { pathIndex, localPhase } = resolvePhaseMeta(next);
      if (localPhase % 2 === 1) {
        bumpArrowKey(pathIndex, (localPhase - 1) / 2);
      }
    };

    const phaseDelay = (current: number) => {
      const { localPhase } = resolvePhaseMeta(current);
      return localPhase % 2 === 1 ? ARROW_GAP : STEP_GAP;
    };

    const advance = () => {
      if (!running) return;

      if (phase >= LAST_PHASE) {
        schedule(() => {
          if (!running) return;
          setIsExiting(true);

          schedule(() => {
            if (!running) return;
            setIsExiting(false);
            setPhase(-1);
            schedule(runCycle, LOOP_GAP);
          }, HIDE_ANIM);
        }, FINAL_HOLD);
        return;
      }

      schedule(() => {
        if (!running) return;
        setPhase(phase + 1);
        advance();
      }, phaseDelay(phase));
    };

    const runCycle = () => {
      if (!running) return;

      setCycleTick((t) => t + 1);
      setIsExiting(false);
      setPathOneArrowKeys(Array(2).fill(0));
      setPathTwoArrowKeys(Array(3).fill(0));
      setPhase(-1);

      schedule(() => {
        if (!running) return;
        setPhase(0);
        advance();
      }, START_DELAY);
    };

    const startLoop = () => {
      if (running) return;
      running = true;
      runCycle();
    };

    const stopLoop = () => {
      running = false;
      timers.splice(0).forEach(clearTimeout);
      phase = -1;
      setIsExiting(false);
      setGlobalPhase(-1);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(flow);

    const rect = flow.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      startLoop();
    }

    return () => {
      observer.disconnect();
      stopLoop();
    };
  }, [flowRef, enabled]);

  return { globalPhase, isExiting, cycleTick, pathOneArrowKeys, pathTwoArrowKeys };
}

function PathConnector({
  flip,
  phase,
  drawKey,
  pathId,
  compact,
}: {
  flip?: boolean;
  phase: ItemPhase;
  drawKey: number;
  pathId: string;
  index: number;
  compact?: boolean;
}) {
  const isPathOne = pathId === "path-one";
  const connectorWidth = isPathOne
    ? "w-[clamp(7.5rem,14vw,11rem)]"
    : compact
      ? "w-[clamp(5rem,9.5vw,7.5rem)]"
      : "w-[clamp(6rem,11vw,9rem)]";
  const connectorState =
    phase === "visible" ? "is-active" : phase === "shown" ? "is-shown" : phase === "exiting" ? "is-exiting" : "";
  const flipClass = flip ? "is-flipped" : "";

  const arrowSvg = (vertical: boolean) => (
    <svg
      key={vertical ? `m-${drawKey}` : drawKey}
      width="256"
      height="100"
      viewBox="0 0 256 100"
      preserveAspectRatio="xMidYMid meet"
      className={`overflow-visible ${
        vertical
          ? "h-[5.75rem] w-[5.75rem] -rotate-90"
          : `h-14 w-full max-h-[3.75rem] ${flip ? "-scale-x-100" : ""}`
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
        className={`tracking-path-connector two-paths-arrow-connector hidden h-[5.5rem] shrink-0 items-center justify-center md:flex ${connectorWidth} ${connectorState} ${flipClass}`}
        aria-hidden
      >
        {arrowSvg(false)}
      </div>

      <div
        className={`tracking-path-connector two-paths-arrow-connector two-paths-arrow-connector--vertical flex h-[6rem] shrink-0 items-center justify-center py-2 md:hidden ${connectorState}`}
        aria-hidden
      >
        {arrowSvg(true)}
      </div>
    </>
  );
}

function PathStep({
  icon: Icon,
  title,
  subtitle,
  phase,
  compact,
  part = "full",
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  phase: ItemPhase;
  compact?: boolean;
  part?: "full" | "icon" | "text";
}) {
  const stepWidth = compact ? "w-[10.5rem]" : "w-[14.5rem]";
  const iconWidth = "w-[5.25rem]";
  const stepState = phase === "visible" ? "is-active" : phase === "exiting" ? "is-exiting" : phase === "shown" ? "is-shown" : "";

  const iconNode = (
    <div className="two-paths-step-icon relative flex h-[4.5rem] w-[5.25rem] shrink-0 items-center justify-center rounded-2xl border border-[#24a259]/15 bg-[#eef9f3] text-[#24a259]">
      <Icon size={28} strokeWidth={1.75} aria-hidden />
    </div>
  );

  const textNode = (
    <div className={`two-paths-step-text mx-auto ${compact ? "w-[60%] min-w-[7.5rem]" : "w-full px-1"}`}>
      <h4
        className={`whitespace-nowrap font-madani-semibold text-[#22303e] ${
          compact ? "text-[0.92rem] md:text-[0.98rem]" : "text-[0.94rem] md:text-[1rem]"
        }`}
      >
        {title}
      </h4>
      <p
        className={`mt-1 text-[#7a8b83] ${
          compact ? "text-[0.78rem] leading-5 md:text-[0.84rem] md:leading-[1.55]" : "text-[0.8rem] leading-5 md:text-[0.86rem] md:leading-[1.55]"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );

  if (part === "icon") {
    return (
      <div
        className={`two-paths-step flex h-[4.5rem] shrink-0 items-center justify-center ${iconWidth} ${stepState}`}
        style={{ "--step-delay": "0ms" } as CSSProperties}
      >
        {iconNode}
      </div>
    );
  }

  if (part === "text") {
    return (
      <div
        className={`two-paths-step flex w-full shrink-0 flex-col items-center justify-center text-center ${stepWidth} ${stepState}`}
        style={{ "--step-delay": "0ms" } as CSSProperties}
      >
        {textNode}
      </div>
    );
  }

  return (
    <div
      className={`two-paths-step flex w-full flex-col items-center text-center ${stepWidth} ${stepState}`}
      style={{ "--step-delay": "0ms" } as CSSProperties}
    >
      <div className="flex h-[4.5rem] w-full items-center justify-center">{iconNode}</div>
      <div className="mt-3 flex w-full items-center justify-center px-1 md:mt-3.5">{textNode}</div>
    </div>
  );
}

function PathFlowSection({
  pathId,
  path,
  icons,
  isEn,
  compact,
  pathIndex,
  globalPhase,
  isExiting,
  cycleTick,
  arrowDrawKeys,
  className = "",
}: {
  pathId: string;
  path: PathContent;
  icons: LucideIcon[];
  isEn: boolean;
  compact?: boolean;
  pathIndex: 0 | 1;
  globalPhase: number;
  isExiting: boolean;
  cycleTick: number;
  arrowDrawKeys: number[];
  className?: string;
}) {
  const isPathOne = pathId === "path-one";
  const stepCol = compact ? "w-[10.5rem]" : "w-[14.5rem]";
  const connectorCol = isPathOne
    ? "w-[clamp(8.5rem,14vw,11rem)]"
    : compact
      ? "w-[clamp(5rem,9.5vw,7.5rem)]"
      : "w-[clamp(6rem,11vw,9rem)]";
  const flowContainerClass = isPathOne
    ? "two-paths-flow-container mx-auto mt-10 w-full px-2 sm:px-4 md:mt-12"
    : "two-paths-flow-container mx-auto mt-10 w-full px-2 sm:px-3 md:mt-12";

  const stepsDesktop = (
    <div className="hidden w-full md:flex md:justify-center">
      <div dir={isEn ? "ltr" : "rtl"} className="inline-flex flex-col items-center">
        <div className="flex items-center justify-center">
          {path.steps.map((step, index) => {
            const Icon = icons[index] ?? Monitor;
            const stepPhase = getStepPhase(globalPhase, isExiting, pathIndex, index);
            const arrowPhase = getArrowPhase(globalPhase, isExiting, pathIndex, index);

            return (
              <div key={`${step.title}-icons`} className="contents">
                <div className={`flex shrink-0 items-center justify-center ${stepCol}`}>
                  <PathStep
                    key={`${pathId}-icon-${step.title}-${cycleTick}`}
                    icon={Icon}
                    title={step.title}
                    subtitle={step.subtitle}
                    phase={stepPhase}
                    compact={compact}
                    part="icon"
                  />
                </div>
                {index < path.steps.length - 1 && (
                  <PathConnector
                    pathId={pathId}
                    index={index}
                    flip={isEn}
                    phase={arrowPhase}
                    drawKey={arrowDrawKeys[index] ?? 0}
                    compact={compact}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-start justify-center md:mt-6">
          {path.steps.map((step, index) => {
            const Icon = icons[index] ?? Monitor;
            const stepPhase = getStepPhase(globalPhase, isExiting, pathIndex, index);

            return (
              <div key={`${step.title}-text`} className="contents">
                <div className={`flex shrink-0 justify-center ${stepCol}`}>
                  <PathStep
                    key={`${pathId}-text-${step.title}-${cycleTick}`}
                    icon={Icon}
                    title={step.title}
                    subtitle={step.subtitle}
                    phase={stepPhase}
                    compact={compact}
                    part="text"
                  />
                </div>
                {index < path.steps.length - 1 && <div className={`shrink-0 ${connectorCol}`} aria-hidden />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className={className}>
      <div className={`mx-auto text-center ${isPathOne ? "max-w-[680px]" : "max-w-[760px]"}`}>
        <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#5f7167] shadow-[0_4px_14px_rgba(25,52,38,0.06)]">
          {path.badge}
        </span>
        <h3 className="mt-4 font-madani-semibold text-[clamp(1.45rem,2.8vw,1.85rem)] leading-[1.4] text-[#24a259]">{path.title}</h3>
        <p className="mx-auto mt-3 max-w-[680px] font-madani-regular text-[clamp(0.85rem,1.4vw,0.95rem)] leading-6 text-[#5f7167] md:leading-7">
          {path.description}
        </p>
      </div>

      <div className={flowContainerClass}>
        {stepsDesktop}

        <div className="flex flex-col items-center gap-5 md:hidden">
          {path.steps.map((step, index) => {
            const Icon = icons[index] ?? Monitor;
            const stepPhase = getStepPhase(globalPhase, isExiting, pathIndex, index);
            const arrowPhase = getArrowPhase(globalPhase, isExiting, pathIndex, index);

            return (
              <div key={step.title} className="contents">
                <PathStep
                  key={`${pathId}-${step.title}-${cycleTick}`}
                  icon={Icon}
                  title={step.title}
                  subtitle={step.subtitle}
                  phase={stepPhase}
                  compact={compact}
                />
                {index < path.steps.length - 1 && (
                  <PathConnector
                    pathId={pathId}
                    index={index}
                    flip={isEn}
                    phase={arrowPhase}
                    drawKey={arrowDrawKeys[index] ?? 0}
                    compact={compact}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Twopaths() {
  const { t, isEn } = useLanguage();
  const content = t.tracking.twoPaths;
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const [headerActive, setHeaderActive] = useState(false);
  const [flowReady, setFlowReady] = useState(false);
  const { globalPhase, isExiting, cycleTick, pathOneArrowKeys, pathTwoArrowKeys } = useTwoPathsOrchestrator(flowRef, flowReady);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const activateHeader = () => setHeaderActive(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activateHeader();
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      activateHeader();
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!headerActive) {
      setFlowReady(false);
      return;
    }

    const timer = setTimeout(() => setFlowReady(true), 820);
    return () => clearTimeout(timer);
  }, [headerActive]);

  return (
    <section
      ref={sectionRef}
      id="tracking-two-paths"
      className="relative scroll-mt-24 overflow-hidden bg-white py-14 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/section-2-bg.webp')] bg-contain bg-center bg-no-repeat opacity-35"
      />

      <div className="site-container relative">
        <div
          className={`two-paths-reveal mx-auto max-w-[720px] text-center ${headerActive ? "is-active" : ""}`}
          style={{ "--reveal-delay": "0ms" } as CSSProperties}
        >
          <h2 className="font-madani-semibold text-[clamp(1.65rem,3.4vw,2.35rem)] leading-[1.45] text-[#22303e]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] font-madani-regular text-[clamp(0.85rem,1.45vw,0.95rem)] leading-7 text-[#7a8b83] md:leading-8">
            {content.subtitle}
          </p>
        </div>

        <div ref={flowRef} className="mx-auto mt-10 flex max-w-full flex-col gap-8 md:mt-12 md:gap-10">
          <div
            className={`two-paths-reveal two-paths-flow-border order-processing-active-border rounded-[2rem] md:rounded-[2.25rem] ${headerActive ? "is-active" : ""}`}
            style={{ "--reveal-delay": "0ms" } as CSSProperties}
          >
            <div className="order-processing-active-border-inner flex flex-col items-center justify-center overflow-hidden rounded-[calc(2rem-3px)] bg-[radial-gradient(ellipse_at_center,#eef9f3_0%,#f8fcfa_52%,#ffffff_100%)] px-4 py-10 sm:px-6 md:min-h-[480px] md:rounded-[calc(2.25rem-3px)] md:px-8 md:py-14 lg:px-12">
              <div className="two-paths-inner-content mx-auto w-[60%]">
                <PathFlowSection
                  pathId="path-one"
                  path={content.pathOne}
                  icons={PATH_ONE_ICONS}
                  isEn={isEn}
                  pathIndex={0}
                  globalPhase={globalPhase}
                  isExiting={isExiting}
                  cycleTick={cycleTick}
                  arrowDrawKeys={pathOneArrowKeys}
                />
              </div>
            </div>
          </div>

          <div
            className={`two-paths-reveal two-paths-flow-border order-processing-active-border rounded-[2rem] md:rounded-[2.25rem] ${headerActive ? "is-active" : ""}`}
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            <div className="order-processing-active-border-inner flex flex-col items-center justify-center overflow-hidden rounded-[calc(2rem-3px)] bg-[radial-gradient(ellipse_at_center,#eef9f3_0%,#f8fcfa_52%,#ffffff_100%)] px-3 py-8 sm:px-5 md:rounded-[calc(2.25rem-3px)] md:px-8 md:py-12 lg:px-10">
              <div className="two-paths-inner-content mx-auto w-[60%] min-w-0">
                <PathFlowSection
                  pathId="path-two"
                  path={content.pathTwo}
                  icons={PATH_TWO_ICONS}
                  isEn={isEn}
                  compact
                  pathIndex={1}
                  globalPhase={globalPhase}
                  isExiting={isExiting}
                  cycleTick={cycleTick}
                  arrowDrawKeys={pathTwoArrowKeys}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
