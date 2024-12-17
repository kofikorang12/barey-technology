// import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <header className="bg-gradient-to-r from-brightRed to-orange text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions or need help? Get in touch with us today.
          </p>
        </div>
      </header>
      <ContactForm />
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primaryPurple mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-700">
            Address: Tech Street, Innovation City <br />
            Phone: (123) 456-7890 <br />
            Email: support@bareytechnology.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
