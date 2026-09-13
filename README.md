# Koch Norbert — Neo-Swiss Editorial (Stitch export)

Ez a Google Stitch által generált design-koncepció statikus HTML exportja.
Nincs build-lépés — a `index.html` önmagában megnyitható böngészőben, és
GitHub Pages-re is közvetlenül feltölthető.

## Tartalom

- `index.html` — a teljes oldal (Tailwind CDN-ről töltve, saját build nélkül)
- `DESIGN.md` — a design-rendszer leírása (színek, tipográfia, komponensek)

## ⚠️ Fontos, mielőtt élesítenéd

**A portré és a projektképek jelenleg Google belső, ideiglenes URL-ekről
töltődnek be** (`lh3.googleusercontent.com/aida-public/...`). Ezek a Stitch
generálás közben létrehozott, nem publikus, bármikor lejárható linkek —
**ne számíts rá, hogy tartósan elérhetők maradnak.** Mielőtt élesbe teszed:

1. Töltsd le a képeket, amíg élnek, VAGY cserélt ki őket saját fotókra/screenshotokra.
2. Helyezd el őket egy `images/` mappában.
3. Az `index.html`-ben cseréld le a 4 db `lh3.googleusercontent.com`-os
   `src` hivatkozást a saját, relatív útvonalaidra.

Enélkül az oldal képek nélkül (törött image-ekkel) fog megjelenni, amint
ezek a linkek lejárnak.

## GitHub Pages-re töltés

```bash
git init
git add -A
git commit -m "Initial commit: Stitch export"
git branch -M main
git remote add origin <a te repód URL-je>
git push -u origin main
```

Utána: Settings → Pages → Branch: `main` / `root`, és pár percen belül élesben lesz.

## Megjegyzés

Ez a fájl a `cdn.tailwindcss.com` script-et használja futásidőben — ez
fejlesztéshez/demózáshoz rendben van, de Google nem javasolja production
oldalakhoz (nincs cache-elve, nagyobb, mint egy build-elt CSS). Ha ez a
design-irány marad, egy build-elt Tailwind (vagy a meglévő Next.js projekt)
sokkal jobb teljesítményt adna.
