import { useState } from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import Services from "./Components/Services";
// import WhyUs from "./Components/WhyUs";
// import { OurGoals } from "./Components/OurGoals";
// import ContactUs from "./Components/ContactUs";

import AllRoutes from "./AllRoutes/AllRoutes";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicesus" element={<Services/>}/>
        <Route path="/whyus" element={<WhyUs/>}/>
        <Route path="/ourgoals" element={<OurGoals/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes> */}
      <AllRoutes />
    </>
  );
}

export default App;
