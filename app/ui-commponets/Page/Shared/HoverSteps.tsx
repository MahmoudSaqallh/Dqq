"use client";

import Image from "next/image";
import { useState } from "react";

type HoverStepsProps = {
  /** The hero's button scrolls to this id */
  id: string;
  title: string;
  subtitle: string;
  steps: readonly { title: string; text: string }[];
  icons: readonly string[];
};

// Three steps with Figma's active state, moved by hover (or tap on touch screens)
export default function HoverSteps({ id, title, subtitle, steps, icons }: HoverStepsProps) {
  const [active, setActive] = useState(0);

  return (
    <section id={id} className="scroll-mt-20 pt-[clamp(48px,5.5vw,80px)] pb-[clamp(64px,7.8vw,112px)]">
      <div className="site-container flex flex-col gap-6">
        <header className="text-center">
          <h2 className="text-[clamp(22px,1.94vw,28px)] font-semibold leading-[1.4] text-[#414141]">{title}</h2>
          <p className="mt-2 text-[clamp(13px,1.04vw,15px)] leading-[2] text-[#8d8d8d]">{subtitle}</p>
        </header>

        <ol className="grid overflow-hidden rounded-2xl bg-[linear-gradient(88deg,rgba(243,250,246,0.36)_16.7%,rgba(198,234,213,0.28)_96.7%),linear-gradient(#fff,#fff)] p-[19px] md:rounded-[20px] md:py-6 lg:grid-cols-3 lg:gap-5 lg:rounded-[30px] lg:bg-[linear-gradient(76deg,rgba(243,250,246,0.36)_16.7%,rgba(198,234,213,0.28)_96.7%),linear-gradient(#fff,#fff)] lg:px-[45px] lg:py-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-active={index === active}
              onMouseEnter={() => setActive(index)}
              className="group relative min-h-[193px] pt-6 text-center opacity-45 transition-[opacity,translate] duration-500 data-[active=true]:opacity-100 motion-reduce:transition-none md:min-h-[203px] md:pt-8 lg:min-h-[289px] lg:pt-12 lg:data-[active=true]:-translate-y-[5px]"
            >
              {/* Big faded number: half size at rest, grows behind the active step's icon */}
              <span
                aria-hidden
                className="absolute top-[27.5px] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 text-[110px] leading-none text-[rgba(211,236,222,0.41)] transition-[translate,scale,color] duration-500 group-data-[active=true]:translate-y-[calc(-50%+71px)] group-data-[active=true]:scale-100 group-data-[active=true]:text-[rgba(211,236,222,0.19)] motion-reduce:transition-none md:top-[35px] md:text-[140px] md:group-data-[active=true]:translate-y-[calc(-50%+68.5px)] lg:top-[50px] lg:text-[200px] lg:group-data-[active=true]:translate-y-[calc(-50%+94.5px)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="relative mx-auto grid h-[38px] w-[70px] place-items-center rounded-full bg-[rgba(80,181,122,0.08)] md:h-[45px] md:w-[90px] lg:h-[55px] lg:w-[110px]">
                <Image src={icons[index]} alt="" width={34} height={34} unoptimized className="size-6 md:size-7 lg:size-[34px]" />
              </span>

              <h3 className="relative mt-[29px] text-[15px] font-semibold leading-[1.5] text-[#414141] md:mt-8 md:text-[17px] lg:text-xl">
                {step.title}
              </h3>
              <p className="relative mx-auto mt-4 max-w-[370px] text-xs leading-[22px] text-[#676767] md:text-[13px] md:leading-6 lg:text-[15px] lg:leading-[30px]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
