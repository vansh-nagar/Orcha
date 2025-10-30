import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";

export const appRouter = createTRPCRouter({
  getUser: protectedProcedure.query((ctx) => {
    console.log("User ID:", ctx.ctx.auth.user.id);

    return prisma.user.findUnique({
      where: { id: ctx.ctx.auth.user.id },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
