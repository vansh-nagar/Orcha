import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  testai: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute.ai",
    });

    return { success: true };
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
