import React, { use } from "react";
import logo from "../../assets/image.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/Authprovider";
import userIcon from "../../assets/user.png";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Sign-out successful')
        
      })
      .catch((error) => {
        toast.error('error happens')
      });
  };
   return (
    <div className="navbar bg-base-200 bg-[#B0C4DE]/90 shadow shadow-sm px-4">
      {/* Left: Logo + Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/myprofile" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-xl">
          <img src={logo} alt="WarmPaws Logo" className="w-10 h-10 rounded-full hidden md:block " />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 ">
            WarmPaws
          </span>
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/myprofile" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right: Avatar + Auth Buttons */}
      <div className="navbar-end space-x-3">
        <div className="relative group hidden md:block">
          <img
            className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
            src={user?.photoURL || userIcon}
            alt="User Avatar"
          />
          {user && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md transition-all duration-300 whitespace-nowrap shadow-md z-10">
              {user.email}
            </span>
          )}
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="btn font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );

};

export default NavBar;
