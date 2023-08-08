import prisma from "@/app/libs/prisma";

export async function getBlogsByCategory(category: string) {
  const blogs = await prisma.blog.findMany({
    where: { category },
    include: { user: { select: { name: true, createdAt: true } } },
  });
  return blogs;
}
