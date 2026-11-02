"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageContext";

const BUTTON_CLASS =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] border-0 bg-white px-6 py-4 text-base font-medium leading-[1.5] text-[#24a259] no-underline transition-transform hover:-translate-y-0.5";

type FeatureCtaProps = {
  title: string;
  text: string;
  cta: string;
  /** Where the button goes; without it the button has no action yet */
  href?: string;
  /** Bottom spacing, which depends on what follows the banner */
  className?: string;
};

// Green banner with the moving light streak, shared by feature pages (Figma "Section/CTA")
export default function FeatureCta({ title, text, cta, href, className = "pb-10" }: FeatureCtaProps) {
  const { isEn } = useLanguage();

  const label = (
    <>
      {cta}
      <span className="grid size-5 place-items-center">
        <Image
          src="/order-prep/arrow-left.svg"
          alt=""
          width={14.6}
          height={9.6}
          unoptimized
          className={isEn ? "-scale-x-100" : undefined}
        />
      </span>
    </>
  );

  return (
    <section className={`pt-[clamp(64px,7.8vw,112px)] ${className}`}>
      <div className="site-container">
        <div className="relative isolate flex flex-col items-center gap-5 overflow-hidden rounded-[25px] bg-[#1a9b4e] px-[clamp(20px,3.9vw,56px)] py-[clamp(40px,4.4vw,64px)] text-center text-white">
          <div aria-hidden className="order-prep-cta-shine" />
          <h2 className="max-w-[860px] text-balance text-[clamp(26px,3.125vw,45px)] font-medium leading-[1.7]">{title}</h2>
          <p className="max-w-[1088px] text-[clamp(16px,1.39vw,20px)] leading-[2]">{text}</p>
          {href ? (
            <Link href={href} className={BUTTON_CLASS}>
              {label}
            </Link>
          ) : (
            <button type="button" className={BUTTON_CLASS}>
              {label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
