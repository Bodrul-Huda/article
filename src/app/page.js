import PlainLayout from "@/components/master/PlainLayout";
import Hero from "@/components/news/Hero";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";

async function getData() {
  let Slider = await (
    await fetch(`${process.env.HOST}/api/news/type?type=Slider`)
  ).json();
  let Featured = await (
    await fetch(`${process.env.HOST}/api/news/type?type=Featured`)
  ).json();
  let Latest = await (
    await fetch(`${process.env.HOST}/api/news/type?type=Regular`)
  ).json();
  let Popular = await (
    await fetch(`${process.env.HOST}/api/news/type?type=popular`)
  ).json();
  return {
    Slider: Slider,
    Featured: Featured,
    Latest: Latest,
    Popular: Popular,
  };
}

export default async function Home() {
  const data = await getData();
  return (
    <PlainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div>
          <Hero slider={data["Slider"]} featured={data["Featured"]} />
        </div>
        <div className="container mx-auto mt-4">
          <h5 className="text-black p-1">LATEST</h5>
          <hr />
          <div className="md:flex justify-between ">
            <div className="w-full md:w-3/4 ">
              <NewsList latest={data["Latest"]} />
            </div>
            <div className="w-full md:w-1/4">
              <PopularList popular={data["Popular"]} />
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
}
