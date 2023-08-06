import prisma from "@/app/libs/prisma";

export async function getFeatureBlog() {
  const blogs = await prisma.blog.findMany({ select: { id: true } });
  const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
  const featureBlog = await prisma.blog.findUnique({
    where: { id: randomBlog.id },
    include: { user: { select: { name: true, createdAt: true } } },
  });
  return featureBlog;
}
