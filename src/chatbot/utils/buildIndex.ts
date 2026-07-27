export interface Document {
  title: string;
  description: string;
  body: string;
  keywords: string;
  category: string;
  slug: string;
  url: string;
}

export function buildIndex(): Document[] {
  // Eagerly import all JSON files from the content directory
  const contentModules = import.meta.glob('../../content/**/*.json', { eager: true });
  
  const documents: Document[] = [];

  for (const path in contentModules) {
    const module = contentModules[path] as any;
    // Extract category and slug from the file path
    // example path: '../../content/industries/healthcare.json'
    const parts = path.split('/');
    const filename = parts.pop() || '';
    const slug = filename.replace('.json', '');
    const category = parts.pop() || '';

    // Handle potential default exports
    const data = module.default || module;
    
    // Attempt to extract fields gracefully
    const title = data.title || data.name || data.headline || slug;
    const description = data.description || data.summary || data.subtitle || '';
    
    // Extract all text content from the file for the body
    let bodyText = '';
    if (data.content) {
      bodyText += JSON.stringify(data.content);
    } else if (data.sections) {
      bodyText += JSON.stringify(data.sections);
    } else {
      bodyText += JSON.stringify(data);
    }
    
    const keywords = data.keywords ? (Array.isArray(data.keywords) ? data.keywords.join(', ') : data.keywords) : '';

    // Clean up stringified JSON for better searching
    bodyText = bodyText.replace(/[{}":\[\]\\]/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Formulate a proper url for source citation
    const url = category === 'content' ? '/' : `/${category}/${slug}`;

    documents.push({
      title,
      description,
      body: bodyText,
      keywords,
      category,
      slug,
      url
    });
  }

  return documents;
}
