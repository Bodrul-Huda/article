"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AppNavBar = (props) => {
  const [navbar, setNavbar] = useState(false);

  let currentPath = usePathname();

  return (
    <>
      <div className="sticky top-0 z-10">
        <nav className="w-full bg-gradient-to-r from-gray-900 to-teal-950">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/" className="flex space-x-2">
                  {/* <img src="/Logo.png" className="w-7 h-7 rounded-md" /> */}
                  <h2 className="text-2xl text-amber-500 font-bold">
                    Art<span className="text-3xl text-white">i</span>cles
                  </h2>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li
                    className={
                      currentPath === "/"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/">Home</Link>
                  </li>
                  {props.data.categories.data.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={
                          currentPath === `/category?id=${item["id"]}`
                            ? "text-orange-400 font-bold"
                            : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                        }
                      >
                        <Link href={`/category?id=${item["id"]}`}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AppNavBar;
