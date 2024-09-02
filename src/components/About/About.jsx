

import React from 'react';

const About = () => {
  return (
    <div className=" max-w-5xl mx-auto p-6 text-center">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 ">
          <img
            src="/About.jpeg"  
            alt=""
            className="w-full h-[250] object-cover shadow-lg"
          />
        </div>

        <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
          <h3 className="text-2xl text-bold mb-4 text-center text-[#002B49] ">-SUMMER MIXIOLOGY-</h3>
          <h1 className='text-6xl font-bold mb-4 text-[#002B49] '> HISTORICAL KNOW-HOW</h1>
          <p className="text-lg mb-4">
            Welcome to our Cocktail Explorer App! Discover a world of cocktails and mocktails with just a few clicks.
             Whether you are a professional bartender, a cocktail enthusiast, or just someone looking for 
             the perfect drink recipe for a special occasion, our app has something for everyone.
          </p>
          <button className=' py-3 px-7 me-2 mb-2 text-sm font-medium border border-red-950 hover:midnight blue hover:text-white hover:bg-[#002b49] '>OUR RECIPES</button>
        </div>
      </div>
    </div>
  );
}

export default About;


