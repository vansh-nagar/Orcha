import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { inngest } from "@/inngest/client";
import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";

export const appRouter = createTRPCRouter({
  textai: protectedProcedure.mutation(async () => {
    const res = await generateText({
      model: groq("openai/gpt-oss-120b"),
      prompt: `Give me a short summary about the history of Rome.`,
    });

    console.log(res.text);
    return res.text;
  }),
  getWorkFlow: protectedProcedure.query((ctx) => {
    console.log("User ID:", ctx.ctx.auth.user.id);

    return prisma.workflows.findMany();
  }),
  createWorkFlow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: { email: "vanshnagar@gmail.com" },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
