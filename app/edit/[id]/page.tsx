import { getBlogDetails } from "@/app/actions/getBlogDetails";
import React from "react";
import EditBlog from "./components/EditBlog";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogDetails(params.id);
  return <EditBlog blog={blog} />;
};

export default EditPage;
