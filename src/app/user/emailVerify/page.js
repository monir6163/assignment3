import PlainLayout from "@/components/Master/PlainLayout";
import EmailVerifyForm from "@/components/User/EmailVerifyForm";

const page = () => {
  // let isLogin = false;
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");
  // isLogin = token !== undefined ? true : false;
  // if (isLogin) {
  //   redirect("/");
  // }
  return (
    <PlainLayout>
      <EmailVerifyForm />
    </PlainLayout>
  );
};

export default page;
