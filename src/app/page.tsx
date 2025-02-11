import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/organisms/hero"));

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-screen"></div>
    </>
  );
}
