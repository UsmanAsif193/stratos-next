import React from "react";

const ServicesCard = ({ title, time }) => (
  <div className="flex flex-col justify-start items-start p-3 m-2 cursor-pointer">
    <p className="font-normal text-xl">{time}</p>
    <h2 className="font-bold text-2xl">{title}</h2>
  </div>
);

const SocialClub = () => {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row justify-center bg-cloud-image-index-2 bg-cover text-white items-center">
      <div className="grid grid-cols-1 mf:grid-cols-2 items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col justify-evenly items-center h-full">
          <h1 className="tracking-[.7rem] uppercase font-extralight text-xl">
            Stratos
          </h1>
          <img
            src="/assets/Cloud-1.png"
            alt="Social_Club"
            className="lg:h-[80px] "
          />
          <div>
            <p>
              Our events will offer networking, mentorship opportunities and
              inspiring speakers that you can relate to, and when we come
              together, the possibilities (and opportunities) are endless.
            </p>
            <p>
              Join us to recognize the strength of the Black and Latinx
              professional journey, celebrate your successes and connect with
              others who are ready to take their careers to the next level.
            </p>
          </div>
          <div>
            <h3>**COVID Safety Precautions:</h3>
            <p>
              Event will take place in a large, well ventilated space. Limited
              Capacity. Proof of Vaccination OR Negative COVID Test (PCR or
              Antigen) taken within 72 Hours.
            </p>
          </div>
        </div>
        <div className="rounded-[100px] bg-[#ffffff4f] shadow-2xl h-full w-2/3 ml-4 flex flex-col justify-start items-start px-12 py-20">
          <div className="w-full text-center">
            <h1 className="tracking-[.7rem] uppercase font-light text-xl">
              THE SCHEDULE
            </h1>
          </div>
          <div className="flex flex-col items-start mt-4">
            <ServicesCard time="7pm" title="Drinks & Hors D'oeuvres" />
            <ServicesCard time="7:45pm" title="Opening Remarks" />
            <ServicesCard time="8pm" title="Networking Breakout" />
            <ServicesCard time="8:45pm" title="Speaker" />
            <ServicesCard time="9:15pm" title="The Toast" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialClub;
