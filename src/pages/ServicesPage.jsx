import React from "react";

const services = [
  {
    title: "Software Development",
    description:
      "From enterprise-grade software to custom applications, we build solutions that fit your business needs.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Web Development",
    description:
      "Crafting beautiful, responsive, and fast websites tailored to your brand and goals.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating engaging and user-friendly mobile apps for iOS and Android platforms.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "IoT Solutions",
    description:
      "Empowering your devices with smart IoT solutions to connect and collaborate effectively.",
    image: "https://via.placeholder.com/600x400",
  },
];

function ServicesPage() {
  return (
    <div>
      <header className="bg-gradient-to-r from-primaryPurple to-brightRed text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            Explore our comprehensive range of technology services.
          </p>
        </div>
      </header>
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-primaryPurple mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
