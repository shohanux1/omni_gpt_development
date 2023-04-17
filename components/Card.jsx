import React from "react";
import { motion, useScroll } from "framer-motion";

const Card = ({ title, desc, sm, icon: Icon }) => {
  return (
    <motion.div
      className={`text-black px-5 py-8 rounded-md md:flex md:items-center md:gap-6 ${
        sm ? "bg-gray" : "bg-white"
      }`}
    >
      <div>
        <h1 className={`text-[20px] font-medium ${sm && "text-white"}`}>
          {title}
        </h1>
        {desc && <p className="text-[18px] mt-4">{desc}</p>}
      </div>

      {Icon && (
        <div className="hidden bg-primary-light p-4 text-white rounded-md text-7xl md:block lg:block">
          {Icon}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
