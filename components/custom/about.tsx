'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { FadeIn } from "../ui/fade-in";

function Aboutbox() {
  const { push } = useRouter();
  return (
    <section
    id="about"
    className="dark:bg-gray-100 px-20 h-fit py-20 w-full"
  >
    <div>
      <FadeIn direction="up" delay={200}>
        <h1 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
          ABOUT GRINCRAFT
        </h1>
      </FadeIn>
      <div className="text-base max-w-4xl">
        <FadeIn direction="up" delay={400}>
          <p>
            Grincraft Dental Clinic is more than just a dental office—we&apos;re redefining smiles with life-changing dental implants and comprehensive oral care.
          </p>
        </FadeIn>
        <br/>
        <FadeIn direction="up" delay={600}>
          <p>
            Led by internationally trained specialists, we craft personalized, natural-looking solutions that restore confidence and function. Beyond implants, we offer a full suite of treatments, ensuring lifelong oral health—all under one roof.
          </p>
        </FadeIn>
        <br/>
        <FadeIn direction="up" delay={800}>
          <p>
            Your smile is more than just teeth—it is a reflection of you. At Grincraft Dental Clinic, we make sure it shines at its absolute best.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
  
  );
}

export default Aboutbox;
