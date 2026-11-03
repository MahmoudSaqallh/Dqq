import Image from "next/image";

type HighlightBoxProps = {
  /** Small amber pill above the title (e.g. "coming soon") */
  badge?: string;
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  /** The image's desktop width in Figma */
  imageWidth: number;
  /** "end" lets the image touch the box's far side, "bottom" its lower edge (both as in Figma) */
  imageFlush?: "end" | "bottom";
};

const FLUSH = {
  end: { box: "md:pe-0", image: "" },
  bottom: { box: "pb-0!", image: "self-end" },
} as const;

// Green-tinted box with text and an image, shared by feature pages
export default function HighlightBox({ badge, title, description, image, imageWidth, imageFlush }: HighlightBoxProps) {
  const flush = imageFlush ? FLUSH[imageFlush] : undefined;

  return (
    <section>
      <div className="site-container">
        <div
          className={`flex items-center gap-10 overflow-hidden rounded-3xl bg-[linear-gradient(78.5deg,rgba(243,250,246,0.36)_16.7%,rgba(216,240,226,0.37)_96.7%),linear-gradient(#fff,#fff)] p-[clamp(20px,2.8vw,40px)] max-md:flex-col ${flush?.box ?? ""}`}
        >
          <div className="flex min-w-0 flex-1 flex-col items-start gap-3 text-start max-md:w-full">
            {badge && (
              <span className="rounded-[30px] bg-[#ffeecc] px-4 py-[5px] text-base font-semibold leading-[1.5] text-[#ffab00] shadow-[0_0_12.5px_2.78px_rgba(255,171,0,0.18)]">
                {badge}
              </span>
            )}
            <h2 className="text-[clamp(22px,1.94vw,28px)] font-semibold leading-[1.5] text-[#414141]">{title}</h2>
            <p className="text-[15px] leading-[34px] text-[#8d8d8d]">{description}</p>
          </div>

          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={`(max-width: 768px) 100vw, ${imageWidth}px`}
            style={{ width: imageWidth }}
            className={`h-auto max-w-full shrink-0 md:max-w-[45%] ${flush?.image ?? ""}`}
          />
        </div>
      </div>
    </section>
  );
}
