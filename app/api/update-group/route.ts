import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { id, groupname, divide, membersname, splitmembers, password } = body;

    const group = await prisma.groups.findUnique({
      where: { id },
    });
    if (!group || group.password !== password) {
      return NextResponse.json(
        {
          error: "Invalid group or password",
          errorCode: 401, // Set the appropriate error code
        },
        { status: 401 }
      );
    }

    const result = await prisma.groups.update({
      where: {
        id,
      },
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
