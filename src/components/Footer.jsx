import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-black text-gray-300 py-16">
      <div className="container mx-auto px-8">
        {/* <div className="grid md:grid-cols-4 gap-8 text-sm"> */}
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-500" />
                <span>marpsafrica@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-yellow-500" />
                <span>(+254) 717771461</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>Westlands, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-500 transition duration-300"
                  target="blank"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://marps.co.ke/"
                  className="hover:text-yellow-500 transition duration-300"
                  target="blank"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-yellow-500 transition duration-300"
                  target="blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Newsletter</h2>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 p-3 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-md font-semibold transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Follow Us</h2>
            <p className="mb-4">Connect with us on social media:</p>
            <div className="flex space-x-6 text-2xl">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
                target="blank"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
                target="blank"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
                target="blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/marpsafrica-solutions-0270a132a/"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-10" />

        <div className="text-center text-sm">
          <p>&copy; {currentYear} Marps Africa. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-300 hover:text-yellow-500">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#" className=" text-gray-300 hover:text-yellow-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
