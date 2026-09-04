export const heroImage = {
  // Csere: ha új fotót kapsz, csak ezt a src-t (és igény esetén az
  // object-position finomhangolást a Hero.tsx-ben) kell módosítani.
  src: "/hero/koch-norbert-portrait.jpg",
  alt: "Koch Norbert dolgozik, fekete-fehér portré",
};

export const site = {
  name: "Koch Norbert",
  shortName: "Koch Norbert",
  initials: "KN",
  url: "https://kochnorbert.hu",
  title: "Koch Norbert — Digitális tervező és fejlesztő",
  description:
    "Koch Norbert digitális tervező és fejlesztő. Weboldalak, digitális termékek és interaktív webes élmények tervezése és fejlesztése.",
  jobTitle: "Digitális tervező és fejlesztő",
  locale: "hu_HU",
  location: "Győr, Magyarország",
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
  { href: "#work", label: "Munkák" },
  { href: "#about", label: "Rólam" },
  { href: "#lab", label: "Labor" },
  { href: "#contact", label: "Kapcsolat" },
] as const;
