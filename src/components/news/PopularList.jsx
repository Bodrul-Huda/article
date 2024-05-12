import React from "react";
import Subscribe from "./Subscribe";
import Link from "next/link";

const PopularList = (props) => {
  // console.log(props.popular.data);
  return (
    <div className="py-24">
      <div className="bg-black mt-2 rounded-md p-2 ">
        <span className="p-1 text-white">POPULAR</span>
      </div>
      {props.popular.data.map((item, i) => {
        return (
          <div
            key={i}
            className="w-full py-1 px-2 flex justify-between items-center"
          >
            <Link
              href={`/details?id=${item["id"]}`}
              className=" bg-white shadow-sm "
            >
              <div className="flex py-6 justify-between items-center">
                <div className=" w-full md:w-1/3">
                  <img
                    className="rounded-md w-100 h-100"
                    src={item["img4"]}
                    alt="News Image"
                  />
                </div>
                <div className="w-full md:w-2/3 p-3">
                  <h6 className="text-black">{item["title"]}</h6>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      <div className="bg-black mt-2 rounded-md text-white p-2">
        <span className="p-1">SUBSCRIBE</span>
      </div>
      <div className="w-full py-1 px-2">
        <Subscribe />
      </div>
    </div>
  );
};

export default PopularList;
