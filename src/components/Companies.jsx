import React from "react";

const Companies = () => {
  const companies = ["company1.png", "company2.png", "company3.png"];

  return (
    <section className="py-16 bg-secondary">
      <h2 className="text-center text-2xl font-bold">Companies We Work With</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {companies.map((company, idx) => (
          <img
            key={idx}
            src={company}
            alt="company logo"
            className="w-24 h-24 grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
