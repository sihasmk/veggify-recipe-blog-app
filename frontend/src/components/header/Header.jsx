import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import logo from "/logo.svg";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = [
    { name: "Recipes", to: "/recipes" },
    { name: "Resources", to: "/resources" },
    { name: "About", to: "/about" },
    { name: "Contact Us", to: "/contact-us" },
  ];

  const onOpen = () => {
    setHideLeft("-left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={logo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
