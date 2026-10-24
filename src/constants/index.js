import {
  css,
  github,
  html,
  javascript,
  linkedin,
  react,
  tailwindcss,
} from "../assets/icons";

// UPDATE PROFILE DETAILS HERE when your contact links or bio change.
export const profile = {
  name: "Jitender Soni",
  role: "Full-Stack Developer",
  email: "sonijitender221@gmail.com",
  altEmail:"jeetv8734@gmail.com",
  linkedin: "https://www.linkedin.com/in/jitender-soni-aa096b310",
  github: "https://github.com/sonijitender221-byte",
  experience: "6 months at Webigeeks",
  // Add a short, accurate bio here when you are ready.
  bio: "I build web applications and enjoy creating interactive, user-friendly digital experiences.",
};

// These are technologies visible in this portfolio's source, not a claim of mastery.
export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Programming" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Styling" },
  { imageUrl: github, name: "Git & GitHub", type: "Version Control" },
];

// Keep dates and responsibilities factual; add exact details when available.
export const experiences = [
  {
    title: "Developer",
    company_name: "Webigeeks",
    icon: github,
    iconBg: "#e2e8f0",
    date: "6 months",
    points: ["Professional experience at Webigeeks."],
  },
];

export const socialLinks = [
  { name: "Email", iconUrl: null, link: `mailto:${profile.email}` },
  { name: "GitHub", iconUrl: github, link: profile.github },
  { name: "LinkedIn", iconUrl: linkedin, link: profile.linkedin },
];

// UPDATE THIS ARRAY to add projects. Only supplied repository URLs are included.
export const projects = [
  {
    name: "Inventory Management System",
    description: "A project repository for an inventory management system. Explore the source code and README for its implemented features and technology stack.",
    technologies: ["Full-stack web development"],
    link: "https://github.com/sonijitender221-byte/inventory_management_systems",
    iconUrl: github,
    theme: "btn-back-blue",
  },
  {
    name: "Student Management System",
    description: "A project repository for a student management system. Explore the source code and README for its implemented features and technology stack.",
    technologies: ["Full-stack web development"],
    link: "https://github.com/sonijitender221-byte/Student_Management_System",
    iconUrl: github,
    theme: "btn-back-green",
  },
  {
    name: "Aqua-desk",
    description: "A project repository for an Aqua-desk application. Explore the source code and README for its implemented features and technology stack.",
    technologies: ["Full-stack web development"],
    link: "https://github.com/sonijitender221-byte/Aqua-desk",
    iconUrl: github,
    theme: "btn-back-green",
  },
  {
    name: "jitender-soni-portfolio",
    description: "A project repository for a personal portfolio website. Explore the source code and README for its implemented features and technology stack.",
    technologies: ["Full-stack web development"],
    link: "https://github.com/sonijitender221-byte/jitender-soni-portfolio",
    iconUrl: github,
    theme: "btn-back-green",
  },
];
