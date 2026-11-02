"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

// All positions below are Figma's, in its 1000×600 "Hex Flow" frame
const VIEW_W = 1000;
const VIEW_H = 600;

const STEP_ICONS = [
  { src: "/retuern/journey/step-1.svg", width: 35, height: 35 },
  { src: "/retuern/journey/step-2.svg", width: 35, height: 35 },
  { src: "/retuern/journey/step-3.svg", width: 32, height: 35 },
  { src: "/retuern/journey/step-4.svg", width: 35, height: 35 },
  { src: "/retuern/journey/step-5.svg", width: 35, height: 35 },
  { src: "/retuern/journey/step-6.svg", width: 32, height: 35 },
];

// Pill centres, clockwise from the top, with where each label sits around its pill
const STEP_POSITIONS = [
  { x: 500, y: 74, label: { left: "50%", top: "0%", transform: "translateX(-50%)" } },
  { x: 795, y: 181, label: { left: "86.4%", top: "30.17%", transform: "translateY(-50%)" } },
  { x: 795, y: 419, label: { left: "86.4%", top: "69.83%", transform: "translateY(-50%)" } },
  { x: 500, y: 526, label: { left: "50%", top: "95.5%", transform: "translateX(-50%)" } },
  { x: 205, y: 419, label: { right: "85.6%", top: "69.83%", transform: "translateY(-50%)" } },
  { x: 205, y: 181, label: { right: "85.6%", top: "30.17%", transform: "translateY(-50%)" } },
];

const LINES = [
  { src: "/retuern/journey/line-1-2.svg", x: 551, y: 76, width: 198, height: 94 },
  { src: "/retuern/journey/line-2-3.svg", x: 791, y: 217, width: 8, height: 164 },
  { src: "/retuern/journey/line-3-4.svg", x: 554, y: 414, width: 195, height: 104 },
  { src: "/retuern/journey/line-4-5.svg", x: 252, y: 416, width: 197, height: 102 },
  { src: "/retuern/journey/line-5-6.svg", x: 201, y: 217, width: 8, height: 164 },
  { src: "/retuern/journey/line-6-1.svg", x: 252, y: 75, width: 195, height: 97 },
];

// The moving arrow rides along the dashed lines above, hidden under the pills between them
const FLOW_PATH = "M551 76 L749 170 L795 217 L795 381 L749 414 L554 518 L449 518 L252 416 L205 381 L205 217 L252 172 L447 75 Z";

const MOBILE_ICON_SCALE = 0.89;
const FLOAT_STAGGER_S = 0.5;

function StepPill({ index, size }: { index: number; size: "desktop" | "mobile" }) {
  const icon = STEP_ICONS[index];
  const isMobile = size === "mobile";
  const scale = isMobile ? MOBILE_ICON_SCALE : 1;

  return (
    <span
      className={`returns-hex-float grid place-items-center rounded-full bg-[#d3ecde] ${
        isMobile ? "h-[55px] w-20" : "h-[62px] w-[90px]"
      }`}
      style={{ animationDelay: `${index * FLOAT_STAGGER_S}s` }}
    >
      <Image
        src={icon.src}
        alt=""
        width={Math.round(icon.width * scale)}
        height={Math.round(icon.height * scale)}
        unoptimized
      />
    </span>
  );
}

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const content = t.returns.howItWorks;

  return (
    <section id="returns-how" className="py-[clamp(64px,7.8vw,112px)]">
      <div className="site-container">
        <div className="returns-journey-box rounded-[30px] px-4 py-12 lg:px-6 lg:py-14">
          {/* Tablet and phone: one vertical column */}
          <div className="lg:hidden">
            <header className="mb-3 text-center">
              <h2 className="text-[22px] font-semibold leading-[1.4] text-[#414141]">{content.title}</h2>
              <p className="mt-2 text-[13px] leading-[2] text-[#8d8d8d]">{content.subtitle}</p>
            </header>

            <ol className="flex flex-col items-center">
              {content.steps.map((step, index) => (
                <li key={step.title} className="flex flex-col items-center">
                  <StepPill index={index} size="mobile" />
                  <p className="mt-[17px] text-[15px] font-semibold leading-[1.5] text-[#414141]">{step.title}</p>
                  {index < content.steps.length - 1 && (
                    <Image
                      src="/retuern/journey/line-vertical.svg"
                      alt=""
                      aria-hidden
                      width={2}
                      height={40}
                      unoptimized
                      className="mt-[15px] mb-[9px]"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Desktop: Figma's hexagon */}
          <div className="relative mx-auto hidden aspect-[1000/600] w-full max-w-[1000px] lg:block">
            {LINES.map((line) => (
              <Image
                key={line.src}
                src={line.src}
                alt=""
                aria-hidden
                width={line.width}
                height={line.height}
                unoptimized
                className="absolute max-w-none"
                style={{
                  left: `${(line.x / VIEW_W) * 100}%`,
                  top: `${(line.y / VIEW_H) * 100}%`,
                  width: `${(line.width / VIEW_W) * 100}%`,
                  height: `${(line.height / VIEW_H) * 100}%`,
                }}
              />
            ))}

            <svg aria-hidden className="absolute inset-0 size-full overflow-visible" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} fill="none">
              <path id="returns-flow-path" d={FLOW_PATH} />
              <polygon className="returns-flow-arrow" points="9,0 -7,-5.5 -7,5.5" fill="#24a259">
                <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#returns-flow-path" />
                </animateMotion>
              </polygon>
            </svg>

            {content.steps.map((step, index) => {
              const position = STEP_POSITIONS[index];
              return (
                <div key={step.title}>
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(position.x / VIEW_W) * 100}%`, top: `${(position.y / VIEW_H) * 100}%` }}
                  >
                    <StepPill index={index} size="desktop" />
                  </div>
                  <p
                    className="absolute whitespace-nowrap text-lg font-semibold leading-[1.5] text-[#414141]"
                    style={position.label}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}

            <header className="absolute inset-0 m-auto h-fit w-fit max-w-[44%] text-center">
              <h2 className="text-[28px] font-semibold leading-[1.4] text-[#414141]">{content.title}</h2>
              <p className="mt-2 text-[15px] leading-[2] text-[#8d8d8d]">{content.subtitle}</p>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
