"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ShiftCardProps {
  className?: string
  topContent?: React.ReactNode
  middleContent?: React.ReactNode
  topAnimateContent?: React.ReactNode
  bottomContent?: React.ReactNode
}

const ShiftCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
ShiftCardHeader.displayName = "ShiftCardHeader"

interface ShiftCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isHovered: boolean
}
const ShiftCardContent = React.forwardRef<
  HTMLDivElement,
  ShiftCardContentProps
>(({ isHovered, children, ...divProps }, ref) => {
  return (
    <div ref={ref} className={divProps.className}>{children}</div>
  )
})
ShiftCardContent.displayName = "ShiftCardContent"

const ShiftCard = React.forwardRef<HTMLDivElement, ShiftCardProps>(
  (
    {
      className,
      topContent,
      topAnimateContent,
      middleContent,
      bottomContent,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-[240px] w-[360px] md:min-h-[300px] md:w-[420px]",
          " group relative flex flex-col items-center justify-between overflow-hidden rounded-xl p-3 text-sm ",
          " hover:cursor-pointer bg-card  ",
          "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
          "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
          className
        )}
        {...props}
      >
        <ShiftCardHeader className="flex h-[46px] w-full flex-col relative text-primary-foreground ">
          <div className=" w-full">
            {topContent}
            {topAnimateContent}
          </div>
        </ShiftCardHeader>

        <div className="">
          {middleContent}
        </div>

        <ShiftCardContent
          isHovered={false}
          className="absolute bottom-0 left-0 right-0 flex flex-col gap-4  rounded-xl  "
        >
          <div className="flex w-[360px] md:w-[420px] flex-col gap-1  ">
            {bottomContent}
          </div>
        </ShiftCardContent>
      </div>
    )
  }
)

ShiftCard.displayName = "ShiftCard"

export { ShiftCard, ShiftCardHeader, ShiftCardContent }
export default ShiftCard
