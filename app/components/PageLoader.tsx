"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import Image from "next/image";
import AnmtionTow from "../ui-commponets/Page/Index/Hero/AnmtionTow";

// Resting bar layout from the Figma "Loader Bars" frame (134×150, elliptical mask).
// `from` is the off-mask offset each bar slides in from / out to; `delay` is
// negative so the first paint matches the Figma "00 Start" frame mid-cycle.
const BARS = [
  { x: 110, y: 51, h: 48, fill: "#24A259", from: 160, delay: "-0.06s" },
  { x: 90, y: 10, h: 130, fill: "#2ED573", from: 160, delay: "-0.26s" },
  { x: 70, y: 31, h: 88, fill: "#24A259", from: -160, delay: "-0.06s" },
  { x: 50, y: 31, h: 88, fill: "#2ED573", from: -160, delay: "-0.16s" },
  { x: 30, y: 10, h: 130, fill: "#24A259", from: 160, delay: "-0.16s" },
  { x: 10, y: 51, h: 48, fill: "#2ED573", from: 160, delay: "-0.46s" },
] as const;

// Intro timeline length (bars + letters + progress fill) before the exit can start.
const INTRO_MS = 2400;
// Circle-close exit duration.
const EXIT_MS = 800;
// Never keep the page hidden longer than this, even if `load` never fires.
const MAX_WAIT_MS = 6000;

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");
  const maskId = useId();

  useEffect(() => {
    const start = Date.now();
    let exitTimer: number | undefined;
    let doneTimer: number | undefined;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, INTRO_MS - (Date.now() - start));
      exitTimer = window.setTimeout(() => {
        setPhase("leaving");
        doneTimer = window.setTimeout(() => setPhase("done"), EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const fallback = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  // Lets page entrance animations (e.g. the hero) start as the loader opens.
  useEffect(() => {
    if (phase !== "loading") document.documentElement.dataset.loaded = "true";
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`loader-screen ${phase === "leaving" ? "loader-screen--leave" : ""}`}
      aria-live="polite"
      aria-busy={phase === "loading"}
      role="status"
    >
      <div className="loader-orb loader-orb--1" aria-hidden>
        <Image src="/loader/orb-1.svg" alt="" width={370} height={370} unoptimized priority />
      </div>
      <div className="loader-orb loader-orb--2" aria-hidden>
        <Image src="/loader/orb-2.svg" alt="" width={320} height={320} unoptimized priority />
      </div>
      <div className="loader-orb loader-orb--3" aria-hidden>
        <Image src="/loader/orb-3.svg" alt="" width={270} height={270} unoptimized priority />
      </div>

      <div className="loader-content">
        <svg
          className="loader-bars"
          width="134"
          height="150"
          viewBox="0 0 134 150"
          fill="none"
          aria-hidden
        >
          <mask id={maskId} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="150">
            <ellipse cx="67" cy="75" rx="67" ry="75" fill="black" />
          </mask>
          <g mask={`url(#${maskId})`}>
            {BARS.map((bar, i) => (
              <rect
                key={i}
                className="loader-bar"
                x={bar.x}
                y={bar.y}
                width="14"
                height={bar.h}
                rx="7"
                fill={bar.fill}
                style={{ "--bar-from": `${bar.from}px`, animationDelay: bar.delay } as CSSProperties}
              />
            ))}
          </g>
        </svg>

        <div className="loader-brand">
          <AnmtionTow inline withBang={false} />
        </div>

        <span className="loader-track" aria-hidden>
          <span className="loader-fill" />
        </span>
      </div>
    </div>
  );
}
