import React, { useContext, useState } from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { checkUser } from "../../../utils/User.util";
import { ErrorMessageToast, SuccesfulMessageToast } from "../../../utils/Toastify.util";
import { UserContext } from "../../../Context/User.context";

const LoginPage = () => {
  const navigate = useNavigate();
  const { _setUser } = useContext(UserContext);

     const [form, setForm] = useState({
       email: "",
       password: "",
     });

    const [errors, setErrors] = useState({});

   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   const handleChange = (e) => {
     let errorMsg = "";

     const { name, value } = e.target;
     setForm({ ...form, [name]: value });
     if (name === "email" && !validateEmail(value))
       errorMsg = "Enter a valid email.";

      setForm({ ...form, [name]: value });
     setErrors({ ...errors, [name]: errorMsg });
   };
   

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

     if ((form.email === "admin@gmail.com") & (form.password === "admin")) {
       navigate("/admin");
     }
     else{

      checkUser(form.email, form.password).then((data) => {
        if (data == null) {
          ErrorMessageToast("Invalid email and password!");
        }
        if (data.role === "restaurant" & data.status === "approved") {
          localStorage.setItem("restaurant_Login", JSON.stringify(data));
          navigate("/restaurant");
          SuccesfulMessageToast("Login Successfully");
        } else {
          _setUser(data);
          SuccesfulMessageToast("Login Successfully");
          localStorage.setItem("is_Login", 1);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        }
      });
     }
    
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">LOGIN</h1>
          </div>

          <form className="space-y-6">
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
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 text-black bg-white  rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id=""
                type="checkbox"
                className="focus:bg-white focus:text-white"
                style={{ backgroundColor: "#fff" }}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Remember me?
              </label>
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="w-full bg-[#ffb700] hover:bg-[#ffa600] text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffb700]"
            >
              LOGIN
            </button>

            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-[#ffb700]"
              >
                Forgot Password?
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="p-2 rounded-full bg-blue-50 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <Mail className="h-4 w-4 text-red-500" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full bg-blue-50 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full bg-blue-50 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Linkedin className="h-4 w-4 text-blue-500" />
              </button>
            </div>

            <div className="text-center text-sm text-gray-900">
              Need an account?{" "}
              <NavLink
                to={"/register"}
                className="font-semibold text-[#ffb700] hover:text-[#ffa600]"
              >
                SIGN UP
              </NavLink>
              {/* <a
                href=""
                className="font-semibold text-[#ffb700] hover:text-[#ffa600]"
              ></a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
