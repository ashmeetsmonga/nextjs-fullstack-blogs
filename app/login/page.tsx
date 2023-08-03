import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[700px] flex-col items-center gap-1 lg:gap-4">
        <h1 className="text-3xl font-semibold lg:text-4xl">Welcome Back!</h1>
        <p className="text-xs lg:text-base">
          Sign in to get the most out of blogs
        </p>
        <div className="mt-2 flex w-4/5 flex-col items-center gap-1 lg:gap-2">
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-xs outline-none focus:outline-none lg:text-base"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full rounded-sm bg-gray-100 p-4 text-xs outline-none focus:outline-none lg:text-base"
            type="password"
            placeholder="Password"
          />
          <button className="mt-4 w-fit rounded-sm bg-black px-4 py-2 uppercase text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
