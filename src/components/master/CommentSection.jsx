"use client";

import { useState } from "react";
import Comments from "../news/Comments";
import CreateComments from "./CreateComment";

const CommentSection = (props) => {
  const [key, setKey] = useState("");

  return (
    <>
      <div className="flex justify-center md:justify-start items-center space-x-3">
        <button
          onClick={(k) => setKey(k)}
          className=" border-2 py-2 px-3 hover:bg-white focus:bg-slate-100"
        >
          Show Comments
        </button>
        <button
          onClick={() => setKey()}
          className=" border-2 py-2 px-3 hover:bg-white focus:bg-slate-100"
        >
          Make Comments
        </button>
      </div>

      <div className="w-full py-2">
        <hr />
      </div>
      <div>
        <div>
          {key ? (
            <Comments comments={props.data} />
          ) : (
            <CreateComments postID={props.postID} />
          )}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
