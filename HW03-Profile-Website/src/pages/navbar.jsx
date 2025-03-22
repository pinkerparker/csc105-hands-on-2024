import React, { useState } from "react";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md bg-white">
      <h1 className="text-lg font-bold">Pinker</h1>
      
      <ul className="flex space-x-6">
        <li><a href="#home" className="text-black px-1/2 sm:px-4 py-2 text-md sm:text-xl rounded-full hover:bg-blue-100">Home</a></li>
        <li><a href="#about" className="text-black  px-1/2 sm:px-4 py-2 text-md sm:text-xl rounded-full hover:bg-blue-100">About me</a></li>
        <li><a href="#gallery" className="text-black  px-1/2 sm:px-4 py-2 text-md sm:text-xl rounded-full hover:bg-blue-100">Gallery</a></li>
      </ul>
      
      <a href="#home" className="px-4 py-2 rounded-full bg-blue-200 text-white">Contact</a>
    </nav>
  );
};

export default Navbar;
