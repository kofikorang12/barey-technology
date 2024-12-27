// // import React from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Testimonials from "../../components/Testimonials";
// import ServiceHeader from "../../components/ServiceHeader";

// function Software() {
//   return (
//     <>
//       <Navbar />
//       <ServiceHeader title="Software Development" path="Software" />
//       <main className="container mx-auto py-8">
//         <h2 className="text-3xl font-bold text-primaryPurple mb-4">
//           Custom Software Solutions
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           We specialize in creating robust and scalable software tailored to
//           your business needs. From enterprise-grade applications to small-scale
//           custom tools, our expertise ensures reliable and efficient results.
//         </p>
//       </main>
//       <Testimonials />
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Software;

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";
import { motion } from "framer-motion";

function Software() {
  const [activeTab, setActiveTab] = useState("Custom Software Development");

  const tabs = [
    "Custom Software Development",
    "AI & Machine Learning Integration",
    "Big Data Development",
  ];

  const tabContent = {
    "Custom Software Development": (
      <p>
        We build tailored software solutions to meet unique business needs. Our
        custom software development services help streamline operations, improve
        efficiency, and drive growth.
      </p>
    ),
    "AI & Machine Learning Integration": (
      <p>
        Integrate cutting-edge AI and Machine Learning technologies into your
        systems to automate processes, enhance decision-making, and unlock
        business insights.
      </p>
    ),
    "Big Data Development": (
      <p>
        Our Big Data solutions empower businesses to manage, process, and
        analyze large-scale datasets effectively, driving better insights and
        decisions.
      </p>
    ),
  };

  const industries = [
    { name: "Healthcare", icon: "fas fa-heartbeat" },
    { name: "Ecommerce", icon: "fas fa-shopping-cart" },
    { name: "IoT Management", icon: "fas fa-wifi" },
    { name: "Pharmacy", icon: "fas fa-pills" },
    { name: "Enterprise", icon: "fas fa-building" },
  ];

  const works = [
    { image: "https://via.placeholder.com/300x200", title: "Project A" },
    { image: "https://via.placeholder.com/300x200", title: "Project B" },
    { image: "https://via.placeholder.com/300x200", title: "Project C" },
    { image: "https://via.placeholder.com/300x200", title: "Project D" },
  ];

  return (
    <>
      <Navbar />
      <ServiceHeader title="Software Development" path="Software" />
      <main className="container mx-auto py-8 space-y-16">
        {/* Tabs Section */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Our Expertise
          </h2>
          <div className="flex space-x-4 border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-gray-700 font-semibold ${
                  activeTab === tab
                    ? "text-primaryPurple border-b-2 border-primaryPurple"
                    : "hover:bg-gradient-to-r hover:from-primaryPurple hover:to-brightRed hover:text-white transition"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6 text-gray-700">{tabContent[activeTab]}</div>
        </section>

        {/* Product Development Methods */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Product Development Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-brightRed mb-2">
                Agile Development
              </h3>
              <p>
                Agile development focuses on delivering incremental improvements
                through collaboration and adaptability. It emphasizes rapid
                iterations and frequent feedback to achieve high-quality
                results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brightRed mb-2">
                Scrum Methodology
              </h3>
              <p>
                Scrum is a popular Agile framework that structures development
                into sprints, allowing teams to focus on specific tasks and
                deliverables in short cycles. It enhances team productivity and
                accountability.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Works */}
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

        {/* Industry-Specific Software */}
        <section>
          <h2 className="text-3xl font-bold text-primaryPurple mb-6">
            Industry-Specific Software Product Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <i
                  className={`${industry.icon} text-primaryPurple text-4xl`}
                ></i>
                <p className="text-gray-700 text-lg font-semibold">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Software;
