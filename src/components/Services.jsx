import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Software Development", icon: "🛠️", link: "/services/software" },
  { title: "Web Development", icon: "🌐", link: "/services/web" },
  { title: "Mobile App Development", icon: "📱", link: "/services/mobile" },
  { title: "IoT Development", icon: "📡", link: "/services/iot" },
];

function Services() {
  return (
    <section className="bg-gradient-to-r from-primaryPurple to-brightRed text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
