export const site = {
  name: "Koch Norbert",
  shortName: "Koch Norbert",
  initials: "KN",
  url: "https://kochnorbert.hu",
  title: "Koch Norbert — Digital Designer & Developer",
  description:
    "Koch Norbert digital designer és developer. Weboldalak, digitális termékek és interaktív webes élmények tervezése és fejlesztése.",
  locale: "hu_HU",
  location: "Budapest, Magyarország",
  email: "hello@kochnorbert.hu",
  studio: {
    name: "Koch Digital Studio",
    url: "https://kochdigitalstudio.hu",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/kochnorbert",
    github: "https://github.com/kochnorbert",
  },
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#lab", label: "Lab" },
  { href: "#contact", label: "Contact" },
] as const;
