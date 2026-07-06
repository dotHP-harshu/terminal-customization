import fs from "fs";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const openai = new OpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

// Map of files → chunking strategy
const KNOWLEDGE_FILES = [
  // Each standalone prompt → 1 chunk
  { file: "../../standalone/1-modern.ps1", strategy: "whole", heading: "Modern Dev Prompt" },
  { file: "../../standalone/2-hacker.ps1", strategy: "whole", heading: "Hacker Prompt" },
  { file: "../../standalone/3-powerlevel.ps1", strategy: "whole", heading: "PowerLevel Prompt" },
  { file: "../../standalone/4-dashboard.ps1", strategy: "whole", heading: "Dashboard Prompt" },
  { file: "../../standalone/5-vscode.ps1", strategy: "whole", heading: "VS Code Prompt" },
  { file: "../../standalone/6-catppuccin.ps1", strategy: "whole", heading: "Catppuccin Prompt" },
  { file: "../../standalone/7-cyberpunk.ps1", strategy: "whole", heading: "Cyberpunk Prompt" },
  { file: "../../standalone/8-apple.ps1", strategy: "whole", heading: "Apple Prompt" },
  { file: "../../standalone/9-matrix.ps1", strategy: "whole", heading: "Matrix Prompt" },
  { file: "../../standalone/default.ps1", strategy: "whole", heading: "Default Prompt" },
  // Large docs → split by headings
  { file: "../../SETUP.md", strategy: "headings", heading: "Setup Guide" },
  { file: "../../PROMPTS-IDEAS.md", strategy: "headings", heading: "Design Philosophy" },
  // Small files → whole
  { file: "../../README.md", strategy: "whole", heading: "Project Overview" },
  { file: "../../fastfetch/config.jsonc", strategy: "whole", heading: "Fastfetch Config" },
  { file: "../../fastfetch/ascii.txt", strategy: "whole", heading: "ASCII Logo" },
  { file: "../../PROFILE_PLACEHOLDER.psd1", strategy: "whole", heading: "Sample Profile" },
  { file: "../../vs-code.json", strategy: "whole", heading: "VS Code Settings" },
  { file: "../../youtube summary.md", strategy: "whole", heading: "Video Tutorial" },
];

export interface Chunk {
  id: string;
  text: string;
  source: string;
  heading: string;
  embedding: number[];
}

async function main() {
  const chunks: Chunk[] = [];
  let chunkId = 0;

  for (const entry of KNOWLEDGE_FILES) {
    const absPath = path.resolve(__dirname, entry.file);
    const content = fs.readFileSync(absPath, "utf-8");
    const fileName = path.basename(entry.file);
    const texts: string[] = [];

    if (entry.strategy === "headings") {
      const parts = content.split(/(?=^#+ )/m);
      texts.push(...parts.filter(p => p.trim().length > 50));
    } else {
      texts.push(content);
    }

    for (const text of texts) {
      const firstLine = text.split("\n")[0]?.replace(/^#+ /, "").trim() || entry.heading;
      chunks.push({
        id: `chunk_${chunkId++}`,
        text,
        source: fileName,
        heading: firstLine,
        embedding: [], // filled below
      });
    }
  }

  // Generate embeddings
  for (const chunk of chunks) {
    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunk.text.slice(0, 8000),
    });
    chunk.embedding = res.data[0].embedding;
    console.log(`Embedded: ${chunk.source} — ${chunk.heading}`);
  }

  // Write output
  const outputPath = path.resolve(__dirname, "../src/data/knowledge-base.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(chunks, null, 2));

  console.log(`\nDone. ${chunks.length} chunks written to ${outputPath}`);
}

main().catch(console.error);