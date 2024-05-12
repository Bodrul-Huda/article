import React from "react";

import Link from "next/link";

const NewsList = (props) => {
  // console.log(props);
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 space-y-4">
        {props.latest.data.map((item, i) => {
          return (
            <div key={i} className="p-3 w-full md:w-2/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="m-2">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.img3}
                    alt="blog"
                  />
                  <div className="p-2">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed mb-3 text-gray-900">
                      {item.short_des}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="border-red-600 border-2 rounded-md  py-2 px-4 text-gray-900">
                        <Link href={`/details?id=${item["id"]}`}>
                          Read More
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
