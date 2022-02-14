import React from "react";
import { Fade } from "react-reveal";
import ContactUsForm from "../components/contactUsForm";
import JoinStratos from "../components/joinStratos";
import Navbar from "../components/navbar";
import OurPartners from "../components/ourPartners";

const contactUs = () => {
  return (
    <div className="min-h-screen">
      <Fade top>
        <div className="h-full bg-cloud-image-index-2 bg-cover text-white bg-blend-soft-light lg:bg-blend-normal bg-blend-normal">
          <Navbar blackColor />
          <JoinStratos />
        </div>
      </Fade>
      <OurPartners />
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default contactUs;
