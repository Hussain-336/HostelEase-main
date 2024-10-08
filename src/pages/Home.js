import React from "react";

import About from "../components/About";
import Cities from './Cities';
import AllHostels from "../services/AllHostels";
import Progress from "./Progress";



const Home=()=>{
    return(
    <>
    <div className=" bg-[#f7fafc] text-blue-500 min-h-screen max-h-full py-56 font-bold  ">
        <h1 className="relative flex  items-center justify-center text-5xl">WELCOM TO <span className="px-4 bg-slate-600  rounded-full text-[#89c0ff]">HOSTELEASE</span></h1>
        <h2 className="relative flex  text-2xl items-center justify-center  text-blue-500 py-4">Find <span className="px-4 text-[#89c0ff] bg-slate-600  rounded-full">Best Hostel</span> Nearby you </h2>
        <h1 className="relative flex  items-center justify-center text-5xl">IN <span className="px-3 text-[#89c0ff] bg-slate-600  rounded-full">GILGIT-BALTISTAN</span></h1>
        <div class="flex rounded-md border-2 my-10 border-[hsl(246,93%,58%)]  overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search Hostel..."
          class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
        <button type='button' class="flex items-center justify-center bg-[#7ab3f0] hover:bg-[#52a3fa] px-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-[#5596db]">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <About/>
    <Cities/>
    <AllHostels/>
    <Progress/>
   
    
    
    </>
    );
}
export default Home;







