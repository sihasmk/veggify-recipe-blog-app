import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-16 flex items-center justify-between px-6 lg:px-10">
      <a href="/">
        <img src={logo} alt="Veggify Logo" />
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menuItem) => (
          <li key={menuItem.name} className="capitalize font-medium">
            <Link to={menuItem.to}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>

      {/* Login and Sign-up button */}
      <ul className="flex gap-7">
        <li>
          <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition-all ease-in">
            Login
          </button>
        </li>
        <li>
          <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition-all ease-in">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
