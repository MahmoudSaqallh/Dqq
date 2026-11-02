"use client";

import Image from "next/image";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

// Percent positions are Figma's, in its 251×185 illustration frames, so the art can scale with the card
const box = (left: number, top: number, width: number, height: number): CSSProperties => ({
  left: `${left}%`,
  top: `${top}%`,
  width: `${width}%`,
  height: `${height}%`,
});

const ATTEMPT_BACKDROP = [
  { src: "/delivery/attempts-line-a.svg", width: 180, height: 180, style: box(14.08, 1.27, 71.84, 97.46) },
  { src: "/delivery/attempts-line-b.svg", width: 22, height: 124, style: box(79.04, 16.53, 8.75, 66.95) },
];

const ATTEMPT_ROWS = [
  {
    src: "/delivery/attempts-1.svg",
    style: box(9.86, 5.72, 69.02, 22.46),
    labelBox: { left: "16.73%", right: "39.44%", top: "11.89%", bottom: "77.84%" },
  },
  {
    src: "/delivery/attempts-2.svg",
    style: box(14.55, 38.77, 69.02, 22.46),
    labelBox: { left: "21.51%", right: "34.66%", top: "44.86%", bottom: "44.86%" },
  },
  {
    src: "/delivery/attempts-3.svg",
    style: box(9.86, 71.82, 69.02, 22.46),
    labelBox: { left: "16.73%", right: "39.44%", top: "78.38%", bottom: "11.35%" },
  },
];

// Rows take turns in a 4.5s loop, in step with the icon motion inside their SVG files
const ATTEMPT_STAGGER_S = 1.5;

function AttemptsIllustration({ labels }: { labels: readonly string[] }) {
  return (
    <>
      {ATTEMPT_BACKDROP.map((art) => (
        <Image key={art.src} src={art.src} alt="" width={art.width} height={art.height} unoptimized className="absolute max-w-none" style={art.style} />
      ))}
      {ATTEMPT_ROWS.map((row, index) => {
        const animationDelay = `${index * ATTEMPT_STAGGER_S}s`;
        return (
          <Fragment key={row.src}>
            <Image
              src={row.src}
              alt=""
              width={173}
              height={42}
              unoptimized
              className="courier-attempt-row absolute max-w-none"
              style={{ ...row.style, animationDelay }}
            />
            <span
              className="courier-attempt-row absolute flex items-center justify-end text-xs font-semibold leading-[1.5] text-[#59665e]"
              style={{ ...row.labelBox, animationDelay }}
            >
              {labels[index]}
            </span>
          </Fragment>
        );
      })}
    </>
  );
}

function FullIllustration({ src }: { src: string }) {
  return <Image src={src} alt="" width={251} height={185} unoptimized className="size-full" />;
}

function MapIllustration() {
  return (
    <span className="absolute inset-0 overflow-hidden rounded-[12.5px]">
      <Image
        src="/delivery/ill-map.svg"
        alt=""
        width={378}
        height={359}
        unoptimized
        className="absolute max-w-none"
        style={box(-21.36, -45.64, 150.56, 194.27)}
      />
    </span>
  );
}

export default function OverviewSection() {
  const { t } = useLanguage();
  const content = t.delivery.overview;

  // Same order as content.cards; the third card is Figma's "Featured" kind
  const illustrations: ReactNode[] = [
    <FullIllustration key="customer" src="/delivery/ill-customer.svg" />,
    <FullIllustration key="assign" src="/delivery/ill-assign.svg" />,
    <MapIllustration key="map" />,
    <AttemptsIllustration key="attempts" labels={content.attemptLabels} />,
  ];

  return (
    <section className="pt-[clamp(48px,5.5vw,80px)] pb-12">
      <div className="site-container flex flex-col gap-[clamp(32px,4.4vw,64px)]">
        <header className="text-center">
          <p className="text-lg font-semibold leading-[30px] text-[#24a259]">{content.eyebrow}</p>
          <h2 className="mt-3 text-balance text-[clamp(24px,2.08vw,30px)] font-semibold leading-[1.5] text-[#414141]">{content.title}</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.cards.map((card, index) => (
            <article
              key={card.title}
              className={`flex flex-col items-center rounded-[22px] border px-[19.2px] py-6 transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#a8d8bb] hover:shadow-[0_18px_20px_rgba(36,162,89,0.35)] motion-reduce:transition-none ${
                index === 2 ? "border-[#c9e3d4] bg-[#e9f6ee]" : "border-[#d1e3d9]/65 bg-white"
              }`}
            >
              <div className="relative aspect-[251/185] w-full max-w-[251px]">{illustrations[index]}</div>
              <h3 className="mt-4 w-full text-start text-xl font-semibold leading-[1.6] text-[#414141]">{card.title}</h3>
              <p className="mt-2.5 w-full text-start text-[15px] leading-[1.6] text-[#676767]">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
