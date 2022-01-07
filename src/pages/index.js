import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
