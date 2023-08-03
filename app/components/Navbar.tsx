import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-5 lg:px-10">
      <div className="flex items-center gap-8">
        <Logo />
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/login">
          <div>Login</div>
        </Link>
        <div>Register</div>
      </div>
    </div>
  );
};

export default Navbar;
