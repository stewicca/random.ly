import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function Logo({ className }: { className?: string }) {
  return <Image src={logo} alt="Logo" className={className} />;
}
