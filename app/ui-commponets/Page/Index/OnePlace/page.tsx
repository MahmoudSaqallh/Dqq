"use client";

import { useLanguage } from "../../../../i18n/LanguageContext";

export default function OnePlace() {
  const { t, dir } = useLanguage();

  return (
    <section id="oneplace" className="oneplace-section">
      <section className="delivery-network" dir="ltr">
        <div className="delivery-line line-1">
          <svg width="278" height="143" viewBox="0 0 278 143" aria-hidden>
            <path className="line-base" d="M277 141.5L183.115 1H0" fill="none" />
            <path className="line-dot" d="M277 141.5L183.115 1H0" fill="none" />
          </svg>
        </div>

        <div className="delivery-line line-2">
          <svg width="200" height="10" viewBox="0 0 200 10" aria-hidden>
            <path className="line-base" d="M0 5H200" fill="none" />
            <path className="line-dot" d="M0 5H200" fill="none" />
          </svg>
        </div>

        <div className="delivery-line line-3">
          <svg width="278" height="143" viewBox="0 0 278 143" aria-hidden>
            <path className="line-base" d="M277 1.5L183.115 142H0" fill="none" />
            <path className="line-dot" d="M277 1.5L183.115 142H0" fill="none" />
          </svg>
        </div>

        <div className="delivery-line line-4">
          <svg width="278" height="143" viewBox="0 0 278 143" aria-hidden>
            <path className="line-base" d="M1 141.5L94.885 1H278" fill="none" />
            <path className="line-dot" d="M1 141.5L94.885 1H278" fill="none" />
          </svg>
        </div>

        <div className="delivery-line line-5">
          <svg width="200" height="10" viewBox="0 0 200 10" aria-hidden>
            <path className="line-base" d="M200 5H0" fill="none" />
            <path className="line-dot" d="M200 5H0" fill="none" />
          </svg>
        </div>

        <div className="delivery-line line-6">
          <svg width="278" height="143" viewBox="0 0 278 143" aria-hidden>
            <path className="line-base" d="M1 1.5L94.885 142H278" fill="none" />
            <path className="line-dot" d="M1 1.5L94.885 142H278" fill="none" />
          </svg>
        </div>

        <div className="delivery-line-mobile mobile-line-top-1">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M18 0 L50 100" fill="none" />
            <path className="line-dot" d="M18 0 L50 100" fill="none" />
          </svg>
        </div>
        <div className="delivery-line-mobile mobile-line-top-2">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M50 0 V100" fill="none" />
            <path className="line-dot" d="M50 0 V100" fill="none" />
          </svg>
        </div>
        <div className="delivery-line-mobile mobile-line-top-3">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M82 0 L50 100" fill="none" />
            <path className="line-dot" d="M82 0 L50 100" fill="none" />
          </svg>
        </div>
        <div className="delivery-line-mobile mobile-line-bottom-1">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M82 100 L50 0" fill="none" />
            <path className="line-dot" d="M82 100 L50 0" fill="none" />
          </svg>
        </div>
        <div className="delivery-line-mobile mobile-line-bottom-2">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M50 100 V0" fill="none" />
            <path className="line-dot" d="M50 100 V0" fill="none" />
          </svg>
        </div>
        <div className="delivery-line-mobile mobile-line-bottom-3">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path className="line-base" d="M18 100 L50 0" fill="none" />
            <path className="line-dot" d="M18 100 L50 0" fill="none" />
          </svg>
        </div>

        <div className="delivery-center" dir={dir}>
          <span className="delivery-corner delivery-corner-tl" aria-hidden />
          <span className="delivery-corner delivery-corner-tr" aria-hidden />
          <span className="delivery-corner delivery-corner-bl" aria-hidden />
          <span className="delivery-corner delivery-corner-br" aria-hidden />
          <span className="delivery-side delivery-side-left" aria-hidden />
          <span className="delivery-side delivery-side-right" aria-hidden />
          <h2 className="delivery-title">{t.onePlace.title}</h2>
          <p className="delivery-subtitle">{t.onePlace.subtitle}</p>
        </div>

        <div className="delivery-logo logo-top-left">
          <img src="/images/partners/aramex.png" alt="Aramex" />
        </div>

        <div className="delivery-logo logo-mid-left">
          <img src="/images/partners/spl.png" alt="SPL" />
        </div>

        <div className="delivery-logo logo-bottom-left">
          <img src="/images/partners/dhl.png" alt="DHL" />
        </div>

        <div className="delivery-logo logo-top-right">
          <img src="/images/partners/smsa.png" alt="SMSA" />
        </div>

        <div className="delivery-logo logo-mid-right">
          <img src="/images/partners/salla.png" alt="Salla" />
        </div>

        <div className="delivery-logo logo-bottom-right">
          <img src="/images/partners/zid.png" alt="Zid" />
        </div>
      </section>
    </section>
  );
}
