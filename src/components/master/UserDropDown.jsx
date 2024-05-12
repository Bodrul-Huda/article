import React, { useState } from "react";
import Link from "next/link";

const UserDropDown = () => {
  const [navbar, setNavbar] = useState(false);

  const logOut = async () => {
    await fetch("/api/users/login");

    window.location.href = "/";
  };

  return (
    <>
      <div>
        <div>
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
            onClick={() => setNavbar(!navbar)}
          >
            <div className="w-8 h-8 rounded-full ">
              <img src="/profile.png" className="h-8 w-8 rounded-full" />
            </div>
          </button>
        </div>
        <div>
          <div
            className={` flex-1 justify-self-center block pb-0 md:absolute md:top-16 md:right-0 z-50 w-[200px] min-h-[150px] md:flex-col md:py-4 md:bg-gradient-to-r from-gray-900 to-teal-950 rounded-md ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="text-white text-center ">
              <div className="p-2 hover:bg-gray-700">
                <Link href="/dashboard" className="">
                  <span className="">Profile</span>
                </Link>
              </div>
              <div className="p-2 hover:bg-gray-700">
                <Link href="/comments" className="">
                  <span className="">Comments</span>
                </Link>
              </div>
              <div className="p-2">
                <>
                  <button
                    onClick={logOut}
                    className="bg-gradient-to-r from-red-400 to-red-600 rounded-md py-2 px-4 w-full text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400"
                  >
                    Logout
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDropDown;
