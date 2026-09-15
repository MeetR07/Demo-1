// One-off generator for placeholder gallery images so the scaffold has
// something to render. Swap these for real photos under public/images/
// before launch — the filenames are referenced from src/content/**/*.mdx.
import { writeFileSync, mkdirSync } from "node:fs";

const outDir = new URL("../public/images/placeholders/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const plates = [
  { file: "wedding-goa.svg", bg: "#2b2520", fg: "#d8c9a3", label: "Placeholder — Goa wedding" },
  { file: "wedding-udaipur.svg", bg: "#33261f", fg: "#e0b98a", label: "Placeholder — Udaipur wedding" },
  { file: "wedding-mumbai.svg", bg: "#1f2a2b", fg: "#a9c7c9", label: "Placeholder — Mumbai wedding" },
  { file: "editorial-1.svg", bg: "#241f2b", fg: "#c8b3e0", label: "Placeholder — Editorial shoot" },
  { file: "films-1.svg", bg: "#2b1f22", fg: "#e0a3ad", label: "Placeholder — Film still" },
  { file: "blog-1.svg", bg: "#20261f", fg: "#b7d1a8", label: "Placeholder — Journal post" },
  { file: "blog-2.svg", bg: "#1f232b", fg: "#a8b9d1", label: "Placeholder — Journal post" },
  { file: "hero.svg", bg: "#171613", fg: "#cdbd94", label: "Placeholder — Homepage hero" },
];

for (const { file, bg, fg, label } of plates) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <rect width="1600" height="1000" fill="${bg}"/>
  <g opacity="0.5">
    <line x1="0" y1="0" x2="1600" y2="1000" stroke="${fg}" stroke-width="1"/>
    <line x1="1600" y1="0" x2="0" y2="1000" stroke="${fg}" stroke-width="1"/>
  </g>
  <text x="50%" y="48%" text-anchor="middle" font-family="Georgia, serif" font-size="42" fill="${fg}">${label}</text>
  <text x="50%" y="56%" text-anchor="middle" font-family="monospace" font-size="20" fill="${fg}" opacity="0.7">replace before launch — /public/images/placeholders/${file}</text>
</svg>`;
  writeFileSync(new URL(file, outDir), svg);
}

console.log(`Wrote ${plates.length} placeholder images to public/images/placeholders/`);
