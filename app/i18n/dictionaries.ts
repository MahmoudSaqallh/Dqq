export type Locale = "ar" | "en";

export const dictionaries = {
  ar: {
    nav: {
      home: "الرئيسية",
      why: "لماذا دقّق",
      features: "المميزات",
      about: "عن دقّق",
      domains: "مجالات دقّق",
      oneDashboard: "إدارة واحدة",
      reviews: "آراء العملاء",
      faq: "الأسئلة الشائعة",
      join: "انضم إلى دقّق",
      login: "تسجيل الدخول",
      switchLang: "English",
      openMenu: "فتح القائمة",
      megaMenu: {
        intro: {
          titleBefore: "تعرّف على مزايا ",
          description:
            "ميزات ذكية تساعدك على إدارة متجرك بكفاءة، تقليل الأخطاء، وتحسين تجربة العمل",
        },
        columns: [
          {
            id: "warehouse",
            title: "تشغيل المستودع",
            items: [
              {
                id: "orderPrep",
                title: "تجهيز الطلبات",
                description: "جهّز وأرسل الطلبات بخطوات أقل",
              },
              {
                id: "routes",
                title: "المسارات",
                description: "تنظيم خطوات تجهيز الطلبات",
              },
              {
                id: "locations",
                title: "المواقع والمستودعات",
                description: "نظّم مستودعك بشكل واضح",
              },
              {
                id: "printing",
                title: "الطباعة الآلية",
                description: "اطبع بوليصات وأرقام وباركودات وفواتير تلقائياً",
              },
              {
                id: "returns",
                title: "إدارة المرتجعات",
                description: "تتبّع كامل لكل مرتجع",
              },
            ],
          },
          {
            id: "inventory",
            title: "المخزون والمنتجات",
            items: [
              {
                id: "stock",
                title: "المخزون",
                description: "تتبّع الكميات لحظة بلحظة",
              },
              {
                id: "transfer",
                title: "ترحيل المخزون",
                description: "انقل البضائع بين مستودعات بسهولة",
              },
              {
                id: "purchase",
                title: "طلبات الشراء",
                description: "إنشاء وتتبّع طلبات الشراء",
              },
              {
                id: "products",
                title: "المنتجات",
                description: "بيانات منتجات منظّمة ومتزامنة",
              },
            ],
          },
          {
            id: "management",
            title: "الإدارة والتكامل",
            items: [
              {
                id: "automation",
                title: "الأتمتة",
                description: "خلي النظام يشتغل عنك بقواعد ذكية",
              },
              {
                id: "permissions",
                title: "الصلاحيات وإدارة الموظفين",
                description: "توزيع المهام والصلاحيات",
              },
              {
                id: "activityLog",
                title: "سجل العمليات",
                description: "كل إجراء مسجّل بالوقت والتاريخ",
              },
              {
                id: "integrations",
                title: "خدمات الربط",
                description: "ربط متاجر وشركات شحن خلال دقائق",
              },
              {
                id: "lateOrders",
                title: "إدارة الطلبات المتأخرة",
                description: "تتبّع الطلبات المتأخرة وتنبيهات فورية",
              },
            ],
          },
        ],
      },
    },
    hero: {
      desc: "دقّق نظام ذكي لإدارة المستودعات والمتاجر الإلكترونية يساعدك على تجهيز الطلبات بسرعة وكفاءة، مع تقليل الأخطاء وتوفير التكاليف.",
      join: "انضم إلى دقّق",
      phrases: [
        "إدارة مستودعاتك ومتاجرك صارت أسهل مع",
        "طلباتك تتجهّز بسرعة ودقة مع",
        "خلّي إدارة طلباتك أسهل وأدق مع",
        "وفّر وقتك وخلّي النظام يشتغل بدالك مع",
      ],
    },
    why: {
      titleBefore: "ليش أرباحك أكثر مع",
      errorsHappen: "الأخطاء تصير في أي متجر",
      butWith: "بس مع",
      ordersAccurate: "طلباتك تطلع دقيقة",
      formula: "معادلتنا بسيطة",
      fewerErrors: "أخطاء أقل",
      lowerCosts: "تكاليف أقل",
      moreProfit: "أرباح أكثر",
      chartAlt: "الأرباح الشهرية",
      ctaTitle: "وش تنتظر خلّي النظام يشتغل وأنت تابع.",
      ctaDesc: "حلول أتمتة ذكية تنفّذ القرارات الروتينية بدالك، وتوفّر وقتك للأهم.",
      ctaButton: "انضم إلى دقّق",
    },
    advance: {
      relatedFeatures: "ميزات مرتبطه",
    },
    tracking: {
      hero: {
        badge: "المسارات",
        title: "اختر المسار اللي يناسب مستودعك",
        titleAfterBrand: "يتأقلم معك",
        subtitle:
          "مسارين مختلفين لتجهيز الطلبات كل واحد مصمم لنوع عمليات معيّن. اختار اللي يناسب طريقة شغلك.",
        cta: "اكتشف الميزات",
      },
      twoPaths: {
        title: "مسارين نفس الدقة، طريقة مختلفة",
        subtitle:
          "كل مسار مصمم ليخدم أسلوب عملك ويضمن دقة عالية في كل خطوة طريقة مرنة تتكيف مع مستودعك وتسهل إدارة الطلبات اليومية.",
        pathOne: {
          badge: "المسار الأول",
          title: "التجهيز المباشر",
          description:
            "من المعالجة لجاهز للشحن بخطوة واحدة. الموظف يستلم الطلب، يمسح البوليصة، يتحقق من المنتجات بالباركود، ويجهز الشحن — كله بنفس المحطة.",
          steps: [
            { title: "الطلب يظهر", subtitle: "قيد المعالجة" },
            { title: "مسح البوليصة + التحقق", subtitle: "التقاط + تحقق + تغليف" },
            { title: "جاهز للشحن", subtitle: "الطلب مكتمل ✓" },
          ],
        },
        pathTwo: {
          badge: "المسار الثاني",
          title: "الالتقاط والتغليف",
          description:
            "التجهيز ينقسم لمرحلتين مستقلتين: موظف يلتقط المنتجات من الأرفف، وموظف ثاني يتحقق ويغلّف. طبقتين من المراجعة تضمن دقة أعلى.",
          steps: [
            { title: "جاهز للالتقاط", subtitle: "يظهر لموظف الالتقاط" },
            { title: "بدء الالتقاط", subtitle: "جمع المنتجات المطلوبة" },
            { title: "جاهز للتغليف", subtitle: "يظهر لموظف التغليف" },
            { title: "جاهز للشحن", subtitle: "الطلب مكتمل ✓" },
          ],
        },
      },
      howItWorks: {
        title: "كيف تشتغل المسارات؟",
        subtitle: "ثلاث خطوات ومسارك يصير جاهز",
        steps: [
          {
            number: "01",
            title: "حدد المراحل",
            description: "استلام، تحضير، فحص، تغليف، شحن",
          },
          {
            number: "02",
            title: "رتّب الترتيب",
            description: "رتّب المراحل حسب سير عمل متجرك",
          },
          {
            number: "03",
            title: "طبّق على الفريق",
            description: "كل موظف يشوف خطوته وينقل الطلب للمرحلة الجاية",
          },
        ],
      },
      flow: {
        title: "مسار تجهيز مرن",
        subtitle: "خصّص المراحل حسب متجرك أو مستودعك",
        stages: ["استلام الطلب", "تجهيز المنتجات", "فحص الجودة", "التغليف", "جاهز للشحن"],
        note: "يمكنك إضافة أو حذف أي مرحلة وربطها بصلاحيات الموظفين",
      },
      routeFlow: {
        tabs: [
          {
            id: "pick-lists",
            number: "01",
            label: "قوائم الالتقاط",
            title: "قوائم الالتقاط الجماعية",
            description:
              "بدل ما يروح موظف الالتقاط لكل طلب لحاله، يجمع عدة طلبات بناءً على منطقة التخزين أو الرف. كل طلبات المنطقة تنضاف لقائمة واحدة، فيختصر الوقت ويقلل الحركة جوا المستودع.",
            image: "/picking-list.webp",
            layout: "visual-text",
            visualBg: "green",
          },
          {
            id: "grouping",
            number: "02",
            label: "اقتراحات التجميع",
            title: "اقتراحات التجميع الذكية",
            description:
              "النظام يقترح تجميع الطلبات المتشابهة أو الطلبات اللي بتطلع من نفس المنطقة. التجميع الذكي يقلل وقت التحضير ويخفف الحمل على الموظفين.",
            image: "/suggestions.webp",
            layout: "text-visual",
            visualBg: "green",
          },
          {
            id: "stage-tracking",
            number: "03",
            label: "تتبع المراحل",
            title: "تتبع مراحل التجهيز",
            description:
              "كل طلب إله حالة واضحة، وكل مرحلة تبين لموظفها بس الطلبات اللي بتخصها. الموظف يشوف شغله وينفذه بدون ما يتشتت بطلبات مراحل ثانية.",
            image: "/make-ready.webp",
            layout: "visual-text",
            visualBg: "green",
          },
        ],
      },
      benefits: {
        title: "مهما كانت طريقة شغلك دقق عندها المسار المناسب.",
        subtitle:
          "حلول مرنة تتأقلم مع عمليتك سواء تجهيز مباشر أو التقاط وتغليف. اختر المسار وابدأ.",
        cta: "انضم إلى دقّق",
      },
    },
    sites: {
      hero: {
        badge: "المواقع والمستودعات",
        titleBefore: "كل منتج له ",
        titleHighlight: "عنوان",
        titleAfter: " داخل مستودعك",
        subtitle:
          "ارسم هيكلية مستودعك مرة واحدة — أقسام، ممرات، أرفف، مستويات — وخلي النظام يتتبع مكان كل منتج ويدير السعة تلقائياً.",
        cta: "اكتشف الميزات",
      },
      hierarchy: {
        title: "هيكلية مستودعك شجرة واضحة",
        subtitle: "من المستودع للمستوى، كل شيء منظم ومرتب بهيكل هرمي",
        imageAlt: "هيكلية المستودع: قسم، ممر، رف، مستوى",
      },
      features: {
        title: "كيف المواقع نظمت المستودع؟",
        subtitle: "كل شي كان عشوائي وبدون تنظيم، الحين المستودع منظم وكل منتج بمكانه.",
        problemLabel: "وش المشكلة؟",
        solutionLabel: "كيف حليناها؟",
        cases: [
          {
            id: "product-address",
            number: "01",
            label: "عنوان المنتج",
            problem: "الموظف يدور على المنتج بالمستودع",
            solutionTitle: "عنوان دقيق لكل منتج",
            solutionDescription:
              "كل منتج مربوط بموقعه الدقيق — قسم، ممر، رف، مستوى. الموظف يفتح الطلب ويشوف مباشرة وين يروح يلتقط بدون ما يسأل أو يدور.",
            image: "/location/locations-1.webp",
          },
          {
            id: "capacity",
            number: "02",
            label: "إدارة السعة",
            problem: "ما تعرف وين في مساحة فاضية",
            solutionTitle: "إدارة سعة تلقائية",
            solutionDescription:
              "كل رف له سعة محددة، والنظام يتتبع المستخدم والمتاح لحظة بلحظة — تعرف وين في مساحة قبل ما تضيف أي منتج.",
            image: "/location/locations-2.webp",
          },
          {
            id: "surplus",
            number: "03",
            label: "معالجة الفائض",
            problem: "الفائض يضيع بدون توثيق",
            solutionTitle: "معالجة فائض ذكية",
            solutionDescription:
              "إذا الكمية تجاوزت سعة الرف، النظام يوزع الفائض تلقائياً على موقع مؤقت ويسجّل كل حركة بدون ما تضيع وحدة.",
            image: "/location/locations-3.webp",
          },
          {
            id: "movements",
            number: "04",
            label: "تتبع الحركات",
            problem: "حركات المخزون بدون تتبع",
            solutionTitle: "كل حركة مسجلة بموقعها",
            solutionDescription:
              "كل حركة — استلام، التقاط، ترحيل، إرجاع — مربوطة بموقع وشخص وكمية ووقت، فتقدر ترجع لأي خطوة بسهولة.",
            image: "/location/locations-4.webp",
          },
          {
            id: "inventory",
            number: "05",
            label: "جرد المواقع",
            problem: "الجرد يدوي وفوضوي",
            solutionTitle: "جرد مربوط بالمواقع",
            solutionDescription:
              "الجرد يصير حسب الموقع، والنظام يقارن الكمية الفعلية بالسجل الرقمي تلقائياً ويكشف أي فروقات فوراً.",
            image: "/location/locations-5.webp",
          },
        ],
      },
      benefits: {
        title: "مستودعك منظّم — وكل قطعة لها عنوان.",
        subtitle:
          "ارسم هيكلية مستودعك مرة وحدة، وخلي النظام يتتبع كل منتج وكل حركة بدون ما تضيع وحدة وحدة.",
        cta: "انضم إلى دقّق",
      },
    },
    printing: {
      hero: {
        badge: "الطباعة الآلية",
        title: "بوليصاتك تنطبع وانت مكمّل شغلك",
        titleLineTwo: "",
        subtitle:
          "الطلب يصير جاهز للشحن؟ البوليصة تنطبع لحالها. بدون فتح شاشات، بدون ضغط أزرار.",
        cta: "اكتشف الميزات",
      },
      howItWorks: {
        title: "كيف تشتغل الطباعة؟",
        subtitle: "ثلاث خطوات بسيطة للطباعة الأتوماتيكية",
        steps: [
          {
            number: "01",
            title: "حدد القيود",
            description: "حالة الطلب، المستودع، شركة الشحن",
          },
          {
            number: "02",
            title: "اختر الطابعة",
            description: "حدد الطابعة والقالب المناسب",
          },
          {
            number: "03",
            title: "البوليصة تطلع",
            description: "كل طلب يطابق الشروط تطبع بوليصته تلقائياً",
          },
        ],
      },
      features: {
        title: "من شروط ذكية لطباعة جماعية",
        subtitle: "ثلاث طرق للطباعة — اختار اللي يناسب شغلك",
        cases: [
          {
            id: "smart-rules",
            number: "01",
            label: "شروط ذكية",
            badge: "شروط ذكية",
            title: "حدد متى تنطبع والنظام ينفذ كل مرة",
            description:
              "حط شروطك مرة واحدة، وكل طلب يطابقها تنطبع بوليصته تلقائياً بدون ما تفتح شاشة أو تضغط زر.",
            image: "/print/pinter-1.webp",
            points: [
              {
                title: "فلترة حسب المدينة أو الدولة",
                description: "حدد المناطق اللي تبي طباعتها تمشي تلقائي",
              },
              {
                title: "حالة الطلب والمستودع",
                description: "اربط الطباعة بحالة معيّنة أو مستودع محدد",
              },
              {
                title: "شركة الشحن",
                description: "كل شركة شحن تطبع بالقالب والطابعة المناسبة",
              },
            ],
          },
          {
            id: "cloud-print",
            number: "02",
            label: "طباعة سحابية",
            badge: "طباعة سحابية",
            title: "طباعة مباشرة على طابعتك بدون تحميل أي ملف",
            description:
              "طابعتك متصلة بالنظام عبر السحابة — البوليصة توصل للطابعة مباشرة بدون تحميل أو خطوات زيادة.",
            image: "/print/printer-2.webp",
            points: [
              {
                title: "ربط سحابي مباشر",
                description: "طابعتك متصلة بالنظام عبر السحابة — جاهزة دائماً",
              },
              {
                title: "بوليصة A6 جاهزة",
                description: "باركود ورقم تتبع وكل البيانات جاهزة للطباعة",
              },
              {
                title: "تسجيل كل عملية طباعة",
                description: "تعرف مين طبع إيش ومتى من سجل واضح",
              },
            ],
          },
          {
            id: "bulk-print",
            number: "03",
            label: "طباعة جماعية",
            badge: "طباعة جماعية",
            title: "50 بوليصة بضغطة زر وحدة — PDF موحد جاهز",
            description:
              "بدل ما تطبع بوليصة بوليصة، اختر الطلبات واطبع الكل بملف واحد جاهز للطباعة أو الحفظ.",
            image: "/print/printer-3.webp",
            points: [
              {
                title: "حدد واطبع",
                description: "اختر الطلبات اللي تبيها واضغط زر واحد",
              },
              {
                title: "PDF موحد",
                description: "كل البوليصات بملف واحد — جاهز للطباعة أو الحفظ",
              },
              {
                title: "فلترة الطلبات المطبوعة",
                description: "شوف من الداشبورد أي طلبات انطبعت واللي بعد",
              },
            ],
          },
        ],
      },
      benefits: {
        title: "كل بوليصة بوقتها بدون ما تتدخل.",
        subtitle:
          "اربط الطابعة بالنظام، حدد الشروط وكل طلب جديد تطلع بوليصته مباشرة بدون فتح، بدون نسيان، بدون تأخير.",
        cta: "انضم إلى دقّق",
      },
    },
    returns: {
      hero: {
        badge: "إدارة المرتجعات",
        title: "المرتجعات ما عادت مشكلة",
        titleLineTwo: "صارت عملية منظمة",
        subtitle:
          "من لحظة طلب الإرجاع، مروراً بإنشاء البوليصة والاستلام، وصولاً للفحص وإعادة التخزين — كل خطوة واضحة وموثقة.",
        cta: "اكتشف الميزات",
      },
      howItWorks: {
        title: "كيف تعمل المرتجعات؟",
        subtitle: "رحلة المرتجع من الطلب حتى إعادة التخزين",
        steps: [
          { title: "طلب إرجاع" },
          { title: "تحديد السبب" },
          { title: "بوليصة إرجاع" },
          { title: "استقبال بالتطبيق" },
          { title: "فحص ومراجعة" },
          { title: "إعادة تخزين" },
        ],
      },
      features: {
        title: "مشاكل المرتجعات حلها نظام ذكي",
        subtitle:
          "كل مشكلة كانت تسبب تأخير وتكاليف — النظام يتتبعها ويحلها خطوة بخطوة.",
        problemLabel: "وش المشكلة؟",
        solutionLabel: "كيف حليناها؟",
        cases: [
          {
            id: "documented-return",
            number: "01",
            label: "إرجاع موثق",
            problem: "العميل يرجع الطلب وما في طريقة واضحة لتوثيق السبب",
            solutionTitle: "إرجاع موثق بالسبب للطلب كامل أو لكل منتج",
            solutionDescription:
              "اربط كل منتج بسبب إرجاع واضح، عشان تعرف وين المشكلة وتتبعها بسهولة بدون تخمين أو ملفات ورقية.",
            image: "/retuern/returns-1.webp",
          },
          {
            id: "return-label",
            number: "02",
            label: "بوليصة إرجاع",
            problem: "إنشاء بوليصة إرجاع يدوي وبياخد وقت",
            solutionTitle: "بوليصة إرجاع بضغطة عبر شركة الشحن أو مندوبك",
            solutionDescription:
              "أنشئ بوليصة الإرجاع مباشرة من النظام عبر شركة الشحن أو المندوب — بدون خطوات يدوية أو تأخير.",
            image: "/retuern/returns-2.webp",
          },
          {
            id: "partial-return",
            number: "03",
            label: "إرجاع جزئي",
            problem: "العميل يرجع منتجين من عشرة والباقي سليم",
            solutionTitle: "إرجاع جزئي ذكي — طلب جديد للمنتجات المرتجعة فقط",
            solutionDescription:
              "حدد المنتجات المرتجعة فقط، والنظام ينشئ طلب إرجاع جزئي مرتب بدون ما يأثر على باقي الطلب.",
            image: "/retuern/returns-3.webp",
          },
          {
            id: "returns-dept",
            number: "04",
            label: "قسم المرتجعات",
            problem: "المرتجعات تختلط بالمخزون السليم بدون فحص",
            solutionTitle: "قسم مرتجعات مخصص — فحص أولاً، تخزين ثانياً",
            solutionDescription:
              "اربط المرتجعات بموقع مخصص في المستودع للمراجعة والفحص قبل ما ترجع للأرفف.",
            image: "/retuern/returns-4.webp",
          },
          {
            id: "returns-staff",
            number: "05",
            label: "موظف المرتجعات",
            problem: "ما أحد مسؤول عن استقبال المرتجعات كل واحد يستلم على كيفه",
            solutionTitle: "موظف مخصص للمرتجعات — استقبال وتوثيق عبر التطبيق",
            solutionDescription:
              "خصص موظف مسؤول يستقبل الكميات عبر التطبيق مع تسجيل تلقائي في سجل العمليات وزيادة المخزون.",
            image: "/retuern/returns-5.webp",
          },
        ],
      },
      selfService: {
        badge: "قريباً",
        title: "خلّي عميلك يرجّع طلبه بنفسه.",
        description:
          "قواعد إرجاع مخصصة + صفحة مرتجعات يضيفها عميلك لمتجر العميل النهائي — يدخل رقم جواله، يشوف طلباته، ويطلب إرجاع حسب القواعد اللي حددتها.",
        cards: [
          {
            title: "منتجات غير قابلة للإرجاع",
            subtitle: "حدد المنتجات اللي ما ترجع",
          },
          {
            title: "قواعد حسب المدينة",
            subtitle: "الرياض 7 أيام، جدة 5 أيام",
          },
          {
            title: "صفحة مرتجعات للمتجر",
            subtitle: "يدخل رقم جواله ويرجع بنفسه",
          },
        ],
      },
      benefits: {
        title: "مرتجعاتك تحت السيطرة من أول يوم.",
        subtitle: "توثيق، فحص، وإعادة تخزين — كل شيء منظم ومربوط بالتطبيق.",
        cta: "انضم إلى دقّق",
      },
    },
    inventory: {
      hero: {
        badge: "المخزون",
        title: "تابع كمياتك لحظة بلحظة",
        subtitle:
          "كل منتج بالمستودع له حالة واضحة مع تحديثات لحظية وتنبيهات ذكية",
        cta: "اكتشف الميزات",
      },
      statuses: {
        title: "5 حالات لكل منتج",
        subtitle: "تابع كل منتج بحالة دقيقة توضّح موقعه الحالي وخطوته التالية",
        center: {
          id: "available",
          title: "متاح للبيع",
          description: "جاهز بالمستودع وقابل للحجز",
        },
        items: [
          {
            id: "shipped",
            title: "مشحون",
            description: "خرج من المستودع للعميل",
          },
          {
            id: "damaged",
            title: "تالف",
            description: "مسجّل كتالف ومخصوم",
          },
          {
            id: "picked",
            title: "ملتقط",
            description: "تم التقاطه وبانتظار الشحن",
          },
          {
            id: "reserved",
            title: "محجوز",
            description: "محجوز لطلب بانتظار الالتقاط",
          },
        ],
      },
      features: {
        title: "مشاكل المخزون حلّها نظام ذكي",
        subtitle: "كل مشكلة كانت تسبب فوضى بالمخزون — النظام يتتبعها ويحلها خطوة بخطوة.",
        problemLabel: "وش المشكلة؟",
        solutionLabel: "كيف حليناها؟",
        cases: [
          {
            id: "clear-stock",
            number: "01",
            label: "مخزون واضح",
            problem: "ما تعرف الكمية الفعلية المتاحة",
            solutionTitle: "مخزون واضح كل رقم له معنى",
            solutionDescription:
              "المتاح غير المحجوز غير المشحون. كل حالة لها رقم مستقل تشوف الصورة الكاملة لمخزونك بنظرة وحدة.",
            image: "/مخزن/inventory-1.webp",
          },
          {
            id: "stocktake",
            number: "02",
            label: "جرد منظّم",
            problem: "جرد يدوي وما تعرف وين الفرق",
            solutionTitle: "جرد منظّم بنتائج فورية",
            solutionDescription:
              "الموظف يعد والنظام يقارن تلقائيًا، يطلع لك الفرق بين الكمية بالنظام والكمية الفعلية مباشرة، ويسجّل التالف، وما يُنفَّذ شي إلا بعد اعتماد المدير.",
            image: "/مخزن/inventory-2.webp",
          },
          {
            id: "smart-alerts",
            number: "03",
            label: "تنبيهات ذكية",
            problem: "المخزون ينفد بدون ما تدري",
            solutionTitle: "تنبيهات ذكية قبل النفاد",
            solutionDescription:
              "حدّد حد أدنى لكل منتج، والنظام ينبّهك بإشعار وإيميل لما الكمية تقترب فوق 50% من الحد، وتحذير حرج تحت 10%.",
            image: "/مخزن/inventory-3.webp",
          },
          {
            id: "transaction-log",
            number: "04",
            label: "سجل المعاملات",
            problem: "ما تعرف وين راحت الكمية",
            solutionTitle: "سجل معاملات غير قابل للحذف",
            solutionDescription:
              "كل تغيير يُسجّل كمعاملة دائمة من 21 نوع معاملة من استلام وحجز والتقاط وشحن وإرجاع وتحويل. تقدر ترجع لأي لحظة وتعرف وين راحت وين كل قطعة.",
            image: "/مخزن/inventory-4.webp",
          },
        ],
      },
    },
    solve: {
      idealSolution: "هو حلك المثالي",
      desc: "مع دقّق، كل طلب يطلع مضبوط، لتقليل الأخطاء وتوفير الوقت والتكاليف",
      features: ["سرعة ودقة", "تحليلات", "الشحن الجزئي", "يشتغل حتى بدون إنترنت"],
      imageAlt: "مميزات دقّق",
    },
    about: {
      titleBefore: "مهما كان نشاطك.. أكيد",
      titleAfter: "يناسبك",
      subtitle: "حلول دقّق مصممة تناسب احتياجك مهما كان نشاطك",
      cards: [
        {
          id: "small",
          title: "المتاجر الصغيرة",
          text: "نظم طلباتك بكفاءة وقلل الأخطاء مع أدوات مرنة مصممة خصيصًا لمتجرك. تقدر تتابع كل عملية بسهولة، إدارة المخزون بشكل أفضل، وضمان تجربة سلسة لعملائك بدون تعقيد.",
        },
        {
          id: "medium",
          title: "المتاجر المتوسطة",
          text: "تحكم كامل بالطلبات والمخزون وتنظيم فريق العمل، مع أدوات تساعدك على توسيع نشاطك بكفاءة، تحسين سرعة تجهيز الطلبات، وتقديم خدمة عملاء ممتازة بشكل سلس.",
        },
        {
          id: "large",
          title: "المتاجر الكبيرة",
          text: "نظم طلباتك بكفاءة وقلل الأخطاء مع أدوات مرنة مصممة خصيصًا لمتجرك. تقدر تتابع كل عملية بسهولة، إدارة المخزون بشكل أفضل، وضمان تجربة سلسة لعملائك بدون تعقيد.",
        },
      ],
    },
    onePlace: {
      title: "كل شحناتك ومتاجرك... متصلة في مكان واحد!",
      subtitle: "واجهة ذكية تربط متجرك بشركات الشحن تلقائياً، وبدون تعقيد",
    },
    easyUse: {
      title: "تجربة سهلة، أداء أسرع، ونتائج أدق!",
      subtitle: "أدر مخزونك وتأكد من المنتجات مباشرة من جوالك",
      desc: "مع تقنية المسح الذكي، تقدر تتحقق من المنتجات بسرعة بين الرفوف، مما يساعد على تحسين دقة المسح وتوفير الوقت.",
      join: "انضم إلى دقّق",
      imageAlt: "تطبيق دقّق على الجوال",
    },
    whatsApp: {
      badge: "قريباً",
      title: "رسائل واتساب تلقائية للعملاء",
      desc: "إرسال رسائل واتساب بقالب مخصص عند تغيّر حالة الطلب عميلك يعرف وين طلبه بدون ما تتصل فيه.",
      imageAlt: "أتمتة رسائل واتساب للعملاء",
    },
    testimonials: {
      title: "آراؤهم تهمنا.. واقتراحاتهم تطوّرنا",
      next: "التالي",
      prev: "السابق",
      items: [
        {
          id: "organic",
          name: "أورجانيك ستيشن",
          quote: "نظام أكثر من رائع في عملية تحضير الطلبات بشكل منظم جدا",
        },
        {
          id: "osan",
          name: "Osan Optics",
          quote:
            "افضل تطبيق وافضل خدمة عملاء وتعامل ممتاز جداً سرعه في تحويل وطباعه الطلبات وتقليل الأخطاء في الطباعة او التكرار",
        },
        {
          id: "roxa",
          name: "Roxa",
          quote:
            "حل مشكلة المخزون والأخطاء بالطلبات بشكل كامل تنوع طرق الطباعة , الوحيد بالسوق اللي يعطيني التنوع هذا , فلاتر احترافية جدا يشكرون القائمين عليه",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          id: "what-is-dqq",
          question: "وش هو دقّق؟",
          answer:
            "دقّق تطبيق ذكي يساعدك على تجهيز الطلبات بسرعة وكفاءة، مع تقليل الأخطاء وتوفير التكاليف. يوفّر لك أدوات سهلة لإدارة الطلبات وعمليات متجرك بكفاءة، ويضمن إتمام الطلبات بشكل كامل وخالٍ من الخطأ.",
        },
        {
          id: "who-benefits",
          question: "مين يستفيد من دقّق؟",
          answer:
            "التطبيق مخصص للمتاجر الإلكترونية بجميع أحجامها، خاصة التي تعمل على منصات زد وسلة وغيرها من منصات التجارة الإلكترونية. يساعدك في تحسين تجربة عملائك وزيادة كفاءة إدارة متجرك الإلكتروني.",
        },
        {
          id: "how-to-start",
          question: "كيف أبدأ مع دقّق؟",
          answer:
            "أولاً تحتاج للتواصل معنا، بعدها نسحب بيانات متجرك من منصة زد أو سلة تلقائيًا. بعد ذلك حمّل التطبيق وابدأ تستخدم كل مميزات إدارة متجرك بسهولة وفعالية.",
        },
      ],
    },
    footer: {
      desc: "دقّق تطبيق ذكي يساعدك على تجهيز الطلبات بسرعة وكفاءة، مع تقليل الأخطاء وتوفير التكاليف.",
      quickAccess: "وصول سريع",
      contactUs: "تواصل معنا",
      email: "البريد الإلكتروني:",
      phone: "رقم الهاتف:",
      addressLabel: "العنوان:",
      address: "الرياض، المملكة العربية السعودية",
      joinUs: "انضم إلينا",
      faq: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      copyright: "جميع الحقوق محفوظة لمنصة دقّق © 2023",
      emailAria: "البريد الإلكتروني",
      whatsappAria: "واتساب",
      instagramAria: "إنستغرام",
    },
    login: {
      title: "تسجيل الدخول",
      userNameLabel: "اسم المستخدم",
      userNamePlaceholder: "اسم المستخدم",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      signIn: "تسجيل الدخول",
      joinUs: "انضم إلينا",
      slides: [
        {
          badge: "تكامل شركات الشحن",
          headingBefore: "توصيل ",
          headingHighlight: "الشحنات",
          headingLine2: "بسرعة واحترافية",
          description:
            "دقّق يدير عملية توصيل الشحنة من لحظة تجهيز الطلب حتى وصولها للعميل — مع تتبع لحظي عبر أرامكس وسمسا و DHL، وطباعة بوليصات تلقائياً.",
          stats: [
            { title: "طباعة تلقائية", subtitle: "البوليصات" },
            { title: "تتبع مباشر", subtitle: "لكل الشحنات" },
            { title: "99%", subtitle: "دقة التوصيل" },
          ],
        },
        {
          badge: "تجهيز الطلبات بسهولة",
          headingBefore: "جهّز الطلبات ",
          headingHighlight: "بسرعة",
          headingLine2: "بدون أي خطأ",
          description:
            "دقّق يرشد فريقك خطوة بخطوة من الالتقاط للتغليف والتلصيق — عشان كل طلب يطلع من المستودع جاهز وصحيح.",
          stats: [
            { title: "خطوات موجهة", subtitle: "من الالتقاط للتغليف" },
            { title: "ملصقات تلقائية", subtitle: "باركود وبوليصات" },
            { title: "أخطاء أقل", subtitle: "طلبات موثّقة" },
          ],
        },
        {
          badge: "إدارة ذكية للمستودع",
          headingBefore: "نظّم ",
          headingHighlight: "مخزونك",
          headingLine2: "لحد آخر رف",
          description:
            "تابع كل منتج بكل المواقع والرفوف والمستودعات لحظياً — اعرف مكان كل قطعة بأي وقت.",
          stats: [
            { title: "مستودعات متعددة", subtitle: "تحكم كامل" },
            { title: "مخزون حي", subtitle: "عدّ لحظي" },
            { title: "خرائط الرفوف", subtitle: "مواقع دقيقة" },
          ],
        },
        {
          badge: "قوة التطبيق بين إيديك",
          headingBefore: "تحقق من ",
          headingHighlight: "الطلبات",
          headingLine2: "عبر التطبيق",
          description:
            "امسح الباركود بكاميرا موبايلك للتحقق من الطلب فوراً — دقّق يقارن تلقائياً المنتج الممسوح مع تفاصيل الطلب وينبهك لأي عدم تطابق.",
          stats: [
            { title: "مسح ذكي", subtitle: "كاميرا وباركود" },
            { title: "تحقق فوري", subtitle: "مطابقة تلقائية" },
            { title: "تنبيهات لحظية", subtitle: "عند أي تعارض" },
          ],
        },
      ],
    },
    common: {
      scrollTop: "الرجوع للأعلى",
    },
  },
  en: {
    nav: {
      home: "Home",
      why: "Why DQQ",
      features: "Features",
      about: "About DQQ",
      domains: "DQQ Domains",
      oneDashboard: "One Dashboard",
      reviews: "Customer Reviews",
      faq: "FAQ",
      join: "Join DQQ",
      login: "Login",
      switchLang: "العربية",
      openMenu: "Open menu",
      megaMenu: {
        intro: {
          titleBefore: "Explore ",
          description:
            "Smart features that help you run your store efficiently, reduce errors, and improve daily operations.",
        },
        columns: [
          {
            id: "warehouse",
            title: "Warehouse Operations",
            items: [
              {
                id: "orderPrep",
                title: "Order Processing",
                description: "Prepare and ship orders in fewer steps",
              },
              {
                id: "routes",
                title: "Routes",
                description: "Organize order preparation steps",
              },
              {
                id: "locations",
                title: "Locations & Warehouses",
                description: "Keep your warehouse clearly organized",
              },
              {
                id: "printing",
                title: "Auto Printing",
                description: "Print labels, barcodes, and invoices automatically",
              },
              {
                id: "returns",
                title: "Returns Management",
                description: "Full tracking for every return",
              },
            ],
          },
          {
            id: "inventory",
            title: "Inventory & Products",
            items: [
              {
                id: "stock",
                title: "Inventory",
                description: "Track quantities in real time",
              },
              {
                id: "transfer",
                title: "Stock Transfer",
                description: "Move goods between warehouses easily",
              },
              {
                id: "purchase",
                title: "Purchase Orders",
                description: "Create and track purchase orders",
              },
              {
                id: "products",
                title: "Products",
                description: "Organized, synced product data",
              },
            ],
          },
          {
            id: "management",
            title: "Management & Integrations",
            items: [
              {
                id: "automation",
                title: "Automation",
                description: "Let the system work for you with smart rules",
              },
              {
                id: "permissions",
                title: "Roles & Staff Management",
                description: "Assign tasks and permissions clearly",
              },
              {
                id: "activityLog",
                title: "Activity Log",
                description: "Every action logged with time and date",
              },
              {
                id: "integrations",
                title: "Integrations",
                description: "Connect stores and couriers in minutes",
              },
              {
                id: "lateOrders",
                title: "Late Orders",
                description: "Track delayed orders with instant alerts",
              },
            ],
          },
        ],
      },
    },
    hero: {
      desc: "DQQ is a smart system for managing warehouses and online stores that helps you prepare orders quickly and efficiently, while reducing errors and cutting costs.",
      join: "Join DQQ",
      phrases: [
        "Managing your warehouses and stores just got easier with",
        "Your orders get prepared faster and more accurately with",
        "Make managing your orders easier and more precise with",
        "Save your time and let the system work for you with",
      ],
    },
    why: {
      titleBefore: "Why you earn more with",
      errorsHappen: "Errors happen in every store",
      butWith: "But with",
      ordersAccurate: "Your orders come out",
      formula: "Our equation is simple",
      fewerErrors: "Fewer errors",
      lowerCosts: "Lower costs",
      moreProfit: "More profit",
      chartAlt: "Monthly profits",
      ctaTitle: "Why wait? Let the system work while you track.",
      ctaDesc: "Smart automation handles routine decisions for you and frees your time for what matters most.",
      ctaButton: "Join DQQ",
    },
    advance: {
      relatedFeatures: "Related features",
    },
    tracking: {
      hero: {
        badge: "Routes",
        title: "Choose the route that fits your warehouse",
        titleAfterBrand: "adapts with you",
        subtitle:
          "Two different paths for preparing orders — each designed for a specific type of operation. Pick what suits your workflow.",
        cta: "Explore Features",
      },
      twoPaths: {
        title: "Two paths, same accuracy, different approach",
        subtitle:
          "Each path is built for your workflow and keeps every step precise — a flexible method that adapts to your warehouse and simplifies daily order management.",
        pathOne: {
          badge: "Path One",
          title: "Direct Preparation",
          description:
            "From processing to ready-to-ship in one flow. The employee receives the order, scans the label, verifies products by barcode, and prepares shipment — all at the same station.",
          steps: [
            { title: "Order appears", subtitle: "Under processing" },
            { title: "Scan label + verify", subtitle: "Pick + verify + pack" },
            { title: "Ready to ship", subtitle: "Order complete ✓" },
          ],
        },
        pathTwo: {
          badge: "Path Two",
          title: "Pick & Pack",
          description:
            "Preparation splits into two independent stages: one employee picks products from shelves, and another verifies and packs. Two layers of review ensure higher accuracy.",
          steps: [
            { title: "Ready to pick", subtitle: "Shows for picking staff" },
            { title: "Picking started", subtitle: "Collect requested products" },
            { title: "Ready to pack", subtitle: "Shows for packing staff" },
            { title: "Ready to ship", subtitle: "Order complete ✓" },
          ],
        },
      },
      howItWorks: {
        title: "How Do Routes Work?",
        subtitle: "Three steps and your route is ready",
        steps: [
          {
            number: "01",
            title: "Define Stages",
            description: "Receive, prepare, inspect, pack, ship",
          },
          {
            number: "02",
            title: "Set the Order",
            description: "Arrange stages to match your store workflow",
          },
          {
            number: "03",
            title: "Apply to Team",
            description: "Each employee sees their step and moves orders forward",
          },
        ],
      },
      flow: {
        title: "Flexible Prep Route",
        subtitle: "Customize stages per store or warehouse",
        stages: ["Order Received", "Product Prep", "Quality Check", "Packaging", "Ready to Ship"],
        note: "Add or remove any stage and link it to staff permissions",
      },
      routeFlow: {
        tabs: [
          {
            id: "pick-lists",
            number: "01",
            label: "Picking Lists",
            title: "Batch Picking Lists",
            description:
              "Instead of one order at a time, pickers collect multiple orders by storage zone or shelf. All zone orders join one list — less walking and faster warehouse movement.",
            image: "/picking-list.webp",
            layout: "visual-text",
            visualBg: "green",
          },
          {
            id: "grouping",
            number: "02",
            label: "Grouping Suggestions",
            title: "Smart Grouping Suggestions",
            description:
              "The system suggests grouping similar orders or orders from the same zone. Smart grouping cuts prep time and eases the load on your team.",
            image: "/suggestions.webp",
            layout: "text-visual",
            visualBg: "green",
          },
          {
            id: "stage-tracking",
            number: "03",
            label: "Stage Tracking",
            title: "Preparation Stage Tracking",
            description:
              "Every order has a clear status, and each stage shows staff only the orders that belong to them. Employees focus on their work without distraction from other stages.",
            image: "/make-ready.webp",
            layout: "visual-text",
            visualBg: "green",
          },
        ],
      },
      benefits: {
        title: "Whatever your workflow, DQQ has the right route for you.",
        subtitle:
          "Flexible solutions that adapt to your process — direct prep or pick & pack. Choose your path and get started.",
        cta: "Join DQQ",
      },
    },
    sites: {
      hero: {
        badge: "Sites & Warehouses",
        titleBefore: "Every product has an ",
        titleHighlight: "address",
        titleAfter: " inside your warehouse",
        subtitle:
          "Draw your warehouse structure once — sections, aisles, shelves, levels — and let the system track every product’s location and manage capacity automatically.",
        cta: "Explore Features",
      },
      hierarchy: {
        title: "Your warehouse structure is a clear tree",
        subtitle: "From warehouse to level — everything organized in a hierarchical structure",
        imageAlt: "Warehouse hierarchy: section, aisle, shelf, level",
      },
      features: {
        title: "How did locations organize the warehouse?",
        subtitle:
          "Everything used to be random and unorganized — now the warehouse is organized and every product has its place.",
        problemLabel: "What's the problem?",
        solutionLabel: "How did we solve it?",
        cases: [
          {
            id: "product-address",
            number: "01",
            label: "Product address",
            problem: "Staff search for products around the warehouse",
            solutionTitle: "A precise address for every product",
            solutionDescription:
              "Every product is linked to its exact location — section, aisle, shelf, level. Staff open the order and see exactly where to pick — no asking, no searching.",
            image: "/location/locations-1.webp",
          },
          {
            id: "capacity",
            number: "02",
            label: "Capacity management",
            problem: "You don't know where empty space is",
            solutionTitle: "Automatic capacity management",
            solutionDescription:
              "Every shelf has a set capacity, and the system tracks used vs available in real time — so you know where space is before adding products.",
            image: "/location/locations-2.webp",
          },
          {
            id: "surplus",
            number: "03",
            label: "Surplus handling",
            problem: "Surplus is lost without documentation",
            solutionTitle: "Smart surplus handling",
            solutionDescription:
              "If quantity exceeds shelf capacity, the system automatically moves surplus to a temporary location and records every movement — nothing gets lost.",
            image: "/location/locations-3.webp",
          },
          {
            id: "movements",
            number: "04",
            label: "Movement tracking",
            problem: "Inventory movements without tracking",
            solutionTitle: "Every movement is recorded with its location",
            solutionDescription:
              "Every movement — receive, pick, transfer, return — is linked to a location, person, quantity, and time, so you can trace any step easily.",
            image: "/location/locations-4.webp",
          },
          {
            id: "inventory",
            number: "05",
            label: "Location inventory",
            problem: "Manual and chaotic counting",
            solutionTitle: "Inventory linked to locations",
            solutionDescription:
              "Counting runs by location, and the system compares physical quantity with the digital record automatically to surface any differences instantly.",
            image: "/location/locations-5.webp",
          },
        ],
      },
      benefits: {
        title: "Your warehouse is organized — and every unit has an address.",
        subtitle:
          "Draw your warehouse structure once, and let the system track every product and every movement without losing a single unit.",
        cta: "Join DQQ",
      },
    },
    printing: {
      hero: {
        badge: "Automated Printing",
        title: "Your labels print while you keep working",
        titleLineTwo: "",
        subtitle:
          "Order ready to ship? The label prints on its own. No opening screens, no pressing buttons.",
        cta: "Explore Features",
      },
      howItWorks: {
        title: "How does printing work?",
        subtitle: "Three simple steps for automatic printing",
        steps: [
          {
            number: "01",
            title: "Set your rules",
            description: "Order status, warehouse, shipping company",
          },
          {
            number: "02",
            title: "Choose the printer",
            description: "Select the printer and the right template",
          },
          {
            number: "03",
            title: "The label prints",
            description: "Every matching order prints its label automatically",
          },
        ],
      },
      features: {
        title: "From smart rules to bulk printing",
        subtitle: "Three printing modes — pick what fits your workflow",
        cases: [
          {
            id: "smart-rules",
            number: "01",
            label: "Smart rules",
            badge: "Smart rules",
            title: "Set when to print — and the system does it every time",
            description:
              "Define your rules once, and every matching order prints its label automatically — no screens to open, no buttons to press.",
            image: "/print/pinter-1.webp",
            points: [
              {
                title: "Filter by city or country",
                description: "Choose the areas that should print automatically",
              },
              {
                title: "Order status and warehouse",
                description: "Tie printing to a specific status or warehouse",
              },
              {
                title: "Shipping company",
                description: "Each courier prints with the right template and printer",
              },
            ],
          },
          {
            id: "cloud-print",
            number: "02",
            label: "Cloud printing",
            badge: "Cloud printing",
            title: "Print directly to your printer — no file downloads",
            description:
              "Your printer stays connected through the cloud — labels reach it directly with no extra downloads or steps.",
            image: "/print/printer-2.webp",
            points: [
              {
                title: "Direct cloud connection",
                description: "Your printer stays linked and ready at all times",
              },
              {
                title: "Ready A6 label",
                description: "Barcode, tracking number, and all data ready to print",
              },
              {
                title: "Log every print job",
                description: "See who printed what and when in a clear history",
              },
            ],
          },
          {
            id: "bulk-print",
            number: "03",
            label: "Bulk printing",
            badge: "Bulk printing",
            title: "50 labels in one click — one unified PDF ready",
            description:
              "Instead of printing labels one by one, select orders and print them all as a single file ready to print or save.",
            image: "/print/printer-3.webp",
            points: [
              {
                title: "Select and print",
                description: "Pick the orders you need and press one button",
              },
              {
                title: "Unified PDF",
                description: "All labels in one file — ready to print or save",
              },
              {
                title: "Filter printed orders",
                description: "See from the dashboard which orders were printed and which remain",
              },
            ],
          },
        ],
      },
      benefits: {
        title: "Every label on time — without you stepping in.",
        subtitle:
          "Connect the printer, set your rules, and every new order prints its label right away — no opening screens, no forgetting, no delay.",
        cta: "Join DQQ",
      },
    },
    returns: {
      hero: {
        badge: "Returns Management",
        title: "Returns are no longer a problem",
        titleLineTwo: "They became an organized process",
        subtitle:
          "From the moment a return is requested, through label creation and receipt, to inspection and restocking — every step is clear and documented.",
        cta: "Explore Features",
      },
      howItWorks: {
        title: "How do returns work?",
        subtitle: "The return journey from request to restocking",
        steps: [
          { title: "Return request" },
          { title: "Select reason" },
          { title: "Return label" },
          { title: "Receive in app" },
          { title: "Inspect & review" },
          { title: "Restock" },
        ],
      },
      features: {
        title: "Return problems — solved by a smart system",
        subtitle:
          "Every issue that used to cause delays and costs — the system tracks it and solves it step by step.",
        problemLabel: "What's the problem?",
        solutionLabel: "How did we solve it?",
        cases: [
          {
            id: "documented-return",
            number: "01",
            label: "Documented return",
            problem: "The customer returns the order and there's no clear way to document the reason",
            solutionTitle: "Documented return with a reason — for the full order or per product",
            solutionDescription:
              "Link every product to a clear return reason so you know where the issue is and track it easily — no guessing or paper files.",
            image: "/retuern/returns-1.webp",
          },
          {
            id: "return-label",
            number: "02",
            label: "Return label",
            problem: "Creating a return label manually takes time",
            solutionTitle: "Return label in one click — via the carrier or your courier",
            solutionDescription:
              "Create the return label directly from the system through the shipping company or your courier — no manual steps or delays.",
            image: "/retuern/returns-2.webp",
          },
          {
            id: "partial-return",
            number: "03",
            label: "Partial return",
            problem: "The customer returns 2 out of 10 items — the rest are fine",
            solutionTitle: "Smart partial return — a new order for returned items only",
            solutionDescription:
              "Select only the returned products, and the system creates a clean partial return without affecting the rest of the order.",
            image: "/retuern/returns-3.webp",
          },
          {
            id: "returns-dept",
            number: "04",
            label: "Returns department",
            problem: "Returns get mixed with healthy stock without inspection",
            solutionTitle: "Dedicated returns department — inspect first, store second",
            solutionDescription:
              "Link returns to a dedicated warehouse location for review and inspection before they go back on the shelves.",
            image: "/retuern/returns-4.webp",
          },
          {
            id: "returns-staff",
            number: "05",
            label: "Returns staff",
            problem: "No one owns receiving returns — everyone handles it their own way",
            solutionTitle: "Dedicated returns employee — receive and document via the app",
            solutionDescription:
              "Assign an employee who receives quantities in the app with automatic logging in the activity log and inventory updates.",
            image: "/retuern/returns-5.webp",
          },
        ],
      },
      selfService: {
        badge: "Coming soon",
        title: "Let your customer return their order themselves.",
        description:
          "Custom return rules + a returns page for the end customer store — they enter their mobile number, see their orders, and request a return based on the rules you set.",
        cards: [
          {
            title: "Non-returnable products",
            subtitle: "Set which products cannot be returned",
          },
          {
            title: "Rules by city",
            subtitle: "Riyadh 7 days, Jeddah 5 days",
          },
          {
            title: "Store returns page",
            subtitle: "They enter their mobile and return on their own",
          },
        ],
      },
      benefits: {
        title: "Your returns under control from day one.",
        subtitle: "Document, inspect, and restock — everything organized and linked to the app.",
        cta: "Join DQQ",
      },
    },
    inventory: {
      hero: {
        badge: "Inventory",
        title: "Track your stock, moment by moment",
        subtitle:
          "Every product in the warehouse has a clear status with real-time updates and smart alerts",
        cta: "Explore Features",
      },
      statuses: {
        title: "5 Statuses for Every Product",
        subtitle: "Track every product with a precise status that shows its current position and next step",
        center: {
          id: "available",
          title: "Available for Sale",
          description: "Ready in the warehouse and open for reservation",
        },
        items: [
          {
            id: "shipped",
            title: "Shipped",
            description: "Left the warehouse to the customer",
          },
          {
            id: "damaged",
            title: "Damaged",
            description: "Logged as damaged and deducted from stock",
          },
          {
            id: "picked",
            title: "Picked",
            description: "Picked and awaiting shipment",
          },
          {
            id: "reserved",
            title: "Reserved",
            description: "Reserved for an order awaiting pickup",
          },
        ],
      },
      features: {
        title: "A Smart System Solves Every Inventory Problem",
        subtitle: "Every issue used to cause chaos in your stock — the system tracks and solves it step by step.",
        problemLabel: "What's the problem?",
        solutionLabel: "How did we solve it?",
        cases: [
          {
            id: "clear-stock",
            number: "01",
            label: "Clear Inventory",
            problem: "You don't know the actual available quantity",
            solutionTitle: "Clear inventory — every number has meaning",
            solutionDescription:
              "Available, not reserved, not shipped. Each status has its own independent number — see the complete picture of your inventory at a glance.",
            image: "/مخزن/inventory-1.webp",
          },
          {
            id: "stocktake",
            number: "02",
            label: "Organized Stocktake",
            problem: "Manual counting and you don't know where the gap is",
            solutionTitle: "Organized stocktake with instant results",
            solutionDescription:
              "The employee counts and the system automatically compares, instantly showing you the gap between the system quantity and the actual quantity, logs the damaged items, and nothing is executed except after manager approval.",
            image: "/مخزن/inventory-2.webp",
          },
          {
            id: "smart-alerts",
            number: "03",
            label: "Smart Alerts",
            problem: "Stock runs out without you knowing",
            solutionTitle: "Smart alerts before you run out",
            solutionDescription:
              "Set a minimum threshold for every product, and the system alerts you by notification and email once quantity nears 50% of the threshold, with a critical warning under 10%.",
            image: "/مخزن/inventory-3.webp",
          },
          {
            id: "transaction-log",
            number: "04",
            label: "Transaction Log",
            problem: "You don't know where the quantity went",
            solutionTitle: "A transaction log that can't be deleted",
            solutionDescription:
              "Every change is logged as a permanent transaction from 21 transaction types — receiving, reservation, picking, shipping, returns, and transfers. Go back to any moment and know exactly where every unit went.",
            image: "/مخزن/inventory-4.webp",
          },
        ],
      },
    },
    solve: {
      idealSolution: "is your ideal solution",
      desc: "With DQQ, every order comes out right — reducing errors and saving time and costs",
      features: ["Speed & Accuracy", "Analytics", "Partial Shipping", "Works even offline"],
      imageAlt: "DQQ features",
    },
    about: {
      titleBefore: "Whatever your business is..",
      titleAfter: "fits you",
      subtitle: "DQQ solutions are designed to match your needs, no matter your business size",
      cards: [
        {
          id: "small",
          title: "Small Stores",
          text: "Organize your orders efficiently and reduce errors with flexible tools built for your store. Track every process easily, manage inventory better, and deliver a smooth customer experience without complexity.",
        },
        {
          id: "medium",
          title: "Medium Stores",
          text: "Full control over orders, inventory, and team organization, with tools that help you scale efficiently, speed up order preparation, and deliver excellent customer service smoothly.",
        },
        {
          id: "large",
          title: "Large Stores",
          text: "Organize your orders efficiently and reduce errors with flexible tools built for your store. Track every process easily, manage inventory better, and deliver a smooth customer experience without complexity.",
        },
      ],
    },
    onePlace: {
      title: "All your shipments and stores connected",
      subtitle: "A smart interface that connects your store with shipping companies automatically — no complexity",
    },
    easyUse: {
      title: "Easy experience, faster performance, and more accurate results!",
      subtitle: "Manage your inventory and verify products directly from your phone",
      desc: "With smart scanning technology, you can check products quickly between shelves — improving scan accuracy and saving time.",
      join: "Join DQQ",
      imageAlt: "DQQ app on mobile",
    },
    whatsApp: {
      badge: "Coming soon",
      title: "Automated WhatsApp messages for customers",
      desc: "Send WhatsApp messages with a custom template when order status changes — so your customer knows where their order is without you calling them.",
      imageAlt: "WhatsApp customer messaging automation",
    },
    testimonials: {
      title: "Their feedback matters.. and their suggestions help us grow",
      next: "Next",
      prev: "Previous",
      items: [
        {
          id: "organic",
          name: "Organic Station",
          quote: "An outstanding system for preparing orders in a very organized way",
        },
        {
          id: "osan",
          name: "Osan Optics",
          quote:
            "Best app and best customer service with excellent support — fast order conversion and printing, and fewer errors or duplicates",
        },
        {
          id: "roxa",
          name: "Roxa",
          quote:
            "It fully solved inventory and order-error issues, with a wide variety of printing methods — the only one in the market giving me this level of flexibility. Very professional filters. Great job to the team!",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          id: "what-is-dqq",
          question: "What is DQQ?",
          answer:
            "DQQ is a smart app that helps you prepare orders quickly and efficiently, while reducing errors and cutting costs. It gives you easy tools to manage orders and store operations accurately and completely.",
        },
        {
          id: "who-benefits",
          question: "Who benefits from DQQ?",
          answer:
            "The app is built for e-commerce stores of all sizes — especially those on Zid, Salla, and other platforms. It helps you improve customer experience and run your online store more efficiently.",
        },
        {
          id: "how-to-start",
          question: "How do I get started with DQQ?",
          answer:
            "First, contact us. Then we automatically sync your store data from Zid or Salla. After that, download the app and start using all store management features easily and effectively.",
        },
      ],
    },
    footer: {
      desc: "DQQ is a smart app that helps you prepare orders quickly and efficiently, while reducing errors and cutting costs.",
      quickAccess: "Quick Access",
      contactUs: "Contact Us",
      email: "Email:",
      phone: "Phone:",
      addressLabel: "Address:",
      address: "Riyadh, Saudi Arabia",
      joinUs: "Join Us",
      faq: "FAQ",
      privacy: "Privacy Policy",
      copyright: "All rights reserved to DQQ platform © 2023",
      emailAria: "Email",
      whatsappAria: "WhatsApp",
      instagramAria: "Instagram",
    },
    login: {
      title: "Login",
      userNameLabel: "User Name",
      userNamePlaceholder: "User Name",
      passwordLabel: "Password",
      passwordPlaceholder: "Password",
      forgotPassword: "Forgot Password",
      signIn: "Sign In",
      joinUs: "Join Us",
      slides: [
        {
          badge: "Shipping Carriers Integration",
          headingBefore: "Shipment ",
          headingHighlight: "Delivery",
          headingLine2: "Fast & Professional",
          description:
            "DQQ manages the shipment delivery process from the moment the order is prepared until it reaches the customer — with real-time tracking via Aramex, SMSA, and DHL, and automatic waybill printing.",
          stats: [
            { title: "Auto Print", subtitle: "Waybills" },
            { title: "Live Tracking", subtitle: "All Shipments" },
            { title: "99%", subtitle: "Delivery Accuracy" },
          ],
        },
        {
          badge: "Order Processing Made Easy",
          headingBefore: "Pack Orders ",
          headingHighlight: "Faster",
          headingLine2: "With Zero Mistakes",
          description:
            "DQQ guides your team step by step through picking, packing, and labeling — so every order leaves the warehouse ready and accurate.",
          stats: [
            { title: "Guided Steps", subtitle: "Pick to Pack" },
            { title: "Auto Labels", subtitle: "Barcodes & Waybills" },
            { title: "Fewer Errors", subtitle: "Verified Orders" },
          ],
        },
        {
          badge: "Smart Warehouse Management",
          headingBefore: "Organize Your ",
          headingHighlight: "Inventory",
          headingLine2: "Down to Every Shelf",
          description:
            "Track every product across locations, shelves, and warehouses in real time — know exactly where each item is, always.",
          stats: [
            { title: "Multi-Warehouse", subtitle: "Full Control" },
            { title: "Live Stock", subtitle: "Real-time Count" },
            { title: "Shelf Mapping", subtitle: "Exact Locations" },
          ],
        },
        {
          badge: "App Power in Your Hand",
          headingBefore: "Verify ",
          headingHighlight: "Orders",
          headingLine2: "Via the App",
          description:
            "Scan the barcode with your phone camera to verify orders instantly — DQQ automatically compares the scanned product with order details and alerts you on any mismatch.",
          stats: [
            { title: "Smart Scan", subtitle: "Camera & Barcode" },
            { title: "Instant Verify", subtitle: "Auto Matching" },
            { title: "Real-time Alerts", subtitle: "On Any Mismatch" },
          ],
        },
      ],
    },
    common: {
      scrollTop: "Back to top",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
