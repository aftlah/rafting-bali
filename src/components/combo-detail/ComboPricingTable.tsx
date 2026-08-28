import type { ComboPriceGroup } from '../../i18n/comboContent'

type ComboPricingTableProps = {
  groups: ComboPriceGroup[]
  perPersonLabel: string
}

export function ComboPricingTable({
  groups,
  perPersonLabel,
}: ComboPricingTableProps) {
  return (
    <div className="border border-line bg-white">
      <ul className="divide-y divide-line">
        {groups.map((group) => (
          <li key={group.title} className="p-4 md:p-6">
            <h3 className="text-sm font-semibold leading-snug text-forest md:text-base">
              {group.title}
            </h3>
            <ul className="mt-3 grid gap-2">
              {group.tiers.map((tier) => (
                <li
                  key={`${group.title}-${tier.label}`}
                  className="flex items-start justify-between gap-3 rounded-sm bg-foam/70 px-3 py-2.5 sm:px-4"
                >
                  <span className="text-sm text-muted">{tier.label}</span>
                  <span className="shrink-0 text-right">
                    <span className="text-sm font-bold tracking-tight text-forest tabular-nums">
                      IDR {tier.price}
                    </span>
                    <span className="block text-[0.7rem] text-muted">
                      {perPersonLabel}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
