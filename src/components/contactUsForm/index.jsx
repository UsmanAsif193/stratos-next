import React from "react";
import Fade from "react-reveal/Fade";

const InputContactUs = ({ placeholder, type, className }) => {
  return (
    <input
      className={`${
        className && className
      } appearance-none placeholder-black block w-full bg-white text-black border border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
      type={type ? type : "text"}
      placeholder={placeholder}
    />
  );
};

const ContactUsForm = () => {
  return (
    <Fade top>
      <section className="p-20 px-12 min-h-screen md:h-screen">
        <div className="flex justify-center items-center">
          <h1 className="tracking-[.7rem] uppercase font-light text-2xl md:text-3xl text-center">
            CONTACT US
          </h1>
        </div>
        <div className="flex flex-col items-center py-14">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-2 md:mb-0">
                <InputContactUs placeholder="Full Name" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-2 md:mb-0">
                <InputContactUs placeholder="Email" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-2 md:mb-0">
                <InputContactUs placeholder="Subject" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-2 md:mb-0">
                <textarea
                  className="appearance-none placeholder-black block w-full bg-white text-black border border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                  id="grid-description"
                  rows="8"
                  type="password"
                  placeholder="Your Message ..."
                />
              </div>
            </div>
          </form>
          <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-16 rounded-xl border-0 shadow-md-full">
            Submit
          </button>
        </div>
      </section>
    </Fade>
  );
};

export default ContactUsForm;
