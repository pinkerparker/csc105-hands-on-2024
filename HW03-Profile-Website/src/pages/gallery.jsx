import React from "react";
import Joy from "../images/joy.jpg";
import eeee from "../images/eeee.jpg";
import kua from "../images/kua.jpg";
import moho from "../images/moho.jpg";
import sok from "../images/sok.jpg";
import bingbong from "../images/bingbong.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="p-10 flex flex-col text-center justify-center items-center">
      <h2 className="text-4xl font-bold">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center align-middle">
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={Joy} alt="joy"
        />
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={eeee} alt="disgust"
        />
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={kua} alt="kua"
        />
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={moho} alt="moho"
        />
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={sok} alt="sok"
        />
        <img
          className=" w-70 h-70 p-5 items-center rounded-3xl shadow-md"
          src={bingbong} alt="bingbong"
        />
      </div>
    </section>
  );
};

export default Gallery;
