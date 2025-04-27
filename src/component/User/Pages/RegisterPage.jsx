import React, {  useEffect, useState } from 'react'
import { Facebook, Linkedin, Mail } from "lucide-react";
import { NavLink, useNavigate } from 'react-router';
import { createUser } from '../../../utils/User.util';
import { ErrorMessageToast, SuccesfulMessageToast } from '../../../utils/Toastify.util';
import { RegisterUser } from '../../../utils/UserPy.util';

const RegisterPage = () => {
  const navigate = useNavigate();
  
const [form, setForm] = useState({
  name: "",
  email: "",
  role: "user",
  password: "",
  confirmPassword: "",
});

const [errors, setErrors] = useState({});

// Validation functions
const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) =>
  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password);
const validateConfirmPassword = (confirmPassword) =>
  confirmPassword === form.password;

// Handle input change
const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });

  let errorMsg = "";
  if (name === "name" && !validateName(value))
    errorMsg = "Only letters and spaces allowed.";
  if (name === "email" && !validateEmail(value))
    errorMsg = "Enter a valid email.";
  if (name === "password" && !validatePassword(value))
    errorMsg = "Min 6 chars, 1 uppercase, 1 symbol required.";
  if (name === "confirmPassword" && !validateConfirmPassword(value))
    errorMsg = "Passwords do not match.";

  setErrors({ ...errors, [name]: errorMsg });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Check if any field is empty
  if (!form.name || !form.email || !form.password) {
    ErrorMessageToast("Please fill all fields");
    return;
  }
   const { confirmPassword, ...userData } = form;

  RegisterUser(userData)
    .then(function (response) {
      SuccesfulMessageToast("Register Successfully");
      navigate("/login");
    })
    .catch(function (error) {
      console.log(error);
      ErrorMessageToast("Registration failed");
    });

};


useEffect(()=>{
   let role = localStorage.getItem("role");

   if (role === "user") {
     navigate("/");
   } else if (role === "restauarnt") {
     navigate("/retaurant");
   } else if (role === "admin") {
     navigate("/admin");
   } else {
     navigate("/register");
   }
},[]);

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full mb-10 mt-5 bg-white rounded-xl shadow-xl p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">CREATE ACCOUNT</h1>
      </div>

      <form className="space-y-6" >
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className={`w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]`}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className={`w-full px-3 py-2 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]`}
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#ffb700] hover:bg-[#ffa600] text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffb700]"
        >
          SIGN UP
        </button>

        {/* OR Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="p-2 rounded-full bg-blue-50 hover:bg-red-50">
            <Mail className="h-4 w-4 text-red-500" />
          </button>
          <button className="p-2 rounded-full bg-blue-50 hover:bg-red-50">
            <Facebook className="h-4 w-4 text-blue-600" />
          </button>
          <button className="p-2 rounded-full bg-blue-50 hover:bg-red-50">
            <Linkedin className="h-4 w-4 text-blue-500" />
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-900">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-semibold text-[#ffb700] hover:text-[#ffa600]"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  </div>
);
}

export default RegisterPage