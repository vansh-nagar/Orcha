import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/prisma";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(() => {
    return { userCount: prisma.user.count() };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
