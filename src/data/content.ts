export interface SkillItem {
  number: number;
  symbol: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  purity: number; // e.g. 99.1%
  years: number;
}

export interface ProjectItem {
  id: string;
  caseNo: string;
  title: string;
  verdict: string;
  category: 'web-apps' | 'ui-ux' | 'experiments';
  year: string;
  status: 'WON' | 'SETTLED' | 'ACQUITTED';
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
  dossierQuote?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  firm: string;
  location: string;
  verdict: string;
  achievements: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  headline: string;
  shout: string;
  description: string;
  disclaimer: string;
  ctaText: string;
}

export interface TestimonialItem {
  quote: string;
  client: string;
  title: string;
  company: string;
  rating: string;
  caseRef: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  purity: string;
}

export const PORTFOLIO_DATA = {
  lawyer: {
    name: "Mohan Mahajan",
    alias: "WHSP CONCIERGE",
    heisenbergAlias: "THE ARCHITECT",
    role: "Creative Engineer & Full-Stack Developer",
    phone: "+1 (505) 503-4455",
    phoneNumeric: "+15055034455",
    email: "mohan@whsp.dev",
    location: "Albuquerque, NM / Remote",
    barNumber: "NM-842",
    establishedYear: "2024",
    resumeUrl: "/assets/exhibit-r-resume.pdf",
    initial: "M",
    ghostLetter: "M",
  },

  modes: {
    whsp: {
      name: "{ whsp }",
      tagline: "A PROBLEM CONCIERGE SERVICE · CREATIVE ENGINEERING",
      heroH1: ["WE HANDLE", "SMALL", "PROBLEMS."],
      heroSub: "Tell us the problem. No questions. No judgment. Just put it in {  }. Creative developer & problem concierge. Saul opens. Mike closes.",
      aboutHeadline: "SO... WHO HANDLE IT? WE HAVE TWO TEAMS.",
      aboutSub: "Saul is the opener. Saul listens and finds a way in. Engineering closes the problem quietly with clean TypeScript, high-performance React, and production excellence.",
      skillsHeadline: "THE CONCIERGE TOOLKIT",
      skillsSub: "Engineered to dismantle friction, optimize interfaces, and resolve problems without drama.",
      contactHeadline: "TELL US THE PROBLEM · JUST PUT IT IN { }",
      contactSub: "No questions. No judgment. Whatever is blocking your product or team, leave it with the concierge.",
    },
    saul: {
      name: "SAUL GOODMAN",
      tagline: "CREATIVE ENGINEERING & MODERN FRONTEND",
      heroH1: ["DID YOU KNOW", "YOU HAVE", "OPTIONS?"],
      heroSub: "Creative technologist & frontend developer. Building fast, clean, high-performance web applications and modern interface systems. When your software needs airtight execution... Better Call.",
      aboutHeadline: "I'M NOT IN THE CODE BUSINESS. I'M IN THE PRODUCT BUSINESS.",
      aboutSub: "From first principles to high-velocity modern React architecture.",
      skillsHeadline: "THE TECHNICAL ARSENAL",
      skillsSub: "Forensic front-end tooling and verified engineering exhibits ready to defend your product.",
      contactHeadline: "GET IN TOUCH · RETAIN COUNSEL",
      contactSub: "Don't let technical debt sentence your business. Retain counsel today.",
    },
    jimmy: {
      name: "JIMMY MCGILL",
      tagline: "SCRAPPY BUILDER · AIRTIGHT CRAFT",
      heroH1: ["CRAFTING CODE", "THAT STANDS UP", "IN PRODUCTION."],
      heroSub: "Creative engineer with relentless craft. From clean system architecture to building enterprise web applications for scaled user bases, I believe in relentless craft, DSA foundations, and zero excuses.",
      aboutHeadline: "FROM ROOTS TO ENTERPRISE PRODUCTION SUITES.",
      aboutSub: "The journey of an ambitious engineer who reads every line of the specs.",
      skillsHeadline: "THE TOOLKIT & WORKBENCH",
      skillsSub: "Handcrafted code, meticulous attention to detail, and persistent problem solving.",
      contactHeadline: "LET'S TALK OVER COFFEE AND A LEGAL PAD",
      contactSub: "Have a technical project, internship role, or greenfield vision? Leave your message below.",
    },
    heisenberg: {
      name: "HEISENBERG",
      tagline: "EMPIRICAL PRECISION · 99.1% PURE CODE QUALITY",
      heroH1: ["SAY MY NAME.", "I AM THE ONE", "WHO CODES."],
      heroSub: "You clearly don't know who you're talking to. A user opens their browser and sees sluggish latency, and you think that of me? No. I am the one who optimizes. 99.1% pure stoichiometric architecture.",
      aboutHeadline: "I AM IN THE EMPIRE BUSINESS. NO COMPROMISES.",
      aboutSub: "Strict types. Zero runtime impurity. Maximum stoichiometric reactivity.",
      skillsHeadline: "THIS IS OUR LAB & YOU ARE NOT WELCOME",
      skillsSub: "Engineered with 99.1% purity. Certified production runs without memory leaks or syntax impurities.",
      contactHeadline: "ALL BAD THINGS MUST COME TO AN END",
      contactSub: "Say my name. Then schedule the production deployment.",
    }
  },

  stats: [
    { label: "CODE PURITY BENCHMARK", value: 99.1, suffix: "%" },
    { label: "ENTERPRISE USERS SCALED", value: 100, suffix: "+" },
    { label: "LIGHTHOUSE PERFORMANCE", value: 98, suffix: "/100" },
    { label: "TEST COVERAGE", value: 95, suffix: "%" }
  ],

  whsp: {
    heroLead: "Tell us the problem.\nNo questions. No judgment.\nJust put it in {  }",
    brand: "whsp",
    elevatorSub: "we handle small problems",
    elevatorCodeSub: "we handle complex code problems",
    problemHeading: "Problem",
    problemDescription: "Small problems take up more space in our day than they should.\nWe hesitate to ask for help because they feel too trivial, too awkward, or simply too annoying to explain.",
    everydayProblems: [
      { text: "Leaving the group chat without drama", bg: "#DF988D", textDark: true },
      { text: "Calling customer service about a wrong charge", bg: "#FFFFFF", textDark: true },
      { text: "Being invited to something you really don't want to attend", bg: "#9FA8DA", textDark: true },
      { text: "Replying to a message you've ignored for three days", bg: "#E29578", textDark: true },
      { text: "Sending a message you don't want to send", bg: "#FFFFFF", textDark: true },
      { text: "Deciding what you should eat tonight", bg: "#8DA0B8", textDark: true },
      { text: "Figuring out how to cancel an appointment", bg: "#FFFFFF", textDark: true },
    ],
    codeProblems: [
      { text: "Refactoring 5,000 lines of legacy spaghetti code", bg: "#DF988D", textDark: true },
      { text: "Fixing a 2 AM production bug that only happens on Safari", bg: "#FFFFFF", textDark: true },
      { text: "Converting messy Figma files into pixel-perfect React 19 UI", bg: "#9FA8DA", textDark: true },
      { text: "Explaining technical debt to non-technical stakeholders", bg: "#E29578", textDark: true },
      { text: "Achieving 100/100 Lighthouse web performance without bloat", bg: "#FFFFFF", textDark: true },
      { text: "Solving silent hydration mismatch errors in Next.js", bg: "#8DA0B8", textDark: true },
      { text: "Shipping airtight TypeScript code with zero runtime exceptions", bg: "#FFFFFF", textDark: true },
    ],
    flowMicro: "So... how it works?\nYou just put the problem in { }\nWe handle the rest.",
    processCards: [
      {
        num: "(1)",
        title: "Contact",
        description: "Client reaches out with a small problem",
        image: "/assets/images/whsp-step1-pen.png",
      },
      {
        num: "(2)",
        title: "Consultation",
        description: "Saul listens and clarifies the real issue",
        image: "/assets/images/whsp-step2-saul.png",
      },
      {
        num: "(3)",
        title: "Strategy",
        description: "Practical solution is suggested",
        image: "/assets/images/whsp-step3-pin.png",
      },
      {
        num: "(4)",
        title: "Execution",
        description: "Mike is mobilized to solve it quietly",
        image: "/assets/images/whsp-step4-mike.png",
      },
      {
        num: "(5)",
        title: "Case Closed",
        description: "Problem resolved and documented",
        image: "/assets/images/whsp-step5-notebook.png",
      },
    ],
    rewardText: "and we also have Reward System!",
    rewardSub: "After each case, you receive a little sweet treat.",
    rewardTagline: "Every problem solved deserves something sweet.",
    teamsMicro: "So... who handle it?\nWe have two teams.",
    teamSaul: {
      title: "Team Saul",
      subtitle: "The Opener",
      description: "Saul is the opener. Saul listens to the story, reads the situation, and finds a way in. When something needs words, negotiation, or persuasion, Saul opens the case.",
      role: "Consultant / Team Leader",
      idSerial: "04-20-12-00",
    },
    teamMikeMohan: {
      title: "Team Mike & Engineering",
      subtitle: "The Closer",
      description: "Mike and the engineering team are the closers. Solving problems quietly, cleanly, and without leaving a trace. When something needs airtight code, robust architecture, and production delivery, they close the deal.",
      name: "Lead Engineer",
      role: "Frontend Architect & Engineer",
      institution: "Computer Engineering & Architecture",
      score: "99.1% Code Execution Benchmark",
      idSerial: "WHSP-ENG-2025-01",
    }
  },

  funFacts: [
    "Specialized in modern React, TypeScript, and high-performance WebGL / Framer Motion animations.",
    "Engineered scalable design systems and full-stack component libraries.",
    "Strategic board tactician with competitive chess and tournament experience.",
    "Organizer and technical coordinator for community hackathons and developer events.",
    "Hands-on experience building enterprise-scale frontend dashboards and high-speed UI pipelines."
  ],

  skills: [
    // Programming Languages
    { number: 1, symbol: "Js", name: "JavaScript", category: "frontend", purity: 99.2, years: 3 },
    { number: 2, symbol: "Re", name: "React.js", category: "frontend", purity: 98.8, years: 2 },
    { number: 3, symbol: "Cp", name: "C / C++", category: "tools", purity: 97.5, years: 3 },
    { number: 4, symbol: "Jv", name: "Java", category: "backend", purity: 96.4, years: 2 },
    { number: 5, symbol: "Ht", name: "HTML5 / CSS3", category: "frontend", purity: 99.5, years: 3 },
    { number: 6, symbol: "Tw", name: "Tailwind CSS", category: "frontend", purity: 98.0, years: 2 },
    
    // Databases & Fundamentals
    { number: 7, symbol: "Sq", name: "MySQL", category: "backend", purity: 96.0, years: 2 },
    { number: 8, symbol: "Mg", name: "MongoDB", category: "backend", purity: 95.2, years: 2 },
    { number: 9, symbol: "Ds", name: "DSA & OOP", category: "tools", purity: 97.8, years: 3 },
    { number: 10, symbol: "Db", name: "DBMS & OS", category: "tools", purity: 96.5, years: 2 },

    // Tools & Engineering
    { number: 11, symbol: "Gt", name: "Git & GitHub", category: "tools", purity: 99.0, years: 3 },
    { number: 12, symbol: "Pm", name: "Postman API", category: "tools", purity: 97.0, years: 2 },
    { number: 13, symbol: "Sd", name: "SDLC & Design", category: "design", purity: 96.8, years: 2 },
    { number: 14, symbol: "Ai", name: "AI Dev Tools", category: "design", purity: 98.5, years: 2 },
    { number: 15, symbol: "Se", name: "SEO Analytics", category: "design", purity: 95.5, years: 1 },
    { number: 16, symbol: "Vt", name: "Vite & Tooling", category: "frontend", purity: 98.2, years: 2 },
  ] as SkillItem[],

  projects: [
    {
      id: "case-01",
      caseNo: "CASE NO. 0089",
      title: "LOS POLLOS HERMANOS ENTERPRISE CRM",
      verdict: "The people vs. sluggish latency. Instant multi-tenant logistics acquitted.",
      category: "web-apps",
      year: "2025",
      status: "WON",
      description: "Mission-critical real-time franchise distribution dashboard handling 450k events/sec with zero downtime and sub-30ms socket response times.",
      tags: ["React", "TypeScript", "Node.js", "Redis"],
      image: "/assets/images/case-01.webp",
      liveUrl: "https://example.com/demo1",
      codeUrl: "https://github.com/example/demo1",
      featured: true,
      dossierQuote: "I AM THE ONE WHO DISPATCHES."
    },
    {
      id: "case-02",
      caseNo: "CASE NO. 0074",
      title: "SANDPIPER CROSSING FINANCIAL PORTAL",
      verdict: "Class-action auditing engine with airtight cryptographic settlement tracking.",
      category: "web-apps",
      year: "2024",
      status: "WON",
      description: "High-security financial ledger for multi-million-dollar class-action claims, featuring automated disbursement verification and zero-knowledge receipts.",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Web3"],
      image: "/assets/images/case-02.webp",
      liveUrl: "https://example.com/demo2",
      codeUrl: "https://github.com/example/demo2",
      featured: true,
      dossierQuote: "YOU CAN'T HIDE ASSETS FROM A WELL-TESTED INDEX."
    },
    {
      id: "case-03",
      caseNo: "CASE NO. 0062",
      title: "VAMONOS PEST CONTROL CLIENT HUB",
      verdict: "Stealth field scheduling suite designed for rapid offline-first operations.",
      category: "ui-ux",
      year: "2024",
      status: "ACQUITTED",
      description: "Full offline-capable PWA with IndexedDB background sync, route optimization, and cryptographic job sign-offs for field teams under tough conditions.",
      tags: ["TypeScript", "PWA", "Tailwind CSS", "Framer Motion"],
      image: "/assets/images/case-03.webp",
      liveUrl: "https://example.com/demo3",
      codeUrl: "https://github.com/example/demo3",
    },
    {
      id: "case-04",
      caseNo: "CASE NO. 0051",
      title: "MADRIGAL ELECTROMOTIVE METRICS VAULT",
      verdict: "Global multi-region telemetry cockpit monitoring industrial reactors.",
      category: "web-apps",
      year: "2023",
      status: "WON",
      description: "Custom WebGL visualization suite translating gigabytes of streaming industrial sensor feeds into high-fidelity canvas charts at 60fps.",
      tags: ["Three.js", "React", "WebGL", "TypeScript"],
      image: "/assets/images/case-04.webp",
      liveUrl: "https://example.com/demo4",
      codeUrl: "https://github.com/example/demo4",
    },
    {
      id: "case-05",
      caseNo: "CASE NO. 0047",
      title: "ALBUQUERQUE BENCH DESIGN SYSTEM",
      verdict: "A codified set of 60+ accessible components compliant with Section 508.",
      category: "ui-ux",
      year: "2023",
      status: "SETTLED",
      description: "Unified UI toolkit with strict WCAG AAA color contrasts, automatic keyboard focus traps, and tokenized dark/light/courtroom themes.",
      tags: ["Figma", "Tailwind CSS", "Radix UI", "A11y"],
      image: "/assets/images/case-05.webp",
      liveUrl: "https://example.com/demo5",
      codeUrl: "https://github.com/example/demo5",
    },
    {
      id: "case-06",
      caseNo: "CASE NO. 0038",
      title: "GRAY MATTER CHEMICAL SIMULATOR",
      verdict: "Experimental stoichiometric formula compiler running entirely on client WASM.",
      category: "experiments",
      year: "2023",
      status: "WON",
      description: "Interactive periodic synthesis sandbox demonstrating browser WebAssembly compute pipelines and microsecond mathematical simulation.",
      tags: ["WASM", "Rust", "React", "Vite"],
      image: "/assets/images/case-06.webp",
      liveUrl: "https://example.com/demo6",
      codeUrl: "https://github.com/example/demo6",
    }
  ] as ProjectItem[],

  experience: [
    {
      period: "2024 — PRESENT",
      role: "Frontend & Full Stack Engineer",
      firm: "Product Engineering Studio",
      location: "San Francisco, CA / Remote",
      verdict: "Engineered scalable React components and optimized search visibility for live enterprise products.",
      achievements: [
        "Developed and optimized React.js frontend components for a live internal CRM system utilized by 100+ active enterprise employees.",
        "Served as technical consultant using analytics and search performance suites to boost website discoverability.",
        "Created interactive educational and product modules focused on clean UI design, responsiveness, and frictionless user experience."
      ],
      tags: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Analytics"]
    },
    {
      period: "2023 — 2024",
      role: "Hackathon Lead & Technical Coordinator",
      firm: "24-Hour Developer Hackathon",
      location: "Tech Campus",
      verdict: "Spearheaded student developer engagement, event logistics, and technical infrastructure.",
      achievements: [
        "Coordinated and managed an intensive 24-hour hackathon bringing together dozens of competitive engineering teams.",
        "Handled digital promotions, participant outreach, and technical logistics.",
        "Facilitated mentorship and evaluation sessions for rapid software prototypes."
      ],
      tags: ["Leadership", "Coordination", "Hackathons", "Tech Outreach"]
    },
    {
      period: "2023 — 2024",
      role: "State Tournament Representative",
      firm: "State Chess Championship",
      location: "Regional Sports Council",
      verdict: "Demonstrated disciplined strategic planning and high-pressure tactical execution.",
      achievements: [
        "Clinched Runner-Up honors in the regional tactical chess tournament.",
        "Trained in deep combinatorial search, strategic tempo control, and tactical calculation under strict clock constraints."
      ],
      tags: ["Strategic Thinking", "Chess Tactics", "Tournament Honors"]
    }
  ] as ExperienceItem[],

  barAdmissions: [
    { 
      degree: "Bachelor of Engineering in Computer Engineering", 
      institution: "Institute of Technology", 
      year: "Graduation Spec · High Honors" 
    },
    { 
      degree: "Diploma in Information Technology", 
      institution: "State Technical Board", 
      year: "Distinction Honors" 
    },
    { 
      degree: "State Chess Tournament Honors", 
      institution: "State Sports Council", 
      year: "Certificate of Merit" 
    }
  ],

  services: [
    {
      id: "srv-1",
      headline: "HAVE A BUG?",
      shout: "BETTER CALL ME.",
      description: "Memory leaks? Unhandled promise rejections? Silent race conditions? I step in when regular developers throw up their hands. Guaranteed resolution.",
      disclaimer: "No settlement is too small. Bugs may be liquidated without bail.",
      ctaText: "RETAIN EMERGENCY AUDIT"
    },
    {
      id: "srv-2",
      headline: "NEED A MODERN SITE?",
      shout: "LET'S MAKE A DEAL.",
      description: "Full-scale web applications engineered from scratch in React, Vite, and TypeScript. Lightning fast, beautifully animated, and built to convert.",
      disclaimer: "Competitors will allege unfair competitive advantage. Let them.",
      ctaText: "COMMISSION YOUR EMPIRE"
    },
    {
      id: "srv-3",
      headline: "PRODUCT SLOW?",
      shout: "YOU HAVE RIGHTS.",
      description: "Speed is the law. If your site takes longer than 1.5 seconds to load, your users are walking. I conduct deep forensic profiling to achieve 99+ Lighthouse scores.",
      disclaimer: "Lighthouse scores below 90 are considered criminal negligence in my jurisdiction.",
      ctaText: "REQUEST SPEED INSPECTION"
    },
    {
      id: "srv-4",
      headline: "DESIGN SYSTEM MESS?",
      shout: "CLEAN THE SLATE.",
      description: "Bridge the gap between Figma and production code. Structured, accessible, tokenized design systems that your engineers will actually love using.",
      disclaimer: "Warning: Productive developers may experience sudden bursts of confidence.",
      ctaText: "DRAFT COMPONENT STATUTE"
    }
  ] as ServiceItem[],

  testimonials: [
    {
      quote: "Jimmy McGill took our broken, spaghetti-code storefront and turned it into an absolute juggernaut. Our conversion shot up 42% overnight. The man is a magician.",
      client: "Gus F.",
      title: "Proprietor",
      company: "Los Pollos Hermanos",
      rating: "★★★★★",
      caseRef: "DOCKET #4912"
    },
    {
      quote: "I was skeptical about a lawyer designing our interface. But the 99.1% purity claim is real. The animations are so tight, competitors think we raised Series B.",
      client: "Kim W.",
      title: "Senior Partner",
      company: "Wexler & Associates",
      rating: "★★★★★",
      caseRef: "DOCKET #5103"
    },
    {
      quote: "When Hamlin wouldn't touch our deadline, Jimmy delivered in two weeks flat. Clean TypeScript, perfect keyboard navigation, zero excuses.",
      client: "Huell B.",
      title: "Operations Director",
      company: "Coushatta Logistics",
      rating: "★★★★★",
      caseRef: "DOCKET #3884"
    }
  ] as TestimonialItem[],

  process: [
    {
      step: "01",
      title: "DISCOVERY & DEPOSITION",
      subtitle: "EXAMINE THE EVIDENCE",
      description: "We interrogate your business requirements, uncover technical debt, and establish the strategic brief before writing a single line.",
      deliverable: "Architectural Statement & Scope",
      purity: "99.0%"
    },
    {
      step: "02",
      title: "DESIGN & PROTOTYPING",
      subtitle: "BUILDING THE ARGUMENT",
      description: "Crafting wireframes, interaction systems, and tokens in Figma. Every micro-interaction is stress-tested against user expectations.",
      deliverable: "High-Fidelity Interactive Deck",
      purity: "99.2%"
    },
    {
      step: "03",
      title: "STOICHIOMETRIC BUILD",
      subtitle: "LAB-GRADE CODING",
      description: "Writing strict TypeScript, modular React components, and hardware-accelerated Framer Motion transitions with zero redundant dependencies.",
      deliverable: "Production Codebase & CI Pipeline",
      purity: "99.5%"
    },
    {
      step: "04",
      title: "FORENSIC TESTING",
      subtitle: "CROSS-EXAMINATION",
      description: "Lighthouse audits, automated Playwright passes, screen-reader testing, and cross-browser verification on mobile, tablet, and ultra-wide viewports.",
      deliverable: "99.1% Purity Certification",
      purity: "99.1%"
    },
    {
      step: "05",
      title: "VERDICT & DEPLOYMENT",
      subtitle: "CASE CLOSED",
      description: "Seamless deployment to global CDNs with asset caching, compression, and post-launch telemetry. You walk away a winner.",
      deliverable: "Live Product & Documentation",
      purity: "99.9%"
    }
  ] as ProcessStep[],

  socials: [
    { name: "Mohan Mahajan on LinkedIn", url: "https://www.linkedin.com/in/mohanmahajan/", icon: "Linkedin" },
    { name: "Mohan Mahajan on GitHub", url: "https://github.com/Mohan-S-Mahajan/", icon: "Github" },
    { name: "Mohan Mahajan on Instagram", url: "https://www.instagram.com/mohan_mahajann/", icon: "Instagram" },
  ]
};
