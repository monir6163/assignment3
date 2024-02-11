"use client";

import { ErrorToast, IsEmpty, SuccessToast } from "@/Utility/FromHandler";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CommentForm = (props) => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [login, SetLogin] = useState(false);
  const [data, setData] = useState({
    descriptions: "",
  });

  useEffect(() => {
    if (Cookies.get("token")) {
      SetLogin(true);
    } else {
      setSubmit(false);
    }
  }, []);

  const inputChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const fromSubmit = async (e) => {
    e.preventDefault();
    if (IsEmpty(data.descriptions)) {
      ErrorToast("Comments is Required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, postID: props.postID }),
      };

      let res = await fetch("/api/comments/manage", options);
      let ResJson = await res.json();

      setSubmit(false);
      if (ResJson["status"] === "success") {
        SuccessToast("Success");
        setData({
          descriptions: "",
        });
        router.refresh();
      } else {
        ErrorToast("Request Fail");
        setSubmit(false);
      }
    }
  };

  return (
    <div className="w-full mt-8">
      <div className=" px-7 rounded-[12px] bg-white p-4 shadow-md border">
        <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
          Add Comment
        </p>
        <input type="hidden" name="postID" value={props.postID} />
        <textarea
          className="h-20 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
          placeholder="Add your comments here"
          name="descriptions"
          value={data.descriptions}
          onChange={(e) => inputChange(e.target.name, e.target.value)}
        ></textarea>

        <div className="flex justify-between mt-2">
          {login ? (
            <button
              submit={submit}
              onClick={fromSubmit}
              className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
            >
              Submit Comment
            </button>
          ) : (
            <Link
              href={"/user/login"}
              className="text-sm cursor-pointer text-red-500"
            >
              Login to Comment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
