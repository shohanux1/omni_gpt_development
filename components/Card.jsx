import React from "react";

const Card = ({ title, desc, sm }) => {
  return (
    <div
      className={`text-black px-5 py-6 rounded-md ${
        sm ? "bg-gray" : "bg-white"
      }`}
    >
      <div>
        <h1 className={`text-[20px] font-medium ${sm && "text-white"}`}>
          {title}
        </h1>
        {desc && <p className="text-[18px] mt-4">{desc}</p>}
      </div>

      {/* {For Icon} */}
    </div>
  );
};

export default Card;
