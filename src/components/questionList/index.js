import React from "react";

const QuestionList = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-20 h-screen">
      <div>
        <div className="flex items-center">
          <div>
            <img className="w-[90px] ml-20 mb-4" src="assets/planet1.png" />
            <img className="w-[185px]" src="assets/planet2.png" />
          </div>
          <div>
            <h2 className=" text-3xl ml-10 font-bold">
              A unique networking experience that is{" "}
              <span> out of this world. </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h2>JOIN THE QUESTLIST</h2>
      </div>
    </div>
  );
};

export default QuestionList;
