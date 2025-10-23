import React from "react";
import { Link, useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const emailFromLogin = location.state?.email 
  console.log(emailFromLogin)

//   const handleReset = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     console.log("Reset link sent to:", email);
//   };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <form onSubmit={''}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={emailFromLogin} 
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />
          <label className="label">Reset Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Reset Password"
                required
              />

          <Link to='https://mail.google.com/mail/u/0/#inbox'
            type="submit"
            className="btn w-full mt-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-none"
          >
            Send Reset Link
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
