"use client";

import Link from "next/link";
import { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";
import UserDropDown from "./UserDropDown";
// import SubmitButton from "../news/SubmitButton";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");
  // console.log(props.data.name);

  var currentdate = new Date();
  return (
    <>
      <div>
        <nav className="w-full bg-gradient-to-r from-teal-950 to-gray-900">
          <div className="container mx-auto">
            <div>
              <div className="flex items-center justify-between py-1 md:py-1">
                <div className="items-center justify-between min-w-full  md:flex">
                  <div className="w-full md:w-1/4 flex justify-start items-center text-white">
                    <LuCalendarClock className="w-5 h-5" />
                    <p className="p-2 font-semibold text-base ">
                      Today: {currentdate.getDate()} /{" "}
                      {currentdate.getMonth() + 1} /{currentdate.getFullYear()}
                    </p>
                  </div>
                  <div className="w-full md:w-2/4">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        onChange={(e) => setKeyword(e.target.value)}
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <Link
                          href={
                            keyword === "" ? "/" : `/search?keyword=${keyword}`
                          }
                        >
                          Search
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="md:flex justify-end items-center p-2 w-full md:w-1/4">
                    {props.data ? (
                      <>
                        <UserDropDown />
                      </>
                    ) : (
                      <>
                        <div className="p-1">
                          <Link href="/user/login">
                            <button className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-md py-2 px-4 text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400">
                              Login
                            </button>
                          </Link>
                        </div>
                        <div className="p-1">
                          <Link href="/user/registration">
                            <button className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-md py-2 px-4 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
                              Register
                            </button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SearchBar;
