// Simple utility to chunk text if needed for very long documents
export function chunkText(text: string, maxLength = 2000): string[] {
  if (!text) return [];
  
  const chunks: string[] = [];
  let currentChunk = "";

  const sentences = text.split('. ');
  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length > maxLength) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim() + ".");
      currentChunk = sentence + ". ";
    } else {
      currentChunk += sentence + ". ";
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}
