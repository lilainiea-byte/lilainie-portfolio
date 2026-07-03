export type SoftwareItem = {
  name: string;
  logo?: string; // path under /public/images/toolkit/
  url?: string; // optional link, e.g. tool's website
};

export type AITool = {
  name: string;
  blurb: string;
  logo?: string; // path under /public/images/toolkit/
  url?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string; // optional verification link
};

// Add tools as you go: logo is optional, items without one render as a text tile.
export const software: SoftwareItem[] = [
  { name: "Canva", logo: "/images/toolkit/canva.svg" },
  { name: "Adobe Suite", logo: "/images/toolkit/adobe.svg" },
  { name: "Affinity Pro", logo: "/images/toolkit/affinity.svg" },
  { name: "Microsoft Suite", logo: "/images/toolkit/microsoft-office.svg" },
  { name: "DaVinci Resolve", logo: "/images/toolkit/davinci-resolve.svg" },
  { name: "SurveyMonkey", logo: "/images/toolkit/surveymonkey.svg" },
  { name: "WordPress", logo: "/images/toolkit/wordpress.svg" },
  { name: "Notion", logo: "/images/toolkit/notion.svg" },
  { name: "Google Suite", logo: "/images/toolkit/google.svg" },
  { name: "Asana", logo: "/images/toolkit/asana.svg" },
  { name: "Slack", logo: "/images/toolkit/slack.svg" },
  { name: "Instagram", logo: "/images/toolkit/instagram.svg" },
  { name: "X", logo: "/images/toolkit/x.svg" },
  { name: "Snapchat", logo: "/images/toolkit/snapchat.svg" },
  { name: "TikTok", logo: "/images/toolkit/tiktok.svg" },
  { name: "Hootsuite", logo: "/images/toolkit/hootsuite.svg" },
  { name: "RedCap", logo: "/images/toolkit/redcap.png" },
  { name: "NVivo", logo: "/images/toolkit/nvivo.png" },
];

export const aiTools: AITool[] = [
  {
    name: "Claude",
    blurb:
      "My go-to for building automations and vibe-coding projects. I taught myself to code with it, and used it to design and build this very site.",
    logo: "/images/toolkit/claude.svg",
  },
  {
    name: "GitHub Copilot",
    blurb: "Day-to-day workflow assistance in the editor.",
    logo: "/images/toolkit/github-copilot.svg",
  },
  {
    name: "Microsoft Copilot",
    blurb:
      "My core driver for operational efficiency and project governance. I use it to synthesize multi-stakeholder data and instantly transform unstructured notes into clean, auditable documentation architectures.",
    logo: "/images/toolkit/microsoft-copilot.svg",
  },
];

export const certifications: Certification[] = [];
