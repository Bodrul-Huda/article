import PlainLayout from "@/components/master/PlainLayout";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";
import React from "react";

async function getData(keyword) {
  let Search = await (
    await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)
  ).json();

  let Popular = await (
    await fetch(`${process.env.HOST}/api/news/type?type=popular`)
  ).json();
  return {
    Search: Search,
    Popular: Popular,
  };
}

const page = async (props) => {
  console.log(props);

  const keyword = props.searchParams["keyword"];
  const data = await getData(keyword);

  return (
    <PlainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto mt-4">
          <div className="md:flex justify-between ">
            <div className="w-full md:w-3/4 ">
              <NewsList latest={data["Search"]} />
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
