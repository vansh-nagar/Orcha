import { generateText } from "ai";
import { inngest } from "./client";
import { groq } from "@ai-sdk/groq";

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute.ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap("gpt generate text", generateText, {
      model: groq("openai/gpt-oss-120b"),
      prompt: `Give me a short summary about the history of Rome.`,
    });
    return steps;
  }
);
