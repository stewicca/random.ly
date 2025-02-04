import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  active?: string;
  inactive?: string;
};

export default function NavLinks({
  active = "text-blue",
  inactive = "text-black/50 hover:text-black",
}: NavLinkProps) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-works", label: "Our Works" },
  ];

  return (
    <div className="flex w-full justify-center">
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "px-4 py-2 text-lg font-medium transition-colors duration-500",
                pathname === link.href ? active : inactive,
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
