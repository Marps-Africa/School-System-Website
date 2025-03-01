// React and React Router imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";

// Components

// Main App Component
export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          {/* <Route path="about" element={<AboutUs />} /> */}
        </Route>
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}
