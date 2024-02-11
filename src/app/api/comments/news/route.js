import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const postID = parseInt(searchParams.get("postID"));
    const result = await prisma.comments.findMany({
      where: { postID: postID },
      include: {
        users: { select: { firstName: true, lastName: true } },
        // news_list:{select:{title:true}}
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    NextResponse.json({ status: "fail", data: e });
  }
}
