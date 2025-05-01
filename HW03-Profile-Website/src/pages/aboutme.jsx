import React from "react";
import embarrassment from "../images/Embarrassment.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="p-10 bg-white items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="rounded-xl w-70 h-70 sm:w-80 sm:h-80 md:w-96 md:h-96 p-5"
          src={embarrassment}
          alt="embarrassment"
        />
        <div className="w-full md:w-1/2 text-center md:text-left mt-5 md:mt-0">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-600 mt-2">
            I'm an Artist & Designer with a passion for creativity.
          </p>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptates obcaecati eum, eos ipsa, porro ipsum illum magnam sunt
            iure voluptate ullam voluptatum quidem culpa sequi! Quo asperiores
            ullam sed.
          </p>
          <div className="py-2 mt-4">
            <button className="py-2 px-5 rounded-full bg-pink-300 hover:bg-green-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

