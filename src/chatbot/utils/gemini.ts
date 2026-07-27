import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export async function generateChatResponse(
  systemInstruction: string, 
  userMessage: string, 
  history: { role: string, content: string }[] = []
): Promise<string> {
  
  if (!ai) {
    return "Error: Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.";
  }

  try {
    const contents: any[] = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
    
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3
      }
    });

    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to the AI service. Please try again later.";
  }
}
