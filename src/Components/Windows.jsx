import React from "react";
import Footer from "./Footer";
import YouTube from "react-youtube";
import ScrollToTop from "./scroll";
import { IoRadioButtonOnOutline } from "react-icons/io5";
const Windows = (props) => {
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
        <YouTube videoId="M9kwUcwPgXo" opts={opts} />
      </div>
      <div className="text-md py-5 text-center font-bold w-[75vw] m-auto my-4">
        {" "}
        An average INTERIOR DESIGN company spends 1-2 months and 10-15 meetings
        in designing and finalize an normal 2-3 BHK residential project. This is
        expensive, time consuming and has higher chance of customer dropout
        during this time{" "}
      </div>
      <section className="items-start flex flex-col w-[75vw] m-auto">
        <div className="font-bold text-xl pb-3">
          Presenting Design Engine by Voxel{" "}
        </div>
        <div className="flex items-center">
           <span><IoRadioButtonOnOutline /></span>{" "}
          <span className="px-5">
            Its an customized windows app which lets you navigate the
            wholeinterior sapce like a game
          </span>
        </div>
        <div className="flex items-center">
           <span><IoRadioButtonOnOutline /></span>{" "}
          <span className="px-5">
            Lets you customize design, finishes and furnishing in real time
            norendering required
          </span>
        </div>
        <div className="flex items-center">
          {" "}
           <span><IoRadioButtonOnOutline /></span>{" "}
          <span className="px-5">
            Lets your customer experance the place like never before
          </span>
        </div>
      </section>
      <div>
        <section className="flex item-start text-start pt-8 flex-col w-[75vw] m-auto">
          {" "}
          <div className="font-bold text-xl pb-3 "> Adventages</div>
          <ul className="flex justify-start text-start w-[75vw] m-auto flex-col pb-10">
            <li className=" flex items-center">
              <span>
                <IoRadioButtonOnOutline />
              </span>{" "}
              <span className="px-5">
                Reduces design times from 1-2 months to 1-2 weeks{" "}
              </span>
            </li>
            <li className=" flex items-center">
              <span>
                <IoRadioButtonOnOutline />
              </span>{" "}
              <span className="px-5">
                Your designer can handel more clients{" "}
              </span>
            </li>
            <li className=" flex items-center">
              <span>
                <IoRadioButtonOnOutline />
              </span>{" "}
              <span className="px-5">Improved customer satisfaction </span>
            </li>
            <li className=" flex items-center">
              <span>
                <IoRadioButtonOnOutline />
              </span>{" "}
              <span className="px-5">
                Lesser customer dropout during design process{" "}
              </span>
            </li>
            <li className=" flex items-center">
              <span>
                <IoRadioButtonOnOutline />
              </span>{" "}
              <span className="px-5">
                Your comapny perception value increases{" "}
              </span>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Windows;
