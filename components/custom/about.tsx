'use client'

import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
 
import { useRouter } from 'next/navigation';
import Image from "next/image";
import CoreGroup from '../../public/core-group.jpg'

function Aboutbox() {
  const { push } = useRouter();
  return (
    <section
      id="about"
      className="dark:bg-gray-100 dark:text-gray-800 min-h-[600px]  mt-10 w-full"
    >
<div className="relative flex flex-col h-fit items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"> 
    <div className=" h-fit w-full lg:w-1/2 md:max-w-xl lg:h-fit">
        <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road"/>
    </div>
    <div
        className="max-w-lg bg-white rounded-md md:max-w-xl md:z-10 md:shadow-lg lg:absolute  lg:top-0  lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">About GrinCraft</h2>
            <p className="mt-4">
            At GrinCraft, we blend advanced dental techniques with a personalized approach, ensuring every patient receives the best care possible. Whether you are here for a routine checkup or specialized implant treatment, we are here to make your experience seamless and stress-free.
            </p>

            <div className="mt-8">
                <a href="#"
                    className="inline-block w-full text-center text-lg rounded-full font-medium text-gray-100 bg-[#3d8b80]  py-2 px-8 hover:bg-[469f93] hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
   
    </div>
    

</div>
    </section>
  );
}

export default Aboutbox;
