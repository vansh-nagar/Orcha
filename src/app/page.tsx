"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkFlow.queryOptions());

  const createWorkflow = useMutation(
    trpc.createWorkFlow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkFlow.queryOptions());
      },
    })
  );

  return (
    <div>
      {JSON.stringify(data)}

      <Button
        onClick={() => {
          createWorkflow.mutate();
        }}
      >
        create flow
      </Button>
    </div>
  );
};

export default Page;
