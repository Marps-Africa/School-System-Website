import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle } from "react-icons/fa";
import ContactForm from "./ContactForm";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const serviceID = "service_nes84lu";
    const templateID = "template_dx2mken";
    const confirmationTemplateID = "template_bdw467d";
    const publicKey = "G47v0xkyrNEc7T0Su";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Recipient Name",
    };

    const confirmationParams = {
      from_name: formData.name,
      to_email: formData.email,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        return emailjs.send(
          serviceID,
          confirmationTemplateID,
          confirmationParams,
          publicKey
        );
      })
      .then(() => {
        toast.success(
          "Message sent successfully! A confirmation email has been sent to you."
        );
        setIsSubmitting(false);
        
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <section className="mt-[12vh]">
      <div className="flex flex-col items-center text-center space-y-3 pt-16">
        <h1 className="text-5xl font-bold text-blue-700">Contact Us</h1>
        <div className="text-lg font-light">
          <p>We’d love to hear from you!</p>
          <p className="text-lg">Feedback or suggestions? Let us know!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-gray-100 mt-8 mb-8 border">
        <h2 className="text-3xl font-bold text-left mb-2">Talk to Us.</h2>
        <p className="text-xl p-2">
          We strive to make each interaction with us both rewarding and
          enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-100">
              Let’s level up your project, together
            </h2>
            <p className="text-gray-800">
              You can reach us via email,{" "}
              <a
                href="mailto:marpsafrica@gmail.com"
                className="text-primary-100 hover:text-primary-200"
              >
                marpsafrica@gmail.com
              </a>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center hover:bg-gray-100 p-2 transition-all">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                MarpsAfrica contacts you within 24h
              </li>
              <li className="flex items-center hover:bg-gray-100 p-2 transition-all">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Information promptly cataloged for efficient handling
              </li>
              <li className="flex items-center hover:bg-gray-100 p-2 transition-all">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Discuss your project details
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>
      <Footer />

    </section>
  );
};

export default ContactUs;
