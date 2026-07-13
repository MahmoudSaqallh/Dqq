"use client";

import { useEffect, useState, type CSSProperties } from "react";

const BARS = [
  { h: 52, fill: "#24a259", delay: "0s" },
  { h: 76, fill: "#3ecf7a", delay: "0.1s" },
  { h: 96, fill: "#24a259", delay: "0.2s" },
  { h: 68, fill: "#3ecf7a", delay: "0.3s" },
  { h: 88, fill: "#24a259", delay: "0.4s" },
  { h: 58, fill: "#3ecf7a", delay: "0.5s" },
] as const;

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const start = Date.now();
    const minDuration = 1800;

    const finish = () => {
      const wait = Math.max(0, minDuration - (Date.now() - start));
      window.setTimeout(() => {
        setPhase("leaving");
        window.setTimeout(() => setPhase("done"), 1450);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const fallback = window.setTimeout(finish, 3200);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`loader-screen ${phase === "leaving" ? "loader-screen--leave" : ""}`}
      aria-live="polite"
      aria-busy={phase === "loading"}
      role="status"
    >
      <div className="loader-screen__bg" aria-hidden />
      <span className="loader-circle-ring" aria-hidden />

      <div className="loader-logo" aria-label="Dqq">
        <div className="loader-logo__mark">
          <div className="loader-bars">
            {BARS.map((bar, i) => (
              <span
                key={i}
                className="loader-bar"
                style={
                  {
                    height: bar.h,
                    backgroundColor: bar.fill,
                    animationDelay: bar.delay,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>

        <p className="loader-logo__text brand-letters-stage brand-letters-stage--inline" dir="ltr">
          <span className="brand-letter brand-letter--0">D</span>
          <span className="brand-letter brand-letter--1">q</span>
          <span className="brand-letter brand-letter--2">q</span>
        </p>
      </div>
    </div>
  );
}
