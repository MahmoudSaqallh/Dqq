"use client";

import Image from "next/image";
import FeatureIndexLayout, { useRevealOnScroll } from "./FeatureIndexLayout";

export type ChecklistCase = {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  items: readonly { title: string; text?: string }[];
  /** The image's natural ratio: it sets the row's height, and the card stretches to match (as in Figma) */
  imageAspect: string;
  titleIcon?: { src: string; width: number; height: number };
};

type ChecklistFeaturesProps = {
  title: string;
  subtitle: string;
  cases: readonly ChecklistCase[];
  /** Shows each case's label as a green chip on its card */
  showChip?: boolean;
  checkIcon?: { src: string; width: number; height: number };
  /** Delivery's Figma frame sets the content at the card's top with a tighter list */
  topAligned?: boolean;
};

const DEFAULT_CHECK_ICON = { src: "/list-check.svg", width: 20, height: 22.67 };

function ChecklistBlock({
  item,
  index,
  showChip,
  checkIcon = DEFAULT_CHECK_ICON,
  topAligned,
}: Pick<ChecklistFeaturesProps, "showChip" | "checkIcon" | "topAligned"> & { item: ChecklistCase; index: number }) {
  const { ref, revealClass } = useRevealOnScroll();

  return (
    <article
      ref={ref}
      id={item.id}
      className={`flex scroll-mt-28 gap-5 transition-all duration-700 ease-out max-md:flex-col ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      } ${revealClass}`}
    >
      <div
        className={`relative flex min-w-0 flex-1 flex-col items-start gap-[7px] md:basis-[calc(50%-10px)] rounded-[30px] border border-[#e8e8e8] bg-[#f9f9fb] p-[15px] transition-[translate,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_14px_rgba(36,162,89,0.1)] motion-reduce:transition-none ${
          topAligned ? "" : "justify-center"
        }`}
      >
        {showChip && <span className="bg-[#24a259] px-4 py-[3px] text-xs leading-[18px] text-[#f4faf7]">{item.label}</span>}
        <div className="flex items-center gap-1">
          {item.titleIcon && <Image src={item.titleIcon.src} alt="" width={item.titleIcon.width} height={item.titleIcon.height} unoptimized className="shrink-0" />}
          <h3 className="text-lg font-semibold leading-[1.6] text-[#24a259]">{item.title}</h3>
        </div>
        <p className="text-[13px] leading-6 text-[#676767]">{item.text}</p>

        <ul className={`flex w-full flex-col gap-2.5 ${topAligned ? "pt-2" : "pt-3.5"}`}>
          {item.items.map((entry) => (
            <li key={entry.title} className="flex items-start gap-2">
              <Image src={checkIcon.src} alt="" width={checkIcon.width} height={checkIcon.height} unoptimized className="shrink-0" />
              <div className="min-w-0 flex-1 text-[13px] text-[#676767]">
                <h4 className="font-semibold leading-[1.7]">{entry.title}</h4>
                {entry.text && <p className="leading-[26px]">{entry.text}</p>}
              </div>
            </li>
          ))}
        </ul>

        <span aria-hidden className="courier-card-corner courier-card-corner--start" />
        <span aria-hidden className="courier-card-corner courier-card-corner--end" />
      </div>

      <div
        className="relative min-w-0 flex-1 overflow-hidden rounded-xl max-md:w-full max-md:flex-none md:basis-[calc(50%-10px)]"
        style={{ aspectRatio: item.imageAspect }}
      >
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
      </div>
    </article>
  );
}

// Solution-only cards with a checklist and drawing corners, shared by feature pages
// (Figma "Solution Card (solution-only)"). Text comes first on odd blocks, the image on even ones.
export default function ChecklistFeatures({ title, subtitle, cases, showChip, checkIcon, topAligned }: ChecklistFeaturesProps) {
  return (
    <FeatureIndexLayout
      variant="compact"
      className="pt-16"
      title={title}
      subtitle={subtitle}
      items={cases.map((item) => ({ id: item.id, nav: item.label }))}
    >
      {cases.map((item, index) => (
        <ChecklistBlock key={item.id} item={item} index={index} showChip={showChip} checkIcon={checkIcon} topAligned={topAligned} />
      ))}
    </FeatureIndexLayout>
  );
}
