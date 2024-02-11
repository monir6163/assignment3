import PlainLayout from "@/components/Master/PlainLayout";
import LoginForm from "@/components/User/LoginForm";

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
      <LoginForm />
    </PlainLayout>
  );
};

export default page;
