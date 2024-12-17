// import React from "react";
import CompanyIdentity from "../components/CompanyIdentity";
import Testimonials from "../components/Testimonials";

function About() {
  return (
    <div>
      <header className="bg-gradient-to-r from-primaryPurple to-brightRed text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Discover who we are and what drives us to excel in technology
            solutions.
          </p>
        </div>
      </header>
      <CompanyIdentity />
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primaryPurple mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700">
            Our team is composed of talented professionals passionate about
            technology and innovation.
          </p>
          {/* Add team details or a carousel here */}
        </div>
      </section>
      <Testimonials />
    </div>
  );
}

export default About;
