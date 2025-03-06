import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Archive } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export async function IntroBox() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-start lg:justify-between items-center w-full min-h-screen">
      <FadeIn direction="none" delay={0}>
        <Image 
          alt="clinic image" 
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="/clinic.jpg"
          fill
          priority
        />
      </FadeIn>
      <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>
      
      <div className="relative z-10 w-full mx-auto px-4 font-extrabold sm:px-6 lg:px-10 flex flex-col justify-center items-start min-h-screen">
        <FadeIn direction="up" delay={200}>
          <h1 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
            Precision. Expertise. Excellence
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={400}>
          <p className="text-lg text-white/90 max-w-2xl mb-12 font-semibold">
            Rediscover your confidence with expert dental solutions. From single implants to full-mouth rehabilitation, we bring international expertise and state-of-the-art technology to your smile.
          </p>
        </FadeIn>
        
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <InteractiveHoverButton className="w-fit bg-white hover:bg-white/90">
            <a className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-medium text-black transition-colors"
               href="#">
              <span>Schedule a Consultation</span>
            </a>
          </InteractiveHoverButton>
          
        </div> */}
      </div>
    </div>
  );
}



