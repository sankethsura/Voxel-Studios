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
        <div className="items-center justify-center flex">
          {" "}
          <img
            className="w-[50px] h-[50px]"
            src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/voxel%2Ficon.png?alt=media&token=678b6aaf-542e-4904-bf7d-9c68e5a84541"
            alt=""
          />
          <span className="pl-3">VOXEL STUDIOS</span>
        </div>
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
            nav("DESIGNING");
          }}
          className="px-4 py-2 hidden md:flex cursor-pointer"
        >
          Designing
        </div>

        <div
          onClick={() => {
            nav("sales");
          }}
          className="px-4 py-2 hidden md:flex cursor-pointer mr-3"
        >
          Sales
        </div>

        <div
          onClick={() => {
            nav("contactform");
          }}
          className="px-4 bg-[#53bcb3] py-2 rounded-md text-white hidden md:flex cursor-pointer"
        >
          Get in Touch
        </div>
      </section>
    </div>
  );
};

export default Navbar;
