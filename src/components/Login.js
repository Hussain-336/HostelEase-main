import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-[#f7fafc] w-auto">
        <form className="max-w-2xl mx-auto p-4 bg-[#85a4c0] border-4 border-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold leading-7 text-white text-center pt-6">
            Login Form
          </h1>
          <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg">
            <legend className="text-2xl font-semibold text-white mb-4">
              Login
            </legend>

            {/* Email */}
            <div className="flex flex-col items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="block w-96 p-6 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 px-4 py-3 text-sm outline-none border-b-2"
                required
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Enter Password"
                className="block w-96 p-6 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 outline-none border-b-2 px-4 py-3 text-sm border-transparent"
                required
              />

              <div className="flex justify-between w-96 pt-3">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4" />
                  <label className="text-sm ml-2 text-white">Remember me</label>
                </div>
                {/* Forgot Password Link */}
                <a href="#" className="text-sm text-white hover:text-blue-300">
                  Forgot password?
                </a>
              </div>
            </div>
          </fieldset>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Continue with Google */}
          <div className="text-center mt-4">
            <p className="text-white">Or continue with</p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full bg-[#f7fafc] text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.24 0 9.45-3.97 9.95-9h-4.7v2.72H12v-2.72h-4v2.72H6v-4h6V8.28h6.6c-.8-2.5-3.1-4.28-6.6-4.28z"
                  clipRule="evenodd"
                />
              </svg>
              Continue with Google
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
