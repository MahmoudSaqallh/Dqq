"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "../i18n/LanguageContext";
import Navber from "./Navber/page";
import Footer from "./Footer/page";
import ScrollTopButton from "./ScrollTopButton";
import PageLoader from "./PageLoader";

const STANDALONE_ROUTES = ["/login"];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isStandalone) {
    return (
      <LanguageProvider>
        <PageLoader />
        {children}
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <PageLoader />
      <Navber />
      {children}
      <ScrollTopButton />
      <Footer />
    </LanguageProvider>
  );
}
