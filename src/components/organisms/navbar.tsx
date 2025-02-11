"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Languages } from "lucide-react";
import Button from "@/components/atoms/button";
import logo from "../../../public/logo.svg";

export default function Navbar() {
  const navbarRef = useRef(null);
  const animationTriggeredRef = useRef(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-works", label: "Our Works" },
  ];

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

      handleScroll();
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
          <Link href="/" className="group focus:outline-none">
            <Image
              src={logo}
              alt="Logo"
              className={clsx(
                "transition-all duration-500 group-focus:ring-2 group-focus:ring-black group-focus:ring-offset-2",
                !animationTriggered && "invert",
              )}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 text-lg font-medium transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    pathname === link.href
                      ? animationTriggered
                        ? "font-semibold text-blue focus:ring-black"
                        : "font-semibold text-white focus:ring-white"
                      : animationTriggered
                        ? "text-black/50 hover:text-black focus:ring-black"
                        : "text-white/80 hover:text-white focus:ring-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 items-center justify-end gap-12">
          <button
            className={clsx(
              "flex items-center gap-3 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2",
              animationTriggered
                ? "text-black focus:ring-black"
                : "text-white focus:ring-white",
            )}
          >
            <Languages size={24} />
            <div className="flex items-center gap-1">
              <span>ENG</span>
              <ChevronDown size={20} />
            </div>
          </button>
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
