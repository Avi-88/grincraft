import * as React from "react";
import Image from "next/image";

function ServiceBox() {
  return (
    <div className="min-h-[100vh] w-full p-16 flex justify-center items-center  bg-[#1a1a1a]">
        <div className="flex w-full flex-col mg:flex-row items-center gap-12 justify-between">
            <div className="mg:max-w-2xl w-full mg:w-1/2 text-left order-2 mg:order-1">
                <h1 className="text-2xl font-extrabold text-white  mb-4 uppercase tracking-wide">
                    The Grincraft Difference
                </h1>
                <p className="text-white text-base">
                    We offer a wide range of services to help you achieve and maintain a healthy, beautiful smile.
                </p>
                <div className="text-white text-lg mt-6">
                    <h3 className="text-lg text-[#74c1b5] mb-2 font-semibold">EXPERT-LED IMPLANTS</h3>
                    <p className="text-base">We specialize in cutting-edge dental implants, restoring confidence with precision and care. Our internationally trained specialists ensure seamless, natural results tailored to you.</p>
                    <br/>
                    <h3 className="text-lg text-[#74c1b5] mb-2 font-semibold">ALL-IN-ONE CARE</h3>
                    <p className="text-base">From routine cleanings to full-mouth restoration, we offer comprehensive dental services under one roof—so your journey to a perfect smile is smooth and stress-free.</p>
                    <br/>
                    <h3 className="text-lg text-[#74c1b5] mb-2 font-semibold">COMFORT-FIRST DENTISTRY</h3>
                    <p className="text-base">Your experience matters. With pain-free techniques and a gentle, patient-focused approach, we make every visit relaxing and anxiety-free.</p>
                    <br/>
                    <h3 className="text-lg text-[#74c1b5] mb-2 font-semibold">TAILORED SMILE SOLUTIONS</h3>
                    <p className="text-base">No two smiles are the same—neither are our treatments. We craft personalized plans that align with your unique needs, ensuring long-lasting oral health and aesthetics.</p>
                </div>
            </div>
            <div className="w-full mg:w-1/2 order-1 mg:order-2 relative h-[500px] mg:h-screen">
                <Image 
                    className="object-cover"
                    src="/clinic-2.jpg" 
                    alt="Services"
                    fill
                    priority
                />
            </div>
        </div>
    </div>
  )
}

export default ServiceBox