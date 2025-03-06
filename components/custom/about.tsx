'use client'

import React from "react";
import { useRouter } from 'next/navigation';

function Aboutbox() {
  const { push } = useRouter();
  return (
    <section
    id="about"
    className="dark:bg-gray-100 px-20 h-fit py-20 w-full"
  >
    <div>
    <h1 className="text-2xl font-extrabold  mb-4 uppercase tracking-wide">
          ABOUT GRINCRAFT
        </h1>
        <div className="text-base max-w-4xl">
        <p >
        Grincraft Dental Clinic is more than just a dental office—we&apos;re redefining smiles with life-changing dental implants and comprehensive oral care.</p>
<br/>
<p>Led by internationally trained specialists, we craft personalized, natural-looking solutions that restore confidence and function. Beyond implants, we offer a full suite of treatments, ensuring lifelong oral health—all under one roof. </p>
<br/>
<p>Your smile is more than just teeth—it is a reflection of you. At Grincraft Dental Clinic, we make sure it shines at its absolute best.</p>
        </div>
    </div>
  </section>
  
  );
}

export default Aboutbox;
