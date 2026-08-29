"use client";

import {
  Box,
  CircleCheckBig,
  FileText,
  List,
  MonitorSmartphone,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type StepDef = {
  id: string;
  icon: LucideIcon;
};

const STEP_DEFS: StepDef[] = [
  { id: "request", icon: RotateCcw },
  { id: "reason", icon: List },
  { id: "label", icon: FileText },
  { id: "receive", icon: MonitorSmartphone },
  { id: "inspect", icon: CircleCheckBig },
  { id: "restock", icon: Box },
];

const CX = 350;
const CY = 275;
const NODE_RX = 275;
const NODE_RY = 168;
const LABEL_RX = 322;
const LABEL_RY = 228;
const VIEW_W = 700;
const VIEW_H = 550;
const BADGE_INSET = 55;
const DOT_R = 5;

function hexPoint(index: number, rx: number, ry: number) {
  const angle = ((index * 60 - 90) * Math.PI) / 180;
  return {
    x: CX + rx * Math.cos(angle),
    y: CY + ry * Math.sin(angle),
  };
}

function labelStyle(index: number): CSSProperties {
  switch (index) {
    case 0:
      return { transform: "translate(-50%, -110%)", textAlign: "center" };
    case 1:
      return { transform: "translate(8%, -50%)", textAlign: "start" };
    case 2:
      return { transform: "translate(8%, -40%)", textAlign: "start" };
    case 3:
      return { transform: "translate(-50%, 12%)", textAlign: "center" };
    case 4:
      return { transform: "translate(-108%, -40%)", textAlign: "end" };
    case 5:
      return { transform: "translate(-108%, -50%)", textAlign: "end" };
    default:
      return { transform: "translate(-50%, -50%)", textAlign: "center" };
  }
}

function StepIcon({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon;
  size?: "sm" | "md";
}) {
  const isSm = size === "sm";
  return (
    <div
      className={`relative z-[2] flex shrink-0 items-center justify-center rounded-2xl bg-[#dcefe3] text-[#24a259] ${
        isSm ? "h-12 w-12" : "h-16 w-16"
      }`}
    >
      <Icon size={isSm ? 22 : 29} strokeWidth={1.75} aria-hidden />
    </div>
  );
}

function MobileStack({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: { id: string; icon: LucideIcon; title: string }[];
}) {
  return (
    <div className="lg:hidden">
      <div className="mx-auto mb-8 max-w-[20rem] px-2 text-center sm:mb-9 sm:max-w-[24rem]">
        <h2 className="font-madani-semibold text-[clamp(1.25rem,5vw,1.55rem)] leading-[1.55] text-[#1f2d28]">
          {title}
        </h2>
        <p className="mt-2 font-madani-regular text-[clamp(0.84rem,3.4vw,0.95rem)] leading-[1.75] text-[#6a7d73]">
          {subtitle}
        </p>
      </div>

      <ol className="mx-auto flex w-full max-w-[15.5rem] flex-col items-center sm:max-w-[16.5rem]">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <li key={step.id} className="flex w-full flex-col items-center">
              <div className="relative z-[2] flex flex-col items-center bg-[#eef8f2] px-3 pb-1 pt-0.5 text-center">
                <StepIcon icon={Icon} size="sm" />
                <p className="mt-2 max-w-[11rem] font-madani-semibold text-[0.92rem] leading-[1.5] text-[#2a3b34] sm:text-[0.98rem]">
                  {step.title}
                </p>
              </div>

              {!isLast ? (
                <div className="relative z-0 my-1 h-10 w-8 sm:h-11" aria-hidden>
                  <svg className="h-full w-full" viewBox="0 0 32 44" fill="none">
                    <line
                      className="returns-dash-line"
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="42"
                      stroke="#7CC79B"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      strokeLinecap="round"
                    />
                    <polygon className="returns-connector-arrow" points="16,34 11,24 21,24" fill="#24a259" />
                  </svg>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const content = t.returns.howItWorks;
  const points = STEP_DEFS.map((_, i) => hexPoint(i, NODE_RX, NODE_RY));
  const hexPath = `${points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")} Z`;
  const edges = points.map((from, i) => {
    const to = points[(i + 1) % points.length];
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    return {
      start: { x: from.x + ux * BADGE_INSET, y: from.y + uy * BADGE_INSET },
      end: { x: to.x - ux * BADGE_INSET, y: to.y - uy * BADGE_INSET },
    };
  });
  const mobileSteps = STEP_DEFS.map((step, index) => ({
    ...step,
    title: content.steps[index]?.title ?? step.id,
  }));

  return (
    <section id="returns-how" className="py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#eef8f2] px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-12 md:px-8 md:py-14 lg:overflow-visible lg:rounded-[2.75rem] lg:bg-[linear-gradient(135deg,#f8fdfa_0%,#eef8f2_50%,#e2f1e8_100%)] lg:px-10 lg:py-16 xl:py-[4.25rem]">
          <MobileStack title={content.title} subtitle={content.subtitle} steps={mobileSteps} />

          <div className="relative mx-auto hidden w-full max-w-[760px] lg:block">
            <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-8 text-center">
              <div className="px-3 py-2">
                <h2 className="whitespace-nowrap font-madani-semibold text-[clamp(1.1rem,1.9vw,1.6rem)] leading-[1.4] text-[#1f2d28]">
                  {content.title}
                </h2>
                <p className="mt-3 whitespace-nowrap font-madani-regular text-[clamp(0.72rem,0.95vw,0.9rem)] leading-[1.75] text-[#6a7d73]">
                  {content.subtitle}
                </p>
              </div>
            </div>

            <div className="relative mx-auto aspect-[700/550] w-full max-w-[640px] xl:max-w-[700px]">
              <svg
                className="absolute inset-0 z-0 h-full w-full overflow-visible"
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path id="returns-hex-path" d={hexPath} fill="none" stroke="transparent" />

                {edges.map((edge, i) => (
                  <line
                    key={`edge-${i}`}
                    className="returns-dash-line"
                    x1={edge.start.x}
                    y1={edge.start.y}
                    x2={edge.end.x}
                    y2={edge.end.y}
                    stroke="#7CC79B"
                    strokeWidth="2"
                    strokeDasharray="10 7"
                    strokeLinecap="round"
                  />
                ))}

                {edges.map((edge, i) => (
                  <g key={`dots-${i}`}>
                    <circle cx={edge.start.x} cy={edge.start.y} r={DOT_R} fill="#7CC79B" />
                    <circle cx={edge.end.x} cy={edge.end.y} r={DOT_R} fill="#7CC79B" />
                  </g>
                ))}

                <g className="returns-flow-arrow">
                  <polygon points="9,0 -7,-5.5 -7,5.5" fill="#24a259">
                    <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#returns-hex-path" />
                    </animateMotion>
                  </polygon>
                </g>
              </svg>

              {STEP_DEFS.map((step, index) => {
                const node = points[index];
                const label = hexPoint(index, LABEL_RX, LABEL_RY);
                const Icon = step.icon;
                const title = content.steps[index]?.title ?? step.id;

                return (
                  <div key={step.id} className="pointer-events-none absolute inset-0 z-[3]">
                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${(node.x / VIEW_W) * 100}%`,
                        top: `${(node.y / VIEW_H) * 100}%`,
                      }}
                    >
                      <StepIcon icon={Icon} />
                    </div>

                    <p
                      className="absolute w-[6.6rem] px-1 font-madani-semibold text-[0.88rem] leading-[1.45] text-[#2a3b34] xl:w-[7.6rem] xl:text-[0.95rem]"
                      style={{
                        left: `${(label.x / VIEW_W) * 100}%`,
                        top: `${(label.y / VIEW_H) * 100}%`,
                        ...labelStyle(index),
                      }}
                    >
                      {title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
