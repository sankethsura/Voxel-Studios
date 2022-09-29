import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const Footer = (props) => {
  return (
    <div className="bg-[#020818f9]">
      <footer className="w-[80vw] m-auto flex items-start justify-evenly py-10  text-white">
        <div className="">Logo</div>
        <div className="flex-col items-start hidden md:flex">
          <span className="font-semibold text-xl">Find Us</span>
          <span>Shakti StatesMen </span>
          <span> Bellandur </span>
          <span>Bangalore ,560103</span>
        </div>
        <div className="flex-col items-start hidden md:flex">
          <span className="font-semibold text-xl">Contact Us</span>
          <span>sanketh.sura.2@gmail.com</span>
          <span>+91 9686274029</span>
        </div>
        <div className=" hidden md:flex flex-col items-start">
          <span className="font-semibold text-xl">Follow Us</span>
          <section className=" flex">
            <span className="scale-150 cursor-pointer m-2">
              <AiFillLinkedin />
            </span>
            <span className="scale-150 cursor-pointer mx-2 my-2">
              <AiFillFacebook />
            </span>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
