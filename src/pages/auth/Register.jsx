import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="min-h-screen flex flex-col justify-center">

            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Create your Channel</h1>
                <p className="text-gray-500 mt-2">
                    Join the creator community and start uploading videos
                </p>
            </div>

            {/* Register section */}
            <div className="flex gap-10 px-10 py-5 items-center justify-center">

                {/* Form */}
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Username
                            </label>
                            <input
                                {...register("userName", { required: "User name is required" })}
                                placeholder="Enter username"
                                className="border p-2 rounded w-full"
                            />
                            {errors.userName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.userName.message}
                                </p>
                            )}
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                {...register("fullName", { required: "Full name is required" })}
                                placeholder="Enter full name"
                                className="border p-2 rounded w-full"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter email"
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
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
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

                        {/* Avatar */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Avatar
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("avatar", { required: "Avatar is required" })}
                                className="border border-dashed p-2 rounded w-full cursor-pointer"
                            />
                            {errors.avatar && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.avatar.message}
                                </p>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Cover Image (optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("coverImage")}
                                className="border border-dashed p-2 rounded w-full cursor-pointer"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded mt-2"
                        >
                            Register
                        </button>
                        <Link to={"/login"}>
                            <p className="text-sm text-gray-500 mt-4">
                                Already have an account?{" "}
                                <span className="text-purple-600 cursor-pointer hover:underline">
                                    Login
                                </span>
                            </p>
                        </Link>
                    </form>
                </div>

                {/* Image Section */}
                <div className="hidden md:flex md:w-1/2 h-screen ">
                    <img
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
                        alt="creator illustration"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>
        </div>
    );
};

export default Register;
