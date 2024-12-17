import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle dropdown toggles
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primaryPurple shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Barey Technology
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-goldenYellow">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              className="flex items-center hover:text-goldenYellow"
              onClick={() => toggleDropdown("services")}
            >
              Services
              <span className="ml-2 text-sm">
                {openDropdown === "services" ? "▲" : "▼"}
              </span>
            </button>
            {openDropdown === "services" && (
              <motion.ul
                className="absolute left-0 mt-2 bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-lg space-y-2"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <li>
                  <Link
                    to="/services/software"
                    className="hover:text-goldenYellow"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/web" className="hover:text-goldenYellow">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/mobile"
                    className="hover:text-goldenYellow"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/iot" className="hover:text-goldenYellow">
                    IoT Development
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
          <li className="relative">
            <button
              className="flex items-center hover:text-goldenYellow"
              onClick={() => toggleDropdown("solutions")}
            >
              Solutions
              <span className="ml-2 text-sm">
                {openDropdown === "solutions" ? "▲" : "▼"}
              </span>
            </button>
            {openDropdown === "solutions" && (
              <motion.ul
                className="absolute left-0 mt-2 bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-lg space-y-2"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <li>
                  <Link
                    to="/solutions/ux-ui"
                    className="hover:text-goldenYellow"
                  >
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/frontend"
                    className="hover:text-goldenYellow"
                  >
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/backend"
                    className="hover:text-goldenYellow"
                  >
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/qa" className="hover:text-goldenYellow">
                    QA Testing
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
          <li className="relative">
            <button
              className="flex items-center hover:text-goldenYellow"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              <span className="ml-2 text-sm">
                {openDropdown === "about" ? "▲" : "▼"}
              </span>
            </button>
            {openDropdown === "about" && (
              <motion.ul
                className="absolute left-0 mt-2 bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-lg space-y-2"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <li>
                  <Link to="/about/team" className="hover:text-goldenYellow">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/testimonials"
                    className="hover:text-goldenYellow"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-goldenYellow">
                    Contact
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white block text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-primaryPurple text-white absolute top-full left-0 w-full shadow-lg"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link to="/" className="hover:text-goldenYellow">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-goldenYellow">
                Services
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-goldenYellow">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-goldenYellow">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-goldenYellow">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
