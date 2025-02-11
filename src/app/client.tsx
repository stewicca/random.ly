"use client";

import { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function RootClientComponent({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
