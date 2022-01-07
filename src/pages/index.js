import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import QuestionList from "../components/questionList";
import SocialClub from "../components/socialClub";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
        <Navbar />
        <Hero />
      </div>
      <QuestionList />
      <SocialClub />
    </div>
  );
};

export default Home;
