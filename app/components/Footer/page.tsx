"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

const CONTACT = {
  email: "support@dqq.ai",
  phone: "+966 55 611 6528",
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center text-[#2f3a36] transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { t, dir, isEn } = useLanguage();
  const footer = t.footer;

  const quickLinks = [
    { label: footer.joinUs, href: "#" },
    { label: footer.faq, href: "#faq" },
    { label: footer.privacy, href: "#" },
  ];

  return (
    <footer className="mt-auto bg-[#f4faf6]" dir={dir}>
      <div className="site-container py-10 md:py-12">
        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-10 ${
            isEn ? "text-left" : "text-right"
          }`}
        >
          <div className={`lg:col-span-4 ${isEn ? "lg:pe-0 lg:ps-4" : "lg:pe-4"}`}>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="https://dqq.ai/images/nav-logo.webp"
                alt="دقّق"
                width={180}
                height={62}
                className="h-12 w-auto md:h-14"
              />
            </Link>

            <p className="mt-4 max-w-[25rem] font-madani-regular text-[0.92rem] leading-8 text-[#4f5955]">
              {footer.desc}
            </p>

            <div className="mt-5 flex items-center gap-3.5 text-[1.1rem]">
              <SocialLink href="mailto:support@dqq.ai" label={footer.emailAria}>
                <FaEnvelope className="h-[1.05rem] w-[1.05rem]" />
              </SocialLink>
              <SocialLink href="#" label="X">
                <XIcon className="h-[0.95rem] w-[0.95rem]" />
              </SocialLink>
              <SocialLink href="#" label={footer.whatsappAria}>
                <FaWhatsapp className="h-[1.05rem] w-[1.05rem]" />
              </SocialLink>
              <SocialLink href="#" label={footer.instagramAria}>
                <FaInstagram className="h-[1.05rem] w-[1.05rem]" />
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-3 lg:justify-self-center">
            <h3 className="font-madani-semibold text-[1.03rem] text-[#333333]">
              {footer.quickAccess}
            </h3>
            <ul className="mt-4 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-madani-regular text-[0.92rem] text-[#5e6763] transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:col-span-5 ${isEn ? "lg:pe-6" : "lg:ps-6"}`}>
            <h3 className="font-madani-semibold text-[1.03rem] text-[#333333]">
              {footer.contactUs}
            </h3>
            <div className="mt-4 space-y-3.5">
              <div className="grid grid-cols-[auto_1fr] items-center gap-x-5">
                <span className="font-madani-regular text-[0.92rem] text-[#5e6763]">
                  {footer.email}
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-madani-regular text-[0.92rem] text-[#2f3a36] transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-center gap-x-5">
                <span className="font-madani-regular text-[0.92rem] text-[#5e6763]">
                  {footer.phone}
                </span>
                <span className="font-madani-regular text-[0.92rem] text-[#2f3a36]" dir="ltr">
                  {CONTACT.phone}
                </span>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-x-5">
                <span className="font-madani-regular text-[0.92rem] text-[#5e6763]">
                  {footer.addressLabel}
                </span>
                <span className="font-madani-regular text-[0.92rem] leading-7 text-[#2f3a36]">
                  {footer.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e3ebe6] bg-[#edf5f0] py-3.5">
        <p className="text-center font-madani-regular text-[0.84rem] text-[#4f5955]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
