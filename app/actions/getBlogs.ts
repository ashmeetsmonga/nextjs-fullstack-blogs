import prisma from "@/app/libs/prisma";

export async function getBlogs() {
  const blogs = await prisma.blog.findMany({
    include: { user: { select: { name: true, createdAt: true } } },
    orderBy: { updatedAt: "desc" },
  });
  return blogs;
}
