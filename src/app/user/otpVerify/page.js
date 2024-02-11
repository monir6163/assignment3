import PlainLayout from "@/components/Master/PlainLayout";
import PinVerifyForm from "@/components/User/PinVerifyForm";

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
      <PinVerifyForm />
    </PlainLayout>
  );
};

export default page;
