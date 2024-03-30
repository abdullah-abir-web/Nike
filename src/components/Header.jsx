import React from "react";
const Header = () => {
  return (
    <header className="container flex">
      <div>
        <h1 className="text-8xl font-primary font-semibold text-black ">
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
        </h1>
        <p className="font-primary text-xl text-[grey] font-semibold mt-4">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU
          WITH OUR SHOES.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-[#D01C28] py-3 px-4 text-white text-lg font-semibold font-primary ">
            Shop Now
          </button>
          <button className="py-3 px-4 font-primary text-[grey] font-semibold border border-[grey]">
            Category
          </button>
        </div>
        <p className="font-primary font-normal text-[grey] pt-3">
          Also Available On
        </p>
        <div className="flex gap-4 pt-2">
          <img src="/public/amazon.png" alt="amazon-logo" />
          <img src="/public/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
      <img src="/public/shoe_image.png" alt="hero-image" />
    </header>
  );
};

export default Header;
