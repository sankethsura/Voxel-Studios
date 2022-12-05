import React from "react";
import Footer from "./Footer";
import YouTube from "react-youtube";
import ScrollToTop from "./scroll";

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
        <ScrollToTop/>
      <div className="text-2xl font-bold w-[75%] text-center m-auto   my-4">
        {" "}
        an average interior design company spends 1-2 months and 10-15 meetings
        in designing ad finalize an normal 2-3 BHK residential project. This is
        expensive, time consuming and has higher chance of customer dropout
        during this time{" "}
      </div>

      <div className="flex flex-col items-center">
        <YouTube videoId="M9kwUcwPgXo" opts={opts} />
      </div>
      <div>
        <div>presenting design engine by Voxel </div>
        <div>its an customized windows app which lets you navigate the wholeinterior sapce like a game</div>
        <div>lets you customize design, finishes and furnishing in real time norendering required</div>
        <div> lets your customer experance the place like never before</div>
      </div> 
      <div> 
            <div> <div> adventages</div>
                <ul>
                
                    <li> reduces design times from 1-2 months to 1-2 weeks  </li>
                    <li> your designer can handel more clients   </li>
                    <li>  improved customer satisfaction  </li>
                    <li>  lesser customer dropout during design process </li>
                    <li>  your comapny perception value increases </li>

                </ul>
                
            </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Windows;
