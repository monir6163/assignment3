import Hero from "@/components/Hero";
import PlainLayout from "@/components/Master/PlainLayout";
import NewsList from "@/components/NewsList";
import PopularNewsList from "@/components/PopularNewsList";
const getData = async () => {
  let slider = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=Slider`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  let featured = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=Featured`, {
        cache: "no-store",
      })
    ).json()
  )["data"];

  let popular = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=Popular`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  let latest = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=latest`, {
        cache: "no-store",
      })
    ).json()
  )["data"];

  return {
    slider: slider,
    featured: featured,
    popular: popular,
    latest: latest,
  };
};

export default async function Home() {
  const { slider, featured, latest, popular } = await getData();

  return (
    <PlainLayout>
      <div className="container">
        <Hero
          slider={slider}
          featured={featured}
          latest={latest}
          popular={popular}
        />
        <div className="py-5">
          <h5 className="text-xl font-bold mb-2">LATEST</h5>
          <hr className="border-b border-gray-300 mb-4" />
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="md:w-3/4 mb-4 md:mb-0">
              <NewsList latest={latest} />
            </div>
            <div className="md:w-1/4">
              <PopularNewsList popular={popular} />
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
}
