import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Archive } from "lucide-react";

export async function IntroBox() {
  return (
    <div className="flex flex-col  lg:flex-row justify-start lg:justify-between items-center gap-8 w-full">
      <img alt="clinic image" className="absolute top-0 left-0 h-[100vh] z-0 w-full object-cover" src={"/clinic.jpg"}/>
      <div className="absolute top-0 left-0 h-[100vh] inset-0 bg-gray-900 opacity-30 blur-2xl"></div>
    <div className="leading-10 z-10 w-full flex  flex-col justify-center items-start px-20 sm:min-h-[93vh] ">
    <p className="text-white text-2xl font-[1000]  uppercase tracking-widest">
    Precision. Expertise. Excellence 
    {/* in Dental Implants & Beyond. */}
    </p>
    <p className="text-white font-semibold tracking-wider ">
    Grin Craft Clinic is the premier destination for bespoke dental care and exceptional, life-enhancing results.
    </p>
    <div className="mt-12 flex flex-col max-w-2xl justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
      <InteractiveHoverButton className="w-fit border border-[#3d8b80]">
        <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  text-[
#3d8b80]  animate-fade-in-left"
            href="#">
            <span className="ml-2">Book an appointment</span>
        </a>
        </InteractiveHoverButton>
    </div>

</div>
    </div>
  );
}



