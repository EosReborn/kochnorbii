export type LabItem = {
  title: string;
  tagline: string;
  href?: string;
};

/**
 * Valódi Lab-projektek listája — jelenleg üres, mert még nincs
 * publikálható kísérlet. NE tölts fel ide kitalált/fiktív projekteket:
 * ha egy elem itt megjelenik, a Lab.tsx automatikusan rácsos listaként
 * jeleníti meg. Amíg üres, egy elegáns, kategóriákat felsoroló
 * placeholder szöveg jelenik meg helyette (ld. Lab.tsx).
 */
export const labItems: LabItem[] = [];
