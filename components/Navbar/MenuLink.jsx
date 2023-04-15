"use client";

import Link from "next/link";

const MenuLink = ({ title, href }) => {
  return (
    <Link
      className="
      text-2xl
      font-medium
      transition
      hover:text-primary
      "
      href={href}
    >
      {title}
    </Link>
  );
};

export default MenuLink;
