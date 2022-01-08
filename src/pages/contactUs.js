import React from "react";
import JoinStratos from "../components/joinStratos";
import Navbar from "../components/navbar";

const contactUs = () => {
  return (
    <div className="min-h-screen">
      <div className="h-full bg-cloud-image-index-2 bg-cover text-white bg-blend-soft-light lg:bg-blend-normal bg-blend-normal">
        <Navbar blackColor />
        <JoinStratos />
      </div>
    </div>
  );
};

export default contactUs;
