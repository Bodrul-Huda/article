import PlainLayout from "@/components/master/PlainLayout";
import UpdateForm from "@/components/user/UpdateForm";
import { cookies, headers } from "next/headers";

async function getData(cookies) {
  const options = {
    method: "GET",
    headers: { Cookie: cookies },
    caches: "no-store",
  };
  const Profile = await (
    await fetch(`${process.env.HOST}/api/users/profile/detail`, options)
  ).json();

  return { Profile: Profile };
}

const Dashboard = async () => {
  const cookieStore = cookies();
  const data = await getData(cookieStore);
  return (
    <PlainLayout>
      <UpdateForm data={data["Profile"]["data"]} />
    </PlainLayout>
  );
};

export default Dashboard;
