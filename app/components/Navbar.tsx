"use client";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const logoutUser = useUserStore((state) => state.logoutUser);

  const onLogout = () => {
    const toastID = toast.loading("Logging out");
    axios.get("/api/auth/logout").then(() => {
      logoutUser();
      toast.success("Logged Out", { id: toastID });
      router.push("/");
    });
  };

  return (
    <div className="flex w-full justify-between p-5 lg:px-10">
      <div className="flex items-center gap-8">
        <Logo />
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex items-center gap-8">
        <Suspense fallback={"Loading..."}>
          {user ? (
            <>
              <div>{user.name}</div>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">
                <div>Login</div>
              </Link>
              <Link href="/register">
                <div>Register</div>
              </Link>
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
