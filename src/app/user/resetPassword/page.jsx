import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (typeof token !== "undefined") {
    redirect("/");
  }

  return <div></div>;
};

export default page;
