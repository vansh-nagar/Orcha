import React from "react";
import { caller } from "@/trpc/server";

const Page = async () => {
  const users = await caller.getUser();
  return <div>{JSON.stringify(users)}</div>;
};

export default Page;
