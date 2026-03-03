\
(() => {
  document.documentElement.classList.add("anim");
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Year
  $$("[data-year]").forEach(el => el.textContent = String(new Date().getFullYear()));

  // Mobile nav
  const toggle = $("[data-nav-toggle]");
  const menu = $("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      const isOpen = menu.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    $$( "a", menu).forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  // Active nav
  const active = (window.__ACTIVE__ || "").trim();
  if (active) {
    const a = document.querySelector(`[data-navitem="${active}"]`);
    if (a) a.classList.add("active");
  }

  // Simple reveal
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.12 }) : null;

  $$(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  // SAFETY_REVEAL: ensure content never stays hidden
  window.setTimeout(() => {
  document.documentElement.classList.add("anim");
    $$(".reveal").forEach(el => el.classList.add("in"));
  }, 300);


  // i18n
  const dict = {
    en: {
      "brand.sub":"Jordan • Qatar • KSA",
      "nav.about":"About",
      "nav.services":"Services",
      "nav.portfolio":"Portfolio",
      "nav.gallery":"Gallery",
      "nav.artists":"Artists",
      "nav.contact":"Contact",
      "nav.viewWork":"View Work",
      "nav.requestQuote":"Request a Quote",
      "crumb.home":"Home",
      "footer.tag":"Weddings • Corporate • Festivals • Concerts • AV Production",
      "footer.badge.1":"Run-of-show",
      "footer.badge.2":"Show control",
      "footer.badge.3":"Safety-first",
      "footer.rights":"All rights reserved.",
      "footer.quick":"Quick links",
      "footer.contact":"Contact",
      "footer.coverage":"Coverage: Jordan • Qatar • KSA",
      "contact.whatsapp":"Chat on WhatsApp",

      "home.pill.since":"Since 2004",
      "home.pill.tag":"Event Management • Production",
      "home.h1":"Production that looks effortless — because it’s engineered.",
      "home.lead":"Weddings, corporate events, festivals, concerts, and brand activations — delivered with structured operations, quality control, and premium execution across Jordan, Qatar, and KSA.",
      "home.cta.quote":"Request a Quote",
      "home.cta.work":"See Case Studies",
      "home.stat.years":"Years operating",
      "home.stat.countries":"Countries served",
      "home.stat.e2e.b":"End‑to‑End",
      "home.stat.e2e":"Planning → Show control",
      "home.badge":"On‑ground leadership + disciplined crew operations",

      "home.trust.eyebrow":"Trusted",
      "home.trust.title":"Brands, venues & partners",
      "home.trust.sub":"Replace the placeholders below with your real client logos/names.",
      "home.trust.cta":"See work",
      "home.metrics.1":"Events delivered",
      "home.metrics.2":"Years of operations",
      "home.metrics.3":"Guests managed (single-night peak)",
      "home.metrics.4":"On‑ground production coverage",
      "home.trust.note":"Tip: Add PNG/SVG logos in assets/img/logos/ and replace the pills with <img> tags.",

      "home.eyebrow.1":"What we do",
      "section.services.title":"Services",
      "section.services.sub":"A complete production partner — strategy, planning, suppliers, AV, crews, and show operations.",
      "home.cta.services":"Explore services",

      "svc.1.t":"Event Planning & Management",
      "svc.1.d":"Concept, budgeting, timelines, suppliers, staffing, and full on‑ground execution.",
      "svc.2.t":"Weddings",
      "svc.2.d":"Luxury wedding production: decor, entertainment, lighting, staging, and guest experience.",
      "svc.3.t":"Corporate & Brand",
      "svc.3.d":"Conferences, launches, awards, gala dinners, VIP experiences, and activations.",
      "svc.4.t":"Festivals & Concerts",
      "svc.4.d":"Stage builds, crowd flow, artist coordination, backstage, and show control.",
      "svc.5.t":"AV & Lighting",
      "svc.5.d":"Sound, LED, lighting design, rigging, staging, and effects with redundancy.",
      "svc.6.t":"Venue Consulting",
      "svc.6.d":"Workflows, staffing plans, production readiness, and operational playbooks.",

      "home.eyebrow.2":"How we work",
      "section.qc.title":"A structured system for premium outcomes.",
      "section.qc.sub":"Your timelines, budgets, and guest experience are protected by process — not vibes.",
      "qc.1.t":"Plan & Align",
      "qc.1.d":"Objectives, audience, scope, and success criteria — aligned early.",
      "qc.2.t":"Produce & Execute",
      "qc.2.d":"Run‑of‑show, crew coordination, rehearsals, safety, and show control.",
      "qc.3.t":"Measure & Improve",
      "qc.3.d":"Post‑event review and reporting for continuous improvement.",

      "home.scope.eyebrow":"Scope",
      "home.scope.title":"Typical deliverables",
      "home.scope.1":"Production schedule + run‑of‑show",
      "home.scope.2":"Vendor coordination + technical specs",
      "home.scope.3":"Load‑in / load‑out plan + crew calls",
      "home.scope.4":"Show control + rehearsal management",
      "home.scope.5":"Safety planning + on‑site supervision",
      "home.scope.cta":"View services",

      "home.final.eyebrow":"Ready when you are",
      "home.final.title":"Tell us your date, city, and scope — we’ll reply with a plan.",
      "home.final.sub":"You’ll get practical options, timelines, and a production approach — not generic PDFs.",
      "home.final.cta1":"Request a quote",
      "home.final.cta2":"Browse gallery",

      "about.h1":"A production partner built for pressure.",
      "about.lead":"Since 2004, we’ve delivered events with disciplined operations, premium standards, and teams that perform on the day.",
      "about.eyebrow.story":"Our story",
      "about.story.title":"From planning to show control — under one roof.",
      "about.story.p1":"Beats Events Production was built to solve a common problem: beautiful concepts failing at execution. We combine creative planning with operational rigor — supplier management, crew coordination, and show control.",
      "about.story.p2":"We operate across Jordan, Qatar, and KSA — supporting weddings, corporate events, festivals, concerts, and brand activations.",
      "about.stat.b1":"Since 2004",
      "about.stat.1":"Operations-first delivery",
      "about.stat.b2":"Regional",
      "about.stat.2":"Jordan • Qatar • KSA",
      "about.stat.b3":"On‑site",
      "about.stat.3":"Leadership + crews",
      "about.stack.eyebrow":"What we manage",
      "about.stack.title":"Production stack",
      "about.stack.1":"Concept & audience alignment",
      "about.stack.2":"Technical planning + vendor specs",
      "about.stack.3":"Crew schedules + rehearsals",
      "about.stack.4":"Show calling + backstage ops",
      "about.stack.5":"Quality checks + post-event review",
      "about.eyebrow.values":"How we think",
      "about.values.title":"Standards you can feel.",
      "about.values.sub":"Premium isn’t only decor — it’s punctuality, redundancy, safety, and calm execution.",
      "about.v1.t":"Operational clarity",
      "about.v1.d":"Clear responsibilities, timelines, run‑of‑show, and escalation paths.",
      "about.v2.t":"Quality control",
      "about.v2.d":"Pre‑checks, rehearsals, and on‑site supervision — so the final looks intentional.",
      "about.v3.t":"Safety-first",
      "about.v3.d":"Crowd flow, rigging discipline, and event safety baked into planning.",
      "about.cta.eyebrow":"Work with us",
      "about.cta.title":"If it has to be perfect on the day — we’re the team.",
      "about.cta.sub":"Share your date, city, and scope. We’ll come back with options and next steps.",

      "services.h1":"Services designed for reliability and impact.",
      "services.lead":"From planning to production to AV — we manage details so your event feels effortless.",
      "services.eyebrow":"Capabilities",
      "services.title":"What we deliver",
      "services.sub":"Choose a full-service partnership or plug us into the parts that matter most.",
      "services.cta":"Get a quote",
      "services.s1.t":"Event Planning & Management",
      "services.s1.b1":"Concept, budgeting, and timelines",
      "services.s1.b2":"Supplier sourcing + management",
      "services.s1.b3":"Staffing, guest flow, and operations",
      "services.s2.t":"Weddings",
      "services.s2.b1":"Lighting, staging, and atmosphere",
      "services.s2.b2":"Entertainment & show design",
      "services.s2.b3":"Guest experience + VIP handling",
      "services.s3.t":"Corporate & Brand Events",
      "services.s3.b1":"Conferences, launches, awards",
      "services.s3.b2":"Brand activations + VIP moments",
      "services.s3.b3":"Production schedules + run‑of‑show",
      "services.s4.t":"Festivals & Concerts",
      "services.s4.b1":"Stage builds + show operations",
      "services.s4.b2":"Artist coordination + backstage",
      "services.s4.b3":"Crowd flow + safety planning",
      "services.s5.t":"Audio / Visual & Lighting",
      "services.s5.b1":"Sound, LED, lighting design",
      "services.s5.b2":"Rigging, staging, power planning",
      "services.s5.b3":"Reliable redundancy + testing",
      "services.s6.t":"Venue Consulting",
      "services.s6.b1":"Operational workflows + staffing",
      "services.s6.b2":"Production readiness audits",
      "services.s6.b3":"Systems that scale for seasons",
      "services.ops.eyebrow":"Operations",
      "services.ops.title":"What you get with Beats",
      "services.ops.sub":"A calm team, clear documentation, and a show that runs like a clock.",
      "services.ops.1t":"Run-of-show",
      "services.ops.1d":"A detailed schedule with responsibilities and backups.",
      "services.ops.2t":"Vendor control",
      "services.ops.2d":"Clear specs, approvals, load-in planning, and QA checks.",
      "services.ops.3t":"On-site leadership",
      "services.ops.3d":"A production lead who keeps the day moving smoothly.",
      "services.faq.eyebrow":"FAQ",
      "services.faq.title":"Common questions",
      "services.faq.q1":"Do you provide full-service production?",
      "services.faq.a1":"Yes. We can handle planning through execution, or support specific pieces like AV, show control, or logistics.",
      "services.faq.q2":"Which countries do you cover?",
      "services.faq.a2":"Jordan, Qatar, and KSA — with travel-ready teams for the right scope.",
      "services.faq.q3":"How fast can you respond?",
      "services.faq.a3":"Send your date + city + scope. We typically respond with next steps and a call option.",

      "portfolio.h1":"Case studies & selected work.",
      "portfolio.lead":"A snapshot of the scopes we deliver — planning, AV, operations, and show control.",
      "portfolio.eyebrow":"What clients value",
      "portfolio.value.title":"Execution that protects the brand.",
      "portfolio.value.sub":"Production isn’t a single vendor — it’s the system that keeps everything aligned.",
      "portfolio.cs1.t":"Festival / Concert Production",
      "portfolio.cs1.d":"Stage, LED, lighting, crew ops, backstage flow, and show control.",
      "portfolio.cs2.t":"Corporate Conference",
      "portfolio.cs2.d":"Timelines, supplier coordination, AV, and clean execution.",
      "portfolio.cs3.t":"Luxury Wedding",
      "portfolio.cs3.d":"Atmosphere, staging, lighting, entertainment, and guest experience.",
      "portfolio.v1.t":"Planning discipline",
      "portfolio.v1.d":"Clear schedules, dependencies, and approvals so nothing surprises you on-site.",
      "portfolio.v2.t":"Crew leadership",
      "portfolio.v2.d":"Experienced on-ground leads who coordinate vendors and protect the run-of-show.",
      "portfolio.v3.t":"Premium finish",
      "portfolio.v3.d":"Details, timing, and reliability — the things guests remember.",
      "portfolio.t1.q":"“The team was calm, organized, and the show ran exactly on time.”",
      "portfolio.t1.a":"Corporate Client • Production Lead",
      "portfolio.t2.q":"“From briefing to execution, everything felt premium and controlled.”",
      "portfolio.t2.a":"Wedding Client • Jordan",
      "portfolio.cta.eyebrow":"Next",
      "portfolio.cta.title":"Want a tailored plan for your event?",
      "portfolio.cta.sub":"Share your date, city, and scope — we’ll reply with options and next steps.",

      "gallery.title":"Gallery",
      "gallery.sub":"Browse moments from corporate events, weddings, festivals, and production setups.",
      "filter.all":"All",
      "filter.corporate":"Corporate",
      "filter.weddings":"Weddings",
      "filter.festivals":"Festivals",
      "filter.av":"AV & Lighting",

      "artists.h1":"Artists & Performers",
      "artists.lead":"We support talent bookings and full show operations — hospitality, technical riders, schedules, stage management, and show control.",
      "artists.a.title":"Artists (selected)",
      "artists.a.sub":"Regional and international performers we’ve worked with or supported.",
      "artists.d.title":"DJs (selected)",
      "artists.d.sub":"Electronic and club-focused lineups.",
      "artists.live":"Live performance",
      "artists.intl":"International booking",
      "artists.fest":"Festival performance",
      "artists.dj":"DJ set",
      "artists.cta.eyebrow":"Booking support",
      "artists.cta.title":"Tell us the artist, date, city, and venue.",
      "artists.cta.sub":"We’ll coordinate booking support, riders, production schedule, and on‑site operations.",
      "artists.cta.button":"Request booking",

      "contact.title":"Contact",
      "contact.sub":"Share your date, city, event type, and scope — we’ll respond with options.",
      "contact.form.title":"Send an inquiry",
      "contact.form.name":"Full name",
      "contact.form.email":"Email",
      "contact.form.phone":"Phone",
      "contact.form.city":"City",
      "contact.form.date":"Event date",
      "contact.form.service":"Services needed",
      "contact.form.service.placeholder":"Select",
      "contact.form.service.1":"Planning & Management",
      "contact.form.service.2":"Wedding Production",
      "contact.form.service.3":"Corporate / Brand",
      "contact.form.service.4":"Festival / Concert",
      "contact.form.service.5":"AV / Lighting",
      "contact.form.service.6":"Venue Consulting",
      "contact.form.subject":"Subject",
      "contact.form.msg":"Message",
      "contact.form.msgPh":"Tell us scope, guests, venue, and any key priorities.",
      "contact.form.send":"Send inquiry",
      "contact.form.note":"This will open your email client. If you prefer WhatsApp, use the button on the page.",
      "contact.direct.title":"Direct details",
      "contact.direct.email":"Email",
      "contact.direct.web":"Website",
      "contact.direct.phone":"Phone",
      "contact.direct.coverage":"Coverage",
      "contact.promise.eyebrow":"Response",
      "contact.promise.title":"What happens next?",
      "contact.promise.sub":"We’ll review your scope, suggest a short call if needed, then share options and next steps."
    },
    ar: {
      "brand.sub":"الأردن • قطر • السعودية",
      "nav.about":"من نحن",
      "nav.services":"الخدمات",
      "nav.portfolio":"أعمالنا",
      "nav.gallery":"المعرض",
      "nav.artists":"الفنانون",
      "nav.contact":"تواصل",
      "nav.viewWork":"عرض الأعمال",
      "nav.requestQuote":"طلب عرض سعر",
      "crumb.home":"الرئيسية",
      "footer.tag":"حفلات زفاف • شركات • مهرجانات • حفلات • إنتاج صوتيات ومرئيات",
      "footer.badge.1":"Run‑of‑show",
      "footer.badge.2":"Show control",
      "footer.badge.3":"السلامة أولاً",
      "footer.rights":"جميع الحقوق محفوظة.",
      "footer.quick":"روابط سريعة",
      "footer.contact":"التواصل",
      "footer.coverage":"التغطية: الأردن • قطر • السعودية",
      "contact.whatsapp":"تواصل عبر واتساب",

      "home.pill.since":"منذ 2004",
      "home.pill.tag":"إدارة الفعاليات • الإنتاج",
      "home.h1":"إنتاج يبدو سهلاً — لأنه مُهندس.",
      "home.lead":"حفلات زفاف، فعاليات شركات، مهرجانات، حفلات، وتنشيطات علامات تجارية — بتنفيذ منظم، ضبط جودة، وإنتاج راقٍ في الأردن وقطر والسعودية.",
      "home.cta.quote":"طلب عرض سعر",
      "home.cta.work":"عرض دراسات الحالة",
      "home.stat.years":"سنوات خبرة",
      "home.stat.countries":"دول نخدمها",
      "home.stat.e2e.b":"من البداية للنهاية",
      "home.stat.e2e":"التخطيط → إدارة العرض",
      "home.badge":"قيادة ميدانية + إدارة طواقم منضبطة",

      "home.trust.eyebrow":"موثوقون",
      "home.trust.title":"عملاء وشركاء ومواقع",
      "home.trust.sub":"استبدل العناصر التالية بشعارات/أسماء العملاء الحقيقيين.",
      "home.trust.cta":"عرض الأعمال",
      "home.metrics.1":"فعالية تم تنفيذها",
      "home.metrics.2":"سنة خبرة تشغيلية",
      "home.metrics.3":"ضيوف تمت إدارتهم (ذروة ليلة واحدة)",
      "home.metrics.4":"تغطية إنتاج ميدانية",
      "home.trust.note":"ملاحظة: أضف شعارات PNG/SVG داخل assets/img/logos/ واستبدل العناصر بـ <img>.",

      "home.eyebrow.1":"ماذا نقدم",
      "section.services.title":"الخدمات",
      "section.services.sub":"شريك إنتاج متكامل — استراتيجية، تخطيط، موردين، AV، طواقم، وإدارة تشغيل العرض.",
      "home.cta.services":"استعراض الخدمات",

      "svc.1.t":"تخطيط وإدارة الفعاليات",
      "svc.1.d":"فكرة، ميزانية، جداول زمنية، موردين، طواقم، وتنفيذ ميداني كامل.",
      "svc.2.t":"حفلات الزفاف",
      "svc.2.d":"إنتاج زفاف فاخر: ديكور، ترفيه، إضاءة، مسرح، وتجربة ضيوف.",
      "svc.3.t":"شركات وعلامات تجارية",
      "svc.3.d":"مؤتمرات، إطلاقات، جوائز، حفلات عشاء، VIP، وتنشيطات.",
      "svc.4.t":"مهرجانات وحفلات",
      "svc.4.d":"بناء مسارح، تدفق جمهور، تنسيق فنانين، خلف الكواليس، وإدارة العرض.",
      "svc.5.t":"AV وإضاءة",
      "svc.5.d":"صوت، LED، تصميم إضاءة، Rigging، مسرح، ومؤثرات مع خطط بديلة.",
      "svc.6.t":"استشارات مواقع",
      "svc.6.d":"إجراءات تشغيل، خطط طواقم، جاهزية إنتاج، وأدلة عمل.",

      "home.eyebrow.2":"كيف نعمل",
      "section.qc.title":"نظام منظم لنتائج راقية.",
      "section.qc.sub":"نحمي وقتك وميزانيتك وتجربة ضيوفك عبر عملية واضحة — وليس ارتجال.",
      "qc.1.t":"تخطيط ومحاذاة",
      "qc.1.d":"الأهداف، الجمهور، النطاق، ومعايير النجاح — منذ البداية.",
      "qc.2.t":"إنتاج وتنفيذ",
      "qc.2.d":"Run‑of‑show، تنسيق الطاقم، بروفات، سلامة، وإدارة العرض.",
      "qc.3.t":"مراجعة وتحسين",
      "qc.3.d":"مراجعة ما بعد الفعالية وتقارير للتحسين المستمر.",

      "home.scope.eyebrow":"النطاق",
      "home.scope.title":"مخرجات شائعة",
      "home.scope.1":"جدول إنتاج + Run‑of‑show",
      "home.scope.2":"تنسيق الموردين + مواصفات تقنية",
      "home.scope.3":"خطة تحميل/تفريغ + نداءات طواقم",
      "home.scope.4":"إدارة العرض + إدارة البروفات",
      "home.scope.5":"سلامة + إشراف ميداني",
      "home.scope.cta":"عرض الخدمات",

      "home.final.eyebrow":"جاهزون",
      "home.final.title":"أرسل التاريخ والمدينة والنطاق — وسنرد بخطة.",
      "home.final.sub":"ستحصل على خيارات واقعية وجداول زمنية وطريقة تنفيذ — بدون ملفات عامة.",
      "home.final.cta1":"طلب عرض سعر",
      "home.final.cta2":"استعراض المعرض",

      "about.h1":"شريك إنتاج جاهز للضغط.",
      "about.lead":"منذ 2004، ننفذ فعاليات بمعايير عالية وتشغيل منضبط وفريق ينجز في يوم الحدث.",
      "about.eyebrow.story":"قصتنا",
      "about.story.title":"من التخطيط إلى إدارة العرض — تحت سقف واحد.",
      "about.story.p1":"تأسست Beats لحل مشكلة شائعة: فكرة جميلة لكن تنفيذ ضعيف. نجمع بين التخطيط والإدارة التشغيلية — موردين، طواقم، وإدارة عرض.",
      "about.story.p2":"نعمل في الأردن وقطر والسعودية — زفاف، شركات، مهرجانات، وحفلات.",
      "about.stat.b1":"منذ 2004",
      "about.stat.1":"تشغيل أولاً",
      "about.stat.b2":"إقليمي",
      "about.stat.2":"الأردن • قطر • السعودية",
      "about.stat.b3":"ميداني",
      "about.stat.3":"قيادة + طواقم",
      "about.stack.eyebrow":"ما نديره",
      "about.stack.title":"نطاق الإنتاج",
      "about.stack.1":"مفهوم ومحاذاة الجمهور",
      "about.stack.2":"تخطيط تقني + مواصفات",
      "about.stack.3":"جداول طواقم + بروفات",
      "about.stack.4":"إدارة العرض + كواليس",
      "about.stack.5":"ضبط جودة + مراجعة بعد الحدث",
      "about.eyebrow.values":"فلسفتنا",
      "about.values.title":"معايير تشعر بها.",
      "about.values.sub":"الفخامة ليست ديكور فقط — بل التوقيت، البدائل، السلامة، والتنفيذ الهادئ.",
      "about.v1.t":"وضوح تشغيلي",
      "about.v1.d":"مسؤوليات واضحة، جداول، Run‑of‑show، ومسارات تصعيد.",
      "about.v2.t":"ضبط جودة",
      "about.v2.d":"فحوصات وبروفات وإشراف ميداني لنتيجة مقصودة.",
      "about.v3.t":"السلامة أولاً",
      "about.v3.d":"تدفق جمهور وRigging منضبط وخطط سلامة.",
      "about.cta.eyebrow":"تعاون معنا",
      "about.cta.title":"إذا لازم يكون مثالي يوم الحدث — نحن فريقك.",
      "about.cta.sub":"أرسل التاريخ والمدينة والنطاق وسنرد بخيارات وخطوات.",

      "services.h1":"خدمات مصممة للثبات والأثر.",
      "services.lead":"من التخطيط إلى الإنتاج إلى AV — ندير التفاصيل لتبدو الفعالية سهلة.",
      "services.eyebrow":"القدرات",
      "services.title":"ما نقدمه",
      "services.sub":"شراكة كاملة أو دعم لأجزاء محددة حسب الحاجة.",
      "services.cta":"طلب عرض سعر",
      "services.s1.t":"تخطيط وإدارة الفعاليات",
      "services.s1.b1":"مفهوم وميزانية وجداول",
      "services.s1.b2":"توفير وإدارة موردين",
      "services.s1.b3":"طواقم وتدفق ضيوف وتشغيل",
      "services.s2.t":"حفلات الزفاف",
      "services.s2.b1":"إضاءة ومسرح وأجواء",
      "services.s2.b2":"ترفيه وتصميم عرض",
      "services.s2.b3":"تجربة ضيوف + VIP",
      "services.s3.t":"شركات وعلامات تجارية",
      "services.s3.b1":"مؤتمرات وإطلاقات وجوائز",
      "services.s3.b2":"تنشيطات + لحظات VIP",
      "services.s3.b3":"جداول إنتاج + Run‑of‑show",
      "services.s4.t":"مهرجانات وحفلات",
      "services.s4.b1":"مسارح وتشغيل عرض",
      "services.s4.b2":"تنسيق فنانين وكواليس",
      "services.s4.b3":"تدفق جمهور + سلامة",
      "services.s5.t":"AV وإضاءة",
      "services.s5.b1":"صوت وLED وتصميم إضاءة",
      "services.s5.b2":"Rigging ومسرح وطاقة",
      "services.s5.b3":"اختبارات وخطط بديلة",
      "services.s6.t":"استشارات مواقع",
      "services.s6.b1":"إجراءات تشغيل + طواقم",
      "services.s6.b2":"تقييم جاهزية إنتاج",
      "services.s6.b3":"أنظمة قابلة للتوسع",
      "services.ops.eyebrow":"التشغيل",
      "services.ops.title":"ماذا تحصل مع Beats",
      "services.ops.sub":"فريق هادئ، وثائق واضحة، وعرض يمشي كالساعة.",
      "services.ops.1t":"Run‑of‑show",
      "services.ops.1d":"جدول تفصيلي بمسؤوليات وبدائل.",
      "services.ops.2t":"إدارة موردين",
      "services.ops.2d":"مواصفات وموافقات وخطط تحميل وفحوصات جودة.",
      "services.ops.3t":"قيادة ميدانية",
      "services.ops.3d":"قائد إنتاج يحافظ على سلاسة اليوم.",
      "services.faq.eyebrow":"الأسئلة",
      "services.faq.title":"أسئلة شائعة",
      "services.faq.q1":"هل تقدمون خدمة إنتاج كاملة؟",
      "services.faq.a1":"نعم. نستطيع إدارة كل شيء أو دعم جزء محدد مثل AV أو إدارة العرض أو اللوجستيات.",
      "services.faq.q2":"أي دول تغطون؟",
      "services.faq.a2":"الأردن وقطر والسعودية — حسب حجم الحدث.",
      "services.faq.q3":"كم وقت الرد؟",
      "services.faq.a3":"أرسل التاريخ والمدينة والنطاق وسنرد بالخطوات التالية.",

      "portfolio.h1":"دراسات حالة وأعمال مختارة.",
      "portfolio.lead":"لمحة عن نطاقات التنفيذ — تخطيط، AV، تشغيل، وإدارة عرض.",
      "portfolio.eyebrow":"ما يهم العملاء",
      "portfolio.value.title":"تنفيذ يحمي العلامة.",
      "portfolio.value.sub":"الإنتاج ليس مورّد واحد — بل نظام يحافظ على التوافق.",
      "portfolio.cs1.t":"إنتاج مهرجان/حفل",
      "portfolio.cs1.d":"مسرح وLED وإضاءة وتشغيل وكواليس وإدارة عرض.",
      "portfolio.cs2.t":"مؤتمر شركات",
      "portfolio.cs2.d":"جداول وتنسيق موردين وAV وتنفيذ نظيف.",
      "portfolio.cs3.t":"زفاف فاخر",
      "portfolio.cs3.d":"أجواء ومسرح وإضاءة وترفيه وتجربة ضيوف.",
      "portfolio.v1.t":"انضباط التخطيط",
      "portfolio.v1.d":"جداول واعتمادات تمنع المفاجآت في الموقع.",
      "portfolio.v2.t":"قيادة طواقم",
      "portfolio.v2.d":"قادة ميدانيون ينسقون الموردين ويحافظون على Run‑of‑show.",
      "portfolio.v3.t":"لمسة راقية",
      "portfolio.v3.d":"تفاصيل وتوقيت وثبات — ما يتذكره الضيوف.",
      "portfolio.t1.q":"“الفريق كان هادئاً ومنظماً والعرض كان في وقته.”",
      "portfolio.t1.a":"عميل شركات • Production Lead",
      "portfolio.t2.q":"“من البريف إلى التنفيذ، كل شيء كان راقياً ومتحكماً.”",
      "portfolio.t2.a":"عميل زفاف • الأردن",
      "portfolio.cta.eyebrow":"التالي",
      "portfolio.cta.title":"تريد خطة مخصصة لفعاليتك؟",
      "portfolio.cta.sub":"أرسل التاريخ والمدينة والنطاق وسنرد بالخيارات والخطوات.",

      "gallery.title":"المعرض",
      "gallery.sub":"استعرض لقطات من فعاليات شركات وزفاف ومهرجانات وتجهيزات إنتاج.",
      "filter.all":"الكل",
      "filter.corporate":"شركات",
      "filter.weddings":"زفاف",
      "filter.festivals":"مهرجانات",
      "filter.av":"AV وإضاءة",

      "artists.h1":"الفنانون والمؤدون",
      "artists.lead":"ندعم حجوزات الفنانين وتشغيل العرض بالكامل — ضيافة، Riders، جداول، إدارة مسرح وكواليس، وإدارة عرض.",
      "artists.a.title":"فنانون (مختار)",
      "artists.a.sub":"فنانون إقليميون ودوليون تعاملنا معهم أو دعمناهم.",
      "artists.d.title":"دي جي (مختار)",
      "artists.d.sub":"Lineups إلكترونية ونوادي.",
      "artists.live":"حفلة مباشرة",
      "artists.intl":"حجز دولي",
      "artists.fest":"مهرجان",
      "artists.dj":"DJ Set",
      "artists.cta.eyebrow":"دعم الحجز",
      "artists.cta.title":"أرسل اسم الفنان والتاريخ والمدينة والمكان.",
      "artists.cta.sub":"سننسق الدعم والحجز والـRiders والجدول والإدارة الميدانية.",
      "artists.cta.button":"طلب حجز",

      "contact.title":"تواصل",
      "contact.sub":"أرسل التاريخ والمدينة ونوع الحدث والنطاق — وسنرد بالخيارات.",
      "contact.form.title":"إرسال طلب",
      "contact.form.name":"الاسم الكامل",
      "contact.form.email":"البريد الإلكتروني",
      "contact.form.phone":"الهاتف",
      "contact.form.city":"المدينة",
      "contact.form.date":"تاريخ الحدث",
      "contact.form.service":"الخدمات المطلوبة",
      "contact.form.service.placeholder":"اختر",
      "contact.form.service.1":"تخطيط وإدارة",
      "contact.form.service.2":"إنتاج زفاف",
      "contact.form.service.3":"شركات/علامات",
      "contact.form.service.4":"مهرجان/حفل",
      "contact.form.service.5":"AV/إضاءة",
      "contact.form.service.6":"استشارات مواقع",
      "contact.form.subject":"العنوان",
      "contact.form.msg":"الرسالة",
      "contact.form.msgPh":"اكتب النطاق وعدد الضيوف والمكان وأي أولويات مهمة.",
      "contact.form.send":"إرسال",
      "contact.form.note":"سيتم فتح تطبيق البريد. إذا تفضل واتساب استخدم الزر.",
      "contact.direct.title":"بيانات مباشرة",
      "contact.direct.email":"البريد",
      "contact.direct.web":"الموقع",
      "contact.direct.phone":"الهاتف",
      "contact.direct.coverage":"التغطية",
      "contact.promise.eyebrow":"الخطوة التالية",
      "contact.promise.title":"ماذا بعد؟",
      "contact.promise.sub":"سنراجع الطلب ونقترح اتصالاً قصيراً إن لزم ثم نرسل الخيارات والخطوات."
    }
  };

  const getSavedLang = () => {
    try { return localStorage.getItem("beats_lang") || ""; } catch { return ""; }
  };
  const saveLang = (lang) => {
    try { localStorage.setItem("beats_lang", lang); } catch {}
  };

  const applyLang = (lang) => {
    const isAr = lang === "ar";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir  = isAr ? "rtl" : "ltr";

    // Toggle label
    const t = $("#langToggle");
    if (t) t.textContent = isAr ? "EN" : "AR";

    // Text nodes
    $$("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      const v = dict[lang]?.[k];
      if (typeof v === "string") el.innerHTML = v;
    });

    // Placeholder nodes
    $$("[data-i18n-placeholder]").forEach(el => {
      const k = el.getAttribute("data-i18n-placeholder");
      const v = dict[lang]?.[k];
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });

    // Fix breadcrumb separators in RTL
    $$(" .breadcrumb ").forEach(() => {
  document.documentElement.classList.add("anim");});
  };

  const initLang = () => {
    const saved = getSavedLang();
    const start = saved || (((navigator.language || "").toLowerCase().startsWith("ar")) ? "ar" : "en");
    applyLang(start);
    const t = $("#langToggle");
    if (t) {
      t.addEventListener("click", () => {
        const next = document.documentElement.lang === "ar" ? "en" : "ar";
        saveLang(next);
        applyLang(next);
      });
    }
  };

  initLang();

  // Contact mailto composer
  const form = $("form[data-enhanced='true']");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const mailto = form.getAttribute("data-mailto") || window.__SITE__?.email || "info@beatsevents.com";
      const data = new FormData(form);
      const subject = (data.get("subject") || "Event inquiry").toString().trim() || "Event inquiry";

      const lines = [
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `City: ${data.get("city") || ""}`,
        `Date: ${data.get("date") || ""}`,
        `Service: ${data.get("service") || ""}`,
        "",
        (data.get("message") || "").toString()
      ];
      const body = encodeURIComponent(lines.join("\n"));
      const url = `mailto:${encodeURIComponent(mailto)}?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = url;
    });
  }

  // Gallery filter + search + lightbox
  const gallery = $("[data-gallery]");
  if (gallery) {
    const chips = $$(".chip");
    const search = $("[data-search]");
    const shots = $$("[data-gallery] .shot");

    const state = { filter: "all", q: "" };

    const match = (shot) => {
      const tags = (shot.getAttribute("data-tags") || "").toLowerCase();
      const cap = (shot.getAttribute("data-cap") || "").toLowerCase();
      const fOk = state.filter === "all" ? true : tags.includes(state.filter);
      const q = state.q.trim().toLowerCase();
      const qOk = !q ? true : (tags.includes(q) || cap.includes(q));
      return fOk && qOk;
    };

    const render = () => {
      shots.forEach(s => s.style.display = match(s) ? "" : "none");
    };

    chips.forEach(c => c.addEventListener("click", () => {
      chips.forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      state.filter = c.getAttribute("data-filter") || "all";
      render();
    }));

    if (search) {
      search.addEventListener("input", () => {
        state.q = search.value || "";
        render();
      });
    }

    // Lightbox
    const lb = $("[data-lightbox]");
    const lbMedia = $("[data-lightbox-media]");
    const lbCap = $("[data-lightbox-cap]");
    const closeBtn = $("[data-lightbox-close]");
    const prevBtn = $("[data-lightbox-prev]");
    const nextBtn = $("[data-lightbox-next]");

    const visibleShots = () => shots.filter(s => s.style.display !== "none");
    let currentIndex = 0;

    const openAt = (shot) => {
      if (!lb || !lbMedia || !lbCap) return;
      const list = visibleShots();
      currentIndex = Math.max(0, list.indexOf(shot));

      const imgEl = $(".shot-img", shot);
      const className = imgEl ? imgEl.className : "";
      lbMedia.className = "lightbox-media " + className.replace("shot-img", "").trim();
      lbCap.textContent = shot.getAttribute("data-cap") || "";
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      if (!lb) return;
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    const step = (dir) => {
      const list = visibleShots();
      if (!list.length) return;
      currentIndex = (currentIndex + dir + list.length) % list.length;
      openAt(list[currentIndex]);
    };

    shots.forEach(s => s.addEventListener("click", () => openAt(s)));
    closeBtn && closeBtn.addEventListener("click", close);
    lb && lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    prevBtn && prevBtn.addEventListener("click", () => step(-1));
    nextBtn && nextBtn.addEventListener("click", () => step(1));
    window.addEventListener("keydown", (e) => {
      if (!lb || lb.getAttribute("aria-hidden") !== "false") return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    render();
  }
})();
