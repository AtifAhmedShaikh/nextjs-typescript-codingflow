import React from "react";

const LoginUser = () => {
  return (
    <div className="flex flex-col gap-3 m-auto p-auto justify-center w-100 h-screen items-center bg-gray-100">
      <div className="w-1/3 flex flex-col gap-3 px-3">
        <h2 className="text-4xl text-center mb-10">Login Your Account </h2>
        <input
          type="text"
          className="border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1 mb-3"
          placeholder="Email or Username"
        />
        <input
          type="text"
          className="border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1 mb-3"
          placeholder="password"
        />
        <button className="bg-blue-600 hover:bg-blue-800 rounded-md border w-fit px-3 py-1 text-gray-100 text-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
