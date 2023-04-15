import React from "react";

const Button = ({ title, type, size, disabled }) => {
  return (
    <button
      className={`
  bg-primary
  w-full
  p-4
  text-[20px]
  lg:text-base
  lg:py-4
  lg:w-fit
  rounded-md
  transition
  hover:bg-[#17925d]
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
