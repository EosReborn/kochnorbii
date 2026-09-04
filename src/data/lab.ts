export type LabItem = {
  title: string;
  tagline: string;
  href?: string;
};

/**
 * Valódi Lab-projektek listája — jelenleg üres, mert még nincs
 * publikálható kísérlet. NE tölts fel ide kitalált/fiktív projekteket:
 * ha egy elem itt megjelenik, a Lab.tsx automatikusan a valódi
 * projekt-listaként jeleníti meg, felváltva a lenti "slot" nézetet.
 */
export const labItems: LabItem[] = [];

export type LabSlot = {
  index: string;
  label: string;
};

/**
 * Előkészített, de még nem publikált experiment-kategóriák. Ezek NEM
 * kitalált projektek — csak témák/irányok, amikre a Lab elő van
 * készítve. Amint egy valódi kísérlet elkészül, kerüljön át a fenti
 * `labItems`-be (és akkor ez a slot törölhető innen).
 */
export const labSlots: LabSlot[] = [
  { index: "01", label: "Type / Motion" },
  { index: "02", label: "Generative / Visual" },
  { index: "03", label: "AI / Web Experiment" },
];
