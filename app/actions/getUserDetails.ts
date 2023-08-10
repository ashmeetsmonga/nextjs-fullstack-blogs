import prisma from "@/app/libs/prisma";

export const getUserDetails = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { bio: true, name: true, email: true },
  });
  return user;
};
