import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./IesHero";
import LresFooter from "./IesFooter";
import LresRating from "./IesRating";
import Inspection from "../../assets/inspection.jpg"
import Enforcement from "../../assets/enforcement.jpg"
import { Link, useHref } from "react-router-dom";
import { Bold } from "lucide-react";

const Ies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5175/Ies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    }
  };

  const responsibilities = [
    {
      title: "Inspection",
      description:
        "Inspection",
      icon: "🔍",
    },
    {
      title: "Enforcement",
      description:
        "Enforcement",
      icon: "🛂",
    },

    {
      Link:"/permit",
      title: "Permit to Transport",
      description:
        "Permit to Transport",
      icon: "📜",
    },
    {
      Link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.pnri.dost.gov.ph%2Fimages%2Fofficialforms%2FEmergencyIncident_Notification_Services%2FIncidentNotificationForm.doc&wdOrigin=BROWSELINK",
      title: "Incident Form",
      description:
        "Incident Report",
      icon: "📉",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
      

        
        

           
        
      </section> 

      {/* Footer */}
      <LresFooter />
    </div>
  );
};

export default Ies;
