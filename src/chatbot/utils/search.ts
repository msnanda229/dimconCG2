import Fuse from 'fuse.js';
import { buildIndex, Document } from './buildIndex';

let fuseInstance: Fuse<Document> | null = null;
let cachedDocs: Document[] = [];

export function getSearchIndex() {
  if (!fuseInstance) {
    cachedDocs = buildIndex();
    
    fuseInstance = new Fuse(cachedDocs, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'keywords', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'body', weight: 0.1 }
      ],
      includeScore: true,
      threshold: 0.4, // Fuzzy matching threshold (0.0 is exact, 1.0 is everything)
      ignoreLocation: true, // Typo tolerance and full text matching
      useExtendedSearch: true
    });
  }
  return { fuse: fuseInstance, docs: cachedDocs };
}

export function searchKnowledge(query: string): Document[] {
  const { fuse } = getSearchIndex();
  
  const results = fuse.search(query, { limit: 5 });
  
  return results.map(result => result.item);
}
