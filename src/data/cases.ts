/** Portfolio case studies. Generated from the 2026 design pass; edit here. */

export interface CaseFigure {
  img: string | null;
  mode: string;
  cap: string | null;
}

export interface CaseSection {
  h: string;
  p: readonly string[];
  figs: readonly CaseFigure[];
}

export interface CaseStat {
  v: string;
  l: string;
}

export interface CaseStudy {
  slug: string;
  n: string;
  title: string;
  org: string;
  years: string;
  role: string;
  /** Google work — body is withheld until the visitor unlocks it server-side. */
  confidential: boolean;
  lede: string;
  hero: string | null;
  heroMode: string;
  stats: readonly CaseStat[];
  sections: readonly CaseSection[];
  lessons: readonly string[];
}

export const cases: CaseStudy[] = [
  {
    "slug": "google-play-transformation",
    "n": "01",
    "title": "Transformation of a Platform for 2 Billion Gamers",
    "org": "Google Play",
    "years": "2025",
    "role": "Director of UX, Games",
    "confidential": true,
    "lede": "Google Play was the biggest gaming platform almost nobody thought of as a gaming platform. My mandate was to redefine the core experience for over two billion gamers.",
    "hero": "/img/gp_play_youtab.webp",
    "heroMode": "tall",
    "stats": [
      {
        "v": "2B+",
        "l": "Gamers served every month"
      },
      {
        "v": "You tab",
        "l": "Shipped 2025 — hundreds of millions MAU"
      },
      {
        "v": "AI Avatar",
        "l": "Shipped 2025 — millions of users"
      },
      {
        "v": "+XX%",
        "l": "Gamer engagement (playtime)"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "My Google tenure began in Cloud, where I led the UX transformation across a massive, complex portfolio of over 30 enterprise products — shipping foundational products like Cloud Run and Cloud Code along the way.",
          "Then I moved to Play. Despite serving over two billion gamers every month, Play had for years focused on being a generic software distributor, with little done to engage gamers or earn their loyalty. In late 2023 the organization created the Games Vertical, focused on the needs of gamers and the future of the gaming business. I became head of UX for that organization."
        ],
        "figs": [
          {
            "img": "/img/gp_play_2022_1.webp",
            "mode": "phone",
            "cap": "Play circa 2022 — a distribution surface, not a gaming destination."
          },
          {
            "img": "/img/gp_play_2022_2.webp",
            "mode": "phone",
            "cap": "The generic store experience we set out to replace."
          }
        ]
      },
      {
        "h": "Earning the seat",
        "p": [
          "My first task was to establish a close relationship with the VP of Games and make sure the emerging multiyear plan was user-centered — and that my UX team was seen as a strategic partner rather than a service function.",
          "I took a proactive approach and kicked off a strategy primer: a well-organized collection of UX research and market insights that became the foundation for the strategy itself. My entire team contributed, and we were immediately pulled into the core strategy workstream. That simple move turned out to be critical in establishing our credibility and our role."
        ],
        "figs": []
      },
      {
        "h": "The alignment challenge",
        "p": [
          "Our first strategic objective was to improve gamers’ conscious engagement with the platform, and to do that we wanted to invest in a dedicated surface. Easier said than done — we got stuck for months.",
          "Play is a huge organization with a network of complex relationships and conflicting interests. Several teams wanted to participate in the new surface, but the vision was blurry. To lead the cross-org team out of the impasse I wrote an influential strategic document that became the core of the PRD — my claim to fame is naming the tab — and led a cross-org design team through a collaborative workshop.",
          "In the span of a week we arrived at a vision now used by hundreds of millions of people every day. The You tab shipped in 2025 — the surface leading this case study."
        ],
        "figs": []
      },
      {
        "h": "Pushing product excellence",
        "p": [
          "By relentlessly championing product quality and navigating complex cross-functional relationships, I raised the excellence bar across the gaming platform. It started with me becoming the ultimate advocate for quality across Play — often the first to point at shortcomings in our own work and at bugs troubling users. It took real effort to do that without harming cross-functional relationships.",
          "That pursuit built deep trust with top leadership and inspired a culture where every detail matters. Today I am not alone in it: my entire team cares deeply about every user and every pixel. I am especially proud of the “from people you follow” component with its delightful carousel, and of the games achievement cluster."
        ],
        "figs": [
          {
            "img": "/img/gp_play_excellence.webp",
            "mode": "phone",
            "cap": "The “from people you follow” carousel and the achievement cluster."
          }
        ]
      },
      {
        "h": "Pushing innovation",
        "p": [
          "I coach my team to act as a proactive engine for innovation, regularly driving new product ideas rather than waiting for requirements to appear at our doorstep. Today my team proposes as many new initiatives as any other function at Play Games.",
          "That approach led directly to my strategic push for the AI Avatar feature. We knew from research that gamers have a strong sense of identity and wanted to express it on our platform. I established a new team in Bangalore and challenged them to push the boundaries of what was possible — providing design principles, encouragement and organizational cover. Millions of gamers now set custom avatars and feel more attached to the platform."
        ],
        "figs": [
          {
            "img": "/img/gp_play_avatar.webp",
            "mode": "phone",
            "cap": "AI Avatar — shipped 2025. Millions of gamers have set one."
          }
        ]
      },
      {
        "h": "End-to-end ownership",
        "p": [
          "My work did not end when the features were on track to launch. I was also the DRI for the launch of the gaming brand and its go-to-market: I created the launch strategy, secured the promotional budget from marketing, and led the team that built one of the boldest marketing pages Google Play has ever delivered.",
          "When we launched the platform, I was asked to be the keynote speaker at Playtime, our main industry event."
        ],
        "figs": [
          {
            "img": "/img/gp_play_gtm.webp",
            "mode": "wide",
            "cap": "The Google Play Games launch page — one of the boldest marketing pages Play has shipped."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "Double-digit percentage growth in games platform users, and double-digit growth in games engagement measured by playtime.",
          "The success of the games platform established our team as Play’s innovation engine and cemented my role as a core strategic partner to the VP of Games.",
          "Today, in addition to leading the UX team, I lead the cross-functional team working on a critical AI product."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "People over structures — align scope with the capabilities and needs of the team, not the existing org chart.",
      "Real leadership is earned, through consistent energy and leading by example.",
      "Relentless energy brings results. I proposed an AI-focused strategy in 2022; it took until 2025 to get it prioritized."
    ]
  },
  {
    "slug": "google-cloud-serverless",
    "n": "02",
    "title": "The Serverless Experimentation Program",
    "org": "Google Cloud",
    "years": "2021",
    "role": "UX Lead — Serverless, DevEx, CI/CD, Ops, API Services",
    "confidential": true,
    "lede": "A story of organizational empowerment: taking a product line from zero experiments to a standing, cross-functional experimentation practice.",
    "hero": "/img/deck_cloud_serverless.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "0 → 20",
        "l": "Experiments run in 2021"
      },
      {
        "v": "6",
        "l": "Workshops, 50+ average attendance"
      },
      {
        "v": "24",
        "l": "Designers led, 4 managers"
      },
      {
        "v": "3",
        "l": "New products launched"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "Serverless products drastically simplify deployment by abstracting infrastructure behind API, CLI and UI layers — a multi-billion dollar opportunity Google Cloud invests in continuously by building a lot of features.",
          "After a few years it became clear that Cloud serverless had fallen into the classic enterprise building trap: we built a lot, without any goal-oriented optimization."
        ],
        "figs": []
      },
      {
        "h": "The problem",
        "p": [
          "Unlike other leading Google Cloud product lines, the Serverless organization ran no experiments at all — no multivariate split-tests, nothing. Between 2018 and 2021 the count was zero. Product development was focused entirely on shipping features, pushing optimization to a mythical “post-MVP phase”.",
          "I decided to change it."
        ],
        "figs": []
      },
      {
        "h": "The approach",
        "p": [
          "Without skipping a beat on delivery for key projects, I formulated a plan for a lean, cross-functional experimentation program.",
          "Once a month my team hosted a workshop with an open invitation to the entire organization — roughly 120 engineers, 12 PMs and 3 TPMs. We presented existing quantitative and qualitative research, then ran co-design exercises in Figma with a lo-fi design library.",
          "After each workshop, cross-functional leads prioritized the ideas and the UX team compiled everything into an “Experiment PRD”. I negotiated an agreement with engineering that every Experiment PRD would be added to the roadmap that quarter."
        ],
        "figs": [
          {
            "img": "/img/deck_cloud_workshop.webp",
            "mode": "cover",
            "cap": "The lo-fi wireframing style we used for open co-design sessions."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "Six workshops in 2021, averaging over 50 attendees, produced 20 experiments and a material lift in new revenue.",
          "A “test with a sample container” link drove a double-digit conversion rate increase and a measurable retention gain. Adding Free Tier information to the service creation page had a double-digit positive impact on conversion and led directly to revenue growth.",
          "Across my two years in Cloud the team launched three brand new products — Cloud Deploy, Cloud Workstations and Cloud Workflows — plus dozens of features contributing to billions in ARR. I also led multiple VP escalations, including the complete revamp of cloud.google.com and the consumer launch of signed-out Google Meet."
        ],
        "figs": [
          {
            "img": "/img/deck_cloud_exp1.webp",
            "mode": "cover",
            "cap": "Experiment 1 — “Test with a sample container”."
          },
          {
            "img": "/img/deck_cloud_exp2.webp",
            "mode": "cover",
            "cap": "Experiment 2 — Free Tier information at the point of decision."
          }
        ]
      }
    ],
    "lessons": [
      "Product development needs a balanced approach to innovation and optimization.",
      "Co-design with cross-functional partners can lead to lasting partnerships with dramatic business impact."
    ]
  },
  {
    "slug": "treder-design-branding",
    "n": "03",
    "title": "Designing for Yourself Is Tough",
    "org": "Treder Design",
    "years": "2019",
    "role": "Brand designer — and my own client",
    "confidential": false,
    "lede": "A decade of designing products, and never once a brand identity. So I made myself my own most demanding client.",
    "hero": "/img/logotypes.svg",
    "heroMode": "light",
    "stats": [
      {
        "v": "~100",
        "l": "Signs sketched in exploration"
      },
      {
        "v": "3",
        "l": "Core values defined"
      },
      {
        "v": "Neue Plak",
        "l": "Typeface, by Paul Renner"
      },
      {
        "v": "Gold + Black",
        "l": "The primary palette"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "I spent my entire career working on products and user interfaces. I built multiple teams, completed hundreds of projects and launched dozens of products. I had never designed a full brand identity.",
          "I always had great respect for designers working on brands — some of my heroes, Massimo Vignelli and Michael Bierut, designed timeless identities. Finally I decided to surrender to the desire and allow myself a dream project: my own brand."
        ],
        "figs": []
      },
      {
        "h": "Finding the story",
        "p": [
          "Before sketching anything, I started writing. What do I stand for? What is important to me in design? How can I contribute to teams creating amazing products?",
          "I started at the level of values. I consider myself a principled man with solid self-awareness, and yet I struggled to name them. After a deep dive into my past and my ambitions, I landed on three: loyalty, mastery — the never-ending strive to become better — and self-discipline.",
          "Then I thought about the critical moments in my career. My career was not built entirely on craft. I was quickly promoted to leadership, and as a leader I made more impact than as a designer. I could talk to people when others were silent, form teams from individuals, and create the healthy tension that led everyone to great results. I am a designer, but I exist for the people."
        ],
        "figs": []
      },
      {
        "h": "Exploration",
        "p": [
          "I sketched geometrical signs that represented my story on some level — nearly a hundred of them, some esoteric, some very straightforward. I took a lot of inspiration from the modernist era, striving for the same simplicity, compelling message and clean aesthetics.",
          "I decided gold and black would be the primary colors. Cold metal — high value, stability — combined with the space created by the absence of light felt exactly right."
        ],
        "figs": [
          {
            "img": "/img/logo_sketches_white.svg",
            "mode": "sheet",
            "cap": "Examples of signs created during the exploration phase."
          }
        ]
      },
      {
        "h": "The sign",
        "p": [
          "The final sign is a sharp gold rectangle encompassing two halves of a circle: individuals working together thanks to creative tension. Simplicity of values, and leadership creating space for collaboration.",
          "Then typography. Intuitively I started with my typographic hero, Adrian Frutiger — Avenir, Avenir Next, Frutiger, Univers. Nothing looked right. Casting a wider net, I found it: Neue Plak, a modern reedition of Plak designed by Paul Renner. Modern but classically modernist, not anonymous, not overused, and simply beautiful."
        ],
        "figs": []
      },
      {
        "h": "Results",
        "p": [
          "The brand identity inspired this entire portfolio website — the one you are reading now.",
          "And defining my values helped me better understand myself and my career path."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "Designing a brand identity is much more a task in storytelling than in sketching.",
      "It may take a hundred takes to find the right sign for the story. It is worth it.",
      "I loved the process."
    ]
  },
  {
    "slug": "open-source-adventure",
    "n": "04",
    "title": "Adele — The Design Systems Repository",
    "org": "Open Source",
    "years": "2018",
    "role": "Creator, designer and engineer",
    "confidential": false,
    "lede": "An open repository of thoroughly analyzed design systems, designed and coded solo across two weekends — and acquired in 2020.",
    "hero": "/img/deck_adele_hero.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "90",
        "l": "Design systems analyzed"
      },
      {
        "v": "120,000",
        "l": "Unique users in 12 months"
      },
      {
        "v": "35",
        "l": "Community maintainers"
      },
      {
        "v": "613",
        "l": "GitHub stars, 79 forks"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "There was no easy way to learn about the details of design systems at other companies, and promotional opportunities for the design systems themselves were fairly limited.",
          "I validated this with an exploratory study and industry analysis. Then, for two subsequent weekends in January 2018, I designed and coded the repository in React and Node."
        ],
        "figs": []
      },
      {
        "h": "Objectives",
        "p": [
          "Create a public repository with analyses of at least 50 design systems, find at least 10 maintainers, and attract at least 10,000 unique users in the first month after launch."
        ],
        "figs": []
      },
      {
        "h": "My role",
        "p": [
          "Everything: the concept, prototyping and visual design, coding in HTML/CSS/JS and React, building CLI tooling in Node.js, writing the technical documentation, and building and maintaining the community.",
          "The early prototype was, fittingly, created in UXPin."
        ],
        "figs": [
          {
            "img": "/img/adele_1.webp",
            "mode": "cover",
            "cap": "The repository browse experience."
          },
          {
            "img": "/img/adele_2.webp",
            "mode": "cover",
            "cap": "A single design system, analyzed."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "90 systems analyzed and a team of 35 maintainers.",
          "120,000 unique users in the first 12 months, 613 GitHub stars and 79 forks — well past every objective we set.",
          "Adele was acquired in the spring of 2020."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "Early technical analysis is everything.",
      "Open source is fun.",
      "Accessibility is for everyone."
    ]
  },
  {
    "slug": "uxpin-new-editor",
    "n": "05",
    "title": "Unified Design–Engineering Workflow",
    "org": "UXPin",
    "years": "2018",
    "role": "Founder, CEO & VP of Design",
    "confidential": false,
    "lede": "Connecting production design system code directly to the design editor — one of the key reasons UXPin was acquired.",
    "hero": "/img/deck_unified_eng.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "91%",
        "l": "Beta satisfaction rate"
      },
      {
        "v": "$100k",
        "l": "ARR in the first quarter"
      },
      {
        "v": "2,000",
        "l": "Companies targeted for beta"
      },
      {
        "v": "2020",
        "l": "Contributed to acquisition"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "Lack of a single source of truth leads to a suboptimal product development process. Lack of a common language between designers and developers results in suboptimal products.",
          "We researched this through Customer Development interviews, ongoing conversations with the community, and industry analysis."
        ],
        "figs": []
      },
      {
        "h": "Objectives",
        "p": [
          "Build technology enabling connection and synchronization between production design system code and the UXPin design editor. Attract 2,000 companies to the beta program, reach a 90% satisfaction score in beta, and generate $100k in Annual Recurring Revenue by the end of 2019."
        ],
        "figs": []
      },
      {
        "h": "The thinking",
        "p": [
          "I had been developing the underlying concepts since 2017: a model of the software development process where the design system sits between design and development as shared governance, and a linguistic model treating a design system as a private dictionary — syntax, pragmatics and semantics mapping onto design, code and documentation."
        ],
        "figs": []
      },
      {
        "h": "My role",
        "p": [
          "Forming and leading the team — 2 to 7 engineers, 1 PM, 1 designer. Teaching the team the Customer Development research method. Helping them build a long-term product strategy. Integrating design systems. And teaching non-coding designers, sales and CS enough React.js to be dangerous."
        ],
        "figs": [
          {
            "img": "/img/editor_light_dark.webp",
            "mode": "cover",
            "cap": "One editor, two audiences — an engineer-friendly and a designer-friendly view."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "91% satisfaction rate during the beta program.",
          "$100k in ARR in the first quarter.",
          "One of the key reasons UXPin was acquired in 2020."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "Patience makes great products.",
      "There is no “agile” without trust."
    ]
  },
  {
    "slug": "uxpin-enterprise-pivot",
    "n": "06",
    "title": "The Enterprise Pivot",
    "org": "UXPin",
    "years": "2010 — 2020",
    "role": "Co-founder, CEO & VP of Design",
    "confidential": false,
    "lede": "How I started a company on a paper notepad, evolved it into a profitable enterprise business, and led it to acquisition.",
    "hero": "/img/ep_shipped.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "0 → 100+",
        "l": "Employees, two global hubs"
      },
      {
        "v": "48h",
        "l": "First batch sold out"
      },
      {
        "v": "Samsung, TATA",
        "l": "Panasonic — enterprise contracts"
      },
      {
        "v": "2020",
        "l": "Acquired by Xenon Partners"
      }
    ],
    "sections": [
      {
        "h": "From a notepad",
        "p": [
          "UXPin did not start as software. It began as a physical product, born out of my own explorations into how to better support cross-functional collaboration. In 2010 I designed a paper prototyping notepad to help teams sketch together.",
          "We put it online and the initial batch sold out in 48 hours to over 400 customers. That immediate, tangible validation proved we had struck a real nerve in the market."
        ],
        "figs": [
          {
            "img": "/img/ep_notepad.webp",
            "mode": "cover",
            "cap": "The first UXPin product — a paper prototyping notepad, 2010."
          }
        ]
      },
      {
        "h": "From paper to digital",
        "p": [
          "In 2011, encouraged by the traction, we decided to build a software version of UXPin — a design collaboration tool.",
          "I came up with the idea of using advanced (for 2011) computer vision to automatically transform paper prototypes into HTML. The feature was applauded by the media and resulted in near-zero traction on the market. It was an invaluable lesson in focusing on the real problem instead of hype features."
        ],
        "figs": [
          {
            "img": "/img/ep_techcrunch.webp",
            "mode": "contain",
            "cap": "Press loved it. The market did not."
          }
        ]
      },
      {
        "h": "Relentless customer obsession",
        "p": [
          "So I learned to truly listen, and built the company culture around relentless customer obsession. Customer support became the heartbeat of the company.",
          "I knew the first 100+ UXPin customers personally. I read all the support emails in the early days, and we prioritized our feature backlog using quantitative analysis of customer tickets cross-checked with qualitative insights.",
          "Customer feedback was sacred. If a customer needed help we would always go the extra mile — prepare custom tutorials, jump on support calls, aid them in their design work. Every interaction was a lesson and an opportunity to build a relationship. It is how I learned to listen to the market instead of pushing flashy features — and it took us to becoming the first Polish company with Silicon Valley funding."
        ],
        "figs": [
          {
            "img": "/img/ep_support.webp",
            "mode": "cover",
            "cap": "Know your customers. Work for your customers."
          }
        ]
      },
      {
        "h": "It’s time for enterprise",
        "p": [
          "In 2015 our growth was rewarded: we raised our Series A and immediately set our sights on the enterprise market.",
          "I quickly realized that scaling up meant changing the company from the ground up. It was an enormous challenge that stretched me as a design, product and business leader."
        ],
        "figs": [
          {
            "img": "/img/ep_seriesa.webp",
            "mode": "cover",
            "cap": "Series A — and a decision to rebuild the company around enterprise."
          }
        ]
      },
      {
        "h": "The transformation",
        "p": [
          "Product: the product had to mature to become enterprise ready. I made the bold call to invest in a full overhaul of our rendering engine so it could handle much bigger projects and far stricter reliability requirements. 60% of our engineering team was devoted to that effort for 12 months.",
          "Design: to support enterprise processes we had to design for continuity across complex workflows. I also wanted the team to aim high and create a design that would communicate a sense of everlasting quality.",
          "Organization: in 24 months we went from thousands of small subscriptions to six-figure contracts with companies like Samsung, TATA and Panasonic. From sales and GTM to forward-deployed engineering, I more than doubled the organization, built the executive team, and extended our culture of excellence across two sizable hubs — Mountain View and Gdańsk — collectively employing over 100 people."
        ],
        "figs": []
      },
      {
        "h": "Design is the soul of the product",
        "p": [
          "To set our design and engineering teams on the right track, I workshopped with them the set of principles that would define the timeless quality we wanted to embody in the new version of the product. I also jumped into UXPin itself to share my explorations of a new, minimalist design language.",
          "In 2016 UXPin shipped as a completely redesigned, enterprise-grade product. Over ten years later, under new post-acquisition management, UXPin still looks and feels the way it did in 2015 — and it does not feel dated."
        ],
        "figs": [
          {
            "img": "/img/ep_principles.webp",
            "mode": "cover",
            "cap": "From the archive — the design principles I defined with the team."
          },
          {
            "img": "/img/deck_editor_culture.webp",
            "mode": "cover",
            "cap": "The completely redesigned, enterprise-grade product. Shipped 2016."
          }
        ]
      },
      {
        "h": "Connecting to real workflows",
        "p": [
          "A new engine, new features and a new UI were not enough. Great enterprise products have to connect to the workflows customers already have.",
          "In parallel to the overhaul of the core experience, I led the exploration of partnerships that would let UXPin plug into existing enterprise tools. The first two deals were with Jira and Adobe Typekit — now Adobe Fonts. Both played a significant role in our ability to sign enterprise customers, and I led product strategy and business development for both."
        ],
        "figs": [
          {
            "img": "/img/ep_partners.webp",
            "mode": "cover",
            "cap": "UXPin + Adobe Typekit — plugging into the tools enterprises already used."
          }
        ]
      },
      {
        "h": "The reshuffle",
        "p": [
          "In just a few years the market of design tools underwent a complete reshuffle. Figma emerged as the strong market leader and eventually IPO’d. Our main competitor for many years, InVision, went bankrupt. And I decided it was time to sell UXPin to a private equity firm.",
          "How did it happen? Figma made a bold bet on WebAssembly, a new technology that offered them unparalleled performance and reliability. They reached a level of excellence that UXPin and InVision were unable to match.",
          "I hesitated when there was a moment to act, and I stuck to the older technology — indirectly tied to our enterprise contracts. My lack of courage limited our ability to realize our potential. It was the most important leadership lesson I have ever received."
        ],
        "figs": []
      },
      {
        "h": "The silver lining",
        "p": [
          "Innovation made the difference between an acquisition and bankruptcy. While many of our competitors went out of business, I sold UXPin — and it continues to operate today, now celebrating its 16th year.",
          "In the heat of our enterprise transformation I created a center of innovation at the company. Every quarter I would form an impromptu cross-functional team reporting directly to me, with the purpose of building things we would otherwise hesitate to invest in.",
          "One of those innovation products — UXPin Merge, a bridge between production code bases and the design tool — became a massive success, and the main reason we were acquired."
        ],
        "figs": []
      },
      {
        "h": "The team",
        "p": [
          "Above everything else, we built an amazing, high-performing, happy team. That is the part I am proudest of."
        ],
        "figs": [
          {
            "img": "/img/ep_team.webp",
            "mode": "tall",
            "cap": "The UXPin team — the thing I am proudest of building."
          }
        ]
      }
    ],
    "lessons": [
      "Growing leaders grows the company.",
      "Culture breeds velocity and innovation.",
      "Disrupt yourself, or be disrupted."
    ]
  },
  {
    "slug": "ecommerce-video-portal",
    "n": "07",
    "title": "eCommerce Video Portal",
    "org": "Grupa Nokaut",
    "years": "2011",
    "role": "Head of Design · R&D team",
    "confidential": false,
    "lede": "Nokaut.tv — a video content service built to buy back a brand that lived entirely inside Google Search results.",
    "hero": "/img/nokauttv_1.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "1M+",
        "l": "YouTube views, first 15 episodes"
      },
      {
        "v": "100,000+",
        "l": "Viewers attracted"
      },
      {
        "v": "90%",
        "l": "Of traffic came from search"
      },
      {
        "v": "18 mo",
        "l": "Service lifespan"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "Grupa Nokaut, preparing for its IPO, was desperately trying to strengthen brand awareness and diversify traffic — over 90% of it came from Google search.",
          "At that time I headed the design organization and simultaneously worked in a small R&D team reporting directly to the founders, created to solve critical strategic problems and build future-facing product concepts."
        ],
        "figs": []
      },
      {
        "h": "Objectives",
        "p": [
          "Find a way to generate high quality, engaging video content for Nokaut.pl. Attract direct traffic and improve brand awareness. And appeal to a younger audience by presenting Nokaut.pl as a cool, vibrant company."
        ],
        "figs": []
      },
      {
        "h": "Exploration",
        "p": [
          "The creative process started with an open question: given the problems the business was facing, what kind of experience should we create? Video content was on the rise globally — but what did that mean for us, and how could it change the brand?",
          "After multiple brainstorming sessions we took a significant shortcut: partner with a rising local YouTube star and take inspiration from his channel. That led to Nokaut.tv — a program testing the knowledge of random people on the street and gifting them products when they answered correctly. We defined the brand concept and commissioned an intro video."
        ],
        "figs": [
          {
            "img": "/img/nokauttv_2.webp",
            "mode": "cover",
            "cap": "Frames from the commissioned intro — the Nokaut.tv brand."
          }
        ]
      },
      {
        "h": "The product",
        "p": [
          "I wireframed and prototyped the original version of the service, managed internal and external visual designers, and coordinated the collaboration with our external development partner."
        ],
        "figs": [
          {
            "img": "/img/nokauttv_3.webp",
            "mode": "cover",
            "cap": "The Nokaut.tv homepage."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "The first 15 episodes generated over 1M views on YouTube and delivered a significant amount of direct traffic to Nokaut.pl.",
          "It did not last. After the initial success the quality of content went down, the novelty effect disappeared, and after 18 months the service was closed — by then I had left the company."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "The plan to maintain a service is as vital as the plan to launch it.",
      "Coordinating multiple external partners drastically increases the risk of a project.",
      "Changing the brand perception of an established product is very difficult."
    ]
  },
  {
    "slug": "nokaut-homepage",
    "n": "08",
    "title": "Homepage for 2.5 Million People",
    "org": "Grupa Nokaut",
    "years": "2011",
    "role": "Head of Design · Management team",
    "confidential": false,
    "lede": "Turning an SEO powerhouse into a destination — with an IPO on the line and the CEO watching every pixel.",
    "hero": "/img/nokaut_homepage.webp",
    "heroMode": "framed",
    "stats": [
      {
        "v": "2.5M",
        "l": "Monthly users (5M by 2012)"
      },
      {
        "v": "10M",
        "l": "Offers, ~4,000 stores"
      },
      {
        "v": "2012",
        "l": "Grupa Nokaut IPO"
      },
      {
        "v": "4",
        "l": "People on the redesign team"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "From 2008 to 2012 I worked for one of the leading eCommerce companies of Central and Eastern Europe. Hundreds of difficult projects with heavy external and internal constraints shaped me as a designer and a product leader.",
          "In 2011 Nokaut.pl was attracting over 2.5 million users every month — growing to 5 million by early 2012 — and was the main engine of growth leading to the Grupa Nokaut IPO. In a country with just over 20 million internet users, those numbers were remarkable.",
          "Despite the business results, Nokaut.pl never established a solid brand. The majority of users entered through product pages well-positioned in Google Search. With the IPO approaching, the CEO asked my team to turn the homepage from an SEO powerhouse into a destination page with value of its own — without harming any of that SEO power."
        ],
        "figs": [
          {
            "img": "/img/homepage.svg",
            "mode": "dark",
            "cap": "The layout system behind the redesign."
          }
        ]
      },
      {
        "h": "Objectives",
        "p": [
          "Turn the homepage into a destination users would want to visit. Keep every SEO feature intact but make it a valuable part of the experience. Educate users about the value of Nokaut.pl. And find new premium ad locations for the partner network."
        ],
        "figs": []
      },
      {
        "h": "My role",
        "p": [
          "Leading the research and analysis. Building the business case and product plan. Leading the redesign team of one designer and two developers. Wireframing and prototyping the key experiences. Negotiating ad slots. Presenting plan and progress to the CEO. And measuring performance with multivariate split tests and usability studies.",
          "The CEO asked me to be hands-on and design the key experiences myself. I am not fond of micromanagement, but with the IPO approaching, changes on the homepage were going to be scrutinized by media and analysts."
        ],
        "figs": [
          {
            "img": "/img/nokaut_homepage_head.webp",
            "mode": "small",
            "cap": "Signals of strength in the header — money saved, 10 million offers from nearly 4,000 stores — plus a new premium ad space."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "The homepage started to attract more users, and the new ad slots increased ad revenue.",
          "During the research phase we discovered a need to compare multiple products without losing the context of the current search query. The feature built from that study significantly increased the conversion rate — more than the redesign itself did.",
          "The CEO was happy with the new homepage and the positive media reception, and I was designated to comment on the redesign to media outlets."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "A feature inspired by research outperformed the redesign it shipped alongside. More user research would have beaten more homepage.",
      "Trust of key stakeholders means everything — it is what gives a design team the freedom to do the best work of their lives."
    ]
  },
  {
    "slug": "paper-prototyping-redesigned",
    "n": "09",
    "title": "Paper Prototyping Redesigned",
    "org": "UXPin",
    "years": "2010",
    "role": "Co-founder — concept, design, GTM",
    "confidential": false,
    "lede": "The story of the notepad that changed my life — and accidentally started one of the most prominent startups in Polish tech history.",
    "hero": "/img/uxpin_notepad_2.webp",
    "heroMode": "cover",
    "stats": [
      {
        "v": "400",
        "l": "Notepads in the first batch"
      },
      {
        "v": "48h",
        "l": "To sell out completely"
      },
      {
        "v": "24h",
        "l": "To design and build the store"
      },
      {
        "v": "Nov 11",
        "l": "2010 — launch day, as promised"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "In 2010 I was promoted to Head of Design at Grupa Nokaut. Young and full of energy, I kept challenging myself to do more — including design work for a series of early-stage startups. Not a single one succeeded.",
          "That summer I decided to reflect on those failures and engage in a fun little project answering a problem I felt myself. Little did I know this side project would shape the next ten years of my life.",
          "Grupa Nokaut was a highly engineering-driven organization. Design was appreciated after some successful experiments, but collaboration remained a problem — design and engineering lived in two silos.",
          "So I started running paper prototyping workshops, inviting the entire engineering team to review research together and sketch solutions in small interdisciplinary groups. The first one was only somewhat successful: people were engaged, but many struggled with sketching and felt self-conscious about expressing themselves visually.",
          "For the next edition, instead of blank paper and pencils, the team received sticky notes printed with the essential components from our style guide. Instead of sketching, they assembled interfaces. That playful approach worked — and with two friends I turned it into a product."
        ],
        "figs": []
      },
      {
        "h": "Objectives",
        "p": [
          "Create a collaborative tool for designers and engineers. Build a go-to-market plan that strongly resonates with the target audience and launch on November 11th, 2010. And sell 400 notepads within 30 days of launch."
        ],
        "figs": []
      },
      {
        "h": "Exploration",
        "p": [
          "With my co-founders I started by defining a small set of interface elements — today we would call them atoms — universal enough to build any website. For hours we cut shapes out of sticky notes and tried to recreate eBay, Facebook, MySpace.",
          "Once we had a set that worked, we tested it with designer friends. After dozens of iterations we had something that held up in most cases. Then we went looking for a printing house, and learned that producing sticky notes in unusual shapes with sufficiently strong glue is genuinely hard. Two months of negotiation later, we had our first series: 400 pieces."
        ],
        "figs": [
          {
            "img": "/img/uxpin_notepad_collection_1.webp",
            "mode": "cover",
            "cap": "UXPin was always about quality. We checked every single notepad."
          }
        ]
      },
      {
        "h": "Launch",
        "p": [
          "In early November the printing house delivered. In theory we were ready. In practice we still had to build the UXPin website and store.",
          "To force the issue we fixed the launch date: November 11th — simultaneously World Usability Day and Poland Independence Day. It seemed like a great day to launch UXPin.",
          "We were busy with other commitments right up until launch day and had finished nearly nothing. Instead of rescheduling, we worked 24 hours non-stop. The entire website was designed and built in one day, with significant compromises — WordPress served as our eCommerce platform. A price worth paying for keeping our word.",
          "Late in the evening of November 11th we launched. The first order came a few minutes later. We were completely sold out within 48 hours."
        ],
        "figs": [
          {
            "img": "/img/uxpin_notepad_5.webp",
            "mode": "contain",
            "cap": "The original wireframe of the first UXPin website."
          },
          {
            "img": "/img/uxpin_notepad_6.webp",
            "mode": "contain",
            "cap": "The design that shipped, 24 hours later."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "UXPin became extremely popular almost immediately. In the first month alone we were serving IBM, Apple, Google, MySpace and Sony.",
          "Within 12 months this very simple notepad led us to starting a real company — one that attracted multiple awards, became the first Polish company to raise capital in Silicon Valley, and today serves tens of thousands of companies all over the world."
        ],
        "figs": [
          {
            "img": "/img/uxpin_notepad_collection_2.webp",
            "mode": "cover",
            "cap": "The first batch of UXPin notepads sold out in 48 hours."
          }
        ]
      }
    ],
    "lessons": [
      "Problem-based product development can lead to amazing success.",
      "Discipline is necessary in any design and product work.",
      "One decision can lead to years of unexpected consequences."
    ]
  },
  {
    "slug": "conversion-optimization",
    "n": "10",
    "title": "Conversion Optimization",
    "org": "Nokaut.pl",
    "years": "2009",
    "role": "First in-house product designer",
    "confidential": false,
    "lede": "A 24% conversion lift from a button color — and the experiment that established design as a discipline inside an engineering-driven company.",
    "hero": "/img/nokaut_home_page.webp",
    "heroMode": "tall",
    "stats": [
      {
        "v": "24%",
        "l": "Conversion rate growth"
      },
      {
        "v": "1st",
        "l": "In-house designer at Nokaut.pl"
      },
      {
        "v": "Millions",
        "l": "Of product pages affected"
      },
      {
        "v": "2009",
        "l": "Promoted to leadership after"
      }
    ],
    "sections": [
      {
        "h": "Context",
        "p": [
          "In 2008 I was hired as the first in-house product designer at a Polish eCommerce startup, Nokaut.pl. Before I joined, design was either outsourced or done by engineers. Shortly after coming on board I noticed that most of the team considered design to be mere decoration.",
          "Nokaut.pl was consumer-focused, and this disregard for design was starting to harm the business. To help the company grow I had to introduce a proper user-centered design process and prove the value of design. The beginnings were not easy — but thanks to my mentor, the co-founder and VP of Product, I found a way: direct collaboration with engineers, and constant work on business metrics.",
          "In 2009 I was trusted with optimizing critical elements of the Nokaut.pl product page — really a collection of millions of individual pages, one per product, which collectively had the largest impact on overall conversion."
        ],
        "figs": []
      },
      {
        "h": "The approach",
        "p": [
          "Together with the engineering team we worked out a series of hypotheses grounded in the factors that affect human attention — contrast, color, movement, pattern — and ran a series of multivariate split tests.",
          "My role was as much about the team as the tests: running workshops to help engineers understand the value of design, showing how knowledge of human cognition leads to better business results, leading the collaborative “state the design hypothesis” exercise, and then wireframing, prototyping, and analyzing the results."
        ],
        "figs": [
          {
            "img": "/img/buttons.webp",
            "mode": "contain",
            "cap": "The buttons used in the test. Blue increased conversion by 24%."
          }
        ]
      },
      {
        "h": "Results",
        "p": [
          "One test — the contrast and color of the primary buttons — led to 24% conversion rate growth and changed Nokaut.pl forever.",
          "The change was exciting for the entire team and was essential in establishing a real design process in the organization. Soon after, I was promoted to the leadership team."
        ],
        "figs": []
      }
    ],
    "lessons": [
      "Great design is a result of understanding and empathizing with people.",
      "Proving value in the currency the business already respects is the fastest way to earn design a seat."
    ]
  }
];

export const getCase = (slug: string): CaseStudy | undefined =>
  cases.find((c) => c.slug === slug);
