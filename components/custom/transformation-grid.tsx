'use client'

import React from "react";
import Image from "next/image";
import { FadeIn } from "../ui/fade-in";

function TransformationGrid() {
  return (
    <section className="py-32 w-full flex justify-center items-center">
      <div className="max-w-[75vw] w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn direction="up" delay={200}>
            <h1 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
              Smile Transformations
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={400}>
            <p className="text-base">
              Real Patients, Remarkable Results. GrinCraft smile makeovers favor careful, nuanced improvements, for natural results that ensure overall balance and facial harmony.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/ApaSiteBeforeAfter-Charlotte-C-1024x1024.jpg"
                src="/BA1.JPG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 2 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/NinaM-BA-1024x1024.jpg"
                src="/BA3.JPG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 3 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/ApaSiteBeforeAfter-Steve-L-1024x1024.jpg"
                src="/BA2.PNG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 4 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/SchikS-BA-1024x1024.jpg"
                src="/BA4.JPG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 5 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/ApaSiteBeforeAfter-Lindsey-E-1024x1024.jpg"
                src="/BA5.JPG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 6 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/NassrineT-BA-1024x1024.jpg"
                src="/BA6.JPG"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 7 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/DovG-BA-1024x1024.jpg"
                src="/BA7.jpg"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 8 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                // src="https://apaaesthetic.com/wp-content/uploads/2024/11/Leen-Full-Face-Side-by-Side-1024x1024.jpg"
                src="/BA8.jpg"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>

          {/* Grid Item 9 */}
          <FadeIn direction="up" delay={600}>
            <div className="group relative aspect-square overflow-hidden">
              <Image
                src="https://apaaesthetic.com/wp-content/uploads/2024/11/DanaB-BA-1024x1024.jpg"
                alt="Smile transformation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white group-hover:bg-black p-2 uppercase text-base underline underline-offset-4 font-light tracking-wide">See full transformation</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={800}>
          <div className="text-center mt-16">
            <button className="text-gray-900 hover:text-[#74c1b5] uppercase text-base underline underline-offset-4 font-light tracking-wide transition-colors duration-300">
              View More Stories
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default TransformationGrid; 