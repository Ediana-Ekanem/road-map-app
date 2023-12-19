import React from "react";

function Hero() {
  return (
    <div>
      <div className="md:flex">
        <div className="flex-1">
          <img
            src="/public/images/hero-img.png"
            alt="Hero image"
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 bg-[#171D28] text-white flex justify-start items-center py-10 md:py-0">
          <div className="items-center ml-16">
            <div className="md:w-[500px] w-[200px]  md:text-[72px] text-[40px] leading-none">
              Bring the warmth.
            </div>

            <p className="w-[290px] leading-7 mt-5">
              Everyone needs a good winter jacket. Find yours with our
              collection and more.
            </p>
            <button class=" bg-blue-500 hover:bg-blue-700 text-black md:text-white font-medium py-2 px-8 rounded mt-5">
              Shopping Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// font-family: Poppins;
// font-size: 72px;
// font-style: normal;
// font-weight: 500;
// line-height: 76px; /* 105.556% */
// letter-spacing: -2px;

export default Hero;
