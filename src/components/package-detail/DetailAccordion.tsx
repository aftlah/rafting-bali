import type { ReactNode } from 'react'

type DetailAccordionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function DetailAccordion({
  title,
  children,
  defaultOpen = true,
  className = '',
}: DetailAccordionProps) {
  return (
    <details
      open={defaultOpen}
      className={`group rounded-xl border-2 border-river-bright/70 bg-white shadow-sm ${className}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold text-accent marker:content-none [&::-webkit-details-marker]:hidden">
        {title}
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition group-open:rotate-180"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5.5L7 9.5L11 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>
      <div className="border-t border-river-bright/30 px-5 py-4">{children}</div>
    </details>
  )
}
