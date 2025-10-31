import { z } from "zod";
import {  createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";

export const appRouter = createTRPCRouter({
  getWorkFlow: protectedProcedure.query((ctx) => {
    console.log("User ID:", ctx.ctx.auth.user.id);

    return prisma.workflows.findMany();
  }),
  createWorkFlow: protectedProcedure.mutation(() => {
    return prisma.workflows.create({
      data: {
        name: "New Workflow",
      },
    });
  }), 
});
// export type definition of API
export type AppRouter = typeof appRouter;
