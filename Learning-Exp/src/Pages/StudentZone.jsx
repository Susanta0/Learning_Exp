import React from "react";
import { TiTick } from "react-icons/ti";
import logo1 from "../assets/StudentLogo/assignment-24px.svg"
import logo2 from "../assets/StudentLogo/supervised-24px.svg"
export const StudentZone = () => {
  const para =
    "At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.";
  return (
    <>
      <div className=" mt-24 px-[15em]">
        <h1 className="text-center px-[2em] font-semibold text-4xl">
          We Completed 1200+ Certification Program Successfully & Counting
        </h1>
        <p className="mt-5 px-[15em] text-center text-[#241B1B] font-sans ">
          {para}
        </p>
        <div className=" flex justify-around mt-10">
          <div className=" flex items-center gap-2">
            <div>
                <TiTick className=" text-white bg-[#1453FF] text-4xl border rounded-full"/>
            </div>
            <div>
               <p className=" font-bold text-[#1453FF]">100+</p> 
               <p className=" font-bold text-[#1453FF]">Batch Complete</p>
            </div>
          </div>
          <div className=" flex items-center gap-1">
          <div>
                <img className="w-10" src={logo1} alt="" />
            </div>
            <div>
               <p className=" font-bold text-[#1453FF]">50+</p> 
               <p className="font-bold">Active Batches</p>
            </div>
          </div>
          <div className=" flex items-center gap-1">
          <div>
                <img className="w-10" src={logo2} alt="" />
            </div>
            <div>
               <p className=" font-bold text-[#1453FF]">10,000+</p> 
               <p className="font-bold">Student Satisfied</p>
            </div>
          </div>
          <div className=" flex items-center gap-1">
          <div>
                <img className="w-10" src={logo2} alt="" />
            </div>
            <div>
               <p className=" font-bold text-[#1453FF]">10+</p> 
               <p className="font-bold">Course Module</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
