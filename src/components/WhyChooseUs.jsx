import React from "react";

const reasons = [
  {
    title: "Client Involvement",
    description:
      "We prioritize your input to ensure the final product meets your expectations.",
    icon: "👥",
  },
  {
    title: "Moderate Pricing",
    description:
      "Affordable solutions tailored to your budget without compromising quality.",
    icon: "💰",
  },
  {
    title: "Quality Product Delivery",
    description:
      "We deliver top-notch quality products with rigorous testing and attention to detail.",
    icon: "✔️",
  },
  {
    title: "Effective Time Management",
    description:
      "We respect your deadlines and ensure timely project completion.",
    icon: "⏱️",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-brightRed to-orange text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Barey Technology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white text-primaryPurple rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
