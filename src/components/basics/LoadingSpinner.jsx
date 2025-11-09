import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const LoadingSpinner = ({ className, size = "default" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center p-8">
      <Loader2
        className={cn(
          "animate-spin text-primary-600",
          sizeClasses[size],
          className
        )}
      />
    </div>
  );
};

export default LoadingSpinner;
