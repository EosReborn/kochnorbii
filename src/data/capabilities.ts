export type Capability = {
  index: string;
  title: string;
  items: string[];
};

// Három fő terület — a portfólió, nem szolgáltatási katalógus, ezért
// tudatosan tömör: egy sor + néhány kulcsszó terület csoportonként.
export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Design",
    items: ["Webdesign", "UI / UX", "Vizuális irányítás"],
  },
  {
    index: "02",
    title: "Development",
    items: ["Frontend fejlesztés", "Reszponzív implementáció", "Teljesítmény"],
  },
  {
    index: "03",
    title: "Creative Technology",
    items: ["Interaktív élmények", "AI-asszisztált workflow", "Kísérleti web"],
  },
];
