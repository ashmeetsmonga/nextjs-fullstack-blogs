"use client";

import React, { useEffect, useState } from "react";
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
  const [loadingUser, setLoadingUser] = useState(true);

  const user = useUserStore((state) => state.user);
  const loginUser = useUserStore((state) => state.loginUser);
  const logoutUser = useUserStore((state) => state.logoutUser);

  useEffect(() => {
    if (!user) {
      axios
        .get("/api/auth/profile")
        .then((data) => loginUser(data.data))
        .catch((e) => {})
        .finally(() => setLoadingUser(false));
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
      <div
        onClick={() => {
          setShowCateogoryMenu(false);
          setShowUserMenu(false);
        }}
        className={`absolute left-0 top-[83px] z-50 h-screen w-screen bg-black opacity-70 transition-opacity ${
          showCateogoryMenu || showUserMenu ? "block" : "hidden"
        }`}
      ></div>
      <div className="flex items-center gap-4 lg:gap-8">
        <Link className="transition-transform hover:scale-105" href="/">
          <Logo />
        </Link>
        <Link className="transition-transform hover:scale-105" href="/">
          <div>Home</div>
        </Link>
        <button
          onClick={() => setShowCateogoryMenu((prev) => !prev)}
          className="relative lg:hidden"
        >
          <div className="transition-transform hover:scale-105">Categories</div>

          <div
            className={`absolute -left-4 top-12 z-50 flex w-[250px] flex-col gap-3 rounded-sm bg-white p-4 text-black ${
              showCateogoryMenu ? "block" : "hidden"
            }`}
          >
            {categories.map((category, idx) => (
              <Link key={idx} href={`/${category}`}>
                <div className="text-left capitalize transition-transform hover:scale-105">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </button>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        {!loadingUser &&
          (user ? (
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
                  className={`absolute -right-4 top-12 z-50 flex w-[100px] flex-col gap-3 rounded-sm bg-white p-4 text-left text-black lg:w-[150px] ${
                    showUserMenu ? "block" : "hidden"
                  }`}
                >
                  <Link
                    className="transition-transform hover:scale-105"
                    href={`/profile/${user?.id}`}
                  >
                    Profile
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
              <Link
                className="transition-transform hover:scale-105"
                href="/login"
              >
                <div>Login</div>
              </Link>
              <Link
                className="transition-transform hover:scale-105"
                href="/register"
              >
                <div>Register</div>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
