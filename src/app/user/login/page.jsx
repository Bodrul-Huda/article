import LoginForm from "@/components/user/LoginForm";
import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (typeof token !== "undefined") {
    redirect("/");
  }
  return (
    <div className="bg-gray-50">
      <div className="  p-10">
        <Link
          href={"/"}
          className="flex justify-start items-center gap-2 text-lg"
        >
          {" "}
          <RiArrowGoBackLine />
          Home
        </Link>
      </div>

      <LoginForm />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default page;
