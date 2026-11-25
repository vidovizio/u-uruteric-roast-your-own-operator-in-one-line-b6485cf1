const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "Satu kata 'lanjut' di HP, tangan lain pegang helm setengah lepas";
const fs = require("node:fs");
const path = require("node:path");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");