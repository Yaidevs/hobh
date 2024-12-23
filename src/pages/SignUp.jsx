import React from "react";
import logo from "../assets/logo2.jpg";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg w-full max-w-md text-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-6 w-36 h-20 rounded-2xl"
          />
        </Link>
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">Get more Answers for FREE</h1>
        <p className="text-gray-600 text-sm mb-6">
          Scan questions with the app, get community help, find expert textbook
          explanations, and see instant step-by-step math solutions.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <Link to="/login" className="mb-2">
            <button className="mb-5 flex items-center justify-center w-full py-3 rounded-3xl border border-gray-300 bg-gray-100 hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Sign up with Google</span>
            </button>
          </Link>
          <Link>
            <button className="mb-5 flex items-center justify-center w-full py-3 rounded-3xl bg-gray-700 text-white hover:bg-gray-900">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Sign up with Apple</span>
            </button>
          </Link>

          <Link>
            <button className="flex items-center justify-center w-full py-3 rounded-3xl bg-primary text-white hover:bg-blue-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Sign up with Facebook</span>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?
          <Link to="/login" href="#" className="text-primary font-semibold">
            Log in
          </Link>
        </p>
        <p className="mt-8 text-xs text-gray-500">
          By creating an account, you accept the
          <a href="#" className="text-primary hover:underline">
            Brainly Terms of Service
          </a>
          &
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
