import React from 'react'
import { Link } from "react-router-dom";


const AllHostels = () => {
  return (
    <>
    <Header/>
    <div className='bg-[#f7fafc] py-11 space-y-12 border-t-8 ' >
        <h1 className='relative flex justify-center items-center text-5xl font-bold text-blue-700 '>All Hostels</h1>


    <div
      className="bg-[#85a4c0] grid sm:grid-cols-2 items-start shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-7xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src="./hb.jpg" alt='pic' className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">RENT :9000</h3>
        <h3 className="text-xl font-semibold text-white">Address :asdfgh</h3>
        <p className="mt-3 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        </p>
       

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img src='./ceo.jpg'alt='pic' className="w-9 h-9 rounded-full" />
          <div className="ml-4 flex-1">
            <p className="text-sm text-white font-semibold">Ahmed</p>
            <p className="text-xs text-white mt-0.5">CEO</p>
            <p className="text-xs text-white mt-0.5">Contact:03123456789</p>
          </div>
          <Link to="/Studentform">
          <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Book Now</button>
        </Link>
         
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </div>

    {/* card2 */}
    <div
      className="bg-[#85a4c0] grid sm:grid-cols-2 items-start shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-7xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src="./ha.jpg" alt='pic' className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">RENT :9000</h3>
        <h3 className="text-xl font-semibold text-white">Address :asdfgh</h3>
        <p className="mt-3 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        </p>
       

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img src='./ceo.jpg'alt='pic' className="w-9 h-9 rounded-full" />
          <div className="ml-4 flex-1">
            <p className="text-sm text-white font-semibold">Ahmed</p>
            <p className="text-xs text-white mt-0.5">CEO</p>
            <p className="text-xs text-white mt-0.5">Contact:03123456789</p>
          </div>
          <Link to="/Studentform">
          <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Book Now</button>
        </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </div>


    {/* card3 */}

    <div
      className="bg-[#85a4c0] grid sm:grid-cols-2 items-start shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-7xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src="./hc.jpg" alt='pic' className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">RENT :9000</h3>
        <h3 className="text-xl font-semibold text-white">Address :asdfgh</h3>
        <p className="mt-3 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        </p>
       

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img src='./ceo.jpg' alt='pic' className="w-9 h-9 rounded-full" />
          <div className="ml-4 flex-1">
            <p className="text-sm text-white font-semibold">Ahmed</p>
            <p className="text-xs text-white mt-0.5">CEO</p>
            <p className="text-xs text-white mt-0.5">Contact:03123456789</p>
          </div>
          <Link to="/Studentform">
          <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Book Now</button>
        </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </div>

    {/* card4 */}

    <div
      className="bg-[#85a4c0] grid sm:grid-cols-2 items-start shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-7xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src="./ha.jpg" alt='pic' className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">RENT :9000</h3>
        <h3 className="text-xl font-semibold text-white">Address :asdfgh</h3>
        <p className="mt-3 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
        </p>
       

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img src='./ceo.jpg' alt='pic' className="w-9 h-9 rounded-full" />
          <div className="ml-4 flex-1">
            <p className="text-sm text-white font-semibold">Ahmed</p>
            <p className="text-xs text-white mt-0.5">CEO</p>
            <p className="text-xs text-white mt-0.5">Contact:03123456789</p>
          </div>
          <Link to="/Studentform">
          <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Book Now</button>
        </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </div>

    
    </div>
    <Footer/>
    </>
  )
}

export default AllHostels