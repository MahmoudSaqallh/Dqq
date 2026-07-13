"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";

type RouteFlowTab = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  layout: "visual-text" | "text-visual";
  visualBg: string;
};

type NavSegment = {
  d: string;
  index: number;
};

function getNumberCenterX(button: HTMLButtonElement, containerRect: DOMRect) {
  const badge = button.querySelector("[data-route-flow-badge]");
  if (badge) {
    const badgeRect = badge.getBoundingClientRect();
    return badgeRect.left + badgeRect.width / 2 - containerRect.left;
  }

  const rect = button.getBoundingClientRect();
  return rect.right - 18 - containerRect.left;
}

function RouteFlowNavPath({
  tabs,
  navItemRefs,
  containerRef,
  activeIndex,
  isVisible,
}: {
  tabs: RouteFlowTab[];
  navItemRefs: RefObject<Record<string, HTMLButtonElement | null>>;
  containerRef: RefObject<HTMLDivElement | null>;
  activeIndex: number;
  isVisible: boolean;
}) {
  const [segments, setSegments] = useState<NavSegment[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const nextSegments: NavSegment[] = [];

      for (let i = 0; i < tabs.length - 1; i++) {
        const fromBtn = navItemRefs.current?.[tabs[i].id];
        const toBtn = navItemRefs.current?.[tabs[i + 1].id];
        if (!fromBtn || !toBtn) continue;

        const fromRect = fromBtn.getBoundingClientRect();
        const toRect = toBtn.getBoundingClientRect();
        const x = (getNumberCenterX(fromBtn, containerRect) + getNumberCenterX(toBtn, containerRect)) / 2;
        const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
        const y2 = toRect.top + toRect.height / 2 - containerRect.top;

        nextSegments.push({
          index: i,
          d: `M ${x} ${y1} L ${x} ${y2}`,
        });
      }

      setSegments(nextSegments);
      setSvgSize({ width: container.offsetWidth, height: container.offsetHeight });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [tabs, activeIndex, containerRef, navItemRefs]);

  if (segments.length === 0 || svgSize.width === 0) return null;

  return (
    <svg
      aria-hidden
      className="route-flow-nav-path pointer-events-none absolute inset-0 z-0 hidden overflow-visible lg:block"
      width={svgSize.width}
      height={svgSize.height}
      viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
      fill="none"
    >
      <defs>
        <linearGradient id="route-flow-nav-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b8ebd0" />
          <stop offset="50%" stopColor="#24a259" />
          <stop offset="100%" stopColor="#1d8a4a" />
        </linearGradient>
      </defs>

      {segments.map((segment) => {
        const isFilled = activeIndex > segment.index;
        const isCurrent = activeIndex === segment.index && isVisible;

        return (
          <g
            key={segment.index}
            className={`route-flow-nav-connector ${isCurrent ? "is-current" : ""}`}
          >
            <path
              className="tracking-path-track"
              pathLength={100}
              d={segment.d}
              stroke="#d8f0e4"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              key={`${segment.index}-${activeIndex}-${isVisible}`}
              className={`tracking-path-line route-flow-nav-segment ${isFilled ? "is-filled" : ""}`}
              pathLength={100}
              d={segment.d}
              stroke="url(#route-flow-nav-grad)"
              strokeWidth="2.25"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}
    </svg>
  );
}

function FlowTextCard({ title, description, isRtl }: { title: string; description: string; isRtl: boolean }) {
  return (
    <div className="order-processing-active-border h-full rounded-[1.75rem] md:rounded-[2rem]">
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className="order-processing-active-border-inner relative flex min-h-[280px] flex-col items-center justify-center rounded-[calc(1.75rem-3px)] bg-white px-6 py-8 text-center md:min-h-[360px] md:rounded-[calc(2rem-3px)] md:px-9 md:py-10"
      >
        <span className="absolute end-0 top-0 h-[3px] w-14 rounded-full bg-[#24a259]" aria-hidden />
        <span className="absolute bottom-0 start-0 h-14 w-[3px] rounded-full bg-[#24a259]" aria-hidden />
        <h3 className="font-madani-semibold text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.45] text-[#24a259]">{title}</h3>
        <p className="mt-5 max-w-[34ch] font-madani-regular text-[clamp(0.9rem,1.5vw,1rem)] leading-8 text-[#5f7167] md:leading-9">
          {description}
        </p>
      </div>
    </div>
  );
}

function FlowTextPanel({ title, description, isRtl }: { title: string; description: string; isRtl: boolean }) {
  return (
    <div className="order-processing-active-border h-full rounded-[1.75rem] md:rounded-[2rem]">
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className="order-processing-active-border-inner flex min-h-[280px] flex-col items-center justify-center rounded-[calc(1.75rem-3px)] bg-[#f4f6f5] px-6 py-8 text-center md:min-h-[360px] md:rounded-[calc(2rem-3px)] md:px-9 md:py-10"
      >
        <h3 className="font-madani-semibold text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.45] text-[#24a259]">{title}</h3>
        <p className="mt-5 max-w-[34ch] font-madani-regular text-[clamp(0.9rem,1.5vw,1rem)] leading-8 text-[#5f7167] md:leading-9">
          {description}
        </p>
      </div>
    </div>
  );
}

function FlowVisualPanel({ image, title, compact }: { image: string; title: string; compact?: boolean }) {
  return (
    <div className="order-processing-active-border h-full rounded-[1.75rem] md:rounded-[2rem]">
      <div className="order-processing-active-border-inner flex min-h-[280px] items-center justify-center overflow-hidden rounded-[calc(1.75rem-3px)] bg-[radial-gradient(ellipse_at_center,#eef9f3_0%,#f8fcfa_52%,#ffffff_100%)] p-5 md:min-h-[360px] md:rounded-[calc(2rem-3px)] md:p-8">
        <div className={`relative flex h-full w-full items-center justify-center ${compact ? "max-w-[280px]" : "max-w-[520px]"}`}>
          <Image
            src={image}
            alt={title}
            width={1040}
            height={640}
            className="h-auto w-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default function RouteFlowSection() {
  const { t, isEn } = useLanguage();
  const tabs = t.tracking.routeFlow.tabs as RouteFlowTab[];
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [navPathVisible, setNavPathVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeIndex = Math.max(
    tabs.findIndex((tab) => tab.id === activeId),
    0
  );

  useEffect(() => {
    if (tabs[0]) setActiveId(tabs[0].id);
  }, [tabs]);

  useEffect(() => {
    const sections = tabs
      .map((tab) => sectionRefs.current[tab.id])
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.4, 0.55], rootMargin: "-28% 0px -38% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tabs]);

  useEffect(() => {
    const navItem = navItemRefs.current[activeId];
    if (!navItem) return;
    setIndicatorTop(navItem.offsetTop);
  }, [activeId, tabs]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavPathVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      setNavPathVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTab = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveId(id);
  };

  return (
    <section ref={sectionRef} id="tracking-route-flow" className="bg-white py-14 md:py-20">
      <div className="site-container">
        <div dir="ltr" className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10">
          <aside dir={isEn ? "ltr" : "rtl"} className="lg:sticky lg:top-24 lg:self-start">
            <div ref={navListRef} className="relative flex flex-col gap-2">
              <RouteFlowNavPath
                tabs={tabs}
                navItemRefs={navItemRefs}
                containerRef={navListRef}
                activeIndex={activeIndex}
                isVisible={navPathVisible}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 z-[1] rounded-full bg-[#eef9f3] transition-[top,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ top: indicatorTop, height: navItemRefs.current[activeId]?.offsetHeight ?? 48 }}
              />

              {tabs.map((tab) => {
                const isActive = tab.id === activeId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    ref={(el) => {
                      navItemRefs.current[tab.id] = el;
                    }}
                    onClick={() => scrollToTab(tab.id)}
                    className={`relative z-10 flex items-center justify-between rounded-full px-4 py-3 text-start transition-colors duration-300 ${
                      isActive ? "text-[#24a259]" : "text-[#9aa8a1] hover:text-[#6d7d75]"
                    }`}
                  >
                    <span className="font-madani-semibold text-[0.95rem] md:text-[1rem]">{tab.label}</span>
                    <span
                      data-route-flow-badge
                      className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[0.72rem] font-medium transition-colors duration-300 ${
                        isActive ? "bg-[#d8f0e4] text-[#24a259]" : "bg-[#f1f4f2] text-[#9aa8a1]"
                      }`}
                    >
                      {tab.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="space-y-10 md:space-y-14">
            {tabs.map((tab) => {
              const visual = <FlowVisualPanel image={tab.image} title={tab.title} compact={tab.id === "pick-lists"} />;
              const textCard = <FlowTextCard title={tab.title} description={tab.description} isRtl={!isEn} />;
              const textPanel = <FlowTextPanel title={tab.title} description={tab.description} isRtl={!isEn} />;

              return (
                <article
                  key={tab.id}
                  id={tab.id}
                  ref={(el) => {
                    sectionRefs.current[tab.id] = el;
                  }}
                  className="scroll-mt-28"
                >
                  <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
                    {tab.layout === "visual-text" ? (
                      <>
                        {visual}
                        {textCard}
                      </>
                    ) : (
                      <>
                        {textPanel}
                        {visual}
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
