export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  /**
   * Évszám — megjelenik a kategória mellett. Minden jelenlegi projekt
   * 2026-os (a Koch Digital Studio indulásának éve).
   */
  year?: string;
  /**
   * Opcionális, kézzel készített/vágott statikus screenshot az adott
   * projekt weboldaláról (pl. "/projects/screenshots/fazekas.jpg").
   * Ha meg van adva, ez jelenik meg élő screenshot helyett — érdemes
   * ezt használni, ha teljes kontrollt szeretnél a végeredményen.
   * Ha nincs megadva, a komponens automatikusan élő screenshotot tölt
   * be a `href` alapján.
   */
  screenshot?: string;
};

// Ide bővíthető később további projektekkel — a sorrend számít,
// a lista tetején szereplő projekt jelenik meg elsőként.
export const projects: Project[] = [
  {
    slug: "fazekas-teraszfedesek",
    title: "Fazekas Terasz",
    category: "Web Design & Development",
    description:
      "Teljes digitális arculat és weboldal egy prémium teraszfedés-gyártónak, letisztult, bizalomépítő megjelenéssel.",
    image: "/projects/fazekas.svg",
    imageAlt:
      "Absztrakt, szerkezeti vonalrajz a Fazekas Teraszfedések projekthez",
    href: "https://fazekasterasz.hu",
    year: "2026",
  },
  {
    slug: "joma-tech",
    title: "JoMa-Tech",
    category: "Web Design & Development",
    description:
      "Technológiai vállalat számára épített gyors, moduláris weboldal, fókuszban a világos termékkommunikációval.",
    image: "/projects/joma-tech.svg",
    imageAlt: "Absztrakt hálórajz a JoMa-Tech projekthez",
    href: "https://joma-tech.hu",
    year: "2026",
  },
  {
    slug: "kavalkad",
    title: "Kavalkád Events",
    category: "Web Design & Development",
    description:
      "Dinamikus, mozgásra épülő vizuális rendszer és weboldal egy visszatérő rendezvénymárka számára.",
    image: "/projects/kavalkad.svg",
    imageAlt: "Absztrakt, sugárirányú kompozíció a Kavalkád projekthez",
    href: "https://kavalkadevents.com",
    year: "2026",
  },
];
