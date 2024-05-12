import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar";

import { cookies } from "next/headers";

async function getData() {
  let categories = await (
    await fetch(`${process.env.HOST}/api/categories`)
  ).json();
  let social = await (await fetch(`${process.env.HOST}/api/social`)).json();

  return { categories: categories, social: social };
}

const PlainLayout = async (props) => {
  const data = await getData();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  // console.log(name);

  return (
    <>
      <SearchBar data={token} />
      <AppNavBar data={data} />

      {props.children}
      <Toaster position="bottom-center" />

      <Footer data={data} />
    </>
  );
};

export default PlainLayout;
