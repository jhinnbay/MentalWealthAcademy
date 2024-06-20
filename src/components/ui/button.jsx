import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white border border-solid border-primary-foreground text-primary-foreground hover:shadow-button",
        proposal1:
          "bg-[#232323] shadow-default text-white border-2 border-[#213977] hover:bg-[#545454] duration-300",
        proposal2:
          "bg-[#4983DB] shadow-default text-white border-2 border-[#213977] hover:bg-[#379F80] duration-300",
        cheez:
          "bg-[#FFBE3F] hover:bg-[#FFCC68] border border-solid border-primary-foreground text-primary-foreground hover:shadow-button",
        gradient:
          "bg-button_grad  border border-solid border-primary-foreground text-primary-foreground hover:shadow-button",
      },
      size: {
        default: "px-4 py-1 gap-3 duration-300",
        sm: "h-9 rounded-md px-3 duration-300",
        lg: "px-4 py-1 text-md gap-3 duration-300",
        icon: "h-10 w-10 duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
