export type SoftwareItem = {
  name: string;
  logo?: string; // path under /public/images/toolkit/
  url?: string; // optional link, e.g. tool's website
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string; // optional verification link
};

// Add tools as you go — logo is optional, items without one render as a text tile.
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
];

export const certifications: Certification[] = [];
