import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Heading */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      {/* Features Grid */}
    <div className="flex flex-wrap mt-10 lg:mt-20 px-10 lg:px-20">

        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12">
            <div className="flex items-start">
              {/* Icon */}
              <div className="flex-shrink-0 h-12 w-12 flex justify-center items-center bg-neutral-900 text-orange-700 rounded-full mr-4">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl font-semibold mb-2">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
