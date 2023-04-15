"use client";

import React from "react";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

import MenuLink from "./MenuLink";

const Menu = ({ handleOpen, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
      overflow-y-auto
      z-10
    absolute
    left-0
    top-0
    h-full
    bg-dark-blue
    w-full
    lg:hidden
    "
        >
          <div
            className="
      relative
      flex
      flex-col
      items-center
      justify-center
      gap-10
      h-full
      "
          >
            <HiXMark
              className="absolute top-5 right-5 transition hover:text-primary cursor-pointer"
              size={40}
              onClick={handleOpen}
            />

            <MenuLink title="Home" href="/home" />
            <MenuLink title="Contact" href="/contact" />
            <MenuLink title="Sign In" href="/signin" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
