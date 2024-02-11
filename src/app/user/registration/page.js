import PlainLayout from "@/components/Master/PlainLayout";
import RegisterForm from "@/components/User/RegisterForm";

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
      <RegisterForm />
    </PlainLayout>
  );
};

export default page;
