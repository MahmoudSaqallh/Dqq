"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function AutmticMassage() {
  const { isEn } = useLanguage();

  const content = isEn
    ? {
        badge: "Coming soon",
        title: "Automated WhatsApp messages for customers",
        desc: "Send WhatsApp messages with a custom template when order status changes, so your customer always knows where their order is.",
        cardTitle: "Actions",
        cardDesc: "Select the events or actions to run automatically when conditions match.",
        actionLabel: "Action (1)",
        actionType: "Action type",
        actionTypeValue: "Send WhatsApp",
        template: "Choose template",
        templateValue: "Order is being prepared",
      }
    : {
        badge: "قريباً",
        title: "رسائل واتساب تلقائية للعملاء",
        desc: "إرسال رسائل واتساب بقالب مخصص عند تغيّر حالة الطلب، عميلك يعرف وين طلبه بدون ما تتصل فيه.",
        cardTitle: "الإجراءات",
        cardDesc: "اختر الأحداث أو الإجراءات المراد تفعيلها ذاتياً فور مطابقة الشروط",
        actionLabel: "الإجراء (1)",
        actionType: "نوع الإجراء",
        actionTypeValue: "إرسال واتس اب",
        template: "اختر القالب",
        templateValue: "جاري تجهيز الطلب",
      };

  return (
    <section id="automatic-message" className="bg-white py-14 md:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#eef8f2] px-5 py-10 md:rounded-[2.7rem] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12" dir="ltr">
            <div className="order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[700px] lg:-ms-8 xl:-ms-12">
                <Image
                  src="/images/whatsapp-automation.png"
                  alt={content.title}
                  width={1280}
                  height={860}
                  className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_26px_56px_rgba(16,24,20,0.14)]"
                />

                <div className="pointer-events-none absolute -bottom-4 -right-2 z-[2] w-[92%] rounded-[1.9rem] border border-[#e7ebe9] bg-white/95 p-4 shadow-[0_24px_50px_rgba(16,24,20,0.12)] backdrop-blur-[1px] md:p-5 lg:-bottom-8 lg:-right-8 lg:w-[85%] lg:animate-[boxGlow_3s_ease-in-out_infinite]">
                  <div className={`text-right ${isEn ? "[direction:ltr] text-left" : ""}`}>
                    <h3 className="font-madani-semibold text-[1.2rem] text-[#333333]">{content.cardTitle}</h3>
                    <p className="mt-1 font-madani-regular text-[0.84rem] leading-7 text-[#8b9591]">
                      {content.cardDesc}
                    </p>
                  </div>

                  <div
                    className={`mt-4 rounded-2xl border border-[#edf2ef] bg-[#f8fbf9] p-3 text-right md:p-4 ${isEn ? "[direction:ltr] text-left" : ""}`}
                  >
                    <p className="font-madani-medium text-[0.95rem] text-[#3d4642]">{content.actionLabel}</p>
                    <div className="mt-3 grid gap-2.5 md:grid-cols-2">
                      <div className="rounded-xl border border-[#e3e9e5] bg-white px-3 py-2.5">
                        <p className="font-madani-regular text-[0.78rem] text-[#8a9390]">{content.actionType}</p>
                        <p className="mt-1 font-madani-medium text-[0.88rem] text-[#2f3a36]">
                          {content.actionTypeValue}
                        </p>
                      </div>
                      <div className="rounded-xl border border-[#e3e9e5] bg-white px-3 py-2.5">
                        <p className="font-madani-regular text-[0.78rem] text-[#8a9390]">{content.template}</p>
                        <p className="mt-1 font-madani-medium text-[0.88rem] text-[#2f3a36]">
                          {content.templateValue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`order-2 space-y-5 md:space-y-6 lg:ps-8 xl:ps-12 ${isEn ? "text-left lg:ps-0 lg:pe-10 xl:pe-14" : "text-right"}`}
            >
              <span className="inline-flex rounded-full bg-[#fff3dc] px-5 py-2 font-madani-medium text-sm text-[#c4841a]">
                {content.badge}
              </span>

              <h2 className="automatic-message-title max-w-[31rem] font-madani-semibold text-[clamp(1.45rem,2.4vw,2.2rem)] leading-[1.45] text-[#333333]">
                {content.title}
              </h2>

              <p className="max-w-[33rem] font-madani-regular text-[clamp(0.92rem,1.15vw,1.08rem)] leading-[1.95] text-[#666666]">
                {content.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
