
import { Message } from './types';

// Browser-safe stub for Gemini responses.
// The original code used the server-only `@google/genai` SDK which breaks the
// client bundle. For a client-side demo we return a simulated reply. If you
// want server integration, move the real SDK usage to a server endpoint and
// call it via `fetch` from the client.

export const getGeminiResponse = async (history: Message[]) => {
  const last = history[history.length - 1];

  // Very small heuristic to produce a friendly reply for the demo.
  if (!last) return "Hello! What would you like to talk about?";

  const userText = last.text.toLowerCase();
  if (userText.includes('hi') || userText.includes('hello')) {
    return "Hey there! Great to hear from you — how's your day going?";
  }
  if (userText.includes('love') || userText.includes('valentine')) {
    return "Aww, love is in the air 💖 — tell me more!";
  }
  if (userText.endsWith('?')) {
    return "That's a great question — I'm thinking... here's a quick answer: let's try something fun together!";
  }

  // Default playful echo when nothing matches.
  return `I heard you: "${last.text}" — care to elaborate?`;
};
