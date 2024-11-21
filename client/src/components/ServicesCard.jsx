import React from "react";

const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="border-t-[1px] border-t-zinc-500 py-10 mx-4 md:mx-10 lg:mx-20 w-[90%] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 lg:gap-40">
      <h1 className="text-2xl md:text-2xl text-zinc-500">{number}</h1>
      <h1 className="text-2xl md:text-3xl w-full md:w-[30%] text-white">{title}</h1>
      <p className="w-full text-zinc-500 tracking-wider text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
