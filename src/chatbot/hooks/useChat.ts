import { useState, useRef, useEffect } from 'react';
import { searchKnowledge } from '../utils/search';
import { buildSystemPrompt } from '../utils/prompt';
import { generateChatResponse } from '../utils/gemini';
import { Document } from '../utils/buildIndex';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Document[];
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // 1. Local Search (Retrieval)
      const relevantDocs = searchKnowledge(text);
      
      // 2. Build Prompt (Augmentation)
      const systemPrompt = buildSystemPrompt(relevantDocs);

      // 3. API Call (Generation)
      const history = messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', content: m.content }));
      const aiResponse = await generateChatResponse(systemPrompt, text, history);

      // 4. Update UI
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        sources: relevantDocs.length > 0 ? relevantDocs.slice(0, 3) : undefined // Show top 3 sources
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError('An error occurred while generating the response.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    setMessages
  };
}
