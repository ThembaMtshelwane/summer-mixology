import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 bg-[url('/footer-bg.jpg')] text-center relative py-4 mt-10">
      <section className="py-8 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 text-center">
              <h6 className="text-lg font-semibold mb-4 flex items-center justify-center text-white">
                <i className="fas fa-gem mr-3 text-3xl text-white hover:text-[#002b49] "></i>
                SUMMER-MIXIOLOGY
              </h6>
              <p className="text-white text-5xl text-center">
                THE ART OF <br /> COCKTAILS
              </p>
              <p className="py-4 text-white">FOLLOW</p>
              <div className="flex justify-center">
                <a href="" className="mr-4 text-white hover:text-[#002b49] ">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mr-4 text-white hover:text-[#002b49] ">
                  <i className="fab fa-instagram "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className="bg-traansparent text-center p-4 text-white">
        © 2024 Copyright:
        <a href="" className="text-white hover:text-gray-900 font-semibold">
          summermixiology.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
