"use client";



import { useLanguage } from "../../../../i18n/LanguageContext";



const BRAND_CHARS_AR = ["د", "ق\u0640", "\u0640", "\u0640", "ق"] as const;

const BRAND_CHARS_EN = ["D", "q", "q"] as const;



type AnmtionTowProps = {

  inline?: boolean;

  withBang?: boolean;

  className?: string;

};



export default function AnmtionTow({ inline = false, withBang = true, className = "" }: AnmtionTowProps) {

  const { isEn } = useLanguage();

  const baseChars = isEn ? BRAND_CHARS_EN : BRAND_CHARS_AR;

  const chars = withBang ? [...baseChars, "!"] : [...baseChars];



  return (

    <span

      className={`${

        inline

          ? "brand-letters-stage brand-letters-stage--inline"

          : "brand-letters-stage brand-letters-stage--block"

      } ${className}`.trim()}

      dir={isEn ? "ltr" : "rtl"}

      aria-label={withBang ? (isEn ? "Dqq!" : "دقّق!") : isEn ? "Dqq" : "دقّق"}

    >

      {chars.map((char, index) => (

        <span key={`${isEn ? "en" : "ar"}-${index}`} className={`brand-letter brand-letter--${index}`}>

          {char}

        </span>

      ))}

    </span>

  );

}

