import PlainLayout from "@/components/master/PlainLayout";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";
import React from "react";

async function getData(id) {
  let News = await (
    await fetch(`${process.env.HOST}/api/news/category?catID=${id}`)
  ).json();

  let Popular = await (
    await fetch(`${process.env.HOST}/api/news/type?type=popular`)
  ).json();
  return {
    News: News,
    Popular: Popular,
  };
}

const page = async (props) => {
  const id = props.searchParams["id"];
  const data = await getData(id);

  return (
    <PlainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto mt-4">
          <div className="md:flex justify-between ">
            <div className="w-full md:w-3/4 ">
              <NewsList latest={data["News"]} />
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
