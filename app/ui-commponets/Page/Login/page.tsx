"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  CheckCheck,
  ClipboardList,
  Eye,
  EyeOff,
  Globe,
  LayoutGrid,
  Lock,
  MapPin,
  MapPinned,
  PackageCheck,
  Printer,
  ScanBarcode,
  ShieldCheck,
  Smartphone,
  Tag,
  Truck,
  User,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

const SLIDES = [
  {
    image: "/login/login-1-bqmQT2xc.jpeg",
    badgeIcon: Truck,
    statIcons: [Printer, MapPin, CheckCheck] as LucideIcon[],
  },
  {
    image: "/login/login-2-C-zAI4se.jpeg",
    badgeIcon: PackageCheck,
    statIcons: [ClipboardList, Tag, ShieldCheck] as LucideIcon[],
  },
  {
    image: "/login/login-3-BIJCdyQL.jpeg",
    badgeIcon: Warehouse,
    statIcons: [Boxes, MapPinned, LayoutGrid] as LucideIcon[],
  },
  {
    image: "/login/login-4-aqUTmUhC.jpeg",
    badgeIcon: Smartphone,
    statIcons: [ScanBarcode, CheckCheck, Zap] as LucideIcon[],
  },
];

const SLIDE_DURATION_MS = 5000;

export default function LoginPage() {
  const { t, isEn, toggleLocale } = useLanguage();
  const content = t.login;
  const [slide, setSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const goToNextSlide = () => setSlide((prev) => (prev + 1) % SLIDES.length);

  const JoinArrow = isEn ? ArrowRight : ArrowLeft;
  const activeSlide = content.slides[slide] ?? content.slides[0];
  const BadgeIcon = SLIDES[slide].badgeIcon;

  return (
    <div className="relative min-h-screen lg:grid lg:grid-cols-2">
      <div className="relative z-10 flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:rounded-e-[1rem]">
        <div className="w-full max-w-[420px]  rounded-br-[5rem]">
          <h1 className="mb-10 text-center font-madani-semibold text-[2rem] text-[#24a259]">
            {content.title}
          </h1>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-2 block font-madani-medium text-[0.95rem] text-[#1f2d28]">
                {content.userNameLabel}
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-[#e5eae7] bg-[#f8faf9] px-4 py-3">
                <User className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#9aa8a1]" />
                <input
                  type="text"
                  placeholder={content.userNamePlaceholder}
                  className="w-full bg-transparent font-madani-regular text-[0.95rem] text-[#1f2d28] outline-none placeholder:text-[#9aa8a1]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-madani-medium text-[0.95rem] text-[#1f2d28]">
                {content.passwordLabel}
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-[#e5eae7] bg-[#f8faf9] px-4 py-3">
                <Lock className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#9aa8a1]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={content.passwordPlaceholder}
                  className="w-full bg-transparent font-madani-regular text-[0.95rem] text-[#1f2d28] outline-none placeholder:text-[#9aa8a1]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="shrink-0 text-[#9aa8a1]"
                >
                  {showPassword ? (
                    <EyeOff className="h-[1.15rem] w-[1.15rem]" />
                  ) : (
                    <Eye className="h-[1.15rem] w-[1.15rem]" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="font-madani-medium text-[0.88rem] text-[#24a259]">
                {content.forgotPassword}
              </button>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-[#24a259] py-3.5 font-madani-semibold text-[1rem] text-white transition-colors hover:bg-[#1f8a4c]"
            >
              {content.signIn}
            </button>
          </form>

          <div className="mt-10 h-px bg-[#eef2ef]" />

          <div className="mt-6 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 font-madani-medium text-[0.95rem] text-[#24a259]"
            >
              {content.joinUs}
              <JoinArrow className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 hidden overflow-hidden bg-[#0c1712] lg:block">
        {SLIDES.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03130b] via-[#0b2b1a]/25 to-[#0b2b1a]/55" />
        <div className="absolute inset-0 bg-[#0f3320]/35" />

        <div className="relative z-[1] ms-auto flex h-full w-1/2 flex-col justify-between p-8 xl:p-12">
          <div>
            <Image src="/nav-logo.webp" alt="DQQ" width={150} height={64} className="h-11 w-auto" />

            <div
              key={`badge-${slide}`}
              className="relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#3ecf7a]/40 bg-[#3ecf7a]/15 py-1.5 pe-5 ps-2 shadow-[0_0_16px_rgba(62,207,122,0.25)] backdrop-blur-sm"
            >
              <span className="badge-shine" aria-hidden />
              <span className="relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-md ">
                <BadgeIcon className="h-3.5 w-3.5 text-[#3ecf7a]" />
              </span>
              <span className="relative z-[1] font-madani-medium text-[0.85rem] text-[#5be095]">
                {activeSlide.badge}
              </span>
            </div>

            <h2
              key={`heading-${slide}`}
              className="mt-6 font-madani-semibold text-[2.1rem] leading-[1.3] text-white xl:text-[2.5rem]"
            >
              {activeSlide.headingBefore}
              <span className="text-[#3ecf7a]">{activeSlide.headingHighlight}</span>
              <br />
              {activeSlide.headingLine2}
            </h2>

            <p
              key={`desc-${slide}`}
              className="mt-4 max-w-[480px] font-madani-regular text-[0.98rem] leading-[1.8] text-white/80"
            >
              {activeSlide.description}
            </p>
          </div>

          <div>
            <div key={`stats-${slide}`} className="grid grid-cols-3 gap-4">
              {activeSlide.stats.map((stat, i) => {
                const Icon = SLIDES[slide].statIcons[i];
                return (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/15 to-white/[0.03] p-4 text-center backdrop-blur-xl"
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3ecf7a] to-[#1f8a4c]">
                      <Icon className="h-[1.1rem] w-[1.1rem] text-white" strokeWidth={2} />
                    </div>
                    <p className="font-madani-semibold text-[1.1rem] text-white">{stat.title}</p>
                    <p className="mt-0.5 font-madani-regular text-[0.78rem] text-white/70">
                      {stat.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="ms-3 flex translate-y-1.5 items-center gap-1.5">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.image}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`h-1 overflow-hidden rounded-full bg-white/25 transition-[width] duration-300 ${
                      i === slide ? "w-11" : "w-6"
                    }`}
                  >
                    {i === slide ? (
                      <span
                        key={`fill-${slide}`}
                        className="story-fill block h-full bg-white"
                        style={{ animationDuration: `${SLIDE_DURATION_MS}ms` }}
                        onAnimationEnd={goToNextSlide}
                      />
                    ) : null}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleLocale}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm"
              >
                <Globe className="h-3.5 w-3.5 text-white" />
                <span
                  className={`font-madani-regular text-[0.8rem] ${isEn ? "text-white" : "text-white/60"}`}
                >
                  English
                </span>
                <span
                  className={`font-madani-regular text-[0.8rem] ${!isEn ? "text-white" : "text-white/60"}`}
                >
                  AR
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
