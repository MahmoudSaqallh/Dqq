"use client";

import {
  Clock,
  ClipboardCheck,
  Package,
  PackageCheck,
  PackageX,
  type LucideIcon,
} from "lucide-react";
import { useLayoutEffect, useRef, useState, type ComponentType } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type IconProps = { size?: number; strokeWidth?: number; className?: string };

function ReservedIcon({ size = 28, strokeWidth = 1.75, className }: IconProps) {
  return (
    <span className={`relative inline-flex ${className ?? ""}`}>
      <Package size={size} strokeWidth={strokeWidth} aria-hidden />
      <Clock
        size={Math.round(size * 0.5)}
        strokeWidth={2.5}
        aria-hidden
          className="absolute -right-1.5 -top-1.5 rounded-full bg-white"
      />
    </span>
  );
}

const STATUS_ICONS: Record<string, LucideIcon | ComponentType<IconProps>> = {
  available: Package,
  shipped: PackageCheck,
  damaged: PackageX,
  picked: ClipboardCheck,
  reserved: ReservedIcon,
};

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const CORNER_ORDER: CornerPosition[] = ["top-left", "top-right", "bottom-left", "bottom-right"];

const LINE_GAP = 8;
const BOTTOM_LINE_OFFSET = 22;

const CORNER_POINTS: Record<
  CornerPosition,
  {
    card: (rect: DOMRect) => { x: number; y: number };
    center: (rect: DOMRect) => { x: number; y: number };
  }
> = {
  "top-left": {
    card: (rect) => ({ x: rect.right + LINE_GAP, y: rect.top + rect.height / 2 }),
    center: (rect) => ({ x: rect.left - LINE_GAP, y: rect.top + rect.height / 2 }),
  },
  "top-right": {
    card: (rect) => ({ x: rect.left - LINE_GAP, y: rect.top + rect.height / 2 }),
    center: (rect) => ({ x: rect.right + LINE_GAP, y: rect.top + rect.height / 2 }),
  },
  "bottom-left": {
    card: (rect) => ({ x: rect.right + LINE_GAP, y: rect.top + rect.height / 2 + BOTTOM_LINE_OFFSET }),
    center: (rect) => ({ x: rect.left - LINE_GAP, y: rect.top + rect.height / 2 + BOTTOM_LINE_OFFSET }),
  },
  "bottom-right": {
    card: (rect) => ({ x: rect.left - LINE_GAP, y: rect.top + rect.height / 2 + BOTTOM_LINE_OFFSET }),
    center: (rect) => ({ x: rect.right + LINE_GAP, y: rect.top + rect.height / 2 + BOTTOM_LINE_OFFSET }),
  },
};

type LineCoords = { id: CornerPosition; x1: number; y1: number; x2: number; y2: number };

type StatusItem = { id: string; title: string; description: string };

export default function StatusesSection() {
  const { t } = useLanguage();
  const content = t.inventory.statuses;

  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<CornerPosition, HTMLDivElement | null>>({
    "top-left": null,
    "top-right": null,
    "bottom-left": null,
    "bottom-right": null,
  });

  const [lines, setLines] = useState<LineCoords[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    const center = centerRef.current;
    if (!container || !center) return;

    const updateLines = () => {
      const containerRect = container.getBoundingClientRect();
      setSvgSize({ width: containerRect.width, height: containerRect.height });

      const centerRect = center.getBoundingClientRect();
      const nextLines: LineCoords[] = [];

      CORNER_ORDER.forEach((position) => {
        const card = cardRefs.current[position];
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const points = CORNER_POINTS[position];
        const from = points.card(cardRect);
        const to = points.center(centerRect);

        nextLines.push({
          id: position,
          x1: from.x - containerRect.left,
          y1: from.y - containerRect.top,
          x2: to.x - containerRect.left,
          y2: to.y - containerRect.top,
        });
      });

      setLines(nextLines);
    };

    updateLines();
    const observer = new ResizeObserver(updateLines);
    observer.observe(container);
    window.addEventListener("resize", updateLines);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLines);
    };
  }, []);

  const renderCard = (position: CornerPosition, item: StatusItem) => {
    const Icon = STATUS_ICONS[item.id] ?? Package;

    return (
      <div
        key={item.id}
        ref={(el) => {
          cardRefs.current[position] = el;
        }}
        className="relative z-[1] flex w-full max-w-[280px] flex-col items-center gap-2 rounded-2xl bg-[#eef9f3] px-6 py-8 text-center"
      >
        <Icon size={28} strokeWidth={1.75} aria-hidden className="text-[#24a259]" />
        <span className="font-madani-semibold text-[1.05rem] text-[#22303e]">{item.title}</span>
        <span className="font-madani-regular text-[0.85rem] leading-6 text-[#5f7167]">
          {item.description}
        </span>
      </div>
    );
  };

  const CenterIcon = STATUS_ICONS[content.center.id] ?? Package;

  return (
    <section id="inventory-features" className="bg-white py-14 md:py-20">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="font-madani-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.4] text-[#22303e]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-madani-regular text-[clamp(0.9rem,1.6vw,1rem)] leading-7 text-[#5f7167]">
            {content.subtitle}
          </p>
        </div>

        <div ref={containerRef} dir="ltr" className="relative mx-auto max-w-[1150px]">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            width={svgSize.width}
            height={svgSize.height}
          >
            {lines.map((line) => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#24a259"
                strokeOpacity={0.4}
                strokeWidth={1.5}
                strokeDasharray="5 6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-22"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
            ))}
            {lines.map((line) => (
              <g key={`${line.id}-dots`}>
                <circle cx={line.x1} cy={line.y1} r={3.5} fill="#24a259" fillOpacity={0.55} />
                <circle cx={line.x2} cy={line.y2} r={3.5} fill="#24a259" fillOpacity={0.55} />
              </g>
            ))}
          </svg>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-28">
            <div className="flex flex-col items-center gap-4 md:items-end">
              {renderCard("top-left", content.items[0])}
              {renderCard("bottom-left", content.items[2])}
            </div>

            <div
              ref={centerRef}
              className="relative z-[1] mx-auto flex w-full max-w-[280px] flex-col items-center gap-3 rounded-xl bg-white  py-7 text-center"
            >
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
                <rect
                  x={1.5}
                  y={1.5}
                  width="calc(100% - 3px)"
                  height="calc(100% - 3px)"
                  rx={12}
                  ry={12}
                  fill="none"
                  stroke="#24a259"
                  strokeOpacity={0.6}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="14 10"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-24"
                    dur="1.4s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
              <CenterIcon size={28} strokeWidth={1.75} aria-hidden className="text-[#24a259]" />
              <span className="font-madani-semibold text-[1.05rem] text-[#22303e]">
                {content.center.title}
              </span>
              <span className="font-madani-regular text-[0.85rem] leading-6 text-[#5f7167]">
                {content.center.description}
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-start">
              {renderCard("top-right", content.items[1])}
              {renderCard("bottom-right", content.items[3])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
