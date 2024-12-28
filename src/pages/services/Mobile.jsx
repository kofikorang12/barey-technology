import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";
import {
  FaApple,
  FaAndroid,
  FaCodeBranch,
  FaMobileAlt,
  FaUsers,
  FaBolt,
  FaCogs,
  FaShieldAlt,
  FaShoppingCart,
  FaChartLine,
  FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Mobile() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const reasons = [
    { text: "Increase customer engagement", icon: FaMobileAlt },
    { text: "Boost sales and revenue", icon: FaShoppingCart },
    { text: "Strengthen customer loyalty", icon: FaUsers },
    { text: "Stand out from competitors", icon: FaBolt },
    { text: "Enhance brand visibility", icon: FaChartLine },
    { text: "Improve operational efficiency", icon: FaCogs },
    { text: "Offer better customer support", icon: FaShieldAlt },
    { text: "Capture valuable analytics", icon: FaCodeBranch },
  ];

  const services = [
    { name: "iOS Application", icon: FaApple },
    { name: "Android Application", icon: FaAndroid },
    { name: "Cross-Platform Application", icon: FaCodeBranch },
  ];

  return (
    <>
      <Navbar />
      <ServiceHeader title="Mobile App Development" path="Mobile" />
      <main className="container mx-auto py-8 space-y-16 px-4">
        {/* Section 1: Mobile Application Intro */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Mobile Application Development Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today’s digital age, mobile apps are indispensable for any
            business aiming to thrive. Our team specializes in creating robust,
            user-friendly, and visually engaging mobile applications that help
            you connect with your customers, streamline processes, and drive
            business growth.
          </p>
        </section>

        {/* Section 2: 8 Reasons for a Mobile App */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            8 Reasons Why Your Business Needs a Mobile App
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-r from-primaryPurple to-brightRed text-white rounded-lg shadow hover:shadow-lg transition"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <reason.icon className="text-4xl mb-4" />
                <p className="text-lg font-semibold">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Custom Services We Build */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Custom Services We Build
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-primaryPurple to-brightRed text-white rounded-full w-48 h-48 flex flex-col items-center justify-center shadow hover:shadow-lg transition"
              >
                <service.icon className="text-5xl mb-4" />
                <p className="text-center font-semibold">{service.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Buzzing Button and Contact Form Overlay */}
      <div className="relative">
        {/* Buzzing Button */}
        <button
          onClick={toggleForm}
          className={`fixed bottom-16 right-4 z-50 w-16 h-16 bg-brightRed text-white rounded-full shadow-lg flex items-center justify-center ${
            isFormOpen ? "" : "animate-pulse"
          }`}
        >
          <FaCommentDots className="text-2xl" />
        </button>

        {/* Contact Form Overlay */}
        {isFormOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold text-primaryPurple mb-4">
                Get in Touch
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full border-gray-300 rounded-lg focus:ring-primaryPurple focus:border-primaryPurple"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border-gray-300 rounded-lg focus:ring-primaryPurple focus:border-primaryPurple"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Type your message here"
                    className="w-full border-gray-300 rounded-lg focus:ring-primaryPurple focus:border-primaryPurple"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primaryPurple text-white py-2 px-4 rounded-lg hover:bg-brightRed transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Mobile;
