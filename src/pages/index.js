import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import QuestionList from "../components/questionList";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen bg-black text-white underline">
        <Navbar />
        <Hero />
      </div>
      <QuestionList />
    </div>
  );
};

export default Home;
