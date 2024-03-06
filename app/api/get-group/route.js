import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");

  const group = await prisma.groups.findUnique({
    where: { id },
  });

  return NextResponse.json(group);
}
