import React from "react";

const SinglePartner = ({ className, alt, src, imgHover, right }) => (
  <div
    className={`${className} flex-[1_0_21%] flex items-center justify-center min-w-[200px] min-h-[200px] w-[150px]  mx-4 p-2`}
  >
    <img
      src={src}
      alt={alt}
      className={`max-w-[300px] w-[150px] min-h-[200px]`}
    />
    <img
      src={imgHover}
      alt={alt}
      className={`max-w-[300px] w-[150px] min-h-[200px] relative hover:invisible right-[150px]`}
    />
  </div>
);

const OurPartners = () => {
  return (
    <section className="p-20 px-12 min-h-screen md:h-screen">
      <div className="flex justify-center items-center">
        <h1 className="tracking-[.7rem] uppercase font-light text-2xl md:text-3xl">
          OUR PARTNERS
        </h1>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-wrap items-center justify-center mt-24 md:mt-0">
          <SinglePartner
            imgHover="/assets/partners/acadia.svg"
            src="/assets/partners/acadia-hover.svg"
            alt="Partner 1"
          />
          <SinglePartner
            imgHover="/assets/partners/bevy.svg"
            src="/assets/partners/bevy-hover.svg"
            alt="Partner 2"
          />
          <SinglePartner
            imgHover="/assets/partners/guru.svg"
            src="/assets/partners/guru-hover.svg"
            alt="Partner 3"
          />
          <SinglePartner
            imgHover="/assets/partners/kyte.svg"
            src="/assets/partners/kyte-hover.svg"
            alt="Partner 4"
          />
          <SinglePartner
            imgHover="/assets/partners/pendo.svg"
            src="/assets/partners/pendo-hover.svg"
            alt="Partner 5"
          />
          <SinglePartner
            imgHover="/assets/partners/prefect.svg"
            src="/assets/partners/prefect-hover.svg"
            alt="Partner 6"
          />
          <SinglePartner
            imgHover="/assets/partners/verkada.svg"
            src="/assets/partners/verkada-hover.svg"
            alt="Partner 7"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
