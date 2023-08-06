import { getBlogDetails } from "@/app/actions/getBlogDetails";
import React from "react";

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogDetails(params.id);
  console.log(blog);
  return <div>BlogDetailsPage</div>;
};

export default BlogDetailsPage;
