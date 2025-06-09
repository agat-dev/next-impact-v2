import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="flex h-10 w-full rounded-full border border-lightblue/20 bg-white px-3 py-2 text-base text-mediumblue file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-lightblue focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lightblue/40 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pointer-events-auto"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
