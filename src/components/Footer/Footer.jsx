import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 bg-[url('/footer-bg.jpg')] text-center text-gray-600 relative py-4 mt-10">
      {/* Social Media Section */}
      
      <section className="flex flex-col lg:flex-row justify-center items-center p-4 border-b border-gray-300">
        <div className="hidden lg:block mr-5 mb-2 lg:mb-0">
          <span className=' text-3xl text-white'>SIP WITH US!</span>
        </div>

        <div className="flex flex-wrap justify-center">
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Footer Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fas fa-gem mr-3 text-3xl text-white"></i>
                SUMMER-MIXIOLOGY
              </h6>
              <p className='text-white text-5xl'>
               THE ART OF  THE FRENCH COCKTAIL
              </p>
              <p className='py-4'>FOLLOW</p>
            </div>

            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">PRODUCTS</h6>
              <ul className="list-none">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">COCKTAILS</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">MOCKTAILS</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">SOFT DRINKS</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">BEVERAGES</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">Useful links</h6>
              <ul className="list-none">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Settings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Orders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4">
              <h6 className="text-lg font-semibold mb-4">Contact</h6>
              <p className="flex items-center mb-2">
                <i className="fas fa-home mr-2"></i>
                41 JUTA STREET,BRAAMFONTEIN ,JOBURG
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-envelope mr-2"></i>
                info@summermix.com
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i>
                + 01 234 567 88
              </p>
              <p className="flex items-center">
                <i className="fas fa-print mr-2"></i>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className="bg-gray-200 text-center p-4">
        © 2021 Copyright:
        <a href="" className="text-gray-600 hover:text-gray-900 font-semibold">
          summermixiology.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;



