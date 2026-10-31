"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../../../../i18n/LanguageContext";

const TYPE_SPEED = 50;
const ERASE_SPEED = 30;
const PAUSE_AFTER = 3000;
const PAUSE_BEFORE = 500;
const START_DELAY = 900;

type Phase = "typing" | "pause-after" | "erasing" | "pause-before";

export default function AnimatedText() {
  const { t, dir, locale } = useLanguage();
  const phrases = t.hero.phrases;
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriter = typewriterRef.current;
    if (!typewriter) return;

    const cursor = document.createElement("span");
    cursor.className =
      "inline-block h-[0.95em] min-h-[22px] w-[3px] rounded-[1px] bg-[#24a259] align-middle ms-[5px] typewriter-cursor";
    typewriter.appendChild(cursor);

    const textNode = document.createTextNode("");
    typewriter.insertBefore(textNode, cursor);

    let phraseIndex = 0;
    let charIndex = 0;
    let phase: Phase = "typing";
    let timeoutId = 0;

    const schedule = (fn: () => void, delay: number) => {
      timeoutId = window.setTimeout(fn, delay);
    };

    const tick = () => {
      const phrase = phrases[phraseIndex];

      if (phase === "typing") {
        if (charIndex < phrase.length) {
          charIndex += 1;
          textNode.textContent = phrase.substring(0, charIndex);
          schedule(tick, TYPE_SPEED);
          return;
        }

        phase = "pause-after";
        schedule(tick, PAUSE_AFTER);
        return;
      }

      if (phase === "pause-after") {
        phase = "erasing";
        schedule(tick, 0);
        return;
      }

      if (phase === "erasing") {
        if (charIndex > 0) {
          charIndex -= 1;
          textNode.textContent = phrase.substring(0, charIndex);
          schedule(tick, ERASE_SPEED);
          return;
        }

        phase = "pause-before";
        schedule(tick, PAUSE_BEFORE);
        return;
      }

      phraseIndex = (phraseIndex + 1) % phrases.length;
      phase = "typing";
      schedule(tick, 0);
    };

    schedule(tick, START_DELAY);

    return () => {
      window.clearTimeout(timeoutId);
      if (cursor.parentNode === typewriter) {
        typewriter.removeChild(cursor);
      }
      if (textNode.parentNode === typewriter) {
        typewriter.removeChild(textNode);
      }
    };
  }, [locale, phrases]);

  return (
    <span className="block" dir={dir}>
      <span ref={typewriterRef} className="inline" dir={dir} />
    </span>
  );
}
