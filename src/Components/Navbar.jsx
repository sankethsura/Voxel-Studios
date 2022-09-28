import React from "react";

const Navbar = (props) => {
  return (
    <div className="w-[80vw] m-auto flex justify-between items-center py-4 text-white ">
      <section className="px-4 py-2">Logo</section>
      <section className="flex">
        <div className="px-8 py-2 hidden md:flex">Home</div>
        <div className="px-8 py-2 hidden md:flex">Case Study</div>
        <div className="px-8 py-2 hidden md:flex">About Us</div>
        <div className="px-8 bg-[#53bcb3] py-2 rounded-md text-white hidden md:flex">Get in Touch</div>
          </section>
    </div>
  );
};

export default Navbar;

