import React from "react";
import logo from "../assets/Group 1.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterFill } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import { PiPinterestLogo } from "react-icons/pi";
export const Footer = () => {
  return (
    <>
      <footer className="border bg-[#EBEBF8] mt-28 px-[15em] relative">
        <div className=" border w-[48em] m-auto bg-[#333697] rounded-md flex  gap-20 items-center px-[2em] py-[2em] absolute -top-16 right-[25em]">
          <div>
            <h1 className="font-bold text-xl text-white">Contact Us!</h1>
            <p className="text-xs mt-5 text-white">
              There are many variations of passages of Lorem Ipsum <br /> but
              the majority have suffered alteration.
            </p>
          </div>
          <div className=" flex relative items-center">
            <input
              className=" h-[2.5em] w-[18em] rounded-full px-2"
              type="email"
              placeholder="Email here"
            />
            <button className=" border text-xs h-[2.5em] w-[8em] bg-[#FFEC05] rounded-full absolute right-1">
              Send
            </button>
          </div>
        </div>
        <div className=" mx-auto max-w-screen-xl pb-6 pt-16  lg:pt-24">
          <div className=" flex justify-between">
            <div className="">
              <div className="flex  items-center gap-4">
                <img className="w-[2.5em]" src={logo} alt="logo" />
                <p className="text-[#707070] font-bold text-xl">
                  Learning Exp.
                </p>
              </div>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <TiSocialFacebook className="  border border-[#6B6969] h-[1.5em] w-[1.5em] rounded-full text-[#707070] " />
                </li>

                <li>
                  <RiTwitterFill className="  border border-[#6B6969] h-[1.5em] w-[1.5em] rounded-full text-[#707070] " />
                </li>

                <li>
                  <GrLinkedinOption className="  border border-[#6B6969] h-[1.5em] w-[1.5em] rounded-full text-[#707070] " />
                </li>

                <li>
                  <PiPinterestLogo className="  border border-[#6B6969] h-[1.5em] w-[1.5em] rounded-full text-[#707070] " />
                </li>
              </ul>
            </div>

            <div className=" flex">
              <div className="text-center sm:text-left w-[15em]">
                <p className="text-lg font-medium text-gray-900">Links</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Download
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Service{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left w-[15em]">
                <p className="text-lg font-medium text-gray-900">Support</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      How it
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Reporting{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left w-[15em]">
                <p className="text-lg font-medium text-gray-900">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      +880 12345678
                    </a>
                  </li>

                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      youremail@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className=" font-semibold text-[#8A8A8A] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Pune City
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <a
                  className="inline-block text-[#677294] underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Terms of use
                </a>

                <span>&middot; | </span>

                <a
                  className="inline-block text-[#677294] underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-[#677294] sm:order-first sm:mt-0">
                &copy; Copyright & Design By @Learning Exp.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
