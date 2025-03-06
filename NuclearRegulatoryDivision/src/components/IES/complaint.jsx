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
import Inspection from "../../assets/inspection.jpg";
import Enforcement from "../../assets/enforcement.jpg";
import { Link, useHref } from "react-router-dom";
import { Bold } from "lucide-react";

const Ies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    licensee: "",
    address: "",
    complaintSummary: "",
  });

  const [responseSent, setResponseSent] = useState(false); // Track if the response has been sent

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear the form fields
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      licensee: "",
      address: "",
      complaintSummary: "",
    });

    // Display the "Response Sent" message
    setResponseSent(true);

    // Optionally hide the message after 5 seconds (you can adjust the time)
    setTimeout(() => {
      setResponseSent(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-2/3" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            File a Complaint
          </h2>

          <input
            className="mr-2 mt-5"
            type="checkbox"
          />{" "}
          Report Anonymously (I-check ang box kung ayaw magpakilala sa reklamo)

          {/* Complaint Form */}
          <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4 mt-2">
              <div className="flex flex-col w-66">
                <label className="font-serif">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Firstname"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col w-66">
                <label className="font-serif">Middle Name</label>
                <input
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Middlename"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col w-66">
                <label className="font-serif">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lastname"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4 mt-2">
              <div className="flex flex-col w-66">
                <label className="font-serif">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex.juandelacruz@gmail.com"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="email"
                />
              </div>

              <div className="flex flex-col w-66">
                <label className="font-serif">Mobile No.</label>
                <input
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="+63"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4 mt-2">
              <div className="flex flex-col w-101">
                <label className="font-serif">Licensees/Facilities Complained of</label>
                <input
                  name="licensee"
                  value={formData.licensee}
                  onChange={handleChange}
                  placeholder="Name / Company"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>

              <div className="flex flex-col w-101">
                <label className="font-serif">Address of Agency</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="h-10 bg-gray border-1 border-gray-400 rounded-sm px-1"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col w-206">
              <label className="font-serif">Summary of Complaint</label>
              <textarea
                name="complaintSummary"
                value={formData.complaintSummary}
                onChange={handleChange}
                className="h-30 bg-gray border-1 border-gray-400 rounded-sm px-1"
                placeholder="Enter complaint details"
              />
            </div>

            <p className="mt-5 font-bold">Disclaimer:</p>
           <p> <i>"Kapag ang inyong reklamo ay naangkop. Aming tinitiyak na ang inyong personal na 
            impormasyon o pagkakakilanlan ay ligtas at kompindensyal."</i></p>

            <p className="mt-5 font-bold">Data Privacy Notice:</p>
           <p> <i>"Ang anumang impormasyon na aming makukuha ay gagamitin sa transaksyon 
            na ito at sa pakikipag-ugnayan sa Inspection and Enforcement Section at sa mga susunod 
            pang mga hakbang tungkol sa inyong reklamo, alinsunod sa Data Privacy Act at sa aming 
            Data Privacy Policy na inyong mababasa sa www.op-proper.gov.ph. Ang pagpapatuloy ay 
            nangangahulugan ng inyong pagsang-ayon."</i></p>

            <p className="text-lg mt-5">
              <input className="mr-2 mt-1" type="checkbox" />
              <span className="text-black">I Agree to </span>
              <span className="text-red-500">Privacy Policy</span>
            </p>
            

            <button
              className="bg-gray-700 mt-10 rounded-sm text-white h-10 w-30 hover:bg-gray-500"
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* Display 'Response Sent' message after form submission */}
          {responseSent && (
            <div className="mt-5 text-lg font-bold text-green-500">
              Response Sent! Thank you for your cooperation.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <IesFooter />
    </div>
  );
};

export default Ies;
