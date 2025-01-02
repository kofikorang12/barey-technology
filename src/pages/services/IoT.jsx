import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";
import {
  FaStore,
  FaHeartbeat,
  FaHome,
  FaCar,
  FaChartLine,
  FaDatabase,
  FaDownload,
  FaAws,
} from "react-icons/fa";
import { motion } from "framer-motion";

function IoT() {
  const focuses = [
    {
      name: "Retail",
      icon: FaStore,
      description: "Transform retail experiences with IoT-driven insights.",
    },
    {
      name: "Healthcare",
      icon: FaHeartbeat,
      description: "Enhance patient care with smart IoT devices.",
    },
    {
      name: "Smart Homes",
      icon: FaHome,
      description: "Enable connected living with smart home solutions.",
    },
    {
      name: "Automotive",
      icon: FaCar,
      description: "Optimize automotive systems with IoT integration.",
    },
  ];

  const services = [
    {
      name: "Data Analysis",
      icon: FaChartLine,
      description: "Analyze IoT-generated data for actionable insights.",
    },
    {
      name: "Data Processing",
      icon: FaDatabase,
      description: "Efficiently process IoT data for seamless operations.",
    },
    {
      name: "Data Retrieval",
      icon: FaDownload,
      description: "Securely retrieve IoT data for better decision-making.",
    },
  ];

  const technologies = [
    { name: "AWS DocumentDB", icon: FaAws },
    { name: "Amazon DynamoDB", icon: FaAws },
    { name: "Amazon RDS", icon: FaAws },
    { name: "AWS Redshift", icon: FaAws },
    { name: "Amazon S3", icon: FaAws },
    { name: "Amazon ElastiCache", icon: FaAws },
    { name: "AWS IoT Device Management", icon: FaAws },
    { name: "AWS IoT Core", icon: FaAws },
  ];

  return (
    <>
      <Navbar />
      <ServiceHeader title="IoT Development" path="IoT" />
      <main className="container mx-auto py-8 space-y-16 px-4">
        {/* Section 1: IoT Industry Focus */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            IoT Industry Focus
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IoT is revolutionizing industries by enabling smarter solutions.
            From healthcare to automotive, IoT technology empowers businesses to
            improve operations, enhance customer experiences, and create
            innovative services. Our expertise spans diverse industries,
            delivering tailored IoT applications to meet specific needs and
            goals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focuses.map((focus, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <focus.icon className="text-primaryPurple text-4xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {focus.name}
                </h3>
                <p className="text-gray-500">{focus.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: IoT Services */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            IoT Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(to right, #640D5F, #D91656)",
                }}
              >
                <service.icon className="text-primaryPurple text-4xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {service.name}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Our Recent Work */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Our Recent Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://via.placeholder.com/300x200"
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold text-lg absolute bottom-4 left-4">
                    Project {index + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Testimonial */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Testimonials
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">
              "Working with this team has been an absolute pleasure. Their
              expertise in IoT development is unmatched, and they delivered a
              solution that exceeded our expectations. Highly recommended!"
            </p>
            <p className="text-primaryPurple font-bold mt-4">
              - John Doe, CEO of Smart Solutions
            </p>
          </div>
        </section>

        {/* Section 5: Technologies We Work With */}
        <section className="py-8 bg-gradient-to-r from-primaryPurple to-brightRed text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Technologies We Work With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-lg bg-opacity-20 bg-white"
              >
                <tech.icon className="text-4xl mb-4" />
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Contact Form */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Get in Touch
          </h2>
          <form className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
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
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default IoT;
