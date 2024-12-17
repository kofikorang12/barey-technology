import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ title, icon, link }) {
  return (
    <Link
      to={link}
      className="p-4 bg-white text-primaryPurple rounded-lg shadow-lg hover:scale-105 transform transition-transform"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </Link>
  );
}

export default ServiceCard;
