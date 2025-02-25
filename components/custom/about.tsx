'use client'

import React from "react";
import { useRouter } from 'next/navigation';

function Aboutbox() {
  const { push } = useRouter();
  return (
    <section
    id="about"
    className="dark:bg-gray-100 dark:text-gray-800 min-h-[600px] mt-10 w-full"
  >
    <div className="relative flex flex-col h-fit items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl">
      {/* Image Container */}
      <div className="h-fit w-full lg:w-1/2 md:max-w-xl flex items-center">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1643660526741-094639fbe53a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dental clinic"
        />
      </div>
  
      {/* Content Container with Overlap */}
      <div className="max-w-lg bg-white rounded-md md:max-w-xl md:z-10 md:shadow-lg lg:absolute lg:left-[40px] xl:left-[60px] lg:w-3/5 flex items-center">
        <div className="flex flex-col p-8">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
            About GrinCraft
          </h2>
          <p className="mt-4">
            At GrinCraft, we blend advanced dental techniques with a personalized
            approach, ensuring every patient receives the best care possible.
            Whether you are here for a routine checkup or specialized implant
            treatment, we are here to make your experience seamless and
            stress-free.
          </p>
  
          <div className="mt-8">
            <a
              href="#"
              className="inline-block w-full text-center text-lg rounded-full font-medium text-gray-100 bg-[#3d8b80] py-2 px-8 hover:bg-[469f93] hover:shadow-md md:w-48"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Aboutbox;
