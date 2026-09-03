"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kn-cookie-consent";

/**
 * Egyszerű, saját (library nélküli) süti-hozzájárulás sáv.
 * A választást localStorage-ban tárolja, hogy ne jelenjen meg
 * minden látogatáskor újra. Amíg a döntés nem ismert (SSR és az
 * első kliens render), semmit nem jelenít meg, hogy elkerülje a
 * hidratációs eltérést.
 */
export default function CookieConsent() {
  const [decided, setDecided] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored === "accepted" || stored === "declined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- csak kliensen elérhető localStorage kiolvasása mountkor
      setDecided(true);
      return;
    }

    setDecided(false);
    const timer = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // A localStorage nem elérhető (pl. letiltva) — a sáv ettől
      // még bezáródik, csak a döntés nem marad meg legközelebbre.
    }
    setVisible(false);
    window.setTimeout(() => setDecided(true), 500);
  };

  if (decided) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Süti hozzájárulás"
      className={`fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-edge flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl font-body text-sm leading-relaxed text-paper/80">
          Ez a weboldal sütiket használ a böngészési élmény javítása és a
          látogatottság megértése érdekében.
        </p>
        <div className="flex shrink-0 items-center gap-6">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="underline-hover font-body text-sm text-stone transition-colors hover:text-paper"
          >
            Csak szükséges
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="bg-paper px-5 py-2.5 font-body text-sm text-ink transition-opacity hover:opacity-80"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
