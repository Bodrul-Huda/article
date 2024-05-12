import PlainLayout from "@/components/master/PlainLayout";
import parse from "html-react-parser";

async function getData() {
  const data = await (
    await fetch(`${process.env.HOST}/api/policy?type=term`)
  ).json();
  return data;
}

const Page = async () => {
  const data = await getData();
  //   console.log(data.data[0]);
  return (
    <PlainLayout>
      <div className="container mx-auto">
        <div className="py-20 px-10">{parse(data.data[0].long_des)}</div>
      </div>
    </PlainLayout>
  );
};

export default Page;
