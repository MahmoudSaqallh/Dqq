"use client";

import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

type AppFeature = { icon: string; title: string; text: string };

function AppFeatureItem({ icon, title, text }: AppFeature) {
  return (
    <div className="flex flex-col items-start gap-2.5 text-start max-lg:items-center max-lg:text-center">
      <span className="grid size-16 place-items-center rounded-[32px] bg-[#e9f6ee]">
        <Image src={icon} alt="" width={36} height={36} unoptimized />
      </span>
      <h3 className="text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.5] text-[#414141]">{title}</h3>
      <p className="text-base leading-[1.7] text-[#676767]">{text}</p>
    </div>
  );
}

export default function EmployeeAppSection() {
  const { isEn } = useLanguage();

  const content = isEn
    ? {
        title: "Your staff work straight from their phones",
        subtitle: "A simple, fast app that lets your team receive and prepare orders from anywhere with ease.",
        start: [
          { icon: "/order-prep/emp-receive.svg", title: "Receive orders instantly", text: "New orders reach the employee's phone right away" },
          { icon: "/order-prep/emp-prepare.svg", title: "Prepare from the phone", text: "Prepare the order and update its status from anywhere" },
        ],
        end: [
          { icon: "/order-prep/emp-designed.svg", title: "Designed to be simple and direct", text: "Prepare the order and update its status from anywhere" },
          { icon: "/order-prep/emp-performance.svg", title: "Higher performance", text: "Your team gets more done in less time" },
        ],
      }
    : {
        title: "موظفك جاهز يشتغل من جواله مباشرة",
        subtitle: "تطبيق بسيط وسريع يخلي فريقك يستقبل ويجهّز الطلبات من أي مكان بكل سهولة.",
        start: [
          { icon: "/order-prep/emp-receive.svg", title: "استقبال الطلبات مباشرة", text: "الطلبات الجديدة توصل لجوال الموظف فوراً" },
          { icon: "/order-prep/emp-prepare.svg", title: "تجهيز من الجوال", text: "يقدر يجهّز الطلب ويحدّث حالته من أي مكان" },
        ],
        end: [
          { icon: "/order-prep/emp-designed.svg", title: "مصممة خصيصاً عشان تكون سهلة ومباشرة", text: "يقدر يجهّز الطلب ويحدّث حالته من أي مكان" },
          { icon: "/order-prep/emp-performance.svg", title: "أداء أعلى", text: "فريقك ينجز أكثر بوقت أقل" },
        ],
      };

  return (
    <section className="bg-[#f4faf7] py-[clamp(64px,7.8vw,112px)]">
      <div className="site-container flex flex-col items-center gap-12">
        <header className="flex flex-col gap-2 text-center">
          <h2 className="text-[clamp(28px,3.125vw,45px)] font-medium leading-[1.7] text-[#414141]">{content.title}</h2>
          <p className="text-[clamp(16px,1.39vw,20px)] leading-[2] text-[#676767]">{content.subtitle}</p>
        </header>

        <div className="grid w-full grid-cols-[minmax(0,1fr)_440px_minmax(0,1fr)] items-center gap-12 max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1">
          <div className="flex flex-col gap-[140px] max-lg:gap-10">
            {content.start.map((item) => (
              <AppFeatureItem key={item.title} {...item} />
            ))}
          </div>

          <div className="relative h-[607px] w-[440px] max-lg:col-span-2 max-lg:row-start-1 max-lg:mx-auto max-sm:col-span-1 max-sm:h-[500px] max-sm:w-[360px] max-sm:max-w-full">
            <Image
              src="/order-prep/feature-circle.png"
              alt=""
              aria-hidden
              width={1250}
              height={1250}
              className="order-prep-circle-spin absolute bottom-0 left-0 aspect-square w-full object-contain"
            />
            <Image
              src="/order-prep/feature-phone.png"
              alt={isEn ? "DQQ employee app – order details" : "تطبيق الموظف من دقّق – تفاصيل الطلب"}
              width={849}
              height={1738}
              className="order-prep-phone-float absolute top-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
            />
          </div>

          <div className="flex flex-col gap-[140px] max-lg:gap-10">
            {content.end.map((item) => (
              <AppFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
