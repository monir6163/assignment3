import PlainLayout from "@/components/Master/PlainLayout";
import SetPasswordFrom from "@/components/User/SetPasswordFrom";

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
      <SetPasswordFrom />
    </PlainLayout>
  );
};

export default page;
