// import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServiceHeader({ title, path }) {
  return (
    <header className="bg-gradient-to-r from-primaryPurple to-brightRed text-white py-16">
      <div className="container mx-auto">
        {/* Dynamic Title */}
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {/* Breadcrumb Path */}
        <motion.div
          className="mt-4 text-gray-200 text-lg flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Clickable Home Link */}
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <span className="text-gray-300">{">"}</span>
          <span className="text-gray-400">Services</span>
          <span className="text-gray-300">{">"}</span>
          <span className="font-bold text-white">{path}</span>
        </motion.div>
      </div>
    </header>
  );
}

export default ServiceHeader;
