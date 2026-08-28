import type { PricePair } from '../../data/tourSchedules'

type PriceRow = {
  label: string
  single: string
  tandem: string
}

type PackagePricingTableProps = {
  rows: PriceRow[]
  labels: {
    option: string
    single: string
    tandem: string
    perPerson: string
    twoPersons: string
  }
  footnote?: string
}

export function PackagePricingTable({
  rows,
  labels,
  footnote,
}: PackagePricingTableProps) {
  return (
    <div className="border border-line bg-white">
      {/* Mobile: stacked cards */}
      <ul className="divide-y divide-line md:hidden">
        {rows.map((row) => (
          <li key={row.label} className="p-4">
            <p className="text-sm font-semibold leading-snug text-forest">
              {row.label}
            </p>
            <dl className="mt-3 grid gap-3">
              <PriceRowMobile
                label={labels.single}
                amount={row.single}
                note={labels.perPerson}
              />
              <PriceRowMobile
                label={labels.tandem}
                amount={row.tandem}
                note={labels.twoPersons}
              />
            </dl>
          </li>
        ))}
      </ul>

      {/* Desktop: table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-forest text-foam">
              <th className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase">
                {labels.option}
              </th>
              <th className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase">
                {labels.single}
              </th>
              <th className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase">
                {labels.tandem}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? 'bg-foam/60' : 'bg-white'}
              >
                <td className="px-6 py-4 align-top text-[0.95rem] font-semibold text-forest">
                  {row.label}
                </td>
                <td className="px-6 py-4 align-top">
                  <PriceCell amount={row.single} note={labels.perPerson} />
                </td>
                <td className="px-6 py-4 align-top">
                  <PriceCell amount={row.tandem} note={labels.twoPersons} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote ? (
        <p className="border-t border-line bg-mist/40 px-4 py-3 text-sm text-muted md:px-6">
          {footnote}
        </p>
      ) : null}
    </div>
  )
}

function PriceRowMobile({
  label,
  amount,
  note,
}: {
  label: string
  amount: string
  note: string
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-sm bg-foam/70 px-3 py-2.5">
      <dt className="shrink-0 text-xs font-semibold text-muted">{label}</dt>
      <dd className="min-w-0 text-right">
        <p className="text-sm font-bold tracking-tight text-forest tabular-nums">
          IDR {amount}
        </p>
        <p className="text-[0.7rem] text-muted">{note}</p>
      </dd>
    </div>
  )
}

function PriceCell({ amount, note }: { amount: string; note: string }) {
  return (
    <div>
      <p className="text-lg font-bold tracking-tight text-forest tabular-nums">
        IDR {amount}
      </p>
      <p className="mt-0.5 text-xs text-muted">{note}</p>
    </div>
  )
}

export function buildUbudPriceRows(
  packageId: 'north-ubud' | 'south-ubud',
  prices: Record<
    'north-ubud' | 'south-ubud',
    {
      withoutTransfer: PricePair
      withUbudTransfer: PricePair
      withOutsideUbudTransfer: PricePair
    }
  >,
  labels: {
    withoutTransfer: string
    withUbudTransfer: string
    withOutsideUbudTransfer: string
  },
): PriceRow[] {
  const p = prices[packageId]
  return [
    { label: labels.withoutTransfer, ...p.withoutTransfer },
    { label: labels.withUbudTransfer, ...p.withUbudTransfer },
    { label: labels.withOutsideUbudTransfer, ...p.withOutsideUbudTransfer },
  ]
}

export function buildBeachPriceRows(
  prices: {
    withCangguTransfer: PricePair
    withOutsideCangguTransfer: PricePair
  },
  labels: { withCangguTransfer: string; withOutsideCangguTransfer: string },
): PriceRow[] {
  return [
    { label: labels.withCangguTransfer, ...prices.withCangguTransfer },
    {
      label: labels.withOutsideCangguTransfer,
      ...prices.withOutsideCangguTransfer,
    },
  ]
}
