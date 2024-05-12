import CommentSection from "@/components/master/CommentSection";
import PlainLayout from "@/components/master/PlainLayout";

import NewsDetails from "@/components/news/NewsDetails";

import PopularList from "@/components/news/PopularList";
import React from "react";

async function getData(id) {
  let News = await (
    await fetch(`${process.env.HOST}/api/news/details?id=${id}`)
  ).json();

  let Popular = await (
    await fetch(`${process.env.HOST}/api/news/type?type=popular`)
  ).json();
  let Comments = await (
    await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`, {
      cache: "no-store",
    })
  ).json();
  return {
    News: News,
    Popular: Popular,
    Comments: Comments,
  };
}

const page = async (props) => {
  const id = props.searchParams["id"];
  const data = await getData(id);

  // console.log(props.params);

  return (
    <PlainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto mt-4">
          <div className="md:flex justify-between ">
            <div className="w-full md:w-3/4 ">
              <NewsDetails latest={data["News"]} />
              <div>
                <CommentSection postID={id} data={data["Comments"]} />
                <comment />
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <PopularList popular={data["Popular"]} />
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;
