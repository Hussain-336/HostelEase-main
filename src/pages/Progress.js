import React from 'react'
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Progressbar = () => {
  return (
    <>
    {/* <Header/> */}
    <div className=' relative bg-[#f7fafc] h-auto py-10 border-t-8 '>
        {/* <h1 className='text-4xl font-bold realative flex justify-center items-center text-blue-600 py-6'>Progress</h1> */}
        <div class="max-w-sm mx-auto bg-[#85a4c0] rounded-md px-8 py-10 font-[sans-serif]">
  <h2 class="text-[#333] font-bold text-2xl text-center">Rating overview</h2>
  <div class="text-center my-8">
    <h3 class="text-[#333] font-extrabold text-5xl">4.0</h3>
    <div class="flex justify-center space-x-2 my-2">
      <svg class="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg class="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg class="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg class="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg class="w-6 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
    </div>
    <p class="text-base text-[#333] font-semibold">1,153 ratings</p>
  </div>
  <div class="space-y-4">
    <div class="flex items-center">
      <p class="text-base text-[#333] font-bold">5.0</p>
      <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <div class="bg-gray-300 rounded w-full h-4 ml-3">
        <div class="w-2/3 h-full rounded bg-[#facc15]"></div>
      </div>
      <p class="text-base text-[#333] font-bold ml-3">66%</p>
    </div>
    <div class="flex items-center">
      <p class="text-base text-[#333] font-bold">4.0</p>
      <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <div class="bg-gray-300 rounded w-full h-4 ml-3">
        <div class="w-1/3 h-full rounded bg-[#facc15]"></div>
      </div>
      <p class="text-base text-[#333] font-bold ml-3">33%</p>
    </div>
    <div class="flex items-center">
      <p class="text-base text-[#333] font-bold">3.0</p>
      <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <div class="bg-gray-300 rounded w-full h-4 ml-3">
        <div class="w-1/6 h-full rounded bg-[#facc15]"></div>
      </div>
      <p class="text-base text-[#333] font-bold ml-3">16%</p>
    </div>
    <div class="flex items-center">
      <p class="text-base text-[#333] font-bold">2.0</p>
      <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <div class="bg-gray-300 rounded w-full h-4 ml-3">
        <div class="w-1/12 h-full rounded bg-[#facc15]"></div>
      </div>
      <p class="text-base text-[#333] font-bold ml-3">8%</p>
    </div>
    <div class="flex items-center">
      <p class="text-base text-[#333] font-bold">1.0</p>
      <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <div class="bg-gray-300 rounded w-full h-4 ml-3">
        <div class="w-[6%] h-full rounded bg-[#facc15]"></div>
      </div>
      <p class="text-base text-[#333] font-bold ml-3">6%</p>
    </div>
  </div>
</div>
        </div>
          {/* <Footer/> */}
    </>
  );
}

export default Progressbar;