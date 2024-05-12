"use client";

import SubmitButton from "../news/SubmitButton";
import { useState } from "react";

import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
  SuccessToast,
} from "@/app/utility/FormHelper";

const UpdateForm = (props) => {
  // console.log(props.data.firstName);

  let [data, setData] = useState({
    firstName: props.data["firstName"],
    lastName: props.data["lastName"],
    email: props.data["email"],
    password: props.data["password"],
    mobile: props.data["mobile"],
  });

  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    if (IsEmpty(data.firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(data.lastName)) {
      ErrorToast("Last Name Required");
    } else if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsMobile(data.mobile)) {
      ErrorToast("Valid Mobile Number Required");
    } else if (IsEmpty(data.password)) {
      ErrorToast("Password Required");
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
      let res = await (
        await fetch("/api/users/profile/update", options)
      ).json();
      if (res["status"] === "Success") {
        SuccessToast("Registration Success");
        setSubmit(false);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          mobile: "",
        });

        window.location.href = "/dashboard";
      } else {
        setSubmit(false);
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <>
      <section className=" bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Update Profile
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    hrmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("firstName", e.target.value);
                    }}
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={data.firstName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    // placeholder="Steve Jobs"
                    // required=""
                  />
                </div>
                <div>
                  <label
                    hrmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last name
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("lastName", e.target.value);
                    }}
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={data.lastName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    // placeholder="Steve Jobs"
                    // required=""
                  />
                </div>
                <div>
                  <label
                    hrmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("email", e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    // placeholder="name@company.com"
                    // required=""
                  />
                </div>
                <div>
                  <label
                    hrmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Mobile number
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("mobile", e.target.value);
                    }}
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={data.mobile}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    // placeholder="name@company.com"
                    // required=""
                  />
                </div>
                <div>
                  <label
                    hrmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("password", e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    // placeholder="••••••••"
                    value={data.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    // required=""
                  />
                </div>

                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Update"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateForm;
