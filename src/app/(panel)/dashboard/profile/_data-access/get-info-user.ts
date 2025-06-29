"use server";
import prisma from "@/lib/prisma";

interface GetUserDataProps {
  userId: string;
}
export async function getUserData({ userId }: GetUserDataProps) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        subscription: true,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
}
