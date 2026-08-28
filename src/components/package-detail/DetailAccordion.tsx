import type { ReactNode } from 'react'

type DetailAccordionProps = {
  title: string
  children: ReactNode
  open: boolean
  onToggle: () => void
}

export function DetailAccordion({
  title,
  children,
  open,
  onToggle,
}: DetailAccordionProps) {
  return (
    <div className="border border-line bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-semibold text-forest"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span
          className={`shrink-0 text-xl font-normal text-river transition ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open ? (
        <div className="border-t border-line px-5 py-5 text-muted">{children}</div>
      ) : null}
    </div>
  )
}
