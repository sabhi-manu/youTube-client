import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginApi } from "../../api/auth.api";
import { loginUser, setAuthError } from "../../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      let response = await loginApi(data);
      console.log("response of login user ===>", response?.data.data);
      dispatch(loginUser(response.data.data));
      navigate("/");
      toast.success("Registration successful 🎉");
    } catch (error) {
      console.log("error in register ===>", error);
      toast.error("Registration failed ❌");
      dispatch(setAuthError("Invalid credentials"));
    } finally {
      setLoading(false);
    }
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-md"
        >
          {/* Username or Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              {...register("userName", {
                required: "Username  is required",
              })}
              placeholder="Enter username "
              className="border p-2 rounded w-full"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: " Email is required",
              })}
              placeholder="Enter  email"
              className="border p-2 rounded w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
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
            disabled={loading}
            className={`py-2 rounded mt-2 text-white transition
                                ${
                                  loading
                                    ? "bg-purple-400 cursor-not-allowed"
                                    : "bg-purple-600 hover:bg-purple-700"
                                }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Footer */}
          <Link to={"/register"}>
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
