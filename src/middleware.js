import { NextResponse } from "next/server";
import { verifyToken } from "./Utility/jwtTokenHelper";

export async function middleware(req, res) {
  try {
    const token = req.cookies.get("token");

    // User is not logged in, allow access to login page
    if (!token && req.nextUrl.pathname.startsWith("/user/")) {
      return NextResponse.next();
    }

    // User is logged in, redirect from the login page
    if (token && req.nextUrl.pathname.startsWith("/user/")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    let payload = await verifyToken(token["value"]);
    const reqHeaders = new Headers(req.header);
    reqHeaders.set("email", payload["email"]);
    reqHeaders.set("id", payload["id"]);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } catch (e) {
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Unauthorized",
        },
        { status: 401 }
      );
    } else {
      return NextResponse.redirect(new URL("/user/login", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/profile",
    "/user/:path*",
    "/api/user/profile",
    "/api/user/profile/update",
    "/api/user/profile/details",
    "/api/comments/manage",
  ],
};
