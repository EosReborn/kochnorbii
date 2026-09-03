export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

// Ide bővíthető később további projektekkel — a sorrend számít,
// a lista tetején szereplő projekt jelenik meg elsőként.
export const projects: Project[] = [
  {
    slug: "fazekas-teraszfedesek",
    title: "Fazekas Teraszfedések",
    category: "Márka & weboldal",
    year: "2024",
    description:
      "Teljes digitális arculat és weboldal egy prémium teraszfedés-gyártónak, letisztult, bizalomépítő megjelenéssel.",
    image: "/projects/fazekas.svg",
    imageAlt:
      "Absztrakt, szerkezeti vonalrajz a Fazekas Teraszfedések projekthez",
    href: "https://fazekasterasz.hu",
  },
  {
    slug: "joma-tech",
    title: "JoMa-Tech",
    category: "Termékoldal & fejlesztés",
    year: "2024",
    description:
      "Technológiai vállalat számára épített gyors, moduláris weboldal, fókuszban a világos termékkommunikációval.",
    image: "/projects/joma-tech.svg",
    imageAlt: "Absztrakt hálórajz a JoMa-Tech projekthez",
    href: "https://joma-tech.hu",
  },
  {
    slug: "kavalkad",
    title: "Kavalkád",
    category: "Esemény márka & digitális jelenlét",
    year: "2023",
    description:
      "Dinamikus, mozgásra épülő vizuális rendszer és weboldal egy visszatérő rendezvénymárka számára.",
    image: "/projects/kavalkad.svg",
    imageAlt: "Absztrakt, sugárirányú kompozíció a Kavalkád projekthez",
    href: "https://kavalkadevents.com",
  },
];
