"use client";

import Image from "next/image";
import { useLanguage } from "../../../../i18n/LanguageContext";

export default function WhatsAppSection() {
  const { t, isEn, dir } = useLanguage();
  const section = t.whatsApp;

  return (
    <section id="whatsapp" className="py-14 md:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2rem] bg-[#eef8f2] px-5 py-10 md:rounded-[2.5rem] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12" dir="ltr">
            <div className="order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[680px] lg:-ms-8 xl:-ms-12">
                <Image
                  src="/images/whatsapp-automation.png"
                  alt={section.imageAlt}
                  width={1280}
                  height={860}
                  className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_28px_56px_rgba(16,24,20,0.14)]"
                />

                <div className="pointer-events-none absolute -bottom-4 -right-2 z-[2] w-[92%] rounded-[1.9rem] border border-[#e7ebe9] bg-white/95 p-4 shadow-[0_24px_50px_rgba(16,24,20,0.12)] backdrop-blur-[1px] md:p-5 lg:-bottom-8 lg:-right-8 lg:w-[85%]">
                  <div className="text-right" dir={dir}>
                    <h3 className="font-madani-semibold text-[1.2rem] text-[#333333]">الإجراءات</h3>
                    <p className="mt-1 font-madani-regular text-[0.84rem] leading-7 text-[#8b9591]">
                      اختر الأحداث أو الإجراءات المراد تفعيلها ذاتياً فور مطابقة الشروط
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#edf2ef] bg-[#f8fbf9] p-3 text-right md:p-4" dir={dir}>
                    <p className="font-madani-medium text-[0.95rem] text-[#3d4642]">الإجراء (1)</p>
                    <div className="mt-3 grid gap-2.5 md:grid-cols-2">
                      <div className="rounded-xl border border-[#e3e9e5] bg-white px-3 py-2.5">
                        <p className="font-madani-regular text-[0.78rem] text-[#8a9390]">نوع الإجراء</p>
                        <p className="mt-1 font-madani-medium text-[0.88rem] text-[#2f3a36]">إرسال واتس اب</p>
                      </div>
                      <div className="rounded-xl border border-[#e3e9e5] bg-white px-3 py-2.5">
                        <p className="font-madani-regular text-[0.78rem] text-[#8a9390]">اختر القالب</p>
                        <p className="mt-1 font-madani-medium text-[0.88rem] text-[#2f3a36]">جاري تجهيز الطلب</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`order-2 space-y-5 md:space-y-6 ${isEn ? "text-left" : "text-right"}`}
              dir={dir}
            >
              <span className="inline-flex rounded-full bg-[#fff3dc] px-4 py-1.5 font-madani-medium text-sm text-[#c4841a]">
                {section.badge}
              </span>

              <h2 className="max-w-[28rem] font-madani-semibold text-[clamp(1.45rem,2.4vw,2.15rem)] leading-[1.45] text-[#333333]">
                {section.title}
              </h2>

              <p className="max-w-[32rem] font-madani-regular text-[clamp(0.92rem,1.15vw,1.08rem)] leading-[1.95] text-[#666666]">
                {section.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
