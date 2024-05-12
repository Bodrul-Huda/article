import PlainLayout from "@/components/master/PlainLayout";
import UserCommetns from "@/components/user/UserComments";
import { cookies, headers } from "next/headers";
import React from "react";

async function getData(cookies) {
  const options = {
    method: "GET",
    headers: { Cookie: cookies },
    caches: "no-store",
  };
  const Comments = await (
    await fetch(`${process.env.HOST}/api/comments/manage`, options)
  ).json();

  return { Comments: Comments };
}

const page = async () => {
  const cookieStore = cookies();
  const data = await getData(cookieStore);
  // console.log(data.Comments.data);

  return (
    <PlainLayout>
      <div className="container mx-auto">
        <div className="my-10">
          <h1 className="font-semibold text-lg text-center">Your Comments</h1>
        </div>
        <div className="p-2">
          <UserCommetns data={data} />
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;
