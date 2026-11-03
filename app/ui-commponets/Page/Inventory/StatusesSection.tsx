"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

// Figma's "Inventory/Status Card (3s loops)": each status moves in its own way, see .inventory-status--*
const STATUS_STYLES: Record<string, { icon: { src: string; width: number; height: number }; placement: string }> = {
  shipped: { icon: { src: "/inventory/icon-shipped.svg", width: 35, height: 36 }, placement: "xl:col-start-1 xl:row-start-1" },
  picked: { icon: { src: "/inventory/icon-picked.svg", width: 40, height: 40 }, placement: "xl:col-start-1 xl:row-start-2" },
  damaged: { icon: { src: "/inventory/icon-damaged.svg", width: 33, height: 36 }, placement: "xl:col-start-5 xl:row-start-1" },
  reserved: { icon: { src: "/inventory/icon-reserved.svg", width: 40, height: 40 }, placement: "xl:col-start-5 xl:row-start-2" },
};

// Percent positions are Figma's, in the 376px tall span of the two card rows
const CONNECTOR_COLUMNS = [
  {
    column: "xl:col-start-2",
    connectors: [
      { src: "/inventory/connector-shipped.svg", height: 92, top: "22.87%", heightPercent: "24.47%" },
      { src: "/inventory/connector-picked.svg", height: 91, top: "54.25%", heightPercent: "24.2%" },
    ],
  },
  {
    column: "xl:col-start-4",
    connectors: [
      { src: "/inventory/connector-damaged.svg", height: 92, top: "22.87%", heightPercent: "24.47%" },
      { src: "/inventory/connector-reserved.svg", height: 91, top: "54.25%", heightPercent: "24.2%" },
    ],
  },
];

function CardText({ title, description }: { title: string; description: string }) {
  return (
    <>
      <h3 className="text-xl font-semibold leading-[1.7] text-[#414141]">{title}</h3>
      <p className="text-base leading-[1.5] text-[#676767]">{description}</p>
    </>
  );
}

export default function StatusesSection() {
  const { t, dir } = useLanguage();
  const content = t.inventory.statuses;

  return (
    <section id="inventory-features" className="scroll-mt-20 py-[clamp(48px,5.5vw,80px)]">
      <div className="site-container flex flex-col gap-6">
        <header className="text-center">
          <h2 className="text-[clamp(22px,1.94vw,28px)] font-semibold leading-[1.4] text-[#414141]">{content.title}</h2>
          <p className="mt-2 text-[clamp(13px,1.04vw,15px)] leading-[2] text-[#8d8d8d]">{content.subtitle}</p>
        </header>

        {/* Physical positions, so the connectors' slopes stay correct in both languages */}
        <div
          dir="ltr"
          className="grid gap-6 rounded-[22px] bg-[linear-gradient(159deg,#e4f2e9_0%,#fff_25%,#e9f6ee_50%,#fff_75%,#e4f2e9_100%)] px-5 py-8 md:grid-cols-2 xl:grid-cols-[282px_minmax(0,140px)_282px_minmax(0,140px)_282px] xl:grid-rows-[minmax(172px,auto)_minmax(172px,auto)] xl:justify-center xl:gap-x-0 xl:gap-y-8 xl:px-6 xl:py-12"
        >
          <div
            dir={dir}
            className="relative mx-auto flex min-h-[172px] w-full max-w-[282px] flex-col items-center gap-4 px-6 pt-6 pb-4 text-center md:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:self-center"
          >
            <svg aria-hidden className="pointer-events-none absolute inset-0 size-full">
              <rect
                className="inventory-status-dash"
                x="1.5"
                y="1.5"
                rx="30.5"
                fill="none"
                stroke="#7cc79b"
                strokeWidth="3"
                strokeDasharray="14 10"
                style={{ width: "calc(100% - 3px)", height: "calc(100% - 3px)" }}
              />
            </svg>
            <Image src="/inventory/icon-available.svg" alt="" width={34} height={34} unoptimized />
            <CardText title={content.center.title} description={content.center.description} />
          </div>

          {CONNECTOR_COLUMNS.map(({ column, connectors }) => (
            <div key={column} aria-hidden className={`relative row-span-2 row-start-1 hidden xl:block ${column}`}>
              {connectors.map((connector) => (
                <Image
                  key={connector.src}
                  src={connector.src}
                  alt=""
                  width={130}
                  height={connector.height}
                  unoptimized
                  className="absolute left-[5px] w-[calc(100%-10px)] max-w-none"
                  style={{ top: connector.top, height: connector.heightPercent }}
                />
              ))}
            </div>
          ))}

          {content.items.map((item) => {
            const style = STATUS_STYLES[item.id];
            return (
              <div
                key={item.id}
                dir={dir}
                className={`inventory-status inventory-status--${item.id} mx-auto flex min-h-[172px] w-full max-w-[282px] flex-col items-center gap-4 rounded-[26px] bg-[#e9f6ee] px-6 pt-6 pb-4 text-center ${style.placement}`}
              >
                <Image src={style.icon.src} alt="" width={style.icon.width} height={style.icon.height} unoptimized />
                <CardText title={item.title} description={item.description} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
