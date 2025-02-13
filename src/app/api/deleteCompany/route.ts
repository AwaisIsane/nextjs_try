import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const data = await request.json();
    const { name } = data;
    if (!name && typeof name !== "string") {
      return NextResponse.json(
        { error: "no name param provided " },
        { status: 400 }
      );
    }

    //const seession = getSessionData() if some type of token based auth then assume session will have admin role and return unauthoruized if not
    const company = await prisma.company.findUnique({ where: { name } });
    if (!company) {
      return NextResponse.json({ error: "no such company " }, { status: 400 });
    }
    //delete all records pretaning to that company
    //TODO : - figure out how to delete ref from user
    // company.UserIDs.forEach(async (userId) => {
    //   const usr = await prisma.user.findUnique({ where: { id: userId } });
    //   if (usr) {
    //     prisma.user.updateMany({
    //       where: { categories: { some: { id: company.id } } },
    //       data: { categories: { disconnect: {} } },
    //     });
    //   }
    // });
    const dataS = await prisma.company.delete({ where: { id: company.id } });
    return NextResponse.json({ dataS }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "invalid request body" },
      { status: 400 }
    );
  }
}
