import React from "react";
import "./Component.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { BsDisplayFill } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
const Home = (props) => {
  return (
    <div>
      <section
        id="video-section"
        className="flex flex-col items-center bg-neutral-700 w-full h-[85vh] justify-center text-white"
      >
        <p className="md:w-[45vw] w-[80vw] md:text-3xl text-xl font1 flex flex-col py-2">
          <span>LET'S BRING PROPERTY SALES </span>
          <span>TO THE NEXT LEVEL</span>
        </p>
        <p className="md:w-[45vw] w-[80vw] md:text-md text-sm font1">
          Interactive 3D Sales and Marketing Soln for property development of
          future
        </p>
        <button className="px-8 bg-[#53bcb3] py-2 rounded-md mt-4 flex text-white items-center">
          <span className="pr-2 scale-125">
            <BsFillPlayFill />
          </span>
          Watch Video
        </button>
      </section>
      <section id="our-solution-section" className="w-[80vw] mx-auto mt-10 pt-2">
        <div className="text-2xl my-5 font-semibold">OUR SOLUTION</div>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <section className=" md:w-[50%] items-center">
            <img
              className="md:w-[25vw] w-[50vw] md:h-[25vw] h-[50vw] object-cover bg-slate-300 my-5"
              alt=""
            />
          </section>
          <section className="flex flex-col md:w-[50%] md:items-start items-center">
            <span className="text-3xl py-2">Property Sales Engine</span>
            <span className="text-xl text-start py-2">
              An all-in-one sales and marketing solution combining an
              interactive 3D presentation and search engine to market new build
              properties at the pre-completion stage.
            </span>
            <button className="px-8 bg-[#53bcb3] py-2 rounded-md mt-4 text-white items-center flex justify-center">
              <p>Learn More</p>
              <div className="pt-1 pl-2">
                <AiOutlineRight />
              </div>
            </button>
          </section>
        </div>
      </section>
      <section
        id="whats-in-for-you"
        className="w-full bg-slate-50 py-12 mt-[75px]"
      >
        <div className="flex flex-col w-[75vw] m-auto justify-center items-center">
          <p className="text-2xl font-semibold my-3">WHATS IN IT FOR YOU?</p>
          <div className="flex flex-col md:flex-row">
            <p className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <MdCastForEducation />
              </div>
              <span className="font-semibold text-2xl">
                Educate and engage customers
              </span>
              <span className="text-xl ">
                Instill confidence into your customers.
              </span>
            </p>
            <p className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <BsDisplayFill />
              </div>
              <span className="font-semibold text-2xl">
                Ensure a seamless experience
              </span>
              <span className="text-xl ">
                Create consistency across all platforms.
              </span>
            </p>
            <p className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <BiTimer />
              </div>
              <span className="font-semibold text-2xl">
                Accelerate your sales cycle
              </span>
              <span className="text-xl ">
                Reduce the amount of time spent per client.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section
        id="get-in-touch"
        className="w-full bg-slate-900 text-white py-[80px] relative"
      >
        <div className="flex w-[75vw] m-auto items-center justify-center flex-col md:flex-row ">
          <div className="md:w-[40vw] md:mr-10 flex justify-start flex-col md:items-start items-center md:text-start">
            <p className="text-3xl font-semibold py-5">GET IN TOUCH</p>
            <p className="text-xl">
              We are here to help you to showcase your project and to wow your
              customers.
            </p>
          </div>
          <button className="md:ml-10 px-6 py-2 my-4 rounded-md bg-[#53bcb3] ">
            CONTACT US
          </button>
        </div>
      </section>
      <footer className="w-[80vw] m-auto flex items-start justify-evenly py-10">
        <div className="">Logo</div>
        <div className="flex flex-col items-start"><span className="font-semibold text-xl">Find Us</span><span>Shakti StatesMen </span><span> Bellandur </span><span>Bangalore ,560103</span></div>
        <div className="flex flex-col items-start"><span className="font-semibold text-xl">Contact Us</span><span>sanketh.sura.2@gmail.com</span><span>+91 9686274029</span></div>
        <div className=""><span>Follow Us</span><span></span></div>
      </footer>
    </div>
  );
};

export default Home;
