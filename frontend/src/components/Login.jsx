import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    keepSignedIn: false,
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
    // Signup api calls
    console.log(formData);
  };

  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-md w-full space-y-8 p-6 sm:p-8 bg-white rounded-xl">
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://res.cloudinary.com/ds77uascw/image/upload/v1752403081/bluestock-logo_faxciu.jpg"
            alt="Bluestock Logo"
            className="h-15 w-15"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            BLUESTOCK
          </h2>
        </div>


        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm pr-10"
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



          </div>

          <div className="flex items-center">
            <input
              name="keepSignedIn"
              type="checkbox"
              checked={formData.keepSignedIn}
              onChange={handleChange}
              className="h-4 w-4 focus:ring-[#685CFF] border-gray-300 rounded accent-[#685CFF]"
            />
            <label htmlFor="keepSignedIn" className="ml-2 block text-sm text-black">
              Keep me signed in
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 text-sm font-semibold rounded-sm text-white"
              style={{ backgroundColor: "#685CFF" }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#5749d6")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#685CFF")}
            >
              Login
            </button>
          </div>



          {/* OR Divider with gray box text */}
          <div className="flex items-center gap-2">
            <div className="flex-grow border-t border-gray-300"></div>

            <div className="bg-gray-100 px-3 py-1">
              <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
                or sign in with
              </span>
            </div>

            <div className="flex-grow border-t border-gray-300"></div>
          </div>


          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center  text-gray-700 rounded-md py-4 px-4 font-medium hover:bg-gray-100 text-sm" style={{ backgroundColor: "#E4E7EB" }}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>

          <p className="mt-4 text-center text-sm">
            <a href="/signup" className="font-bold text-indigo-600 hover:text-indigo-500">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
