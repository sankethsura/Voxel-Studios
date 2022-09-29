import React from "react";
import "./Component.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { BsDisplayFill } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Home = (props) => {
  const nav=useNavigate()
  return (
    <div className="">
      <section
        id="video-section"
        className="flex flex-col items-center w-full h-[85vh] justify-center text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-[85vh] object-cover -z-50 absolute"
          alt=""
        />
        <div className="w-full h-[85vh] absolute bg-black opacity-70 -z-40"></div>
        <p className="md:w-[45vw] max-w-[450px] w-[80vw] md:text-3xl text-xl font1 flex flex-col py-2">
          <span>LET'S BRING PROPERTY SALES </span>
          <span>TO THE NEXT LEVEL</span>
        </p>
        <p className="md:w-[50vw] max-w-[450px] w-[80vw] md:text-md text-lg py-5 font1">
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
      <section
        id="our-solution-section"
        className="w-[80vw] mx-auto mt-10 pt-2"
      >
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
            <section className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <MdCastForEducation />
              </div>
              <span className="font-semibold text-2xl">
                Educate and engage customers
              </span>
              <span className="text-xl ">
                Instill confidence into your customers.
              </span>
            </section>
            <section className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <BsDisplayFill />
              </div>
              <span className="font-semibold text-2xl">
                Ensure a seamless experience
              </span>
              <span className="text-xl ">
                Create consistency across all platforms.
              </span>
            </section>
            <section className="flex flex-col md:w-[25vw] p-10 items-center">
              <div className="scale-[250%] p-4 my-5 mb-12 rounded-[50%] text-white border-[1.5px] bg-[#53bcb3] bg-gradient-to-b from-[#a5e5e0] to-[#088b7e]">
                <BiTimer />
              </div>
              <span className="font-semibold text-2xl">
                Accelerate your sales cycle
              </span>
              <span className="text-xl ">
                Reduce the amount of time spent per client.
              </span>
            </section>
          </div>
        </div>
      </section>
      <section
        id="get-in-touch"
        className="w-full  text-white py-[70px] relative items-center flex bg-gradient-to-r from-[#53bcb3] to-[#055792]" 
      >
        <div className="flex w-[75vw] m-auto items-center justify-center flex-col md:flex-row ">
          <div className="md:w-[40vw] md:mr-10 flex justify-start flex-col md:items-start items-center md:text-start">
            <p className="text-3xl font-semibold py-5">GET IN TOUCH</p>
            <p className="text-xl">
              We are here to help you to showcase your project and to wow your
              customers.
            </p>
          </div>
          <button
          onClick={() => {
            nav("contactform");
            }}
            className="md:ml-10 px-6 py-2 my-4 rounded-md bg-[#53bcb3] ">
            CONTACT US
          </button>
        </div>
      </section>
        <Footer />
      
    </div>
  );
};

export default Home;
