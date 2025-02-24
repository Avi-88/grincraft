import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export async function IntroBox() {
  return (
    <div className="flex flex-col  lg:flex-row justify-start lg:justify-between items-center gap-8 w-full">
         <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
<div className="mx-auto w-full flex  flex-col justify-center items-center px-4 sm:min-h-[700px] sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
    <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">Welcome to
        <span className="border-b border-dotted border-slate-300"> grincraft</span>
    </p>

    <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900">
        <span className="inline-block">Comprehensive
            <span className="relative whitespace-nowrap text-[#3d8b80]">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#3d8b80]/50" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="inline-flex items-center">
          De
          <Image
            src={`/tooth-icon.svg`}
            alt="Tooth Icon"
            width={32} // Adjust size to match text
            height={32}
            className="mx-1 h-8 w-8 md:h-14 md:w-14 mt-2 text-[#3d8b80]"
          />
          tal Care
        </span>
            </span>
        </span>
        <span className="inline-block">for Your Smile</span>
    </h1>

    <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
        <span className="inline-block">Modern dentistry, personalized for you.</span>
        {/* <span className="inline-block">into your Notion workspaces.</span> */}
    </p>

    <div className="mt-12 flex flex-col max-w-2xl justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
      <InteractiveHoverButton className="w-fit">
        <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  text-[
#3d8b80]  animate-fade-in-left"
            href="#">
            <span className="ml-2">Book an appointment</span>
        </a>
        </InteractiveHoverButton>
        {/* <div className="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
            <button className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right" id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 flex-none fill-current text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
                <span className="ml-3"></span>
            </button>
        </div> */}
    </div>

</div>
    </div>
  );
}
