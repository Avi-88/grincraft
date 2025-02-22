import { IntroBox } from "@/components/custom/intro";
//import { Clients } from "@/components/custom/clients";
import Image from "next/image";
import Aboutbox from "@/components/custom/about";
import ServicesBox from "@/components/custom/services";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat-reg)]">
      <main className="flex flex-col row-start-2 justify-start w-full  overflow-hidden items-center sm:items-start font-[family-name:var(--font-montserrat-reg)]">
        <IntroBox />
        {/* <Clients /> */}

        <Aboutbox />
        
        <ServicesBox />
      </main>
    // </div>
  );
}
