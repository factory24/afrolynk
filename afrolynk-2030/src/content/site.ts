/**
 * Afrolynk — public website content (source of truth).
 *
 * This is the organisation's outward-facing story, not an internal strategy deck.
 * Facts are drawn from Afrolynk's own materials and verified public sources
 * (vc4a.com/afrolynk, theafricancourier.de, newsghana.com.gh, techzim.co.zw).
 */

export const site = {
  name: "Afrolynk",
  tagline: "Innovate · Connect · Accelerate",
  foundedYear: 2016,
  shortDesc:
    "A bridge between the African and European startup ecosystems — connecting founders, experts, investors and corporates to build ventures that create value for good.",
  email: "info@afrolynk.com",
  phone: "+49 1520 9295402",
  address: {
    line1: "Neue Bahnhofstraße 28",
    line2: "10245 Berlin, Germany",
  },
  hours: "Mon – Sat, 8AM – 5PM",
  factory24: "https://factory24.org",
  youtubeChannel:
    "https://www.youtube.com/channel/UCjNXmCZGJWShsa5SPhsJtDg",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/afrolynk/" },
    { label: "Facebook", href: "https://www.facebook.com/Afrolynk" },
    { label: "X", href: "https://twitter.com/afrolynk" },
    { label: "Instagram", href: "https://www.instagram.com/afrolynk_/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCjNXmCZGJWShsa5SPhsJtDg" },
  ],
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Projects", href: "/projects" },
  { label: "History", href: "/history" },
  { label: "Contact", href: "/contact" },
];

/* ── Home hero ─────────────────────────────────────────── */
export const hero = {
  eyebrow: "Innovate · Connect · Accelerate",
  titleLines: ["A bridge between", "African & European", "innovation"],
  lede: "Since 2016, Afrolynk has connected African startups, entrepreneurs and innovation ecosystems with the experts, corporates, investors and markets they need to grow — building a community that creates value for good.",
  primaryCta: { label: "What we do", href: "/what-we-do" },
  secondaryCta: { label: "Partner with us", href: "/contact" },
};

/* ── Headline stats (Afrolynk's own public figures) ────── */
export type Stat = { value: string; label: string; note?: string };

export const stats: Stat[] = [
  { value: "2016", label: "Building since", note: "Founded in Berlin" },
  { value: "200+", label: "Participants a year", note: "Across our programs & conference" },
  { value: "20+", label: "Scalable startups a year", note: "Supported toward market & MVP" },
  { value: "60+", label: "Corporate partnerships", note: "Innovation collaborations" },
];

/* ── About / organisation ──────────────────────────────── */
export const about = {
  intro:
    "Afrolynk is an impact venture and community organisation based in Berlin, Germany. We believe African start-ups, entrepreneurs and innovation ecosystems have enormous potential to create social, economic and technological transformation — and we build the trusted connections that turn that potential into real ventures, partnerships and jobs.",
  vision:
    "To be the operating system for Afrocentric innovation worldwide — a hybrid physical and digital ecosystem where entrepreneurs, diaspora experts, corporates, investors and institutions discover opportunities, build ventures, access markets and mobilise capital.",
  mission:
    "To empower African and Afrocentric entrepreneurs to build future-ready ventures through mentoring, venture development, digital skills, AI readiness, market access, investment preparation and ecosystem connectivity — with special attention to the equal participation of women, youth and underrepresented founders.",
  bridge:
    "As one of the leading bridges between the European and African start-up ecosystems, we bring together a community that creates value for good. Facing the challenges of society, we search for solutions, drive technology beyond the status quo, and empower people through education to make a difference.",
};

export const values = [
  {
    title: "Community first",
    body: "Real, trusted relationships — between founders, experts, corporates and investors — are the engine of everything we do.",
  },
  {
    title: "Africa-rooted, globally networked",
    body: "Local context and African talent paired with diaspora expertise and international market access.",
  },
  {
    title: "Value for good",
    body: "We measure success by ventures built, skills gained, jobs created and inclusive, sustainable outcomes.",
  },
  {
    title: "Inclusive by design",
    body: "We prioritise the equal participation of women, youth and underrepresented founders in the innovation economy.",
  },
];

/* ── ICAi² — three core pillars powered by Intelligence + Impact ── */
export type Pillar = {
  key: string;
  letter: string;
  name: string;
  tagline: string;
  intro: string;
  points: { title: string; body: string }[];
};

export const pillars: Pillar[] = [
  {
    key: "innovate",
    letter: "I",
    name: "Innovate",
    tagline: "Build future-ready ventures & solutions",
    intro:
      "We help founders move from ideas to validated solutions — combining practical venture-building support with digital skills, AI readiness, product design and access to technical experts.",
    points: [
      {
        title: "Future skills",
        body: "AI readiness, data literacy, no-code & low-code development, cloud, cybersecurity and digital product design.",
      },
      {
        title: "Venture building",
        body: "Ideation labs, product validation, prototyping, business-model development and pilot preparation.",
      },
      {
        title: "Mentoring & coaching",
        body: "Investor readiness, technology selection, expert guidance and links to relevant networks.",
      },
    ],
  },
  {
    key: "connect",
    letter: "C",
    name: "Connect",
    tagline: "Activate a global Africa-linked network",
    intro:
      "Our always-on Africa–global network brings entrepreneurs, diaspora experts, investors, corporates and policy makers together throughout the year — across Europe, the Americas, Asia and Africa.",
    points: [
      {
        title: "Always-on community",
        body: "A hybrid community for founders, mentors, investors, corporates and diaspora experts.",
      },
      {
        title: "Podcasts, meetups & livestreams",
        body: "Year-round digital showcases and Expert Live sessions that keep the community active.",
      },
      {
        title: "Flagship convening",
        body: "The Afrolynk Conference and regional activations that turn discovery into real partnerships.",
      },
    ],
  },
  {
    key: "accelerate",
    letter: "A",
    name: "Accelerate",
    tagline: "From concept to pilots, markets & investment",
    intro:
      "We move ventures from concept to pilots, customers, investment and measurable scale — through venture-building, corporate challenges, market-entry support and investment-readiness sprints.",
    points: [
      {
        title: "Technology acceleration",
        body: "Adopting AI, automation and emerging tools for faster commercialisation.",
      },
      {
        title: "Market acceleration",
        body: "Connecting ventures to customers, pilots, corporates and cross-border go-to-market pathways.",
      },
      {
        title: "Financial acceleration",
        body: "Mobilising grants, blended finance, angel capital and investment-readiness support.",
      },
      {
        title: "Impact acceleration",
        body: "Focusing support on jobs created, capital raised, women founders backed and pilots launched.",
      },
    ],
  },
];

/**
 * The "i²" that powers Accelerate — Intelligence & Impact.
 * These are cross-cutting disciplines, not standalone pillars.
 */
export const icai2 = {
  label: "ICAi²",
  formula: "Innovate · Connect · Accelerate + Intelligence · Impact",
  explainer:
    "Three core pillars — Innovate, Connect, Accelerate — powered by two disciplines that run underneath the Accelerate engine: Intelligence and Impact.",
  disciplines: [
    {
      key: "intelligence",
      name: "Intelligence",
      body: "We turn ecosystem knowledge into strategic advantage — mapping entrepreneurs, diaspora experts, investors, markets and sector trends, and building opportunity radars for priority sectors across Africa, Europe, the Americas and Asia.",
    },
    {
      key: "impact",
      name: "Impact",
      body: "We define success through measurable outcomes — start-ups supported, jobs created, women & youth founders reached, capital mobilised, corporate pilots launched and climate or social impact delivered.",
    },
  ],
};

/* ── Flagship programs / offerings ─────────────────────── */
export type Program = {
  key: string;
  name: string;
  tagline: string;
  body: string;
  image: string;
  href?: string;
};

export const programs: Program[] = [
  {
    key: "ventures-studio",
    name: "Ventures Studio",
    tagline: "Transform ideas into viable products",
    body: "We turn entrepreneurs' and startups' ideas into innovative businesses and viable products worth investing in — training, supporting, building and promoting startups with market-ready MVPs.",
    image: "/img/ven.jpg",
  },
  {
    key: "lynkspace-hub",
    name: "Lynkspace Hub",
    tagline: "A hybrid home for the community",
    body: "A hybrid system of tech and entrepreneurial spaces — physical and virtual — that gives founders, experts and partners the infrastructure to collaborate and build together.",
    image: "/img/lynk.jpg",
  },
  {
    key: "factory24",
    name: "Factory24",
    tagline: "Innovate and transform",
    body: "Our innovation and transformation arm — helping ventures adopt emerging technology, industrialise ideas and scale responsibly across African and global markets.",
    image: "/img/24.jpg",
    href: "https://factory24.org",
  },
];

/* ── Priority focus sectors ────────────────────────────── */
export const sectors = [
  "Artificial Intelligence",
  "Fintech",
  "Climate Tech",
  "Water & Sanitation",
  "Energy",
  "Agriculture",
  "HealthTech",
  "EdTech",
  "Digital Commerce",
  "Financial Inclusion",
];

/* ── Projects & initiatives (portfolio) ────────────────── */
export type Project = {
  key: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  image: string;
};

export const projects: Project[] = [
  {
    key: "conference",
    title: "Afrolynk Conference, Berlin",
    category: "Flagship Event",
    year: "2016–2020",
    blurb:
      "Our flagship gathering — bringing African and European founders, investors, corporates and policy makers together in Berlin, hosted at Microsoft and beyond.",
    image: "/img/blog-3.jpg",
  },
  {
    key: "sdg6",
    title: "SDG6 Water & Sanitation Challenge",
    category: "Innovation Challenge",
    year: "2019",
    blurb:
      "A challenge mobilising founders and partners around clean water and sanitation solutions for African communities.",
    image: "/img/water-challenge.jpg",
  },
  {
    key: "pretech",
    title: "Pre-Tech & Data Science Training",
    category: "Skills Program",
    year: "Ongoing",
    blurb:
      "Hands-on training in data science, Python, Power BI and digital skills — equipping young Africans with future-ready capabilities.",
    image: "/img/portfolio-3.jpg",
  },
  {
    key: "afrolynkhel",
    title: "AfrolynkHel — Helsinki",
    category: "Startup Night",
    year: "2018",
    blurb:
      "A Startup Night in Finland, extending the Afrolynk community into the Nordic innovation ecosystem.",
    image: "/img/portfolio-7.jpg",
  },
  {
    key: "wesp",
    title: "WESP",
    category: "Program",
    year: "—",
    blurb:
      "Working with entrepreneurs and partners to strengthen sustainable, scalable ventures across the ecosystem.",
    image: "/img/portfolio-5.jpg",
  },
  {
    key: "ipower",
    title: "iPower Project",
    category: "Program",
    year: "—",
    blurb:
      "An initiative supporting founders with the tools, mentoring and networks to power their ventures forward.",
    image: "/img/portfolio-6.jpg",
  },
];

/* ── History timeline (verified public sources) ────────── */
export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  items?: string[];
  image?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2016",
    title: "The beginning in Berlin",
    body: "Afrolynk was founded by Moses Acquah in Berlin, starting out with a focus on providing expert support to young African entrepreneurs and hosting the first annual Afrolynk Conference.",
    items: ["First annual Afrolynk Conference in Berlin", "Expert support for young African founders"],
    image: "/img/carousel-2.jpg",
  },
  {
    year: "2017",
    title: "Conference at Microsoft Berlin",
    body: "The Afrolynk Conference was hosted at Microsoft Berlin, with workshops and pitch sessions across Fintech, HealthTech and Renewable Energy.",
    items: ["Annual Afrolynk Conference at Microsoft Berlin", "Fintech · HealthTech · Renewable Energy tracks"],
    image: "/img/blog-2.jpg",
  },
  {
    year: "2018",
    title: "Registered in Germany · going international",
    body: "Afrolynk was officially registered in Germany and expanded far beyond Berlin — activating the community across Ghana, Finland and pan-European partnerships.",
    items: [
      "Officially registered as an organisation in Germany",
      "Afrolynk Conference at Microsoft Berlin — Empowerment, Migration & Diversity, Future of Technology",
      "Start-up Night Ghana in Accra (with enpact & TANOE Network)",
      "Start-up Night Finland in Helsinki (AfrolynkHel)",
      "EEP Workshop with AfDB, BMZ & GIZ in Berlin",
      "Slush side-event: \u201cConnecting Drivers of Change\u201d",
      "Represented the YIWG at the African Investment Forum",
    ],
    image: "/img/portfolio-8.jpg",
  },
  {
    year: "2019",
    title: "Africa Tech & Entrepreneurship Week",
    body: "The 4th edition grew into a full week of capacity-building — workshops, ecosystem tours and a Startup Night — under the theme \u201cStrategic Partnerships for Sustainable Growth\u201d, held in September at Microsoft Berlin.",
    items: [
      "Afrolynk Conference, Berlin (September)",
      "WIDU project",
      "The Ghana Hub · Mentorship programs",
      "Deeper African presence & international ecosystem ties",
    ],
    image: "/img/blog-3.jpg",
  },
  {
    year: "2020",
    title: "The community goes virtual",
    body: "As the pandemic reshaped the world, the Afrolynk Conference moved online — broadening international participation and launching #AfrolynkExpertLive sessions that kept the community connected year-round.",
    items: ["Afrolynk 2020 Conference goes virtual", "#AfrolynkExpertLive expert sessions", "Expanded global digital community"],
    image: "/img/portfolio-9.jpg",
  },
  {
    year: "2021",
    title: "An always-on innovation platform",
    body: "Afrolynk is evolving from an event-led community into a year-round Africa–global innovation platform — with the Ventures Studio, Lynkspace Hub and Factory24, plus digital community, diaspora intelligence and venture building across Africa, Europe, the Americas and Asia.",
    items: ["Ventures Studio · Lynkspace Hub · Factory24", "Diaspora intelligence & venture building", "Growing across Africa, Europe, the Americas & Asia"],
    image: "/img/carousel-3.jpg",
  },
];

/** A verified intro video and press coverage for the History page. */
export const historyMedia = {
  video: {
    embed: "https://www.youtube.com/embed/HPtPj-Dm4x0",
    title: "Afrolynk 2020 Teaser",
  },
  press: [
    {
      title: "How Afrolynk addresses Africa's development challenges with technology",
      source: "The African Courier",
      href: "https://www.theafricancourier.de/interview-how-afrolynk-addresses-africas-development-challenges-with-technology/",
    },
    {
      title: "Afrolynk 2020 Conference goes virtual",
      source: "News Ghana",
      href: "https://www.newsghana.com.gh/afrolynk-2020-conference-goes-virtual/",
    },
    {
      title: "Afrolynk 2020 Conference is going virtual",
      source: "Techzim",
      href: "https://www.techzim.co.zw/2020/09/afrolynk-2020-conference-is-going-virtual/",
    },
    {
      title: "Afrolynk 2019 — Africa Tech & Entrepreneurship Week",
      source: "VC4A",
      href: "https://vc4a.com/afrolynk/afrolynk-2019/",
    },
  ],
};

/* ── Team ──────────────────────────────────────────────── */
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "Moses Acquah",
    role: "Founder & CEO",
    image: "/img/team-moses.jpg",
    bio: "Ghanaian-born technology leader. Previously Innovation Manager at Nokia's Research Center for West Africa and Ghana Market Manager at Microsoft. Founded Afrolynk in 2016 to connect African and European innovation.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/afrolynk/" },
      { label: "X", href: "https://twitter.com/afrolynk" },
    ],
  },
  {
    name: "Reginald Nsowah",
    role: "Senior Project Director",
    image: "/img/team-reggie.jpg",
    bio: "Leads program design and delivery, connecting founders with the mentors, partners and opportunities that move ventures forward.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/reginald-nsowah-09352929/" },
    ],
  },
  {
    name: "John Eddie Cobbinah",
    role: "Head of Technology",
    image: "/img/team-john.jpg",
    bio: "Drives Afrolynk's technology, digital platform and data capabilities that power our always-on community.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/john-eddie-cobbinah-312a86ba/" },
    ],
  },
];

/* ── Testimonials ──────────────────────────────────────── */
export const testimonials = [
  {
    name: "Dreziella Whitney Omaboe",
    role: "Pre-Tech Training Student",
    image: "/img/testimonial-3.jpg",
    quote:
      "I enjoyed the class throughout and the side benefits that came out of the training. The founder introduced us to the future and what Data Science holds — as a pharmacist in the making, I was surprised to realise how relevant it is to my field.",
  },
  {
    name: "Mavis Abban",
    role: "Pre-Tech Training Student",
    image: "/img/testimonial-1.jpg",
    quote:
      "With a background in accounting, this training helped me so much — especially Power BI. Data science boosted my confidence, helped me present and visualise data, and I've come to understand what Python is in computing.",
  },
];

/* ── Partner logos (public/img/brand) ──────────────────── */
export const partners = {
  poweredBy: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map(
    (n) => `/img/brand/${n}.png`,
  ),
  ecosystem: ["12", "13", "14", "15", "16", "18", "19", "21", "25", "24", "27", "28", "29"].map(
    (n) => `/img/brand/${n}.png`,
  ),
  media: ["17", "20", "23", "22", "26"].map((n) => `/img/brand/${n}.png`),
};

/* ── Ecosystem peers (context for positioning, optional) ── */
export const partnersNote =
  "Afrolynk works alongside a global ecosystem of hubs, accelerators, corporates, development partners and investors.";

/* ── Frequently asked questions (visible + FAQPage schema) ── */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is Afrolynk?",
    a: "Afrolynk is an impact venture and community organisation founded in Berlin in 2016 that bridges the African and European startup ecosystems — connecting African founders, entrepreneurs and innovation ecosystems with the experts, corporates, investors and markets they need to grow.",
  },
  {
    q: "Where is Afrolynk based?",
    a: "Afrolynk is headquartered in Berlin, Germany, at Neue Bahnhofstraße 28, 10245 Berlin, with an always-on digital community and activities across Africa, Europe, the Americas and Asia.",
  },
  {
    q: "Who founded Afrolynk and when?",
    a: "Afrolynk was founded in 2016 by Moses Acquah, a Ghanaian-born technology leader who previously worked as Innovation Manager at Nokia's Research Center for West Africa and as Ghana Market Manager at Microsoft.",
  },
  {
    q: "What does Afrolynk do?",
    a: "Afrolynk works across three core pillars — Innovate, Connect and Accelerate — helping founders build future-ready ventures, activating a global Africa-linked network, and moving ventures from concept to pilots, markets and investment. Accelerate is powered by two disciplines: Intelligence and Impact.",
  },
  {
    q: "Who can work with Afrolynk?",
    a: "Founders, corporates, investors, diaspora experts, donors and foundations, and government or institutional partners can all engage with Afrolynk through its programs, conference, community and venture-building support.",
  },
  {
    q: "Which sectors does Afrolynk focus on?",
    a: "Afrolynk prioritises AI, fintech, climate tech, water and sanitation, energy, agriculture, healthtech, edtech, digital commerce and financial inclusion.",
  },
];

/** Topics Afrolynk is an authority on — used for Organization `knowsAbout` (topical authority for AI/search). */
export const knowsAbout = [
  "African startups",
  "startup ecosystem development",
  "venture building",
  "startup accelerator programs",
  "diaspora innovation",
  "Africa–Europe trade and innovation",
  "market access for African ventures",
  "impact investing",
  "digital skills training",
  "AI readiness",
  "fintech",
  "climate tech",
  "entrepreneurship in Africa",
];
