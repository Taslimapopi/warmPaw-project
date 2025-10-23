import React, { use } from "react";
import logo from "../../assets/image.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/Authprovider";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              <NavLink>Home</NavLink>
            </li>
            <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              <NavLink>Services</NavLink>
            </li>
            <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
              <NavLink>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <a className="flex items-center gap-2 btn btn-ghost normal-case text-xl">
          <img
            src={logo}
            alt="WarmPaws Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            WarmPaws
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            <NavLink to="/category/0">Services</NavLink>
          </li>
          <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            <NavLink to="/auth/myprofile">My Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <div className="relative group">
          <img
            className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
            src={user ? user.photoURL : userIcon}
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
