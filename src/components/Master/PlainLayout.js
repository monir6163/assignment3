import AppFooterBar from "./AppFooterBar";
import AppNavBar from "./AppNavBar";
import AppTopNav from "./AppTopNav";

const getData = async () => {
  try {
    const socialLinks = (
      await (await fetch(`${process.env.HOST}/api/social`)).json()
    )["data"];
    const categories = (
      await (
        await fetch(`${process.env.HOST}/api/category`, {
          cache: "no-store",
        })
      ).json()
    )["data"];
    return { socialLinks: socialLinks, categories: categories };
  } catch (error) {
    console.log(error);
  }
};

const PlainLayout = async (props) => {
  const data = await getData();
  return (
    <>
      <AppTopNav socialLinks={data?.socialLinks} />
      <AppNavBar categories={data?.categories} />
      {props.children}
      <AppFooterBar
        socialLinks={data?.socialLinks}
        categories={data?.categories}
      />
    </>
  );
};

export default PlainLayout;
