import clsx from "clsx";
import { ChevronDown, Languages } from "lucide-react";

export default function LocalizationToggle({
  className,
}: {
  className?: string;
}) {
  return (
    <button className={clsx("flex items-center gap-3", className)}>
      <Languages size={24} />
      <div className="flex items-center gap-1">
        <span>ENG</span>
        <ChevronDown size={20} />
      </div>
    </button>
  );
}
