"use client";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";
import { toast } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { categories } from "../categories";

const Navbar = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const user = useUserStore((state) => state.user);
  const loginUser = useUserStore((state) => state.loginUser);
  const logoutUser = useUserStore((state) => state.logoutUser);

  useEffect(() => {
    if (!user) {
      axios
        .get("/api/auth/profile")
        .then((data) => loginUser(data.data))
        .catch((e) => {});
    }
  }, []);

  const onLogout = () => {
    const toastID = toast.loading("Logging out");
    axios.get("/api/logout").then(() => {
      logoutUser();
      toast.success("Logged Out", { id: toastID });
      router.push("/");
    });
  };

  return (
    <div className="sticky left-0 top-0 z-50 flex w-full justify-between bg-white p-5 text-sm lg:px-10 lg:text-base">
      <div className="flex items-center gap-4 lg:gap-8">
        <Logo />
        <Link href="/">
          <div>Home</div>
        </Link>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="relative lg:hidden"
        >
          Categories
          {showMenu && (
            <div className="absolute left-0 top-10 z-50 flex flex-col gap-3 rounded rounded-t-none border-2 border-t-0 bg-white px-4 py-2">
              {categories.map((category, idx) => (
                <Link href={`/${category}`}>
                  <div className="text-left capitalize">{category}</div>
                </Link>
              ))}
            </div>
          )}
        </button>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <Suspense fallback={"Loading..."}>
          {user ? (
            <>
              <Link href="/create">
                <IoMdAdd size={25} />
              </Link>
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
