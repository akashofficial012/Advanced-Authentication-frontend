"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup.string().email("invalid email format").required("Email is required"),
password: yup.string().min(6, "Password must be at least 6 characters") .required("password is required"),
});

export default function Login() {
  const {register,handleSubmit,formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
        </div>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              {...register("email")}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800">Password</label>
             
            </div>
            <div className="relative">
              
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <a href="#" className="text-xs text-right text-gray-600 hover:underline">Forgot Password?</a>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b"></span>
          <span className="text-xs text-gray-500 uppercase">or login with Social Media</span>
          <span className="w-1/5 border-b"></span>
        </div>

        <div className="flex items-center mt-6 space-x-2">
          <button className="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400">
            <span>Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don t have an account? <Link href="/register" className="font-medium text-gray-700 hover:underline">Create One</Link>
        </p>
      </div>
    </div>
  );
}
