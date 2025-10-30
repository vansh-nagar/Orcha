"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();
  const { data: user } = useSuspenseQuery(trpc.getUser.queryOptions());

  return <div>Client: {JSON.stringify(user)}</div>;
};

export default Client;
