"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnmtionTow from "./AnmtionTow";
import { useLanguage } from "../../../../i18n/LanguageContext";

// Floating icons around the dashboard (Figma "Hero Icon 1–4"). Rest boxes are in
// the 1920×908 dashboard frame; each icon runs its own 4s loop, 1s apart.
const HERO_ICONS = [
  { src: "https://dqq.ai/images/image-hero-1.webp", x: 624, y: 12, w: 125, h: 123 },
  { src: "https://dqq.ai/images/image-hero-4.webp", x: 1169, y: 12, w: 127, h: 127 },
  { src: "https://dqq.ai/images/image-hero-2.webp", x: 720, y: -103, w: 115, h: 115 },
  { src: "https://dqq.ai/images/image-hero-3.webp", x: 1076, y: -111, w: 124, h: 123 },
] as const;

export default function Hero() {
  const { t, isEn } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div aria-hidden className="hero-section__corner-glow" />
      <div aria-hidden className="hero-section__grid">
        <Image src="/hero/bg-hero.png" alt="" fill priority sizes="70vw" />
      </div>
      <div className="hero-section__content site-container">
        <h1 className="hero-section__title">
          <AnimatedText />
          <AnmtionTow className="brand-letters-stage--hero" />
        </h1>

        <p className="hero-section__desc hero-reveal hero-reveal--desc">{t.hero.desc}</p>

        <button type="button" className="hero-section__cta hero-reveal hero-reveal--cta">
          <Image
            src="/hero/arrow-left.svg"
            alt=""
            width={17.5}
            height={11.5}
            unoptimized
            className={isEn ? "-scale-x-100" : undefined}
          />
          {t.hero.join}
        </button>
      </div>

      <div className="hero-section__stage">
        <div aria-hidden className="hero-section__glow" />

        <div className="hero-section__dashboard hero-reveal hero-reveal--dashboard">
          <Image
            src="/hero/hero-dashboard.png"
            alt="Hero Image"
            width={1920}
            height={908}
            priority
            sizes="(max-width: 900px) 900px, 100vw"
            className="h-auto w-full"
          />

          {HERO_ICONS.map((icon, i) => (
            <Image
              key={icon.src}
              src={icon.src}
              alt=""
              aria-hidden
              width={icon.w}
              height={icon.h}
              className={`hero-icon hero-icon--${i + 1}`}
              style={{
                left: `${(icon.x / 1920) * 100}%`,
                top: `${(icon.y / 908) * 100}%`,
                width: `${(icon.w / 1920) * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
