import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    photo: "https://via.placeholder.com/80",
    comment:
      "Barey Technology transformed our business with their innovative IoT solutions.",
  },
  {
    name: "Jane Smith",
    photo: "https://via.placeholder.com/80",
    comment:
      "Their team is highly professional and delivered our mobile app on time!",
  },
  {
    name: "Michael Johnson",
    photo: "https://via.placeholder.com/80",
    comment: "Top-notch quality and excellent support. Highly recommended!",
  },
  {
    name: "joseph berko",
    photo: "https://via.placeholder.com/80",
    comment:
      "great web solutions for the company and quality and excellent support. Highly recommended!",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gradient-to- from-primaryPurple to-brightRed text-white py-9">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <motion.div
          className="relative w-full max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white text-primaryPurple p-8 rounded-lg shadow-lg">
            <img
              src={testimonials[currentIndex].photo}
              alt="Client"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="italic">{testimonials[currentIndex].comment}"</p>
            <p className="mt-4 font-bold">{testimonials[currentIndex].name}</p>
          </div>
        </motion.div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white text-primaryPurple py-2 px-4 rounded-lg hover:bg-brightRed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-primaryPurple py-2 px-4 rounded-lg hover:bg-brightRed"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
