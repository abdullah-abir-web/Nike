import React from "react";
const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-4">
      <img src="/public/brand_logo.png" alt="logo" />
      <ul className="flex gap-4 text-lg uppercase text-[#2E2E2E] font-primary font-medium ">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className="py-3 px-5 text-white bg-[#D01C28] text-lg font-primary font-medium">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
