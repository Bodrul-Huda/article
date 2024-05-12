"use client";

import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/app/utility/FormHelper";

const Subscribe = () => {
  let [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Email address is not valid");
    } else {
      setSubmit(true);
      let options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/subscribe", options)).json();
      setSubmit(false);
      setData({ email: "" });
      res["status"] === "Success"
        ? SuccessToast("Subscribe Successfully")
        : ErrorToast("Email already exist!");
    }
  };

  return (
    <>
      <section className=" bg-gray-1000 py-2">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-500 md:text-2xl text-center">
              Subscribe Here
            </h1>
            <div className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium  ">
                  Your email
                </label>
                <input
                  onChange={(e) => {
                    inputOnChange("email", e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <SubmitButton
                onClick={formSubmit}
                text="Submit"
                submit={submit}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
