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
import { Bold } from "lucide-react";
import Inspections from "../../assets/1.jpg";
import EAction from "../../assets/2.jpg";
import Permit from "../../assets/3.jpg"

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
        {/* Left Section (Logos) */}
      

        {/* Quality Objectives and Contacts */}
        <div className="md:w-2/3 " data-aos="fade-right">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            Quality Objectives
          </h2>

          <div class="mt-10 flex space-x-4">
                 <div class="w-80 h-93 p-5 bg-white-200 rounded-xl shadow-lg border-l-4 border-indigo-500" >
                   <p className="font-bold text-2xl text-indigo-600">01</p>
                  <p className="mt-2 text-justify" data-aos="fade-up" >To undertake the conduct of regulatory inspection of licensed 
                    radioactive materials and facilities in accordance with the 2025 
                    inspection schedule, and to prepare the final official inspection 
                    report within twenty (20) working days after completion of the 
                    scheduled batch of inspections.</p>
                 </div>

                <div class="w-80 p-5 bg-white-200 rounded-xl shadow-lg border-l-4 border-indigo-500">
                   <p className="font-bold text-2xl text-indigo-600">02</p>
                   <p className="mt-2 text-justify" data-aos="fade-up" data-aos-delay="500">To ensure that appropriate Regulatory Enforcement 
                    Action in accordance with PNRI Administrative Order No. 3, s. 2004 is prepared 
                    within twenty-two (22) working days after recommendation to issue is approved by 
                    the NRD Chief.​</p>
                </div>

                <div class="w-80 p-5 bg-white-200 rounded-xl shadow-lg border-l-4 border-indigo-500">
                  <p className="font-bold text-2xl text-indigo-600">03</p>
                  <p className="mt-2 text-justify" data-aos="fade-up" data-aos-delay="1000">To prepare Permit of Transport with at most four 
                    (4) revision within four (4) hours upon request.​​</p>
                </div>

               </div> 

               {/* Annual Report */}
               <h1 className="text-center mt-10 pt-10 text-indigo-600 text-xl md:text-4xl font-bold capitalize">
                     2024 Annual Performance Report
                    </h1>
                    <div  className="bg-white  rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-start space-x-4 mt-10 mb-5" data-aos="fade-right">
                      <img className="mx-auto h-100 w-150 rounded-xl"  src={Inspections} alt="conducted inspection" />
                    </div>
                     <p className="text-2xl text-center">A total of 96 regulatory inspections were conducted for 2024.​</p>

                    <div  className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-start space-x-4 mt-15 mb-5" 
                       data-aos="fade-right" data-aos-delay="200">
                      <img className="mx-auto h-100 w-150 rounded-xl"  src={EAction} alt="conducted inspection" />
                    </div>
                    <p className="text-2xl text-center">A total of 23 Enforcement Action were conducted for 2024.​</p>

                    <div  className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-start space-x-4 mt-15 mb-5" data-aos="fade-right" 
                       data-aos-delay="300">
                      <img className="mx-auto h-100 w-150 rounded-xl"  src={Permit} alt="conducted inspection" />
                    </div>
                    <p className="text-2xl text-center">A total of 7888 permit to transport were issued for 2025.​​</p>
          </div>
        
          
                  
      </section> 

      {/* Footer */}
      <IesFooter />
    </div>
  );
};

export default Ies;
