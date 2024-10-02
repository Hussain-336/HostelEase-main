import React, { useState } from 'react';  // Import useState

function Signup() {
    const [formData, setFormData] = useState({
      fullName: '',    // Corrected key name
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return(
        <>
        <div className="bg-[#f7fafc] relative flex h-auto mb-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 p-6 bg-[#85a4c0]  rounded-lg shadow-lg">
                          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-white mb-8">Register Now</h2>
          <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg">
              <legend className="text-2xl font-semibold text-white mb-4">Signup</legend>

              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block  font-medium text-white">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                  className="block w-96 p-3 mt-1 bg-[#f7fafc]  text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              {/* Father Name */}
              <div className="mb-4">
                <label htmlFor="fatherName" className="block text-lg font-medium text-white">Father Name</label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  placeholder="Enter Father Name"
                  required
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label htmlFor="gender" className="block text-lg font-medium text-white">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  required
                >
                  <option value="" className="text-gray-400">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  placeholder="Enter Email"
                  required
                />
              </div>

              {/* Phone Number */}
              

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  placeholder="Enter Password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-lg font-medium text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  placeholder="Confirm Password"
                  required
                />
              </div>
          </fieldset>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
        </div>
        </>
    );
}

export default Signup;
