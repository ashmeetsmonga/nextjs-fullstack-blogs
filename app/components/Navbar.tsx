"use client";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import axios from "axios";
import { ProfileData } from "@/types";

const Navbar = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    axios.get("/api/auth/profile").then((data) => setProfileData(data.data));
  }, []);

  return (
    <div className="flex w-full justify-between p-5 lg:px-10">
      <div className="flex items-center gap-8">
        <Logo />
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex items-center gap-8">
        <Suspense fallback={"Loading..."}>
          {profileData ? (
            <>
              <Link href="/login">
                <div>Logout</div>
              </Link>
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
