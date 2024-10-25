import React from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Section() {
  return (
    <div>
      <section className="relative bg-gray-100 flex justify-center items-center h-screen">
        <img src="MianSec.jpg" alt="" className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="top-0 left-0 w-full h-full bg-white bg-opacity-5 flex justify-center items-start" >
          <div className="relative text-black text-center p-8 bg-opacity-75 max-w-lg">
            <h3 className="text-3xl font-bold mb-4">Speciality Healthcare Services</h3>
            <div className="lg:flex lg:space-x-4 p-y-2">
              {/* Location Input */}
              <div className="flex items-center justify-between p-2 rounded-lg mb-4 bg-white flex-grow lg:max-w-xs">
                <FaLocationDot className="text-[#8B7B00] mr-2" />
                <input 
                  type="text" 
                  placeholder="Hyderabad" 
                  className="outline-none flex-grow text-black bg-transparent h-full"
                />
                <FaChevronDown className="text-[#8B7B00] ml-2" />
              </div>

              {/* Search Input */}
              <div className="flex bg-white p-2 rounded-lg mb-4 flex-grow lg:max-w-md">
                <FaSearch className="text-[#8B7B00] my-auto" />
                <input 
                  type="text" 
                  placeholder="Search Specialities/Doctors" 
                  className="outline-none flex-grow text-black bg-transparent h-10 w-100 ms-2" // Reduced height
                />
                <button className="bg-[#8B7B00] text-white font-bold py-2 px-4 rounded-lg ml-2">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
