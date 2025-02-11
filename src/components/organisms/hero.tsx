"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const wordContainerRef = useRef(null);

  useGSAP(
    () => {
      const words: HTMLDivElement[] = gsap.utils.toArray(".rotating-word");

      gsap.set(words, {
        yPercent: (i) => (i ? 120 : 0),
        opacity: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      words.forEach((word, i) => {
        const next = words[i + 1];
        if (next) {
          tl.to(word, { yPercent: -120, duration: 0.5 }, "+=1.5").to(
            next,
            { yPercent: 0, duration: 0.5 },
            "<",
          );
        } else {
          tl.to(word, { yPercent: -120, duration: 0.5 }, "+=1.5").fromTo(
            words[0],
            { yPercent: 120 },
            { yPercent: 0, duration: 0.5, immediateRender: false },
            "<",
          );
        }
      });
    },
    { scope: wordContainerRef },
  );

  return (
    <header className="relative flex min-h-screen w-full flex-col justify-center">
      <div className="relative mx-auto flex w-full max-w-[85%] flex-col gap-12">
        <h1 className="flex flex-col gap-8 text-white">
          <div className="text-7xl">Prepare to Be Amazed by</div>
          <div className="font-geistMono text-9xl font-semibold">Random.ly</div>
          <span
            className="relative h-36 flex-grow overflow-hidden pb-[1vw] font-geistMono text-9xl font-semibold leading-[6vw]"
            ref={wordContainerRef}
          >
            <div className="rotating-word absolute left-0 top-0 w-full text-left opacity-0">
              Studio
            </div>
            <div className="rotating-word absolute left-0 top-0 w-full text-left opacity-0">
              Awesome Design
            </div>
          </span>
        </h1>
        <button className="focus;ring-white group relative flex h-20 w-fit items-center gap-6 overflow-hidden rounded-full pr-8 text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
          <div className="absolute left-0 h-20 w-20 rounded-full border-2 border-white transition-all duration-500 group-hover:w-full" />
          <ArrowRight className="h-20 w-20 rounded-full p-5 transition-all duration-500 group-hover:scale-y-[-1]" />
          <div className="text-3xl">LET'S DISCUSS</div>
        </button>
        <h2 className="absolute -bottom-[5%] right-0 flex flex-col gap-1 text-right text-xl text-white/70">
          <div>Creating Designs That Stand Out</div>
          <div>and Weave Your Story</div>
          <div>With Every Detail That's Found</div>
          <div>and Cherished in Memory</div>
        </h2>
      </div>
      <div className="absolute bottom-[5%] right-1/2 flex translate-x-1/2 items-center gap-4 text-xl text-white/70">
        <ArrowDown className="animate-bounce" />
        <div>There's Good Stuffs Below</div>
      </div>
    </header>
  );
}
