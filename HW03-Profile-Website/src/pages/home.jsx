import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row sm:flex-row items-center justify-center p-10 pt-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left sm:text-left">
          <h2 className="text-xl sm:text-2xl">Hello, It's me</h2>
          <h1 className="text-3xl md:text-5xl font-bold">Bing Bong</h1>
          <p className="text-lg mt-2">I'm an Artist</p>
          <p className="text-gray-600">
            Explore a world full of creativity with designer John.
          </p>
          <div className="flex flex-row justify-center md:justify-start mt-4">
            <a
              href="https://www.instagram.com/ppinkpnkk"
              className="text-black text-2xl hover:text-green-900 transition mr-2"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:pinker.pornchanok@gmail.com"
              className="text-black text-2xl hover:text-green-900 transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="py-2 mt-4">
            <button className="py-2 px-5 rounded-full bg-pink-300 hover:bg-green-200">
              My Portfolio
            </button>
          </div>
        </div>
        <img
          className="rounded-xl w-70 h-70 sm:w-80 sm:h-80 md:w-96 md:h-96 p-5"
          src="https://cdn11.bigcommerce.com/s-5ylnei6or5/images/stencil/1280x1280/products/1211/1971/1923_BingBong_InsideOut_501__13465.1514056668.jpg?c=2"
          alt="Bing Bong"
        />
      </div>
    </section>
  );
};

export default Home;
