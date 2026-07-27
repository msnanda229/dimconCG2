import { useState, useEffect } from 'react';
import { getSearchIndex } from '../utils/search';

export function useKnowledge() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize knowledge base in background
    setTimeout(() => {
      getSearchIndex();
      setIsReady(true);
    }, 100);
  }, []);

  return { isReady };
}
