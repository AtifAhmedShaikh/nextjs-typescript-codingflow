"use client"
import { loginSchema } from "@/schema/userSchema";
import { LoginFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });
  const handleFormAction: SubmitHandler<LoginFormData> = (data: LoginFormData) => {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-3 m-auto p-auto justify-center w-100 h-screen items-center bg-gray-100">
      <div className="w-1/3 flex flex-col gap-3 px-3">
        <form className="w-100" onSubmit={handleSubmit(handleFormAction)}>

          <h2 className="text-4xl text-center mb-10">Login Your Account </h2>
          <div className="mb-3">
            <input
              type="text"
              className="border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1"
              {...register("username")}
              placeholder="Email or Username"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1"
              {...register("password")}
              placeholder="password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-800 rounded-md border w-fit px-3 py-1 text-gray-100 text-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
