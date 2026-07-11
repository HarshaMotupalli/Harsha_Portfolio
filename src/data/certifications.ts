export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image: string; // gradient seed (fallback tint)
  cover: string; // hero image URL
  description: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    id: "google-ai-ml",
    title: "Google AI-ML Virtual Internship",
    issuer: "Google · EduSkills",
    date: "2024",
    url: "#",
    image: "from-[oklch(0.55_0.18_265)]/40 to-[oklch(0.72_0.2_300)]/30",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    description:
      "Hands-on virtual internship covering core AI/ML concepts, model building and Google's AI tooling ecosystem.",
    skills: ["Machine Learning", "Deep Learning", "Google AI Tools"],
  },
  {
    id: "harvardx-data-science",
    title: "Introduction to Data Science with Python",
    issuer: "HarvardX · edX",
    date: "2024",
    url: "#",
    image: "from-[oklch(0.7_0.18_210)]/30 to-[oklch(0.45_0.15_265)]/40",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    description:
      "Harvard's foundational data science track — Python, statistics, regression and applied data analysis.",
    skills: ["Python", "Statistics", "Data Analysis"],
  },
  {
    id: "iidt-genai",
    title: "Generative AI Internship Certificate",
    issuer: "IIDT Blackbucks",
    date: "Aug 2024",
    url: "#",
    image: "from-[oklch(0.72_0.2_300)]/30 to-[oklch(0.55_0.18_265)]/35",
    cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
    description:
      "8-week internship certificate for Generative AI and machine learning fundamentals — capstone movie recommender.",
    skills: ["Generative AI", "Python", "Recommenders"],
  },
  {
    id: "prajwalan-2k25",
    title: "First Prize — Prajwalan 2K25",
    issuer: "Technical Competition",
    date: "2025",
    url: "#",
    image: "from-[oklch(0.82_0.16_210)]/35 to-[oklch(0.5_0.18_300)]/30",
    cover: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80&auto=format&fit=crop",
    description:
      "Winning team — applied innovative AI/ML solutions under hackathon-style time constraints.",
    skills: ["Innovation", "Teamwork", "AI/ML"],
  },
  {
    id: "sih-2024",
    title: "Smart India Hackathon 2024 — College Qualifier",
    issuer: "Government of India",
    date: "2024",
    url: "#",
    image: "from-[oklch(0.65_0.18_265)]/35 to-[oklch(0.82_0.16_210)]/30",
    cover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    description:
      "College-level qualifier — solved a real-world problem statement with an AI-driven solution as part of a team.",
    skills: ["Team", "Innovation", "Problem Solving"],
  },
];

