import React, { useState } from 'react';

const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your password reset API
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-md w-full space-y-6 p-6 sm:p-8 bg-white rounded-xl">
        {/* Logo */}
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

        {/* Title & Subtitle */}
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-black">
          Forgot Password?
        </h3>
        <p className="text-center text-gray-600 text-sm">
          Enter your email address to get the password reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="hello@bluestock.in"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 text-sm font-semibold rounded-sm text-white"
              style={{ backgroundColor: "#685CFF" }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#5749d6")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#685CFF")}
            >
              Password Reset
            </button>
          </div>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-2">
          <a href="/login" className="font-medium hover:underline">
            Back to login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
