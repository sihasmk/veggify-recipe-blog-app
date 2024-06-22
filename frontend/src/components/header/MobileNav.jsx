import React from "react";

// React Icons
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-10">
      <a href="/">
        <img src={logo} alt="Veggify Logo" />
      </a>
      <button className="border border-primary rounded" onClick={onOpen}>
        <MdMenu className="w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button className="absolute right-[104px] top-40" onClick={onClose}>
          <MdMenuOpen className="w-7 h-7" />
        </button>

        <div className="flex flex-col gap-12">
          <ul className="flex flex-col gap-5">
            {menuItems.map((menuItem) => (
              <li key={menuItem.name}>
                <Link
                  to={menuItem.to}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login and Sign-up button */}
          <ul className="flex gap-7">
            <li>
              <button className="text-secondary border-none bg-btnColour hover:bg-btnHover px-4 py-2 rounded font-semibold transition-all ease-in">
                Login
              </button>
            </li>
            <li>
              <button className="text-secondary border-none bg-btnColour hover:bg-btnHover px-4 py-2 rounded font-semibold transition-all ease-in">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
