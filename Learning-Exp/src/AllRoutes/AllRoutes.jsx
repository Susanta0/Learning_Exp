import React from "react";
import Navbar from "./Navbar";
import { Banner } from "../Pages/Banner";
import { Learning } from "../Pages/Learning";
import { Why } from "../Pages/Why";
import { StudentZone } from "../Pages/StudentZone";
import { Feedback } from "../Pages/Feedback";
import { Footer } from "../Pages/Footer";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Learning/>
      <Why/>
      <StudentZone/>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default AllRoutes;
