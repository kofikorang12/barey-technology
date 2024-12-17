import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Barey Technology offer?",
    answer:
      "We provide software development, web development, mobile app development, and IoT solutions.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We adhere to industry standards, employ rigorous QA processes, and involve clients in each stage.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on complexity but typically range between 1-6 months.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-primaryPurple">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-primaryPurple text-white"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-primaryPurple">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
