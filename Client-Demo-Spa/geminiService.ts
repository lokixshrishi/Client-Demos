
import { GoogleGenAI, Type } from "@google/genai";

export async function getBeautyConsultation(skinType: string, concerns: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a professional high-end spa and makeup consultant, provide a personalized beauty routine and service recommendation for a client with ${skinType} skin type and concerns about ${concerns}. Keep it professional, elegant, and concise.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          routine: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Step-by-step skincare routine steps",
          },
          recommendedService: {
            type: Type.STRING,
            description: "The best service from our catalog",
          },
          expertTip: {
            type: Type.STRING,
            description: "A professional makeup or spa tip",
          }
        }
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    return null;
  }
}
