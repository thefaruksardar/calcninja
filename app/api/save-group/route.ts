import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { id, groupname, divide, membersname, splitmembers, password } = body;

    const result = await prisma.groups.create({
      data: {
        groupname,
        divide,
        membersname,
        splitmembers,
        password,
      },
    });
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json(`Server Error: ${error}`, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
