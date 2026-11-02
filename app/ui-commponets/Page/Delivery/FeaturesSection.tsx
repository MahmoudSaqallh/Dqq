"use client";

import Image from "next/image";
import FeatureIndexLayout, { useRevealOnScroll } from "../Shared/FeatureIndexLayout";
import { useLanguage } from "../../../i18n/LanguageContext";

// Natural ratios of delivery-1/2/3; Figma lets each row grow with its image
const IMAGE_ASPECTS = ["1520 / 990", "1580 / 1316", "1580 / 1236"];

type DeliveryCase = {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  items: readonly { title: string; text: string }[];
};

function DeliveryBlock({ item, index }: { item: DeliveryCase; index: number }) {
  const { ref, revealClass } = useRevealOnScroll();

  return (
    <article
      ref={ref}
      id={item.id}
      className={`flex scroll-mt-28 gap-5 transition-all duration-700 ease-out max-md:flex-col ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      } ${revealClass}`}
    >
      <div className="relative flex min-w-0 flex-1 flex-col items-start gap-[7px] rounded-[30px] border border-[#e8e8e8] bg-[#f9f9fb] p-[15px] transition-[translate,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_14px_rgba(36,162,89,0.1)] motion-reduce:transition-none">
        <span className="bg-[#24a259] px-4 py-[3px] text-xs leading-[18px] text-[#f4faf7]">{item.label}</span>
        <h3 className="text-lg font-semibold leading-[1.6] text-[#24a259]">{item.title}</h3>
        <p className="text-[13px] leading-6 text-[#676767]">{item.text}</p>

        <ul className="flex w-full flex-col gap-2.5 pt-2">
          {item.items.map((entry) => (
            <li key={entry.title} className="flex items-start gap-2">
              <Image src="/delivery/list-check.svg" alt="" width={20} height={20} unoptimized className="shrink-0" />
              <div className="min-w-0 flex-1 text-[13px] text-[#676767]">
                <h4 className="font-semibold leading-[1.7]">{entry.title}</h4>
                <p className="leading-[26px]">{entry.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <span aria-hidden className="courier-card-corner courier-card-corner--start" />
        <span aria-hidden className="courier-card-corner courier-card-corner--end" />
      </div>

      <div
        className="relative min-w-0 flex-1 self-start overflow-hidden rounded-xl max-md:w-full max-md:flex-none"
        style={{ aspectRatio: IMAGE_ASPECTS[index] }}
      >
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
      </div>
    </article>
  );
}

export default function FeaturesSection() {
  const { t } = useLanguage();
  const content = t.delivery.features;

  return (
    <FeatureIndexLayout
      variant="compact"
      className="pt-16"
      title={content.title}
      subtitle={content.subtitle}
      items={content.cases.map((item) => ({ id: item.id, nav: item.label }))}
    >
      {content.cases.map((item, index) => (
        <DeliveryBlock key={item.id} item={item} index={index} />
      ))}
    </FeatureIndexLayout>
  );
}
