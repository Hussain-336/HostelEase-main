import React from 'react'
import { Link } from "react-router-dom";



const Hostels = () => {
  return (
    <>
  {/* <Header/> */}
    <div className='bg-[#f7fafc] min-h-full border-t-8  '>
        <h1 className='relative flex justify-center items-center text-5xl text-blue-500 font-bold py-10'> Cities</h1>
        <div className='relativ flex justify-center items-center space-x-8'>
       <div className=''>
        <div className="bg-[#85a4c0]  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src="./cityf.jpg"alt='pic' class="w-full h-full" />
      </div>

      <div className="p-6  ">
        <h3 class="text-white text-xl font-bold ">Gilgit</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
         
        </p>
        <h2 className='mt-4 text-sm  text-white leading-relaxed font-semibold'>Hostels:10</h2>
         
         <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
        
      </div>
    </div></div>
       <div className=''><div
      class="bg-[#85a4c0] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div classname="min-h-[256px]">
        <img src="./citya.jpg"alt='pic' classname="w-full h-72" />
      </div>

      <div class="p-6">
        <h3 class="text-white text-xl font-bold">Hunza</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
        </p>
        <h2 className='mt-4 text-sm text-white leading-relaxed font-semibold'>Hostels:15</h2>
          <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
      </div>
    </div></div>
    {/* card3 */}
    <div className=''><div
      class="bg-[#85a4c0] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div class="min-h-[256px]">
        <img src="./cityb.jpg"alt='pic' class="w-full h-64" />
      </div>

      <div class="p-6">
        <h3 class="text-white text-xl font-bold">Ghizer</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
            </p>
        <h2 className='mt-4 text-sm text-white leading-relaxed font-semibold'>Hostels:13</h2>
        <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
      </div>
    </div></div>
    
    </div>




    {/* female hostels */}

    <div className='py-24 relative flex justify-center items-center text-5xl text-white font-bold'>      
      <div className='relativ flex justify-center items-center space-x-8'>
       <div className=''>
        <div className="bg-[#85a4c0]   shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src="./cityc.jpg"alt='pic' class="w-full h-80" />
      </div>

      <div className="p-2  ">
        <h3 class="text-white text-xl font-bold ">Astore</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
          at fermentum dui. Maecenas.
        </p>
        <h2 className='mt-4 text-sm  text-white leading-relaxed font-semibold'>Hostels:7</h2>
        <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
      </div>
    </div></div>
       <div className=''><div
      class="bg-[#85a4c0] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div class="min-h-[256px]">
        <img src="./cityd.jpg"alt='pic' class="w-full h-72" />
      </div>

      <div class="p-6">
        <h3 class="text-white text-xl font-bold">Skardu</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
          at fermentum dui. Maecenas.
        </p>
        <h2 className='mt-4 text-sm text-white leading-relaxed font-semibold'>Hostels:18</h2>
        <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
      </div>
    </div></div>
    {/* card3 */}
    <div className=''><div
      class="bg-[#85a4c0] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div class="min-h-[256px]">
        <img src="./citye.jpg"alt='pic' class="w-full h-72" />
      </div>

      <div class="p-6">
        <h3 class="text-white text-xl font-bold">Diamer</h3>
        <p class="mt-4 text-sm text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
          at fermentum dui. Maecenas.
        </p>
        <h2 className='mt-4 text-sm text-white leading-relaxed font-semibold'>Hostels:12</h2>
        <Link className="  hover:text-[#b8cce0] text-[#ffffff] block font-semibold text-[15px]" to="/AllHostels">
        <button className='px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#2e43ff] bg-[#2e43ff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#b8cce0]'>Hostels</button>
              </Link>
      </div>
    </div></div>
    
    </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Hostels;