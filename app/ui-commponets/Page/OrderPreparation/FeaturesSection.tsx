"use client";

import FeatureList from "../Shared/FeatureList";
import { useLanguage } from "../../../i18n/LanguageContext";

const IMAGES = [
  "/order-prep/barcode.png",
  "/order-prep/notes.png",
  "/order-prep/customizations.png",
  "/order-prep/show-orders.jpg",
  "/order-prep/split-order.png",
];

const AR = {
  title: "تجهيز الطلبات بتحقق كامل وبدون أخطاء",
  subtitle: "كل طلب يوصل لمستودعك يظهر بشكل واضح ومنظّم، مع كل التفاصيل اللي تحتاجها عشان تجهّزه بسرعة وبدون تشتت.",
  problemLabel: "وش المشكلة؟",
  solutionLabel: "كيف حليناها؟",
  features: [
    {
      nav: "تحقق بالباركود",
      problem: "الموظف يرسل منتج غلط أو كمية ناقصة",
      solutionTitle: "تحقق بالباركود — منتج منتج",
      solutionText:
        "الموظف يمسح باركود البوليصة فتظهر كل منتجات الطلب بكمياتها. بعدين يمسح باركود كل منتج قبل ما يحطه بالكرتون — النظام ما يسمح له يكمّل إلا لما يتطابق المنتج والكمية 100%.",
    },
    {
      nav: "ملاحظات العميل",
      problem: "ملاحظات العميل ما توصل للموظف",
      solutionTitle: "ملاحظات العميل تظهر للموظف",
      solutionText: 'لحظة ما يمسح الموظف البوليصة، ملاحظات العميل تظهر واضحة على التطبيق. ما فيه حجة "ما شفتها".',
    },
    {
      nav: "التخصيصات",
      problem: "تخصيصات المنتج ضايعة",
      solutionTitle: "تخصيصات تظهر تلقائيًا مع كل طلب",
      solutionText: "كل تخصيص (اللون، المقاس، العدسة، النقش) يظهر مربوط بالمنتج. الموظف يعرف بالضبط وش يجهّز.",
    },
    {
      nav: "التحكم بالظهور",
      problem: "طلبات تظهر للموظف وهي مو جاهزة",
      solutionTitle: "تتحكم متى يظهر الطلب للموظف",
      solutionText: "إعدادات مرنة لكل متجر — الطلب ما يوصل للموظف إلا لما يكون جاهز فعلاً للتجهيز.",
    },
    {
      nav: "تجزئة الطلب",
      problem: "منتج ناقص = الطلب كله يتعلّق",
      solutionTitle: "تجزئة الطلب — اشحن الجاهز",
      solutionText: "الموظف يشحن المتوفر الآن، والناقص يبقى بطلب جزئي ينشحن لما يتوفر. العميل يستلم أسرع.",
    },
  ],
};

const EN: typeof AR = {
  title: "Order preparation with full verification and zero mistakes",
  subtitle:
    "Every order that reaches your warehouse shows up clearly and organized, with all the details you need to prepare it fast and without distraction.",
  problemLabel: "What's the problem?",
  solutionLabel: "How we solved it",
  features: [
    {
      nav: "Barcode verification",
      problem: "Staff ship the wrong product or a short quantity",
      solutionTitle: "Barcode verification, item by item",
      solutionText:
        "The employee scans the waybill barcode and every product in the order appears with its quantity. Then they scan each product before packing it — the system won't let them finish until product and quantity match 100%.",
    },
    {
      nav: "Customer notes",
      problem: "Customer notes never reach the employee",
      solutionTitle: "Customer notes shown to the employee",
      solutionText: 'The moment the employee scans the waybill, the customer notes appear clearly in the app. No more "I didn\'t see it".',
    },
    {
      nav: "Customizations",
      problem: "Product customizations get lost",
      solutionTitle: "Customizations appear with every order",
      solutionText: "Every customization (color, size, lens, engraving) is linked to the product. The employee knows exactly what to prepare.",
    },
    {
      nav: "Visibility control",
      problem: "Orders reach staff before they're ready",
      solutionTitle: "You control when an order appears",
      solutionText: "Flexible settings per store — an order only reaches the employee once it's truly ready to prepare.",
    },
    {
      nav: "Split orders",
      problem: "One missing item holds up the whole order",
      solutionTitle: "Split the order, ship what's ready",
      solutionText: "Ship what's available now; the missing items stay in a partial order that ships once in stock. Customers get it faster.",
    },
  ],
};

export default function FeaturesSection() {
  const { isEn } = useLanguage();
  const content = isEn ? EN : AR;

  return (
    <FeatureList
      title={content.title}
      subtitle={content.subtitle}
      problemLabel={content.problemLabel}
      solutionLabel={content.solutionLabel}
      // Figma alternates sides: text first on odd blocks, image first on even ones
      features={content.features.map((f, i) => ({
        ...f,
        id: `feature-${i + 1}`,
        image: IMAGES[i],
        imageFirst: i % 2 === 1,
      }))}
    />
  );
}
