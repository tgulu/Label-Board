import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 md:w-2 h-3 md:5 ${color} rounded-full`} />
      <p className=" text-xs md:text-[14px] text-gray-500">{label}</p>
      <span className=" ml-2 text-sm md:text-[15px] text-black font-medium">
        {value}
      </span>
    </div>
  );
};

export default InfoCard;
