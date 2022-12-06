import React from "react";
import Footer from "./Footer";
import YouTube from "react-youtube";
import ScrollToTop from "./scroll";
import { IoRadioButtonOnOutline } from "react-icons/io5";

const Android = (props) => {
  const opts = {
    height: "600",
    width: "1000",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <ScrollToTop />

      <div className="flex flex-col items-center pt-5">
        <YouTube videoId="0CYHASlhCbk" opts={opts} />
      </div>
      <div className="text-md font-bold w-[75vw] text-center m-auto   my-4">
        An average real estate company does about 10-12 meetings and hundreds of
        calls to its customers to sell a single apartment . this is time
        consuming and expensive , and yet the clients wont be having a full
        picture of hoew the apartment is going to be like
      </div>
      <section className="items-start flex flex-col w-[75vw] m-auto">
        <div className="font-bold text-xl pb-3">Presenting property sales engine by Voxel </div>
        <div className="flex items-center text-start"> <span><IoRadioButtonOnOutline /></span> <span className="px-5">
          Its an customized mobile app which lets your client navigate the whole
          interior sapce and all other amenities near it{" "}</span>
        </div>
        <div className="flex items-center text-start">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Lets your customer experance the place like never before</span></div>
        <div className="flex items-center"> <span><IoRadioButtonOnOutline /></span> <span className="px-5"> Lets you collect data about your customer </span></div>
        <div className="flex items-center text-start">
          {" "} <span><IoRadioButtonOnOutline /></span> <span className="px-5">
          Let you give complete information about the project to your customers{" "}</span>
        </div>
      </section>
      <div className="flex item-start text-start pt-8 flex-col w-[75vw] m-auto">
        <div>
          {" "}
          <div className="font-bold text-xl pb-3 "> Adventages</div>
          <ul className="flex justify-start text-start w-[75vw] m-auto flex-col pb-10">
            <li className=" flex items-center">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Reduces sales times from 1-2 months to 1-2 weeks</span> </li>
            <li className=" flex items-center">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Your sales person can handel more clients</span> </li>
            <li className=" flex items-center">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Improved customer satisfaction </span></li>
            <li className=" flex items-center">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Lesser customer dropout during sales process </span></li>
            <li className=" flex items-center">  <span><IoRadioButtonOnOutline /></span> <span className="px-5">Your comapny perception value increases </span></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Android;
