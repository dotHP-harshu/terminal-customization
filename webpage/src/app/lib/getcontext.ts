import knowledgeBase from "@/data/knowledge-base.json";
import { client } from "./client";
import { Chunk } from "../../../scripts/embed-knowledge";

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0,
    magA = 0,
    magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function findRelevantChunks(
  query: string,
  knowledgeBase: Chunk[],
  topK = 5,
) {
  const queryEmbedding = await makeQueryEmbedding(query);

  const scored = knowledgeBase.map((chunk) => ({
    chunk,
    similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  return scored
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK)
    .map((chunk) => chunk.chunk);
}

const makeQueryEmbedding = async (query: string) => {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  return res.data[0].embedding;
};

const getContext = async (query: string) => {
  const relevantChunks = await findRelevantChunks(query, knowledgeBase);
  const context = relevantChunks
    .map((c) => `[Source: ${c.source} — ${c.heading}]\n${c.text}`)
    .join("\n\n");

    return context;
};

export {getContext}