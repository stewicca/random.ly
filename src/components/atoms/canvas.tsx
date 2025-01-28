"use client";

import { useEffect } from "react";
import { Gradient } from "@/lib/gradient";

export default function Canvast() {
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      className="fixed inset-0 -z-50"
      data-transition-in
    />
  );
}
