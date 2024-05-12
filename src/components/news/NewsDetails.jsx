import React from "react";
import parse from "html-react-parser";

const NewsDetails = (props) => {
  // console.log(props.latest.data[0].title);
  return (
    <div className="container mx-auto">
      <div className="py-24 px-4 text-black">
        <h1 className="text-black py-4 text-3xl font-bold">
          {props.latest.data[0].title}
        </h1>
        <img
          className="w-full object-cover object-center"
          src={props.latest.data[0].img3}
          alt="blog"
        />
        <div className="py-1">{parse(props.latest.data[0].long_des)}</div>
      </div>
    </div>
  );
};

export default NewsDetails;
