import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-5">
      <div className="flex items-center gap-8">
        <Logo />
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex items-center gap-8">
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
};

export default Navbar;
