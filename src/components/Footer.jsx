import React from "react";

function Footer() {
  return (
    <footer className="bg-primaryPurple text-white mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        <div>
          <h3 className="font-bold">Company Information</h3>
          <p>Barey Technology, Tech Street, Innovation City</p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <ul>
            <li>Software Development</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Technologies</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#!" className="hover:text-brightRed">
              Facebook
            </a>
            <a href="#!" className="hover:text-brightRed">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="bg-brightRed text-center p-4">
        © 2024 Barey Technology. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
