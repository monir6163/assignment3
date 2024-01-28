import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await prisma.categories.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        id: "desc",
      },
      take: 7,
    });
    return NextResponse.json({
      status: "success",
      total: result.length,
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
