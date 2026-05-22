import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

   const onSubmit = async (user) => {
    try {
        const res = await axios.post("/api/auth/register", user);
        console.log(res.data);

        setTimeout(() => {
            alert("Account Created Successfully");
            navigate("/login");
        }, 100);

    } catch (error) {
        console.error("Signup failed:", error);
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex w-full max-w-5xl">

                {/* Left Side (Image) */}
                    <div className="w-1/2 relative">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/023/798/688/small/shiny-abstract-bubbles-decorated-green-background-with-space-for-your-message-vector.jpg"
                            alt="Food Waste Management System"
                            className="w-full h-full object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-8">

                            <h1 className="text-4xl font-bold text-white mb-4">
                                Food Waste Management System
                            </h1>

                            <p className="text-white text-sm md:text-base mb-6 leading-relaxed">
                                Join our platform to reduce food waste, connect donors with operators,
                                and make a positive impact on the environment. Every meal saved matters.
                            </p>

                            <div className="text-white text-left text-sm space-y-2">
                                <p>✔ Reduce Food Waste Efficiently</p>
                                <p>✔ Connect Donors & Organizations</p>
                                <p>✔ Track and Manage Food Distribution</p>
                                <p>✔ Build a Sustainable Future</p>
                            </div>
                        </div>
                    </div>

                {/* Right Side */}
                <div className="w-1/2 p-10">

                    {/* Top Right Login */}
                    <div className="flex justify-end text-sm mb-8">
                        <p className="mr-2">Already have account?</p>

                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Role */}
                        <p className="text-sm mb-1">Select Role</p>

                        <select
                            className={`border rounded w-full p-2 focus:outline-none ${errors.role ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("role", {
                                required: "Role is required",
                            })}
                        >
                            <option value="">Choose Role</option>
                            <option value="operator">Operator</option>
                            <option value="donor">Donor</option>
                        </select>

                        <div className="h-5 mt-1">
                            {errors.role && (
                                <p className="text-red-500 text-xs">
                                    {errors.role.message}
                                </p>
                            )}
                        </div>

                        {/* Name */}
                        <p className="text-sm mb-1">Full Name</p>
                        <input
                            type="text"
                            className={`border rounded w-full p-2 ${errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("name", { required: "Name is required" })}
                        />
                        <div className="h-5 mt-1">
                            {errors.name && (
                                <p className="text-red-500 text-xs">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <p className="text-sm mb-1">Email Address</p>
                        <input
                            type="email"
                            className={`border rounded w-full p-2 ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("email", { required: "Email is required" })}
                        />
                        <div className="h-5 mt-1">
                            {errors.email && (
                                <p className="text-red-500 text-xs">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Username */}
                        <p className="text-sm mb-1">Username</p>
                        <input
                            type="text"
                            className={`border rounded w-full p-2 ${errors.username
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                            {...register("username", {
                                required: "Username is required",
                            })}
                        />
                        <div className="h-5 mt-1">
                            {errors.username && (
                                <p className="text-red-500 text-xs">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <p className="text-sm mb-1">Password</p>
                        <input
                            type="password"
                            className={`border rounded w-full p-2 ${errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                        />
                        <div className="h-5 mt-1">
                            {errors.password && (
                                <p className="text-red-500 text-xs">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button className="bg-green-600 rounded text-white p-2 mt-4 w-full hover:bg-green-500">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;