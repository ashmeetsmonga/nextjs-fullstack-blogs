import prisma from "@/app/libs/prisma";

export async function getBlogDetails(id: string) {
  const blog = await prisma.blog.findUnique({
    where: { id },
    include: { user: { select: { name: true, createdAt: true } } },
  });
  return blog;
}
