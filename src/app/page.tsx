"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import React from "react";

const page = () => {
  const { data } = authClient.useSession();
  return (
    <div className=" flex justify-center items-center">
      {JSON.stringify(data)}
      {data && (
        <Button
          onClick={() => {
            authClient.signOut();
          }}
        >
          Log out
        </Button>
      )}{" "}
    </div>
  );
};

export default page;
