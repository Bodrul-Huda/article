import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import DateFormate from "./DateFormate";
import Subscribe from "../news/Subscribe";

const Footer = (props) => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-teal-950">
      <div className="container mx-auto py-12 text-slate-300">
        <div className="py-5 px-4 w-full flex ">
          <div className="py-4 w-1/2  ">
            <Subscribe />
          </div>
          <div className="w-1/2 py-12">
            <div className="flex gap-6 justify-center ">
              <Link href={props.data.social.data[0]["facebook"]}>
                <p className=" text-2xl m-2 hover:text-slate-100">
                  <BsFacebook />
                </p>
              </Link>
              <Link href={props.data.social.data[0]["twitter"]}>
                <p className=" text-2xl m-2 hover:text-slate-100">
                  <BsInstagram />
                </p>
              </Link>
              <Link href={props.data.social.data[0]["youtube"]}>
                <p className=" text-2xl m-2 hover:text-slate-100">
                  <BsYoutube />
                </p>
              </Link>
            </div>
            <DateFormate />
            <p className="py-5 text-center underline">
              {" "}
              <Link href={"/terms"}>Terms & Conditions</Link>{" "}
            </p>
            <p className="py-5 text-center underline">
              {" "}
              <Link href={"/privacy"}>Privacy policy</Link>{" "}
            </p>
            <p className="py-5 text-center ">
              {" "}
              {props.data.social.data[0]["about"]}{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
