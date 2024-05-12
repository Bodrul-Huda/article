"use client";

import { useState } from "react";

import { ErrorToast, IsEmpty, SuccessToast } from "@/app/utility/FormHelper";
import SubmitButton from "../news/SubmitButton";
import { useRouter } from "next/navigation";

const CreateComments = (props) => {
  // console.log(props.postID);
  const [data, setData] = useState({
    descriptions: "",
    postID: parseInt(props.postID),
  });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    if (IsEmpty(data.descriptions)) {
      ErrorToast("Comment required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let res = await (await fetch("/api/comments/manage", options)).json();
      setSubmit(false);
      if (res["status"] === "Success") {
        SuccessToast("Comment created successfully");

        setData({
          descriptions: "",
        });
        router.refresh();
      } else {
        setSubmit(false);
        router.replace("user/login");
        ErrorToast("Comment Failed");
      }
    }
  };

  return (
    <>
      <section className=" bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Create a comment
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                <div>
                  <textarea
                    onChange={(e) => {
                      inputOnChange("descriptions", e.target.value);
                    }}
                    type="text"
                    name="descriptions"
                    id="descriptions"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>

                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Submit "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateComments;
