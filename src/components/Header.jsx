// import React from "react";
import { motion } from "framer-motion";

function Header() {
  // Gradient colors for animation
  const gradientVariants = {
    initial: { background: "linear-gradient(to right, #640D5F, #D91656)" },
    animate1: { background: "linear-gradient(to right, #D91656, #EB5B00)" },
    animate2: { background: "linear-gradient(to right, #EB5B00, #FFB200)" },
    animate3: { background: "linear-gradient(to right, #FFB200, #640D5F)" },
  };

  // Shape animation variants
  const shapeVariants = {
    initial: { scale: 0.8, opacity: 0.2 },
    animate: {
      scale: [0.8, 1.1, 0.8],
      rotate: [0, 10, -10, 0],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.header
      className="relative h-[90vh] text-white flex items-center justify-center"
      variants={gradientVariants}
      initial="initial"
      animate="animate1"
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.33, 0.66, 1],
      }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {/* Dynamic Pattern Background */}
      <div className="absolute inset-0 px-4 sm:px-8">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Repetitive Mixed Pattern with Motion */}
          {[...Array(10)].map((_, row) =>
            [...Array(10)].map((_, col) => {
              // Alternate between different shapes
              const shapeType = (row + col) % 3;
              const cx = 20 + col * 40;
              const cy = 20 + row * 40;

              switch (shapeType) {
                case 0:
                  return (
                    <motion.circle
                      key={`${row}-${col}-circle`}
                      cx={cx}
                      cy={cy}
                      r="10"
                      fill="#FFFFFF"
                      fillOpacity="0.3"
                      variants={shapeVariants}
                      initial="initial"
                      animate="animate"
                    />
                  );
                case 1:
                  return (
                    <motion.rect
                      key={`${row}-${col}-rect`}
                      x={cx - 10}
                      y={cy - 10}
                      width="20"
                      height="20"
                      fill="#FFFFFF"
                      fillOpacity="0.3"
                      variants={shapeVariants}
                      initial="initial"
                      animate="animate"
                    />
                  );
                case 2:
                  return (
                    <motion.polygon
                      key={`${row}-${col}-triangle`}
                      points={`${cx},${cy - 12} ${cx - 10},${cy + 10} ${
                        cx + 10
                      },${cy + 10}`}
                      fill="#FFFFFF"
                      fillOpacity="0.3"
                      variants={shapeVariants}
                      initial="initial"
                      animate="animate"
                    />
                  );
                default:
                  return null;
              }
            })
          )}
        </svg>
      </div>

      {/* Motion Background Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1.2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      >
        <motion.h1
          className="text-9xl font-bold text-white opacity-10 pointer-events-none"
          initial={{ y: -50 }}
          animate={{ y: 50 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          Partner
        </motion.h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Technology, <br /> Transforming Businesses
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover cutting-edge solutions for software, web, mobile, and IoT
          development.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="#services"
            className="bg-goldenYellow text-primaryPurple font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
