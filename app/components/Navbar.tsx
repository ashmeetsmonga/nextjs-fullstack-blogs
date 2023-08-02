import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-5">
      <div className="flex items-center gap-8">
        <div className="rounded bg-black px-4 py-2 font-bold uppercase text-white">
          Blogs
        </div>
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex gap-8">
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
};

export default Navbar;
