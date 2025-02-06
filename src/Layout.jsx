import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="flex-grow min-h-[100vh] bg-gray-50 mt-0 font-poppins">
        {/* Toaster below the Navbar */}
        <Toaster
          position="top-right"
          reverseOrder={true}
          containerStyle={{ top: "10vh" }}
          toastOptions={{
            style: {
              zIndex: 100,
              background: "#fff",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "6px",
            },
            success: {
              duration: 2000,
              style: {
                background: "#d4edda",
                color: "#155724",
              },
            },
            error: {
              duration: 2000,
              style: {
                background: "#f8d7da",
                color: "#721c24",
              },
            },
          }}
        />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
