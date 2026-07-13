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
    common: {
      scrollTop: "Back to top",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
