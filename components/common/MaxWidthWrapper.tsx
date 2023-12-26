import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
export default function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div
      className={cn("mx-auto w-full container px-4 md:px-12 py-3", className)}
    >
      {children}
    </div>
  );
}
