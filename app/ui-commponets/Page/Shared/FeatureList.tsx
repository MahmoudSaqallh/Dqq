"use client";

import Image from "next/image";
import FeatureIndexLayout, { useRevealOnScroll, type FeatureVariant } from "./FeatureIndexLayout";

export type FeatureItem = {
  id: string;
  nav: string;
  problem: string;
  solutionTitle: string;
  solutionText: string;
  /** Without an image the text takes the full width of the row */
  image?: string;
  /** CSS aspect ratio of the image, used by the compact variant (e.g. "1520 / 990") */
  imageAspect?: string;
  /** Puts the image on the start side instead of the text */
  imageFirst?: boolean;
};

type FeatureListProps = {
  title: string;
  subtitle: string;
  problemLabel: string;
  solutionLabel: string;
  features: FeatureItem[];
  variant?: FeatureVariant;
};

const VARIANTS = {
  default: {
    block: "items-center gap-8",
    textColumn: "gap-3.5",
    problemLabel: "text-lg leading-[1.7]",
    problemRow: "gap-2.5",
    problem: "text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.5]",
    warningSize: 24,
    card: "gap-2.5 border p-[18px]",
    solutionLabel: "text-base font-medium leading-[1.5] text-[#414141]",
    titleRow: "gap-3",
    bulbBadge: "size-10 rounded-[20px]",
    bulbSize: 26,
    solutionTitle: "text-[clamp(20px,1.94vw,28px)] leading-[1.7]",
    solutionText: "text-lg leading-[1.7]",
    accentTop: "-top-px -right-px size-11 border-t-2 border-r-2",
    accentBottom: "-bottom-px -left-px size-11 border-b-2 border-l-2",
    image: "h-[298px] rounded-[20px] max-md:aspect-[1520/990] max-md:h-auto",
  },
  compact: {
    block: "items-start gap-5",
    textColumn: "",
    problemLabel: "text-sm font-semibold leading-[1.7]",
    problemRow: "mb-[27px] gap-2 pt-[11px]",
    problem: "text-[15px] leading-[1.5]",
    warningSize: 20,
    card: "gap-1.5 border-[0.8px] p-3.5 transition-[translate,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_14px_rgba(36,162,89,0.1)]",
    solutionLabel: "text-sm font-semibold leading-[1.7] text-[#676767]",
    titleRow: "gap-2.5",
    bulbBadge: "size-9 rounded-[18px]",
    bulbSize: 20,
    solutionTitle: "text-lg leading-[1.6]",
    solutionText: "text-[13px] leading-[24px]",
    accentTop: "-top-[0.8px] -right-[0.8px] size-8 border-t-[2.4px] border-r-[2.4px]",
    accentBottom: "-bottom-[0.8px] -left-[0.8px] size-8 border-b-[2.4px] border-l-[2.4px]",
    image: "rounded-xl",
  },
} as const;

function FeatureBlock({
  feature,
  problemLabel,
  solutionLabel,
  variant,
}: {
  feature: FeatureItem;
  problemLabel: string;
  solutionLabel: string;
  variant: FeatureVariant;
}) {
  const styles = VARIANTS[variant];
  const { ref, revealClass } = useRevealOnScroll();

  return (
    <article
      ref={ref}
      id={feature.id}
      className={`flex scroll-mt-28 transition-all duration-700 ease-out max-md:flex-col ${styles.block} ${
        feature.imageFirst ? "flex-row-reverse" : ""
      } ${revealClass}`}
    >
      <div className={`flex min-w-0 flex-1 flex-col items-start text-start max-md:w-full ${styles.textColumn}`}>
        <p className={`text-[#676767] ${styles.problemLabel}`}>{problemLabel}</p>
        <div className={`flex w-full items-center ${styles.problemRow}`}>
          <Image src="/order-prep/warning.svg" alt="" width={styles.warningSize} height={styles.warningSize} unoptimized className="shrink-0" />
          <h3 className={`min-w-0 flex-1 text-[#414141] ${styles.problem}`}>{feature.problem}</h3>
        </div>

        <div className={`relative flex w-full flex-col items-start rounded-xl border-[#e8e8e8] bg-[#f9f9fb] ${styles.card}`}>
          <p className={styles.solutionLabel}>{solutionLabel}</p>
          <div className={`flex w-full items-center ${styles.titleRow}`}>
            <span className={`grid shrink-0 place-items-center bg-[#e9f6ee] ${styles.bulbBadge}`}>
              <Image src="/order-prep/bulb.svg" alt="" width={styles.bulbSize} height={styles.bulbSize} unoptimized />
            </span>
            <h4 className={`min-w-0 flex-1 font-semibold text-[#24a259] ${styles.solutionTitle}`}>{feature.solutionTitle}</h4>
          </div>
          <p className={`text-[#676767] ${styles.solutionText}`}>{feature.solutionText}</p>
          <span aria-hidden className={`absolute rounded-tr-xl border-[#24a259] ${styles.accentTop}`} />
          <span aria-hidden className={`absolute rounded-bl-xl border-[#24a259] ${styles.accentBottom}`} />
        </div>
      </div>

      {feature.image && (
        <div
          className={`relative min-w-0 flex-1 overflow-hidden max-md:w-full max-md:flex-none ${styles.image}`}
          style={feature.imageAspect ? { aspectRatio: feature.imageAspect } : undefined}
        >
          <Image src={feature.image} alt={feature.solutionTitle} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
        </div>
      )}
    </article>
  );
}

// Problem → solution blocks, shared by feature pages
export default function FeatureList({
  title,
  subtitle,
  problemLabel,
  solutionLabel,
  features,
  variant = "default",
}: FeatureListProps) {
  return (
    <FeatureIndexLayout title={title} subtitle={subtitle} items={features} variant={variant}>
      {features.map((feature) => (
        <FeatureBlock
          key={feature.id}
          feature={feature}
          problemLabel={problemLabel}
          solutionLabel={solutionLabel}
          variant={variant}
        />
      ))}
    </FeatureIndexLayout>
  );
}
