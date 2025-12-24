import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_20px_hsl(142_70%_45%/0.4)] hover:shadow-[0_0_30px_hsl(142_70%_45%/0.6)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-foreground/30 text-foreground bg-transparent hover:border-primary hover:text-primary backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-cta text-cta-foreground font-bold uppercase tracking-wider shadow-[0_0_30px_hsl(25_95%_53%/0.5)] hover:shadow-[0_0_50px_hsl(25_95%_53%/0.7)] hover:scale-105 hover:brightness-110",
        "cta-outline":
          "border-2 border-cta text-cta bg-transparent hover:bg-cta hover:text-cta-foreground",
        accent:
          "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_20px_hsl(270_70%_55%/0.4)] hover:shadow-[0_0_30px_hsl(270_70%_55%/0.6)]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-full px-4",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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