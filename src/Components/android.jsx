import React from "react";
import Footer from "./Footer";
import YouTube from "react-youtube"; 
import ScrollToTop from "./scroll";

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
        <ScrollToTop/>
      <div className="text-2xl font-bold w-[75%] text-center m-auto   my-4">
       an average real estate company does about 10-12 meetings and hundreds of calls to its customers to sell a single apartment . this is time consuming and expensive , and yet the clients wont be having a full picture of hoew the apartment is going to be like  
      </div>

      <div className="flex flex-col items-center">
        <YouTube videoId="0CYHASlhCbk" opts={opts} />
      </div>
      <div>
        <div>presenting property sales engine by Voxel </div>
        <div>its an customized mobile app which lets your client  navigate the whole interior sapce and all other amenities near it </div>
        <div> lets your customer experance the place like never before</div>
        <div> lets you collect data about your customer </div>
        <div> let you give complete information about the project to your customers </div>


      </div> 
      <div> 
            <div> <div> adventages</div>
                <ul>
                
                    <li> reduces sales times from 1-2 months to 1-2 weeks  </li>
                    <li> your sales person can handel more clients   </li>
                    <li>  improved customer satisfaction  </li>
                    <li>  lesser customer dropout during sales process </li>
                    <li>  your comapny perception value increases </li>

                </ul>
                
            </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Android;
