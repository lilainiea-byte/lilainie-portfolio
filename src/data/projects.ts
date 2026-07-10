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
    title: "Intergenerational Cook Book Program",
    context: "Skills For Change (Non-Profit)",
    description:
      "The Intergenerational Cook Book Program was designed to build meaningful connections and celebrate the rich culinary traditions in Black Communities. Over the course of 8 exciting sessions, seniors (55+) and youth came together to create a collaborative cookbook zine celebrating food, history, and community! Program logistics and data tracking were coordinated by myself and another program facilitator. E-book illustrated by myself.",
    tags: ["Creative Design", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/intergenerational-cookbook-program.png",
    imagePosition: "50% 50%",
    link: "https://simplebooklet.com/sfclilainie#page=1",
    impact: ["8 sessions", "Published e-book zine", "Self-illustrated"],
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
