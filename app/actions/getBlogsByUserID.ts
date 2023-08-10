import prisma from "@/app/libs/prisma";

export const getBlogsByUserID = async (id: string) => {
  const blogs = await prisma.blog.findMany({ where: { user: { id } } });
  return blogs;
};
