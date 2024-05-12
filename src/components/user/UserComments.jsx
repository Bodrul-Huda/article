"use client";

import { ErrorToast, SuccessToast } from "@/app/utility/FormHelper";
import { useRouter } from "next/navigation";

const UserCommetns = (props) => {
  const router = useRouter();

  const deleteComment = async (id) => {
    alert("Do you want to delete this comment");

    const options = {
      method: "DELETE",
      body: JSON.stringify({ id: parseInt(id) }),
    };
    let res = await (await fetch("/api/comments/manage", options)).json();
    if (res["status"] === "Success") {
      SuccessToast("Comment Deleted");
      router.refresh();
    } else {
      ErrorToast("Request Failed");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className=" px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.data.Comments.data.map((item, i) => {
            return (
              <div key={i} className="p-2 md:w-full">
                <div className="flex rounded-lg h-full bg-gray-100 p-2 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img
                        src="/heroImg.jpg"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {item.news_list.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      {item.descriptions}
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    <button
                      onClick={() => deleteComment(item.id)}
                      className="px-4 py-2 rounded-md bg-red-400 hover:bg-red-500 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserCommetns;
