"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-[#fafaf4] fixed z-30 flex justify-center p-4 md:p-0 h-fit w-full items-center transition-colors duration-200",
      )}
    >
      <div className="flex justify-end md:justify-center relative items-center  w-5/6 lg:w-4/5">
        <a href="/" className=" font-bold absolute text-[#3d8b80] text-xl md:top-[30%] left-0">grincraft</a>
        <NavigationMenu       className={cn(
        "hidden md:block uppercase  text-black w-full p-4",
        // isScrolled ? "" : "bg-[#469f93] text-white rounded-full p-2"
      )}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  What we do
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Who we are
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#book" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Book a consultation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden bg-[#3d8b80] text-white"variant="outline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
</Button>
          </SheetTrigger>
          <SheetContent className="bg-[#fafaf4]" side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-[#3d8b80]">grincraft</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4 mt-4">
              <ul className="flex flex-col justiy-center items-center gap-4">
              <SheetClose asChild>
              <a className="transition-all uppercase font-semibold tracking-wider" href="/">
              What we do
                </a>
              </SheetClose>
              <SheetClose asChild>
              <a className="transition-all uppercase font-semibold tracking-wider" href="/#about">
              Who we are
                </a>
              </SheetClose>
              <SheetClose asChild>
              <a className="transition-all uppercase font-semibold tracking-wider" href="/#services">
              Our work
                </a>
              </SheetClose>
              <SheetClose asChild>
              <a className="transition-all uppercase font-semibold tracking-wider" href="#book">
              Book a consultation
                </a>
              </SheetClose>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
