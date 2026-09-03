export type Capability = {
  index: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Web Design",
    description: "Vizuális rendszerek, amelyek karaktert adnak egy digitális márkának.",
  },
  {
    index: "02",
    title: "Frontend Development",
    description: "Gyors, karbantartható kódbázisok modern eszközökkel felépítve.",
  },
  {
    index: "03",
    title: "Creative Development",
    description: "Interakciók és motion, amik célt szolgálnak, nem csak dísznek vannak.",
  },
  {
    index: "04",
    title: "UI / UX",
    description: "Használható, jól gondolkodó felületek — érthető döntések mögötte.",
  },
  {
    index: "05",
    title: "Digital Products",
    description: "Ötlettől a működő termékig, a technikai és üzleti oldal összekötésével.",
  },
  {
    index: "06",
    title: "Interactive Experiences",
    description: "Egyedi, böngészőben futó élmények, ahol a részletek számítanak.",
  },
];
