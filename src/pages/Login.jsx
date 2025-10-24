import React, { use, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/Authprovider";
import { useNavigate } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import toast from "react-hot-toast";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const { logIn, googleLogIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast("Please enter your email before proceeding!");
      return;
    }
    navigate("/auth/forgetpassword", {
      state: { email },
    });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h2 className="font-semibold text-3xl text-center mt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 ">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <div className="relative">
                <label className="label z-5 text-left">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleShowPassword}
                  className="btn btn-xs absolute right-5 top-6 z-10"
                >
                  {showPassword ? <IoEyeOffSharp /> : <FaRegEye />}
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover text-sm text-orange-600"
                >
                  Forgot password?
                </button>
              </div>
              {/* {error && <p className="text-red-400 text-sm">{error}</p>} */}

              <button
                type="submit"
                className="btn btn-accent text-white font-semibold mt-4"
              >
                Login with Email
              </button>
              <Link
                to="/"
                onClick={handleGoogleLogin}
                className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </Link>
              <p className="font-semibold text-center pt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/register">
                  Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
