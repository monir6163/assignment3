import { ErrorToast } from "@/Utility/FromHandler";
import { cookies } from "next/headers";
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
    ErrorToast(error.message);
  }
};

const PlainLayout = async (props) => {
  const data = await getData();
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = token !== undefined ? true : false;
  return (
    <>
      <AppTopNav socialLinks={data?.socialLinks} />
      <AppNavBar categories={data?.categories} isLogin={isLogin} />
      {props.children}
      <AppFooterBar
        socialLinks={data?.socialLinks}
        categories={data?.categories}
      />
    </>
  );
};

export default PlainLayout;
