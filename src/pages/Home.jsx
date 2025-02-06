import React from "react";
import Section1 from "./home/Section1";
import StickySection1 from "./home/StickySection1";
import StickySection2 from "./home/StickySection2";
import StickySection3 from "./home/StickySection3";
import StickySection4 from "./home/StickySection4";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Section1 />
    <div className="relative ">
      <StickySection1 />
      <StickySection2 />
      <StickySection3 />
      <StickySection4 />
    </div>
    <Footer />
  </div>
);

export default Home;
