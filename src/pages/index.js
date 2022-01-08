import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import GuestList from "../components/guestList";
import dynamic from "next/dynamic";
import AboutStratos from "../components/aboutStratos";

const Schedule = dynamic(() => import("../components/schedule"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
        <Navbar />
        <Hero />
      </div>
      <GuestList />
      <Schedule />
      <AboutStratos />
    </div>
  );
};

export default Home;
