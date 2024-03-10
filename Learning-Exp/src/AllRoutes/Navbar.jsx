import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-20 z-10 w-[100%]  sticky top-0 bg-[#0000000D] ">
        <Logo />
        <div className="flex gap-16 items-center">
          <Link
            className="text-xl text-[#FFFFFF] scale-125 border-b-2 border-[#FFEC05] "
            to="#"
          >
            Home
          </Link>
          <Link
            className="text-xl text-[#BCBCBC] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:scale-110 hover:border-b-2 border-[#FFEC05] "
            to="#"
          >
            Services Us
          </Link>
          <Link
            className="text-xl text-[#BCBCBC] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:scale-110 hover:border-b-2 border-[#FFEC05] "
            to="#"
          >
            Why Us
          </Link>
          <Link
            className="text-xl text-[#BCBCBC] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:scale-110 hover:border-b-2 border-[#FFEC05] "
            to="#"
          >
            Our Goals
          </Link>
          <Link
            className="text-xl px-3 py-1 rounded-full bg-[#FFEC05] text-[#000000] font-semibold"
            to="#"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
