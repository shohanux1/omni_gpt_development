"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

import { HiBars3 } from "react-icons/hi2";

import Menu from "./Menu";
import MenuLink from "./MenuLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className="
    flex
    items-center
    justify-between
    py-6
    "
    >
      <Image width="100%" src={Logo} alt="Logo" />

      <div className="hidden space-x-16 text-[18px] lg:block">
        <MenuLink title="Home" href="/home" />
        <MenuLink title="Contact" href="/contact" />
        <MenuLink title="Sign In" href="/signin" />
      </div>

      <Menu handleOpen={handleOpen} isOpen={isOpen} />

      <HiBars3
        onClick={handleOpen}
        className="cursor-pointer lg:hidden"
        size={40}
      />
    </nav>
  );
};

export default Navbar;
