import PlainLayout from "@/components/master/PlainLayout";
import ProfileForm from "@/components/user/ProfileForm";
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
      <ProfileForm data={data["Profile"]} />
    </PlainLayout>
  );
};

export default Dashboard;
