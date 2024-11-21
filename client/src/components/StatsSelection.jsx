import React from "react";

const StatsSection = () => {
  return (
    <div className="relative text-black py-20 flex justify-center items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center md:items-end gap-6 md:gap-12 px-6">
        {/* Stats Cards with Frosted Glass Effect */}
        <div className="w-full md:w-auto h-[30vh] md:h-[50vh] p-4 md:p-6 flex items-start flex-col justify-end bg-red-900 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 border-2 border-orange-500">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2">5+</h2>
          <p className="text-sm md:text-lg lg:text-xl">Years of professional experience.</p>
        </div>

        <div className="w-full md:w-auto h-[25vh] md:h-[30vh] p-4 md:p-6 flex items-start flex-col justify-end bg-red-900 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 border-2 border-orange-500">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2">150%</h2>
          <p className="text-sm md:text-lg lg:text-xl">Average Increase in Engagement.</p>
        </div>

        <div className="w-full md:w-auto h-[30vh] md:h-[40vh] p-4 md:p-6 flex items-start flex-col justify-end bg-red-900 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 border-2 border-orange-500">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2">500K</h2>
          <p className="text-sm md:text-lg lg:text-xl">Followers Gained for Our Clients.</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
