import { generateText } from "ai";
import { inngest } from "./client";
import { groq } from "@ai-sdk/groq";
import * as Sentry from "@sentry/nextjs";

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute.ai" },
  async ({ event, step }) => {
    Sentry.logger.info("User triggered test log", {
      log_source: "sentry_test",
    });

    const { steps } = await step.ai.wrap("gpt generate text", generateText, {
      model: groq("openai/gpt-oss-120b"),
      prompt: `Give me a short summary about the history of Rome.`,
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
    });
    return steps;
  }
);
