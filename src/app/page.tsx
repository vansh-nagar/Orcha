import React from "react";
import prisma from "@/lib/prisma";
import { caller } from "@/trpc/server";

const Page = async () => {
  const count = await caller.hello();
  return <div>{JSON.stringify(count)}</div>;
};

export default Page;
