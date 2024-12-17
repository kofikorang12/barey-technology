// import React from "react";

const clients = [
  { name: "Client A", logo: "https://via.placeholder.com/100", link: "#" },
  { name: "Client B", logo: "https://via.placeholder.com/100", link: "#" },
  { name: "Client C", logo: "https://via.placeholder.com/100", link: "#" },
  { name: "Client D", logo: "https://via.placeholder.com/100", link: "#" },
  { name: "Client E", logo: "https://via.placeholder.com/100", link: "#" },
];

function ClientShowcase() {
  return (
    <section className="bg-gray-100 py-8 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primaryPurple mb-6">
          Our Clients
        </h2>
        <div className="flex justify-center space-x-6">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              className="flex-shrink-0 w-[115px] h-[115px] transition-transform duration-300 transform hover:scale-110"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientShowcase;
