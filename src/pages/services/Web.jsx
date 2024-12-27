import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/ServiceHeader";

function Web() {
  return (
    <>
      <Navbar />
      <ServiceHeader title="Web Development" path="Web" />
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-primaryPurple mb-4">
          Modern Web Applications
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Develop stunning, responsive, and fast web applications that align
          with your business objectives. Our team focuses on creating scalable
          and secure web solutions.
        </p>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Web;
