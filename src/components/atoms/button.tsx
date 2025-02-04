import { ReactNode } from "react";

type ButtonProps = {
  variant?: "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  size = "md",
  variant = "outline",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-500";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    outline:
      "bg-transparent border border-black text-black hover:bg-black/5 focus:ring-black",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}
