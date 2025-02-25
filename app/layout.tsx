'use client'

import localFont from "next/font/local";
import "./globals.css";
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import { Ripple } from "@/components/magicui/ripple";
import { Navbar } from "@/components/custom/navbar";
import Contact from "@/components/custom/contact";
import ContactNew from "@/components/custom/contactNew";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserratReg = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  style: "normal",
  weight: "400", 
  variable: "--font-montserrat-reg", 
});

const montserratBld = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  style: "bold",
  weight: "700", 
  variable: "--font-montserrat-bld", 
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { toast } = useToast()

  async function handleSubmit(event:React.ChangeEvent<HTMLFormElement>) {

    event.preventDefault();
    const formData = new FormData(event.target)
    try {
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])
        toast({
          title: "Success!",
          description: "Your message has been sent successfully",
          className:"border border-2 bg-green-50 border-green-300"
        })
    } catch (err) {
        console.error(err);
        toast({
          className:"border border-2 bg-red-50 border-red-300",
          title: "Uh oh! Something went wrong.",
          description: "Please try resubmitting the form",
        })
    }
};

  return (
    <html lang="en">
      <body
        className={`${montserratReg.variable} ${montserratBld.variable} antialiased flex flex-col justify-start items-center w-full`}
      >
        <Navbar />
        {children}
        <footer className="w-full flex justify-center items-center">
          <ContactNew/>
        </footer>
      </body>
    </html>
  );
}
