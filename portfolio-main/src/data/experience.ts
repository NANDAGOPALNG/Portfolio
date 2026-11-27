export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  color: "tomato" | "yellow" | "green" | "blue";
  highlights: string[];
  documentUrl?: string;
  documentLabel?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "thewordofmouth",
    role: "SDE Intern",
    organization: "TheWordofMouth",
    location: "Backend Engineering",
    period: "Aug 2026 – Present",
    badge: "Current Internship",
    color: "tomato",
    highlights: [
      "Developed and debugged backend workflows for review scraping, data ingestion, MongoDB persistence and review generation across third-party integrations.",
      "Implemented and merged automated Cloudflare cache invalidation for updated reviews, videos and images.",
      "Built and merged an Excel-driven bulk-ingestion workflow that automates processing and database insertion of reviews, videos, images and Instagram links."
    ]
  },
  {
    id: "polygnan",
    role: "AI Intern",
    organization: "Polygnan",
    location: "Backend · Learning Management System",
    period: "Jan 2026 – Apr 2026",
    badge: "Internship",
    color: "yellow",
    highlights: [
      "Developed backend services for a Learning Management System using Django, PostgreSQL and REST APIs.",
      "Implemented JWT authentication, OTP verification and Google Single Sign-On (SSO).",
      "Contributed to backend integration, debugging and deployment workflows."
    ]
  },
  {
    id: "mit-mysuru",
    role: "B.E. Computer Science & Engineering (AI & ML)",
    organization: "Maharaja Institute of Technology Mysuru",
    location: "Mysuru, Karnataka, India",
    period: "2023 – 2027",
    badge: "Undergraduate Degree",
    color: "yellow",
    highlights: [
      "Graduating in 2027, specializing in AI & ML with a hands-on focus on backend systems and applied AI.",
      "First Prize at the Cosmocloud Low-Code Hackathon 2024."
    ]
  }
];
