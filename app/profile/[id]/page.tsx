import { getUserDetails } from "@/app/actions/getUserDetails";
import React from "react";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const userDetails = getUserDetails(params.id);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
