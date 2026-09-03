/**
 * Élő weboldal-előnézet URL generálása a WordPress.com mShots
 * szolgáltatásával (Automattic, ingyenes, korlátozott/nem kereskedelmi
 * használatra: https://github.com/Automattic/mshots).
 *
 * A szolgáltatás a megadott URL-t egy virtuális böngészőben tölti be
 * a kért méretben, és visszaadja az arról készült élő screenshotot —
 * nincs API kulcs, nincs build-idejű hálózati függőség, a böngésző
 * tölti be közvetlenül a képet.
 *
 * Az első kérésnél néhány másodpercig tarthat, amíg a screenshot
 * elkészül (ez idő alatt egy "generálás alatt" placeholder képet ad
 * vissza) — ezért a UI-ban mindig van alatta egy statikus fallback
 * réteg, amíg a kép be nem töltődik.
 */
export function getSiteScreenshotUrl(
  url: string,
  { width = 1400, height = 1750 }: { width?: number; height?: number } = {}
) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}`;
}

export function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
