export type LabItem = {
  title: string;
  tagline: string;
  status: "Fejlesztés alatt" | "Prototípus" | "Élesben";
  year: string;
};

// Kísérleti projektek — bővíthető webappokkal, UI kísérletekkel,
// AI projektekkel, WebGL demókkal vagy nyílt forráskódú eszközökkel.
export const labItems: LabItem[] = [
  {
    title: "Field Notes",
    tagline: "Minimalista, helyi tárolású jegyzetfelület gyors gondolatokhoz.",
    status: "Prototípus",
    year: "2025",
  },
  {
    title: "Type/Scale",
    tagline: "Interaktív eszköz tipográfiai skálák vizuális összehasonlítására.",
    status: "Fejlesztés alatt",
    year: "2025",
  },
  {
    title: "Grain",
    tagline: "Kis WebGL kísérlet procedurális textúrák és zaj generálására.",
    status: "Fejlesztés alatt",
    year: "2025",
  },
];
