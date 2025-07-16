import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-md w-full space-y-8 p-6 sm:p-8 bg-white rounded-xl">
        {/* Logo + Brand */}
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://res.cloudinary.com/ds77uascw/image/upload/v1752403081/bluestock-logo_faxciu.jpg"
            alt="Bluestock Logo"
            className="h-10 w-10"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            BLUESTOCK
          </h2>
        </div>

        <h3 className="text-center text-lg sm:text-xl font-semibold text-black">Create an account</h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              required
              placeholder="hello@bluestock.in"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>

          {/* Terms */}
          <p className="text-sm text-gray-500">
            By continuing, you agree to our <a href="/terms" className="text-indigo-600 hover:underline">terms of service</a>.
          </p>

          {/* reCAPTCHA (placeholder) */}
          <div className="border border-gray-500 rounded-3xl px-5 py-5 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-[#34A853]" />
              I’m not a robot
            </label>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="h-6"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 text-sm font-semibold rounded-sm text-white"
              style={{ backgroundColor: "#685CFF" }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#5749d6")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#685CFF")}
            >
              Signup
            </button>
          </div>

          {/* OR Divider with gray box text */}
          <div className="flex items-center gap-2">
            <div className="flex-grow border-t border-gray-300"></div>

            <div className="bg-gray-100 px-3 py-1">
              <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
                or sign up with
              </span>
            </div>

            <div className="flex-grow border-t border-gray-300"></div>
          </div>


          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center rounded-md py-4 px-4 font-medium hover:bg-gray-100 text-sm"
            style={{ backgroundColor: "#E4E7EB" }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Already have account */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 ">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
