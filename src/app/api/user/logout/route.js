import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // cookies().delete("token");
    let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000); // 1 day ago
    const response = NextResponse.redirect(new URL("/", req.url), 303);
    response.cookies.set("token", "", { expires: expireDuration });
    return response;
    // return NextResponse.json({
    //   status: true,
    //   msg: "Logout successful",
    // });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
