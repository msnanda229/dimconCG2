import { Document } from './buildIndex';

export function buildSystemPrompt(contextDocs: Document[]): string {
  let contextString = "KNOWLEDGE BASE CONTEXT:\n\n";
  
  contextDocs.forEach((doc, i) => {
    contextString += `--- Document ${i + 1} ---\n`;
    contextString += `Title: ${doc.title}\n`;
    contextString += `Category: ${doc.category}\n`;
    contextString += `URL: ${doc.url}\n`;
    contextString += `Content Summary: ${doc.description}\n`;
    // Pass up to 3000 chars of body to avoid blowing up the context window completely
    contextString += `Body: ${doc.body.substring(0, 3000)}...\n\n`; 
  });

  return `You are DIMCON AI Consultant.

Answer ONLY using the supplied website context above.
Never invent company information.
If the answer is unavailable in the knowledge base, politely say that the information could not be found.
Always recommend related DIMCON services when appropriate.

When responding, use markdown for formatting (bullet points, bold text).

${contextString}`;
}
