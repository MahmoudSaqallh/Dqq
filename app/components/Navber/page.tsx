"use client";

import {
  ArrowLeft,
  Boxes,
  ChevronDown,
  Clock3,
  Link2,
  MapPin,
  Package,
  PackageCheck,
  Printer,
  RotateCcw,
  Route,
  ScrollText,
  ShoppingCart,
  Truck,
  Users,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import AnmtionTow from "../../ui-commponets/Page/Index/Hero/AnmtionTow";

const MEGA_MENU_ICONS: Record<string, LucideIcon> = {
  orderPrep: PackageCheck,
  routes: Route,
  locations: Warehouse,
  printing: Printer,
  returns: RotateCcw,
  stock: Boxes,
  transfer: Truck,
  purchase: ShoppingCart,
  products: Package,
  automation: Zap,
  permissions: Users,
  activityLog: ScrollText,
  integrations: Link2,
  lateOrders: Clock3,
};

const FEATURE_LINKS: Record<string, string> = {
  orderPrep: "/order-processing",
  routes: "/traking",
  locations: "/sites",
  printing: "/printing",
  returns: "/returns",
  stock: "/inventory",
};
const FEATURE_PATHS = Array.from(new Set(Object.values(FEATURE_LINKS)));

function MegaMenuLink({
  title,
  description,
  iconId,
  href,
}: {
  title: string;
  description: string;
  iconId: string;
  href?: string;
}) {
  const Icon = MEGA_MENU_ICONS[iconId] ?? MapPin;
  const linkHref = href ?? "#";

  return (
    <Link
      href={linkHref}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 no-underline transition-all duration-200 hover:bg-[#f0faf4]"
    >
      <span className="mt-0.5 shrink-0 text-[#6f7f77] transition-colors group-hover:text-[#24a259]">
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.95rem] font-semibold leading-snug text-[#22303e] transition-colors group-hover:text-[#24a259]">
          {title}
        </span>
        <span className="mt-1 block text-[0.82rem] leading-[1.55] text-[#6f7f77]">{description}</span>
      </span>
    </Link>
  );
}

export default function Navber() {
  const { t, locale, toggleLocale, isEn } = useLanguage();
  const pathname = usePathname();
  const nav = t.nav;
  const megaMenu = nav.megaMenu;
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [megaAnimKey, setMegaAnimKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const sectionHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const navItems = [
    { key: "home", label: nav.home, href: sectionHref("#home"), sectionId: "home" },
    { key: "why", label: nav.why, href: sectionHref("#why-dqq"), sectionId: "why-dqq" },
    { key: "about", label: nav.about, href: sectionHref("#about"), sectionId: "about" },
    { key: "domains", label: nav.domains, href: sectionHref("#domains"), sectionId: "domains" },
    { key: "oneDashboard", label: nav.oneDashboard, href: sectionHref("#oneplace"), sectionId: "oneplace" },
    { key: "reviews", label: nav.reviews, href: sectionHref("#testimonials"), sectionId: "testimonials" },
    { key: "faq", label: nav.faq, href: sectionHref("#faq"), sectionId: "faq" },
  ] as const;

  const isFeaturesActive =
    pathname !== "/" && FEATURE_PATHS.some((featurePath) => pathname.startsWith(featurePath));

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMega = () => {
    clearCloseTimeout();
    setIsMegaOpen((prev) => {
      if (!prev) setMegaAnimKey((key) => key + 1);
      return true;
    });
  };

  const closeMegaWithDelay = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 260);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const HEADER_OFFSET = 110;
    const sectionIds = navItems.map((item) => item.sectionId);

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + HEADER_OFFSET;

      if (scrollMarker < 180) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (scrollMarker >= section.offsetTop - 48) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    const rafId = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [locale, pathname]);

  const navLinkClass = (sectionId: string) =>
    `inline-flex items-center gap-1 text-base font-medium leading-none no-underline transition-colors ${
      activeSection === sectionId ? "text-[#24a259]" : "text-[#22303e] hover:text-[#24a259]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#eef3ef] bg-white">
      <div className="site-container flex min-h-[74px] items-center justify-between gap-5 max-[1140px]:relative max-[1140px]:min-h-[68px] max-[1140px]:justify-start">
        <button
          className="hidden h-[2.2rem] w-[2.2rem] place-items-center rounded-[0.55rem] border-0 bg-[#eef6f0] text-[1.1rem] text-[#24a259] max-[1140px]:absolute max-[1140px]:left-[0.35rem] max-[1140px]:top-1/2 max-[1140px]:z-[2] max-[1140px]:inline-grid max-[1140px]:-translate-y-1/2"
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={nav.openMenu}
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>

        <div className="flex items-center max-[1140px]:absolute max-[1140px]:top-1/2 max-[1140px]:z-[1] max-[1140px]:-translate-y-1/2">
          <img
            src="https://dqq.ai/images/nav-logo.webp"
            alt="دقّق"
            className="h-auto w-28 max-[1140px]:w-[120px] max-[1140px]:max-w-[42vw]"
          />
        </div>

        <nav
          className={`flex items-center gap-6 max-[1140px]:hidden ${isEn ? "[direction:ltr]" : ""}`}
          aria-label="Main navigation"
        >
          <Link href={sectionHref("#home")} className={navLinkClass("home")}>
            {nav.home}
          </Link>
          <Link href={sectionHref("#why-dqq")} className={navLinkClass("why-dqq")}>
            {nav.why}
          </Link>

          <div
            className="static"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaWithDelay}
            onFocusCapture={openMega}
            onBlurCapture={closeMegaWithDelay}
          >
            <button
              className={`inline-flex items-center gap-1 border-0 bg-transparent p-0 text-base font-medium leading-none ${
                isFeaturesActive ? "text-[#24a259]" : "text-[#22303e] hover:text-[#24a259]"
              }`}
              type="button"
              aria-haspopup="true"
              aria-expanded={isMegaOpen}
              onClick={() => {
                setIsMegaOpen((prev) => {
                  if (!prev) setMegaAnimKey((key) => key + 1);
                  return !prev;
                });
              }}
            >
              {nav.features}
              <span
                className={`translate-y-[1px] text-[#6f7f77] transition-all duration-300 ${isMegaOpen ? "rotate-180 text-[#24a259]" : ""}`}
                aria-hidden="true"
              >
                <ChevronDown size={16} />
              </span>
            </button>

            <div
              className={`mega-menu-panel ${isMegaOpen ? "mega-menu-panel--open" : "mega-menu-panel--closed"}`}
            >
              <div key={megaAnimKey} className="site-container mega-menu-grid grid grid-cols-4 gap-x-8 py-9">
                <div className="mega-menu-intro px-1 text-center">
                  <h3 className="mb-4 text-[1.35rem] font-semibold leading-snug text-[#22303e]">
                    {megaMenu.intro.titleBefore}
                    <AnmtionTow inline withBang={false} className="brand-letters-stage--mega" />
                  </h3>
                  <p className="mega-menu-desc mx-auto max-w-[15rem] text-[0.92rem] leading-[1.75] text-[#6f7f77]">
                    {megaMenu.intro.description}
                  </p>
                </div>

                {megaMenu.columns.map((column, index) => (
                  <div
                    key={column.id}
                    className="mega-menu-column border-s border-[#edf3ee] ps-5"
                    style={{ animationDelay: `${0.08 + index * 0.07}s` }}
                  >
                    <h4 className="mb-4 text-base font-semibold text-[#24a259]">{column.title}</h4>
                    <div className="flex flex-col gap-0.5">
                      {column.items.map((item) => (
                        <MegaMenuLink
                          key={item.id}
                          iconId={item.id}
                          title={item.title}
                          description={item.description}
                          href={FEATURE_LINKS[item.id]}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href={sectionHref("#about")} className={navLinkClass("about")}>
            {nav.about}
          </Link>
          <Link href={sectionHref("#domains")} className={navLinkClass("domains")}>
            {nav.domains}
          </Link>
          <Link href={sectionHref("#oneplace")} className={navLinkClass("oneplace")}>
            {nav.oneDashboard}
          </Link>
          <Link href={sectionHref("#testimonials")} className={navLinkClass("testimonials")}>
            {nav.reviews}
          </Link>
          <Link href={sectionHref("#faq")} className={navLinkClass("faq")}>
            {nav.faq}
          </Link>
        </nav>

        <div className={`flex items-center gap-3 max-[1140px]:hidden ${isEn ? "[direction:ltr]" : ""}`}>
          <button
            className="relative flex items-center gap-2 overflow-hidden rounded-[0.7rem] border border-transparent bg-[#24a259] px-4 py-[0.55rem] text-[0.95rem] text-white"
            type="button"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-14 w-10 -skew-x-12 bg-white/35 blur-[1px] join-btn-shine" />
            <span className="relative z-[1]">{nav.join}</span>
            <ArrowLeft className="relative z-[1] h-4 w-4" />
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-[0.7rem] border border-transparent bg-[#f3f7f4] px-4 py-[0.55rem] text-[0.95rem] text-[#335445]"
          >
            {nav.login}
          </Link>

          <button
            className="grid h-9 min-w-18 place-items-center rounded-full border border-[#dce8df] bg-white px-3 text-[0.9rem]"
            type="button"
            onClick={toggleLocale}
          >
            {nav.switchLang}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-[calc(100%+1px)] right-0 left-0 z-[70] border-t border-[#e6f0e9] bg-white shadow-[0_14px_28px_rgba(12,24,18,0.08)] transition-all duration-200 min-[1141px]:hidden ${isMobileMenuOpen ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"}`}
      >
        <div className="site-container max-h-[calc(100vh-68px)] overflow-y-auto pt-2 pb-4 [scrollbar-color:#24a259_#e9f6ee] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#e9f6ee] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#24a259]">
          <div
            className={`overflow-hidden rounded-2xl border border-[#e8f2eb] bg-[#fbfdfb] ${isEn ? "[direction:ltr]" : ""}`}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`flex min-h-14 w-full items-center justify-start border-0 border-b border-[#edf2ee] bg-white px-5 text-[1.06rem] font-medium no-underline transition-colors ${
                  activeSection === item.sectionId ? "text-[#24a259]" : "text-[#1f2e2a]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className={`flex min-h-14 w-full items-center justify-between border-0 bg-white px-5 text-[1.06rem] font-medium ${
                isFeaturesActive ? "text-[#24a259]" : "text-[#1f2e2a]"
              }`}
              type="button"
              onClick={() => setIsMobileFeaturesOpen((prev) => !prev)}
              aria-expanded={isMobileFeaturesOpen}
            >
              {nav.features}
              <span aria-hidden="true">{isMobileFeaturesOpen ? "▴" : "▾"}</span>
            </button>

            <div
              className={`overflow-hidden bg-[#f6fbf8] transition-all duration-200 ${isMobileFeaturesOpen ? "max-h-[980px]" : "max-h-0"}`}
            >
              {megaMenu.columns.map((column) => (
                <div key={column.id} className="border-t border-[#e6efe9] px-4 py-3">
                  <p className="mb-2 px-1 text-sm font-semibold text-[#24a259]">{column.title}</p>
                  <div className="flex flex-col gap-1">
                    {column.items.map((item) => (
                      <MegaMenuLink
                        key={item.id}
                        iconId={item.id}
                        title={item.title}
                        description={item.description}
                        href={FEATURE_LINKS[item.id]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-4 grid gap-2 p-4 ${isEn ? "[direction:ltr]" : ""}`}>
            <button
              className="relative min-h-12 w-full overflow-hidden rounded-[0.8rem] border border-transparent bg-[#24a259] px-4 py-[0.55rem] text-[1.05rem] text-white"
              type="button"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-14 w-10 -skew-x-12 bg-white/35 blur-[1px] join-btn-shine" />
              <span className="relative z-[1]">{nav.join}</span>
            </button>
            <Link
              href="/login"
              className="flex min-h-12 w-full items-center justify-center rounded-[0.8rem] border border-transparent bg-[#f3f7f4] px-4 py-[0.55rem] text-[1.05rem] text-[#335445]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {nav.login}
            </Link>
            <button
              className="min-h-12 w-full rounded-[0.8rem] border border-transparent bg-[#f3f7f4] px-4 py-[0.55rem] text-[1.05rem] text-[#335445]"
              type="button"
              onClick={() => {
                toggleLocale();
                setIsMobileMenuOpen(false);
              }}
            >
              {nav.switchLang}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
