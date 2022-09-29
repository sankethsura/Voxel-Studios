// import React from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Component.css";

const Navbar = (props) => {
  const nav = useNavigate();


  return (
    <div className="w-[80vw] m-auto flex justify-between items-center py-4 text-white ">
      <section
        onClick={() => {
          nav("/");
        }}
        className="px-4 py-2 cursor-pointer"
      >
        Logo
      </section>
      <section className="flex">
        <div
          onClick={() => {
            nav("/");
          }}
          className="px-4 py-2 hidden md:flex cursor-pointer"
        >
          Home
        </div>
        <div
        onClick={() => {
          nav("casestudies");
          }}
          className="px-4 py-2 hidden md:flex cursor-pointer">
          Case Studies
        </div>

        <div
          onClick={() => {
            nav("aboutus");
          }}
          className="px-4 py-2 hidden md:flex cursor-pointer"
        >
          About Us
        </div>

        <div
          onClick={() => {
            nav("contactform");
          }}
          className="px-4 bg-[#53bcb3] py-2 rounded-md text-white hidden md:flex cursor-pointer">
          Get in Touch
        </div>
      </section>
    </div>
  );
};

export default Navbar;
