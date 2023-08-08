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
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  const [showCateogoryMenu, setShowCateogoryMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
          onClick={() => setShowCateogoryMenu((prev) => !prev)}
          className="relative lg:hidden"
        >
          Categories
          <div
            className={`absolute left-0 top-10 z-50 flex flex-col gap-3 rounded-xl bg-gray-900 p-4 text-white transition-transform duration-500 ${
              showCateogoryMenu ? "translate-x-0" : "-translate-x-[300px]"
            }`}
          >
            {categories.map((category, idx) => (
              <Link href={`/${category}`}>
                <div className="text-left capitalize transition-transform hover:scale-105">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </button>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <Suspense fallback={"Loading..."}>
          {user ? (
            <>
              <Link href="/create">
                <IoMdAdd size={25} />
              </Link>
              <button
                className="relative"
                onClick={() => setShowUserMenu((prev) => !prev)}
              >
                <FaUserCircle size={25} />
                <div
                  className={`absolute right-0 top-10 z-50 flex w-[100px] flex-col gap-3 rounded-xl bg-gray-900 p-4 text-left text-white transition-transform duration-500 lg:w-[150px] ${
                    showUserMenu ? "translate-x-0" : "translate-x-[250px]"
                  }`}
                >
                  <Link
                    className="transition-transform hover:scale-105"
                    href="/"
                  >
                    My Blogs
                  </Link>
                  <div
                    onClick={onLogout}
                    className="text-left capitalize transition-transform hover:scale-105"
                  >
                    Logout
                  </div>
                </div>
              </button>
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
