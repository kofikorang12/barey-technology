// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Software from "./pages/services/Software";
import Mobile from "./pages/services/Mobile";
import Web from "./pages/services/Web";
import IoT from "./pages/services/IoT";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/software" element={<Software />} />
            <Route path="/services/mobile" element={<Mobile />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/iot" element={<IoT />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
