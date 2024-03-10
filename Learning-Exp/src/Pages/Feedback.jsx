import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import start from "../assets/grade.svg"
import photo from "../assets/photography/photography-1.png";
export const Feedback = () => {
  const para =
    "At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.";
  return (
    <>
      <div className=" px-[15em] mt-[6em]">
        <div className=" flex gap-7 items-center  justify-between">
          <div>
            <h1 className="text-[#010000] font-semibold text-4xl">
              Our Students Feedback
            </h1>
            <p className="text-[#707070] w-[51em]  mt-4 text-xs font-semibold">
              {para}
            </p>
          </div>
          <div className="border flex items-center gap-2 bg-[#F3F3F3] w-[10em] h-[2em] rounded justify-center ">
            <button className="text-[#707070] bg-[#F3F3F3]">Read More </button>
            <MdOutlineArrowRightAlt className="w-[2em] h-[2em]" />
          </div>
        </div>
        <div className=" flex items-center mt-10 gap-32 bg-[#EFEFFE]">
          <div>
            <img className="w-[15em]" src={photo} alt="image" />
          </div>
          <div>
            <div className="flex gap-6">
              <img className="h-[2em] w-[2em]" src={start} alt=" star" />
              <img className="h-[2em] w-[2em]" src={start} alt=" star" />
              <img className="h-[2em] w-[2em]" src={start} alt=" star" />
              <img className="h-[2em] w-[2em]" src={start} alt=" star" />
              <img className="h-[2em] w-[2em]" src={start} alt=" star" />
            </div>
            <p className=" mt-4 text-sm font-semibold text-[#222D39]">
              "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit <br />{" "}
              Voluptatem Accusantium Doloremque <br /> Laudantium,
              <br /> Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."
            </p>
            <h3 className=" font-bold mt-4">Riad Islam</h3>
            <p className="font-bold text-xs">
              Product Manager{" "}
              <span>
                <a className="text-[#333697]" href="#">
                  @Learning.Com
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
