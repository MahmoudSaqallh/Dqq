"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "../i18n/LanguageContext";
import Navber from "./Navber/page";
import Footer from "./Footer/page";
import ScrollTopButton from "./ScrollTopButton";
import PageLoader from "./PageLoader";

export default function AppShell({ children }: { children: ReactNode }) {
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
