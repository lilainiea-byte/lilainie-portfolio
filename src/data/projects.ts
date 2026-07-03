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
  extraImages?: string[]; // supplemental image paths shown in modal
  extraLinks?: { label: string; url: string }[]; // supplemental external links shown in modal
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
      "As Youth Community Worker, I worked on this Ontario Ministry of Citizenship and Multiculturalism funded program delivered in partnership with York University, Centennial College, Tropicana Community Services, Urban Pilots Network, Toronto Symphony Orchestra, Art Gallery of Ontario, and Young People's Theatre. I co-designed and coordinated 4 cohorts of a STEM-focused workshop and mentorship series for Black youth ages 14 to 18. I led outreach efforts that doubled program sign-up rates, increased client retention, and promoted client referrals. The program's impact was recognized through a Youth Leadership Award, with the nomination written by a participant who benefited from the exposure the program provided them.",
    tags: ["Program Design", "Data", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/black-youth-in-steam-banner.png",
    imagePosition: "50% 50%",
  },
  {
    slug: "ubuntu-dementia-care",
    title: "Ubuntu In Dementia Care",
    context: "Skills For Change (Non-Profit)",
    description:
      "An 8-session program funded by the Ontario Trillium Foundation, delivered with Tropicana Community Services, supporting Black family caregivers in the GTA. I coordinated the program and all its logistics, connecting caregivers to a high-quality care home, peer support, and ongoing access to learning resources and professionals in the field. When feedback showed many caregivers were balancing work and caregiving, I helped redesign the program to be primarily virtual, keeping the care home visit in-person so families could see the space and meet staff directly, a shift that improved accessibility while preserving trust.",
    tags: ["Program Design", "Data", "Partnerships", "Implementation", "Continuous Improvement"],
    category: "coordination",
    image: "/images/projects/ubuntu-dementia-care.png",
    imagePosition: "50% 50%",
  },
  {
    slug: "camh-social-campaign",
    title: "Concept: CAMH Social Campaign",
    context: "Personal Design",
    description:
      "My take on a CAMH social media campaign tailored towards an event, complete with a content plan and media sample.",
    tags: ["Creative Work", "Implementation"],
    category: "coordination",
    image: "/images/projects/camh-social-campaign.png",
    imagePosition: "50% 50%",
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
  },
];
