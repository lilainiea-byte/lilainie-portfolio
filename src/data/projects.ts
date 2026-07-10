export type ProjectCategory = "coordination" | "partnerships" | "implementation" | "data" | "freelance";

export type Project = {
  slug: string;
  title: string;
  context: string; // e.g. "BCAP: Program Officer" or "Freelance"
  description: string;
  tags: string[];
  category: ProjectCategory; // drives the card's thumbnail color
  link?: string; // external URL, if the project lives elsewhere
  fileUrl?: string; // path under /public/files, if you're uploading a PDF/doc
  image?: string; // path under /public/images
  imagePosition?: string; // CSS object-position, e.g. "50% 40%"
  extraFiles?: { label: string; url: string }[]; // supplemental PDFs/docs shown in modal
  extraImages?: { src: string; label?: string }[]; // supplemental images shown in modal
  extraLinks?: { label: string; url: string }[]; // supplemental external links shown in modal
  impact?: string[]; // short stat/outcome chips shown on card + modal
};

// Replace these with your real projects. Each card needs either a `link`
// (to another site) or a `fileUrl` (a file you've dropped into
// /public/files), or just leave both off if it's description-only for now.
export const projects: Project[] = [
  {
    slug: "black-youth-in-steam",
    title: "Black Youth In STEAM",
    context: "Skills For Change (Non-Profit)",
    description:
      "I coordinated Black Youth In STEAM, a free 7-week hybrid program giving Black youth ages 14 to 18 hands-on exposure to STEM careers, from flight simulation and suturing to Micro:Bit coding. I ran it end to end across four cohorts of 25: recruitment, onboarding, parent and youth communication, logistics, and on-the-ground support at every virtual session, in-person workshop, and partner field trip. I also built the systems underneath it: intake forms redesigned to be accessible and efficient, onboarding materials for info sessions, attendance tracking forms, and the program data I maintained for reporting throughout.\n\nWhen I took over outreach, applications grew from around 20 to over 60 per cohort, filling every seat with a waitlist behind it, and roughly 85% of accepted youth completed the program. In the 2024-25 program year, 100% of participants reported being on track to graduate, 96% left motivated to pursue STEM, and 89% said they felt a sense of belonging in STEM spaces.\n\nI used participant surveys to keep the program honest, tailoring sessions to what youth said they needed and pitching improvements to my manager. That's how I created \"The Science of Social Media,\" a new workshop on branding and pitching yourself on platforms like LinkedIn that became part of the curriculum. Graduates joined an alumni network with curated resources and mentor connections. Funded by the Ontario Ministry of Citizenship and Multiculturalism and delivered with York University, Centennial College, Tropicana Community Services, Urban Pilots Network, the Toronto Symphony Orchestra, the AGO, and Young People's Theatre, the program's impact was recognized with a Youth Leadership Award, nominated by a participant.",
    tags: ["Program Design", "Data", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/black-youth-in-steam-banner.png",
    imagePosition: "50% 50%",
    impact: [
      "96% motivated to pursue STEM",
      "Applications tripled (20 → 60+)",
      "100% on track to graduate",
      "~85% completion across 4 cohorts",
      "Youth Leadership Award",
    ],
    extraImages: [
      { src: "/images/projects/byis-award-ceremony.jpg", label: "Youth Leadership Award Ceremony" },
      { src: "/images/projects/byis-youth-leadership-award.jpg", label: "Youth Leadership Award" },
    ],
  },
  {
    slug: "ubuntu-dementia-care",
    title: "Ubuntu In Dementia Care",
    context: "Skills For Change (Non-Profit)",
    description:
      "I coordinated Ubuntu In Dementia Care, an 8-session wellness and education program for Black family caregivers in the GTA and Scarborough. Named for the African philosophy of shared humanity, \"I am because we are,\" it gave caregivers a culturally affirming space to learn and heal together, with sessions delivered alongside a registered social worker covering dementia education, caregiver burnout, and financial, legal, and after-life planning with professionals in each field. Day to day, I supported recruitment, ran onboarding and info sessions, led participant communication, and tracked the program data behind our impact reporting.\n\nThe part I'm proudest of is what that data changed. Early feedback showed most caregivers were balancing full workdays with caregiving, so I used it to shift the program to a heavily online hybrid while keeping the care home visit in person. Attendance held steady while participation got easier for the people the program was built for.\n\nThat in-person visit was a partnership with Alexis Lodge, a Scarborough dementia care residence known for home-like, culturally attuned memory care, where caregivers could meet staff and see for themselves that culturally aligned support exists. Participants left with a peer network of Black caregivers and culturally relevant resources to lean on. I had studied the social determinants of health in my coursework; here I worked on them directly, helping close gaps in access, trust, and culturally relevant care for real families. Ubuntu In Dementia Care was funded by the Ontario Trillium Foundation and delivered with Tropicana Community Services.",
    tags: ["Program Design", "Data", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/ubuntu-dementia-care.jpg",
    imagePosition: "50% 50%",
    impact: [
      "Feedback-driven hybrid redesign",
      "Alexis Lodge care partnership",
      "8-session caregiver program",
      "Trillium-funded",
    ],
    extraImages: [
      { src: "/images/projects/sfc-citizenship-award.jpg", label: "SFC Citizenship Award" },
    ],
  },
  {
    slug: "camh-social-campaign",
    title: "Concept: CAMH Social Campaign",
    context: "Personal Design",
    description:
      "There's a social media trend where every group chat has \"the girl with the list,\" the friend keeping a notes-app list of every pregnancy symptom nobody warns you about, shared woman to woman whenever someone's expecting. This is my unaffiliated concept for how CAMH's womenmind community could fill a virtual seminar on pregnancy and women's brain health, built on the real research of CAMH neuroscientist Dr. Liisa Galea. The campaign starts from that familiar pregnancy list that rocked the internet, then walks people into what the science actually says.\n\nThe package works like a real rollout. A communications plan sets the audience, message, and channel strategy, and three designed posts carry it: an Instagram and LinkedIn carousel that answers the list with notes-app cards of actual neuroscience, an event flyer built from the list itself, and a scripted short-form reel anchored on one stat, that only 3% of neuroscience studies have ever focused on the female brain. My science background did the translating; the internet did the hook. All three pieces are in the media below.",
    tags: ["Creative Design", "Implementation"],
    category: "coordination",
    image: "/images/projects/camh-social-campaign.png",
    imagePosition: "50% 50%",
    impact: [
      "Science communication concept",
      "Comms plan + 3-post rollout",
      "Designed and written solo",
    ],
    extraFiles: [
      { label: "Carousel Post: Before You Call The Girl With The List", url: "/files/projects/camh-carousel-post1.pdf" },
      { label: "Communications & Social Media Plan", url: "/files/projects/camh-comms-plan.pdf" },
      { label: "Event Flyer Post", url: "/files/projects/camh-event-flyer-post2.pdf" },
    ],
  },
  {
    slug: "pee4pizza-sti-testing-campaign",
    title: "Pee4Pizza: Campus STI Testing Campaign",
    context: "McMaster Student Wellness Centre",
    description:
      "Getting students tested for STIs is not an information problem, it is a design problem. Pee4Pizza was the Student Wellness Centre's answer: a free, confidential STI testing day on campus, run in partnership with Hamilton Public Health, where a quick urine test for chlamydia and gonorrhea, the two most common STIs for this age group in Hamilton, came with free pizza. The design removes every barrier at once. Cost, gone. Distance, gone. Stigma, traded for a campaign name you cannot say with a straight face. What is left is the easiest possible version of a healthy decision.\n\nOf everything I worked on in two years as a Communications Assistant at the Student Wellness Centre, this campaign was a favourite. The role had me translating clinical research into plain language health promotion for a campus of 37,000+ students, working alongside the McMaster health promotion team and partnering with Hamilton Health Sciences on co-branded campaigns. For Pee4Pizza, I was tasked with creating the promotional materials: the social media flyers, stickers, and event creative that carried the campaign across campus channels, all pointing to one drop-in day where no appointment, no student ID, and no OHIP card stood between a student and a test. The campaign was picked up and cross-posted by Hamilton Public Health, and the February 2024 testing day ran out of CIBC Hall in the heart of the student centre. Both posts are linked below.\n\nThis campaign is part of why I talk about health systems the way I do. The clinic was already there. The test was already free. What made students show up was design that met them where they were, and that is the kind of work I want to keep doing.",
    tags: ["Creative Design", "Partnerships", "Implementation"],
    category: "coordination",
    image: "/images/projects/pee4pizza-flyer.jpg",
    imagePosition: "50% 50%",
    impact: [
      "Partnership with Hamilton Public Health",
      "Promo materials: flyers, stickers + event creative",
      "93% first review approval across the role",
    ],
    extraImages: [
      { src: "/images/projects/pee4pizza-team-photo.jpg", label: "Team Photo" },
      { src: "/images/projects/pee4pizza-health-promotion-assistant.jpg", label: "Lilainie and a Health Promotion Assistant" },
    ],
    extraLinks: [
      { label: "Campaign Post: @mcmasterswc on Instagram", url: "https://www.instagram.com/p/C2uiDMuLcV3/" },
      { label: "Cross-Post: Hamilton Public Health on Facebook", url: "https://www.facebook.com/HamiltonPublicHealth/posts/314933521556577/" },
    ],
  },
  {
    slug: "mcmaster-community-fridge",
    title: "The McMaster Community Fridge",
    context: "McMaster Student Wellness Centre",
    description:
      "Behind Mills Library on McMaster's campus sat a fridge, a freezer, and a pantry that asked no questions. The McMaster Community Fridge provided free, accessible food and essential products to anyone who needed them, 24 hours a day, seven days a week. You took what you needed or left what you could, anonymously. No forms, no ID, no proof of need. Stocked through donations with fresh produce, unopened packaged meals, canned goods, personal hygiene products, and even pet food, it was mutual aid in its simplest form: support placed where people already were, with dignity built into the design.\n\nDuring my time at the Student Wellness Centre, I supported the fridge by documenting content and promoting the project, keeping it visible on campus and to the wider Hamilton community. I also occasionally pitched in with the health promotion team on restocking donated items, which came with the practical side of community food safety: fresh and sealed goods in, raw meat, homemade meals, and expired items out.\n\nThe fridge no longer operates, but it served many students during its time and supported them while they navigated their academic careers. This project was never abstract for me. I studied the social determinants of health, the conditions people are born into, live in, and study under that shape their wellbeing long before a clinic ever gets involved, and food security sits near the top of that list. A student who does not know where their next meal is coming from carries that into every lecture, every exam, every deadline. Food scarcity works quietly, showing up as slipping grades, strained mental health, and isolation long before it ever shows up in a health record. The fridge answered that determinant directly: it put food within reach, upstream of the crisis, without asking anyone to prove they were struggling. I personally knew students who benefited from it. That is what accessible design looks like when it is real, and it is why this project held a special place in my heart.",
    tags: ["Creative Design", "Partnerships", "Implementation"],
    category: "coordination",
    image: "/images/projects/mcmaster-community-fridge.jpg",
    imagePosition: "50% 50%",
    impact: [
      "Served the campus 24/7, fully anonymous",
      "Fridge, freezer + pantry behind Mills Library",
      "Campus and Hamilton community visibility",
    ],
    extraLinks: [
      { label: "McMaster News: Meet McMaster's Community Fridge", url: "https://news.mcmaster.ca/meet-mcmasters-community-fridge/" },
      { label: "Instagram: @mcmastercommunityfridge", url: "https://www.instagram.com/mcmastercommunityfridge/" },
      { label: "Video: 60 Seconds, McMaster Community Fridge", url: "https://www.youtube.com/watch?v=kMgKbi5HYvU" },
    ],
  },
  {
    slug: "larger-than-life",
    title: "Content & Events Strategist",
    context: "Freelance, Larger Than Life",
    description:
      "I started working with the creative and events collective \"Larger Than Life\" in October, initially developing social media campaigns for their December events. That work grew into supporting event operations directly, including venue inspections, merchandise acquisition and disbursement, and talent coordination, as they build out a creative landscape in Accra. Now the team is working with creatives across Ghana, London, and North America on upcoming projects that will give creatives a larger platform and visibility. My role spans content scripting, research, and planning, tying content strategy directly into event promotion.\n\nSince October, the LTL Instagram account has grown from 200 to over 1,100 followers, with 97K views in the last 90 days and accounts reached organically up 71.5%. Over 75% of that reach came from outside the existing follower base. That growth has shown up in real outcomes: 4 successful events in Accra during our debut \"Detty December\" season, and 3 nearly sold out upcoming events in the US during FIFA season.",
    tags: ["Creative Design", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "freelance",
    image: "/images/projects/ltl-logo.png",
    imagePosition: "50% 50%",
    impact: ["200 → 1,100 followers", "97K views in 90 days", "+71.5% organic reach"],
    extraLinks: [
      { label: "Instagram: @ltlforevr", url: "https://www.instagram.com/ltlforevr?igsh=aHY2bmhsa3o1dGpt" },
      { label: "Scripting & Content Direction", url: "https://www.instagram.com/reel/DY0f-23Kkq5/?igsh=dncyZjRscXhmd2t1" },
    ],
  },
  {
    slug: "intergenerational-cookbook-program",
    title: "Intergenerational Cookbook Program",
    context: "Skills For Change (Non-Profit)",
    description:
      "Food is how culture survives, and this program turned that into a working classroom. Over 8 hybrid sessions, the Intergenerational Cookbook Program brought Black youth and seniors together around African and African Diaspora foodways: in-person cooking sessions at Tropicana Community Services in Scarborough, storytelling circles, community outings to local markets, and food justice conversations. Seniors passed down culinary heritage and youth carried it forward, while I coordinated program logistics and the data tracking behind our impact reporting alongside another program facilitator.\n\nThe program culminated in a collaborative cookbook zine of recipes, stories, and food history. Participants created and submitted their recipes; I designed and illustrated the entire e-book in Canva. The program was funded by the Ontario Ministry for Seniors and Accessibility and delivered with Tropicana Community Services. The book is linked below.",
    tags: ["Creative Design", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/intergenerational-cookbook-program.png",
    imagePosition: "50% 50%",
    link: "https://simplebooklet.com/sfclilainie#page=1",
    impact: [
      "Designed + illustrated the zine",
      "8 hybrid sessions",
      "Recipes from participants",
    ],
  },
  {
    slug: "mcmaster-black-yearbook",
    title: "McMaster Inaugural Black Student Year Book",
    context: "Black Student Success Centre (BSSC)",
    description:
      "As one of three photographers on McMaster's first-ever Black Student Yearbook, I helped capture and edit portraits for the 2024 graduating class under a tight production timeline, coordinating closely with the yearbook team to make sure as many graduates as possible were represented before the deadline. Using Lightroom, Canva, and Photoshop, I worked directly with the editor to shape design elements throughout the book, helping bring a shared vision to life: a project meant to highlight Black excellence and set a precedent for what the student body could build when talent came together.",
    tags: ["Creative Design", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/mcmaster-black-yearbook.png",
    imagePosition: "50% 30%",
    link: "https://issuu.com/blackstudentyearbook/docs/bssc_yearbook_9_",
    impact: ["Inaugural edition", "Class of 2024", "Design + photography"],
    extraImages: [
      { src: "/images/projects/mcmaster-yearbook-subteam-bts.jpg", label: "Sub-team BTS" },
      { src: "/images/projects/mcmaster-yearbook-raw-shot.jpg", label: "Raw Image Shot by Lilainie" },
      { src: "/images/projects/mcmaster-yearbook-edited-spread.jpg", label: "Edited Spread" },
    ],
  },
];
