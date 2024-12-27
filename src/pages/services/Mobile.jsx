import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";

function Mobile() {
  return (
    <>
      <Navbar />
      <ServiceHeader title="Mobile App Development" path="Mobile" />
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-primaryPurple mb-4">
          Engaging Mobile Experiences
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Build user-friendly and engaging mobile applications for iOS and
          Android. Our team ensures seamless functionality and intuitive designs
          that captivate your audience.
        </p>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Mobile;
