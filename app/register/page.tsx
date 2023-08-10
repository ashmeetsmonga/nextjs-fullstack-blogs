"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "../store/userStore";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const loginUser = useUserStore((state) => state.loginUser);

  const onRegister = () => {
    if (!name || !email || !password || !confirmPassword)
      return toast.error("Please fill all details");

    if (password !== confirmPassword)
      return toast.error("Password and Confirm password do not match");

    const toastID = toast.loading("Registering, please wait");
    axios
      .post("/api/register", { name, email, password })
      .then((data) => {
        toast.success("Register successful", { id: toastID });
        loginUser(data.data);
        router.push("/");
      })
      .catch((e: any) => {
        console.log(e);
        toast.error(e.response.data?.message || "Something went wrong", {
          id: toastID,
        });
      });
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[700px] flex-col items-center gap-1 lg:gap-4">
        <h1 className="text-3xl font-semibold lg:text-4xl">
          Welcome To Blogs!
        </h1>
        <p className="text-xs lg:text-base">
          Sign up to get the most out of blogs
        </p>
        <div className="mt-2 flex w-4/5 flex-col items-center gap-1 lg:gap-2">
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-sm outline-none focus:outline-none lg:text-base"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-sm outline-none focus:outline-none lg:text-base"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-sm outline-none focus:outline-none lg:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-sm outline-none focus:outline-none lg:text-base"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={onRegister}
            className="mt-4 w-fit rounded-full bg-black px-8 py-2 uppercase text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
