import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";

function IoT() {
  return (
    <>
      <Navbar />
      <ServiceHeader title="IoT Solutions" path="IoT" />
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-primaryPurple mb-4">
          Innovative IoT Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Empower your devices with smart IoT solutions. From smart homes to
          industrial automation, we create intelligent systems that seamlessly
          integrate with your operations.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default IoT;
