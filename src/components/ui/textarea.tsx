import * as React from &ldquo;react&rdquo;

import { cn } from &ldquo;@/lib/utils&rdquo;

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<&ldquo;textarea&rdquo;>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        &ldquo;flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&rdquo;,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = &ldquo;Textarea&rdquo;

export { Textarea }
