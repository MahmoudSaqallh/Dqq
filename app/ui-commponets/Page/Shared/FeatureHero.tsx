"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import AnmtionTow from "../Index/Hero/AnmtionTow";

type FeatureHeroProps = {
  badge: string;
  badgeIcon: { src: string; width: number; height: number };
  titleLineOne: ReactNode;
  /** Plain second title line, for titles without the brand word */
  titleLineTwo?: string;
  /** Second title line, after the animated brand word; without it the title has no brand line */
  titleAfterBrand?: string;
  subtitle: string;
  cta: string;
  /** Id of the section the "explore" button scrolls to */
  scrollTargetId: string;
  /** Optional row between the subtitle and the button (e.g. stats) */
  children?: ReactNode;
};

// Hero shared by feature pages (Figma "Section/Hero"). The page must be listed in the
// Navber's HERO_OVERLAY_ROUTES, since this hero runs under the transparent header.
export default function FeatureHero({
  badge,
  badgeIcon,
  titleLineOne,
  titleLineTwo,
  titleAfterBrand,
  subtitle,
  cta,
  scrollTargetId,
  children,
}: FeatureHeroProps) {
  const scrollToTarget = () => {
    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="order-prep-hero-gradient absolute inset-0 -z-10" />
      <Image
        src="/order-prep/hero-bg.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-90"
      />

      <div className="site-container flex flex-col items-center gap-7 pt-[calc(clamp(64px,8.3vw,120px)+70px)] pb-[clamp(72px,9.7vw,140px)] text-center">
        <span className="inline-flex items-center gap-2 rounded-[50px] border border-[#24a259] bg-[#e9f6ee] px-4 py-2 text-base font-medium leading-[1.5] text-[#24a259]">
          <Image src={badgeIcon.src} alt="" width={badgeIcon.width} height={badgeIcon.height} unoptimized />
          {badge}
        </span>

        <h1 className="max-w-[1000px] text-balance text-[clamp(32px,4.17vw,60px)] font-medium leading-[1.7] text-[#414141]">
          {titleLineOne}
          {titleLineTwo && <span className="block">{titleLineTwo}</span>}
          {titleAfterBrand && (
            <span className="block">
              <AnmtionTow inline withBang={false} /> {titleAfterBrand}
            </span>
          )}
        </h1>

        <p className="max-w-[860px] text-[clamp(16px,1.39vw,20px)] leading-[2] text-[#676767]">{subtitle}</p>

        {children}

        <button
          type="button"
          onClick={scrollToTarget}
          className="order-processing-cta group inline-flex h-[52px] min-w-[220px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#24a259] bg-white/75 px-8 font-madani-semibold text-base text-[#24a259] backdrop-blur-[1px]"
        >
          <span className="order-processing-cta-text inline-block max-w-[240px] overflow-hidden whitespace-nowrap">
            {cta}
          </span>
          <ArrowDown size={17} aria-hidden className="order-processing-cta-arrow inline-block shrink-0" />
        </button>
      </div>
    </section>
  );
}
