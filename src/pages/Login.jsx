import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.username || !formData.password) {
      toast.error("Please fill in all fields before logging in.", {
        icon: "⚠️",
      });
      return;
    }

    // Trigger the success toast
    toast.success(
      <div className="flex flex-col items-center">
        <p className="font-semibold text-center">
          You are added to the waiting list!
        </p>
        <p className="text-sm text-gray-600 text-center">
          We will notify you soon.
        </p>
        <button
          onClick={() => toast.dismiss()}
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          OK
        </button>
      </div>,
      {
        icon: "✅",
        hideProgressBar: true,
        closeOnClick: false,
        draggable: false,
        autoClose: false,
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username or email"
              className="w-full px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-3xl font-medium"
          >
            log in
          </button>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Keep me logged in</span>
            </label>
            <a href="#" className="text-sm font-semibold text-blue-600">
              Forgot your password?
            </a>
          </div>
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign up
            </Link>
          </p>
        </form>

        {/* Toast Container */}
        <ToastContainer
          position="top-center"
          hideProgressBar
          closeOnClick={false}
          pauseOnHover={false}
          draggable={false}
        />
      </div>
    </div>
  );
}
