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

const SignUpForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
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
      let res = await (await fetch("/api/users/registration", options)).json();
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

        window.location.href = "/user/login";
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
                Create and account
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
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
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
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
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
                    type="mobile"
                    name="mobile"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>

                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Create an account"
                />

                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?{" "}
                  <a
                    href="/user/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
