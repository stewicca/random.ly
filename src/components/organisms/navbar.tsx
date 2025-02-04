"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/atoms/logo";
import Button from "@/components/atoms/button";
import LocalizationToggle from "@/components/atoms/localization-toggle";
import NavLinks from "@/components/molecules/nav-links";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const navbarRef = useRef(null);
  const animationTriggeredRef = useRef(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useGSAP(
    () => {
      const navbar = navbarRef.current;

      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 50 && !animationTriggeredRef.current) {
          gsap.fromTo(
            navbar,
            { y: -100, backgroundColor: "#F4F4F2" },
            {
              y: 0,
              backgroundColor: "#F4F4F2",
              duration: 0.5,
              ease: "power2.out",
              onStart: () => {
                animationTriggeredRef.current = true;
                setAnimationTriggered(true);
              },
            },
          );
        } else if (scrollY < 50 && animationTriggeredRef.current) {
          gsap.fromTo(
            navbar,
            { y: -100, backgroundColor: "transparent" },
            {
              y: 0,
              backgroundColor: "transparent",
              duration: 0.5,
              ease: "power2.out",
              onStart: () => {
                animationTriggeredRef.current = false;
                setAnimationTriggered(false);
              },
            },
          );
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    { scope: navbarRef },
  );

  return (
    <nav ref={navbarRef} className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-24 w-full max-w-[90%] items-center">
        <div className="flex-1">
          <Link
            href="/"
            className={clsx(
              "transition-all duration-500",
              !animationTriggered && "invert",
            )}
          >
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <NavLinks
            active={clsx(
              "font-semibold",
              animationTriggered ? "text-blue" : "text-white",
            )}
            inactive={clsx(
              animationTriggered
                ? "text-black/50 hover:text-black"
                : "text-white/80 hover:text-white",
            )}
          />
        </div>
        <div className="flex flex-1 items-center justify-end gap-12">
          <LocalizationToggle
            className={clsx(
              "transition-colors duration-500",
              animationTriggered ? "text-black" : "text-white",
            )}
          />
          <Button
            className={clsx(
              animationTriggered
                ? "border-black text-black hover:bg-black/5 focus:ring-black"
                : "border-white text-white hover:bg-white/5 focus:ring-white",
            )}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
