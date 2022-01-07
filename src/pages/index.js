import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import QuestList from "../components/questList";
import dynamic from "next/dynamic";

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
      <QuestList />
      <Schedule />
    </div>
  );
};

export default Home;
