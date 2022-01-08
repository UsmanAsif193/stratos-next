import React from "react";

const JoinStratos = () => {
  return (
    <div className="flex items-center justify-center flex-wrap h-screen pt-20 px-8 md:pt-0">
      <div className="w-[600px]">
        <div>
          <h2 className="text-2xl">
            A new way for Black & Latinx professionals to network with each
            other
          </h2>
        </div>
        <div className="text-2xl font-bold py-6">
          <h2>Careers. Networking. Mentorships. All in one spot.</h2>
        </div>
        <div>
          <h3 className="pb-2">
            Be the first to have access to Stratos opportunities
          </h3>
        </div>
        <div class="flex items-center">
          <div class="relative">
            <input
              type="text"
              class="h-10 w-[320px] md:h-12 md:w-[550px] pl-10 pr-20 placeholder-white bg-transparent border-2 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Email"
            />
            <div class="absolute top-0 right-0">
              {" "}
              <button class=" h-10 w-28 md:h-12 md:w-40 text-black rounded-lg bg-white hover:bg-gray">
                Join
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="md:w-[650px]" src="assets/Header-graphic.png" alt="" />
      </div>
    </div>
  );
};

export default JoinStratos;
