#!/usr/bin/env node
//
// optimize-images.mjs
// Genera due varianti WebP (full 2000px / small 900px) per ogni foto sorgente
// di MiriAle Holiday House. Skippa i file già processati e ignora i RAW/video.
//
// Uso: node scripts/optimize-images.mjs

import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SOURCE_DIR = "/Users/AL/Downloads/Foto Trevi";
const OUT_DIR = path.join(ROOT, "public", "images");

const SUPPORTED = new Set([".jpg", ".jpeg", ".heic"]);

const VARIANTS = [
  { suffix: "", maxSide: 2000, quality: 82 },
  { suffix: "-sm", maxSide: 900, quality: 80 },
];

function toSlug(filename) {
  return path
    .parse(filename)
    .name.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fmtBytes(n) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(1)} ${units[i]}`;
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Cartella sorgente non trovata: ${SOURCE_DIR}`);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });

  const entries = await readdir(SOURCE_DIR);
  const candidates = entries
    .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
    .sort();

  const ignored = entries.length - candidates.length;
  console.log(`Sorgente:     ${SOURCE_DIR}`);
  console.log(`Destinazione: ${path.relative(ROOT, OUT_DIR)}/`);
  console.log(
    `Candidate:    ${candidates.length} immagini (ignorati ${ignored} non-immagine: NEF/MP4/altro)\n`,
  );

  let processed = 0;
  let skippedExisting = 0;
  let failed = 0;
  let totalSrcBytes = 0;
  let totalOutBytes = 0;
  const generated = [];

  for (const file of candidates) {
    const srcPath = path.join(SOURCE_DIR, file);
    const slug = toSlug(file);
    const srcBytes = (await stat(srcPath)).size;

    const outPaths = VARIANTS.map((v) => ({
      ...v,
      out: path.join(OUT_DIR, `${slug}${v.suffix}.webp`),
    }));

    const allExist = outPaths.every((o) => existsSync(o.out));
    if (allExist) {
      skippedExisting++;
      console.log(`  skip   ${file}`);
      for (const o of outPaths) {
        totalOutBytes += (await stat(o.out)).size;
        generated.push(`/images/${path.basename(o.out)}`);
      }
      totalSrcBytes += srcBytes;
      continue;
    }

    try {
      for (const o of outPaths) {
        await sharp(srcPath)
          .rotate() // rispetta EXIF orientation (foto da iPhone/Nikon)
          .resize({
            width: o.maxSide,
            height: o.maxSide,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: o.quality })
          .toFile(o.out);

        const outBytes = (await stat(o.out)).size;
        totalOutBytes += outBytes;
        generated.push(`/images/${path.basename(o.out)}`);
        console.log(
          `  ok     ${file}  →  /images/${path.basename(o.out)}  (${fmtBytes(outBytes)})`,
        );
      }
      processed++;
      totalSrcBytes += srcBytes;
    } catch (err) {
      failed++;
      console.error(`  FAIL   ${file}  →  ${err.message}`);
    }
  }

  const ratio =
    totalSrcBytes > 0 ? (totalOutBytes / totalSrcBytes) * 100 : 0;

  console.log("\n--- Report ---");
  console.log(`  Processate ora:    ${processed}`);
  console.log(`  Già esistenti:     ${skippedExisting}`);
  console.log(`  Fallite:           ${failed}`);
  console.log(`  Peso sorgenti:     ${fmtBytes(totalSrcBytes)}`);
  console.log(
    `  Peso output webp:  ${fmtBytes(totalOutBytes)}  (${ratio.toFixed(1)}% del sorgente)`,
  );
  console.log(`\n  File generati (${generated.length}):`);
  for (const g of [...generated].sort()) {
    console.log(`    ${g}`);
  }
}

main().catch((err) => {
  console.error("Errore fatale:", err);
  process.exit(1);
});
