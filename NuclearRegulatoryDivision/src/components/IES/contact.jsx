import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./IesHero";
import IesFooter from "./IesFooter";
import LresRating from "./IesRating";
import Inspection from "../../assets/inspection.jpg"
import Enforcement from "../../assets/enforcement.jpg"
import { Link, useHref } from "react-router-dom";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Ies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        
      

        {/* Contact Us */}
        <div className="flex p-6 w-500">
  <div className="md:w-2/3 bg-white border border-gray-300 rounded-lg p-6 shadow-md">
    <h2 className="mb-6 text-3xl font-semibold text-indigo-600 ">
      Contact Us
    </h2>

    {/* Email Contact */}
    <div className="mb-4">
      <p className="text-lg font-medium text-gray-700">
        <span className="font-semibold">IES email:</span> 
        <a href="mailto:nrd-ie@pnri.dost.gov.ph" className="text-indigo-600 hover:underline">
          nrd-ie@pnri.dost.gov.ph
        </a>
      </p>
    </div>

    {/* Permit to Transport Application */}
    <div className="mb-4">
      <p className="text-lg font-medium text-gray-700">
        <span className="font-semibold">Permit to Transport Application:</span>
        <a href="mailto:nrd-pt@pnri.dost.gov.ph" className="text-indigo-600 hover:underline">
          nrd-pt@pnri.dost.gov.ph
        </a>
      </p>
    </div>

    {/* Telephone Number */}
    <div className="mb-4">
      <p className="text-lg font-medium text-gray-700">
        <span className="font-semibold">Telephone No.:</span> 
        (02) 8929-6010 to 19 loc. 266 / (02) 8929-6011 to 19 loc. 266
      </p>
    </div>

    {/* Mobile Number */}
    <div className="mb-4">
      <p className="text-lg font-medium text-gray-700">
        <span className="font-semibold">Mobile No.:</span> 
        0995-009-3518 (Globe)
      </p>
    </div>
  </div>
</div>

        
           
               
      </section> 

      {/* Footer */}
      <IesFooter />
    </div>
  );
};

export default Ies;
