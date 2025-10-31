import React from "react";

interface PageProps {
  params: {
    workflowId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { workflowId } = await params;
  return <div>Execution Id: {workflowId}</div>;
};

export default Page;
