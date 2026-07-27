import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap outline-none select-none transition-all duration-hover disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[#1565C0] to-[#1e40af] text-white hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(21,101,192,0.35),_inset_0_1px_1px_rgba(255,255,255,0.2)] shadow-[0_8px_20px_rgba(21,101,192,0.2),_inset_0_1px_1px_rgba(255,255,255,0.15)] border-none group relative overflow-hidden transition-all duration-hover",
        secondary: "bg-white/5 backdrop-blur-md text-slate-900 border border-slate-200 hover:border-primary hover:bg-slate-50 hover:-translate-y-[2px] hover:shadow-lg shadow-sm transition-all duration-hover",
        outline: "border border-border bg-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors",
        ghost: "hover:bg-primary/5 hover:text-primary transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] md:min-h-[56px] py-3 px-6 md:py-3.5 md:px-8 rounded-full text-[15px] md:text-[16px] font-semibold",
        sm: "min-h-[44px] py-2 px-4 rounded-full text-[14px] font-medium",
        lg: "min-h-[44px] md:min-h-[64px] py-4 px-8 md:py-4 md:px-10 rounded-full text-[16px] md:text-[18px] font-bold",
        icon: "min-h-[44px] min-w-[44px] h-11 w-11 md:h-12 md:w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
