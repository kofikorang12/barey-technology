// import React from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";

// function Web() {
//   return (
//     <>
//       <Navbar />
//       <ServiceHeader title="Web Development" path="Web" />
//       <main className="container mx-auto py-8">
//         <h2 className="text-3xl font-bold text-primaryPurple mb-4">
//           Modern Web Applications
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           Develop stunning, responsive, and fast web applications that align
//           with your business objectives. Our team focuses on creating scalable
//           and secure web solutions.
//         </p>
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Web;
import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Testimonials from "../../Component/Testimonials";
// import ServiceHeader from "./ServiceHeader";
import {
  FaCheckCircle,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaGraduationCap,
  FaTruck,
  FaShoppingCart,
  FaHeartbeat,
  FaBitcoin,
  FaUniversity,
  FaCloud,
  FaShieldAlt,
  FaUniversalAccess,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Web() {
  const industries = [
    {
      name: "E-learning Application",
      icon: FaGraduationCap,
      description:
        "Engage learners with interactive and scalable e-learning platforms.",
    },
    {
      name: "E-commerce & Retail",
      icon: FaShoppingCart,
      description: "Boost online sales with cutting-edge e-commerce solutions.",
    },
    {
      name: "Transport & Logistics",
      icon: FaTruck,
      description:
        "Streamline operations with tailored logistics applications.",
    },
    {
      name: "Marketing Automation",
      icon: FaChartLine,
      description: "Enhance marketing campaigns with automation tools.",
    },
    {
      name: "Healthcare & Lifestyle",
      icon: FaHeartbeat,
      description: "Deliver lifestyle and healthcare services digitally.",
    },
    {
      name: "Blockchain Real Estate",
      icon: FaBitcoin,
      description: "Revolutionize real estate with blockchain technology.",
    },
    {
      name: "Fintech Application",
      icon: FaUniversity,
      description: "Build secure and efficient financial technology solutions.",
    },
  ];

  const features = [
    { name: "Microservices-Based Application", icon: FaCogs },
    { name: "Cloud-Based & 3rd Party Integration", icon: FaCloud },
    { name: "Security", icon: FaShieldAlt },
    { name: "Universal Accessibility", icon: FaUniversalAccess },
  ];

  const works = [
    { image: "https://via.placeholder.com/300x200", title: "Project A" },
    { image: "https://via.placeholder.com/300x200", title: "Project B" },
    { image: "https://via.placeholder.com/300x200", title: "Project C" },
    { image: "https://via.placeholder.com/300x200", title: "Project D" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Received. We will get back to you shortly!");
  };

  return (
    <>
      <Navbar />
      <ServiceHeader title="Web Development" path="Web" />
      <main className="container mx-auto py-8 space-y-16 px-4">
        {/* Section 1: Custom Web Application Development */}
        {/* Section 1: Custom Web Application Development */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Custom Web Application Development Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide tailored web development solutions designed to meet your
            business objectives. Our expertise includes building scalable,
            secure, and interactive web applications that enhance user
            experience and streamline workflows.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're looking for a custom web portal, e-commerce platform,
            or complex enterprise application, our team is ready to deliver
            cutting-edge solutions that align with your goals and future growth.
          </p>
          <ul className="list-none space-y-2 text-gray-700">
            <li className="flex items-center">
              <FaCheckCircle className="text-brightRed mr-2" /> Business
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-brightRed mr-2" /> QA & Testing
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-brightRed mr-2" /> Code Review
            </li>
          </ul>
          <div className="mt-4 text-yellow-500 text-xl flex items-center">
            {"★★★★★"}
            <span className="ml-2 text-gray-700">Client Rating</span>
          </div>
        </section>

        {/* Section 2: Team Expertise */}
        {/* Section 2: Team Expertise */}
        <section className="bg-gray-100 py-8 px-4 rounded-lg">
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Our Expertise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team brings a wealth of expertise in web development, leveraging
            the latest technologies and frameworks to create robust and
            future-ready applications. From scalable designs to secure
            deployments, we ensure your digital assets are built to last.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With a focus on collaboration and innovation, we adopt modern tech
            stacks and agile practices to deliver high-quality solutions
            tailored to your business. Our commitment to scalability and
            forward-thinking ensures your web applications meet both current and
            future needs.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-4">
              <FaUsers className="text-primaryPurple text-4xl" />
              <p className="text-gray-700">Team Expertise</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaCogs className="text-primaryPurple text-4xl" />
              <p className="text-gray-700">Scalable Solutions</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaChartLine className="text-primaryPurple text-4xl" />
              <p className="text-gray-700">Future-Ready Tech Stack</p>
            </div>
          </div>
        </section>

        {/* Section 3: Industry-Specific Applications */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Industry-Specific Web Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <industry.icon className="text-primaryPurple text-4xl" />
                  <p className="font-semibold text-gray-700">{industry.name}</p>
                </div>
                <p className="mt-4 text-gray-500">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Recent Works */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Our Recent Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold text-lg absolute bottom-4 left-4">
                    {work.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Web Application Features */}
        <section className="py-8 px-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-200">
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Web Application Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <feature.icon className="text-primaryPurple text-4xl" />
                <p className="text-gray-700 font-semibold">{feature.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Get in Touch */}
        {/* Section 6: Get in Touch */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-r from-primaryPurple to-brightRed p-6 rounded-lg shadow text-white"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full border-gray-300 rounded-lg text-gray-900 focus:ring-primaryPurple focus:border-primaryPurple"
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
                  className="w-full border-gray-300 rounded-lg text-gray-900 focus:ring-primaryPurple focus:border-primaryPurple"
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
                  className="w-full border-gray-300 rounded-lg text-gray-900 focus:ring-primaryPurple focus:border-primaryPurple"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-primaryPurple py-2 px-4 rounded-lg hover:bg-gray-100 transition"
              >
                Send
              </button>
            </form>

            {/* Quick Start Box */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-primaryPurple mb-4">
                Quick Start
              </h3>
              <ul className="space-y-6">
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    1
                  </div>
                  <p className="text-gray-700">Tell us what you have in mind</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    2
                  </div>
                  <p className="text-gray-700">Talk to our expert</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    3
                  </div>
                  <p className="text-gray-700">
                    Get an estimate of the project
                  </p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    4
                  </div>
                  <p className="text-gray-700">Start the project</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    5
                  </div>
                  <p className="text-gray-700">Deploy the product</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-primaryPurple text-white font-bold rounded-full flex items-center justify-center">
                    6
                  </div>
                  <p className="text-gray-700">Post-production review</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Web;
