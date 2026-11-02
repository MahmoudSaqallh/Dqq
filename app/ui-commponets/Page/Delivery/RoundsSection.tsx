"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

// Percent positions are Figma's, in its 631×600 "Rounds Visual" frame
const BUBBLES = [
  { src: "/delivery/bubble-parcel.svg", width: 23, height: 23, left: "12.84%", top: "19.33%", iconWidth: "42.6%", delay: "0s" },
  { src: "/delivery/bubble-pin.svg", width: 23, height: 26, left: "79.87%", top: "70.17%", iconWidth: "42.6%", delay: "-1.75s" },
];

export default function RoundsSection() {
  const { t } = useLanguage();
  const content = t.delivery.rounds;

  return (
    <section className="bg-[#e9f6ee] py-[clamp(48px,6.25vw,90px)]">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[532fr_631fr] lg:gap-[74px]">
        <div>
          <h2 className="text-[clamp(24px,2.08vw,30px)] font-semibold leading-[1.7] text-[#24a259]">
            {content.titleLineOne}
            <span className="block">{content.titleLineTwo}</span>
          </h2>
          <p className="mt-3 max-w-[478px] text-[clamp(16px,1.25vw,18px)] leading-[1.75] text-[#676767]">{content.subtitle}</p>

          <ul className="mt-8 flex flex-col gap-4 md:gap-[22px]">
            {content.items.map((item) => (
              <li key={item.title} className="flex items-start gap-2.5">
                <Image src="/delivery/rounds-check.svg" alt="" width={30} height={34} unoptimized className="shrink-0" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <h3 className="text-[clamp(17px,1.32vw,19px)] font-semibold leading-[1.5] text-[#414141]">{item.title}</h3>
                  <p className="text-[clamp(14px,1.04vw,15px)] leading-[1.75] text-[#676767]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[631/600] w-full max-w-[631px] overflow-hidden rounded-[28px] bg-white">
          <Image src="/delivery/rounds-map.svg?v=4" alt="" width={631} height={600} unoptimized className="absolute inset-0 size-full" />
          <Image
            src="/delivery/rounds-phone.png"
            alt={content.phoneAlt}
            width={684}
            height={1401}
            sizes="(max-width: 1024px) 40vw, 260px"
            className="order-prep-phone-float absolute top-[6.17%] left-[29.64%] h-[87.67%] w-[40.73%] object-cover"
          />
          {BUBBLES.map((bubble) => (
            <span
              key={bubble.src}
              className="courier-bubble-float absolute grid aspect-square w-[8.56%] place-items-center rounded-full bg-white shadow-[0_6px_20px_rgba(0,38,20,0.08)]"
              style={{ left: bubble.left, top: bubble.top, animationDelay: bubble.delay }}
            >
              <Image
                src={bubble.src}
                alt=""
                width={bubble.width}
                height={bubble.height}
                unoptimized
                className="h-auto"
                style={{ width: bubble.iconWidth }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
