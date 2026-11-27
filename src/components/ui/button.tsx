import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-mono text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 shadow-[3px_3px_0_0_hsl(135_92%_56%/0.3)]",
        destructive: "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90",
        outline:
          "border border-accent-cyber/75 bg-card/90 text-accent-cyber hover:bg-accent-cyber hover:text-accent-cyber-foreground shadow-[3px_3px_0_0_hsl(135_92%_56%/0.2)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:border-accent-cyber/60",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-accent-cyber underline-offset-4 hover:underline",
        hero: "bg-accent-cyber text-accent-cyber-foreground font-semibold border border-accent-cyber shadow-[4px_4px_0_0_hsl(38_100%_58%/0.8)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_hsl(38_100%_58%)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        social:
          "border border-border bg-card/95 text-foreground hover:border-accent-cyber hover:text-accent-cyber hover:bg-accent-cyber/10 shadow-[2px_2px_0_0_hsl(135_92%_56%/0.12)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
