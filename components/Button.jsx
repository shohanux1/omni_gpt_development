"use client";

import React from "react";

const Button = ({ title, type, size, disabled }) => {
  return (
    <button
      className={`
  w-full
  py-3
  px-5
  text-[20px]
  lg:text-base
  lg:py-4
  lg:w-fit
  md:w-fit
  rounded-md
  transition
  ${type === "primary" && "bg-primary"}
  ${type === "primary" && "hover:bg-primary-light"}
  ${type === "secondary" && "bg-black"}
  ${type === "secondary" && "hover:bg-[#111]"}
  ${type === "secondary" && "font-medium"}
  `}
    >
      {title}
    </button>
  );
};

export default Button;
