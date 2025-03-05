import { useEffect, useState } from "react";
import "swiper/css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const InteractSection = () => {
  const [showRegulations, setShowRegulations] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Initialize Swiper
  useEffect(() => {
    setTimeout(() => {
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        },
      });
    }, 100); // Small delay to ensure elements are in the DOM
  }, []);

  const slides = [
    {
      img: "src/assets/worker.png",
      text: "Regulations and Standards Development Section (RSDS)",
      link: "#",
    },
    {
      img: "src/assets/inspection.png",
      text: "Inspection and Enforcement Section (IES)",
      link: "/ies",
    },
    {
      img: "src/assets/licensing.png",
      text: "Licensing, Review and Evaluation Section (LRES)",
      link: "/lres",
    },
    {
      img: "src/assets/regulation (1).png",
      text: "Nuclear Safeguards and Security Section (NSSS)",
      link: "bulletin.php",
    },
    {
      img: "src/assets/data-science.png",
      text: "Radiological Impact Assessment Section (RIAS)",
      link: "information.php",
    },
  ];

  return (
    <section className="text-gray-700 body-font mt-10 " id="aboutus" >
      <div className="container px-10 py-12 mx-auto">
        {/* Animate the Swiper container */}
        <div
          className="swiper mySwiper"
          data-aos="fade-up" // Add AOS animation
        >
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="swiper-slide"
                data-aos="fade-left" // Add AOS animation to each slide
                data-aos-delay={index * 100} // Stagger animations
              >
                <Link to={slide.link} className="block text-center">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src={slide.img}
                        className="w-28 mb-3"
                        alt={slide.text}
                      />
                    </div>
                    <h2 className="title-font text-2xl text-gray-900">
                      {slide.text}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        {/* Conditionally render the Regulations component */}
        {showRegulations && (
          <div
            className="mt-10 p-6 border rounded-lg shadow-lg bg-black"
            data-aos="fade-up" // Add AOS animation
          >
            <button
              onClick={() => setShowRegulations(false)}
              className="mb-4 text-red-500 hover:text-red-700"
            >
              Close
            </button>
            <Regulations />
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractSection;