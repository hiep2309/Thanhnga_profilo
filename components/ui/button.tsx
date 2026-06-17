import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-gradient-to-r from-primary-pink to-[#f5b4c8] px-6 py-3.5 text-sm text-white shadow-soft hover:opacity-95",
        secondary:
          "rounded-full border-2 border-primary-pink/60 bg-white px-6 py-3.5 text-sm text-primary-pink shadow-card hover:bg-secondary-pink/40",
        ghost:
          "rounded-full bg-transparent px-4 py-2 text-sm text-muted hover:text-charcoal",
        social:
          "rounded-[24px] px-4 py-3.5 text-sm shadow-soft",
        "social-outline":
          "rounded-[24px] border-2 border-primary-pink/60 bg-white/80 px-4 py-3.5 text-sm text-primary-pink shadow-card backdrop-blur-sm",
      },
      size: {
        default: "h-auto min-h-[48px]",
        sm: "min-h-[40px] px-4 py-2 text-xs",
        lg: "min-h-[52px] px-8 py-4 text-base",
        icon: "h-11 w-11 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
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
