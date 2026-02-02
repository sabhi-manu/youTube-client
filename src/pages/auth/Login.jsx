import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex">

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-gray-500 mt-2">
            Login to manage your channel and videos
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">

          {/* Username or Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Username or Email
            </label>
            <input
              {...register("identifier", {
                required: "Username or Email is required",
              })}
              placeholder="Enter username or email"
              className="border p-2 rounded w-full"
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Enter password"
              className="border p-2 rounded w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded mt-2"
          >
            Login
          </button>

          {/* Footer */}
          <Link to={"/register"} >
          <p className="text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span className="text-purple-600 cursor-pointer hover:underline">
              Register
            </span>
          </p>
          </Link>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
          alt="login illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
