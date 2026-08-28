import { useState, type ReactNode } from 'react'
import {
  beachPickupSlots,
  beachPrices,
  isUbudPackage,
  ubudPickupSlots,
  ubudPrices,
  type PickupSlot,
} from '../../data/tourSchedules'
import type { PackageId } from '../../data/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { packageDetailContent } from '../../i18n/packageDetailContent'
import { sectionTitle } from '../../lib/styles'
import {
  buildBeachPriceRows,
  buildUbudPriceRows,
  PackagePricingTable,
} from './PackagePricingTable'

type PackageDetailSectionsProps = {
  packageId: PackageId
  includes: string[]
}

type ScheduleTab = 'pickup' | 'itinerary'
type TripTab = string

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-[1.1rem] text-sm before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright">
      {children}
    </li>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
        active
          ? 'bg-forest text-foam'
          : 'bg-white text-muted hover:bg-mist hover:text-forest'
      }`}
    >
      {children}
    </button>
  )
}

function PickupList({
  slots,
  areaLabels,
}: {
  slots: PickupSlot[]
  areaLabels: Record<string, string>
}) {
  return (
    <ul className="divide-y divide-line rounded-sm border border-line bg-white">
      {slots.map((slot) => (
        <li
          key={slot.areaKey}
          className="flex flex-col gap-1.5 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <span className="text-forest">{areaLabels[slot.areaKey]}</span>
          <span className="w-fit shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-semibold text-river">
            {slot.time}
          </span>
        </li>
      ))}
    </ul>
  )
}

function ItineraryTimeline({
  label,
  steps,
}: {
  label: string
  steps: { time: string; text: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 font-display text-lg font-semibold text-forest">
        {label}
      </h3>
      <ol className="grid gap-4">
        {steps.map((step) => (
          <li
            key={`${label}-${step.time}`}
            className="grid gap-3 border border-line bg-white p-4 sm:grid-cols-[7.5rem_1fr]"
          >
            <p className="text-xs font-bold tracking-wider text-river uppercase sm:pt-0.5">
              {step.time}
            </p>
            <p className="text-sm leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function PackageDetailSections({
  packageId,
  includes,
}: PackageDetailSectionsProps) {
  const { lang } = useLanguage()
  const copy = packageDetailContent[lang]
  const { labels } = copy
  const pkgCopy = copy.packages[packageId]
  const ubud = isUbudPackage(packageId)

  const tripIds = pkgCopy.schedules.map((s) => s.id)
  const [scheduleTab, setScheduleTab] = useState<ScheduleTab>('pickup')
  const [tripTab, setTripTab] = useState<TripTab>(tripIds[0])

  const pickupSlots = ubud
    ? ubudPickupSlots
    : beachPickupSlots

  const priceRows = ubud
    ? buildUbudPriceRows(packageId, ubudPrices, labels)
    : buildBeachPriceRows(beachPrices, labels)

  const tableLabels = {
    option: lang === 'en' ? 'Transfer option' : 'Opsi transfer',
    single: labels.single,
    tandem: labels.tandem,
    perPerson: labels.perPerson,
    twoPersons: labels.twoPersons,
  }

  const activePickup =
    tripTab in pickupSlots
      ? pickupSlots[tripTab as keyof typeof pickupSlots]
      : pickupSlots.morning

  const activeItinerary = pkgCopy.schedules.find((s) => s.id === tripTab)

  return (
    <div className="ml-5 grid gap-10 md:ml-0">
      {/* Pricing + includes */}
      <section>
        <div className="mb-5">
          <h2 className={sectionTitle}>{labels.pricesTitle}</h2>
          <p className="mt-2 text-sm text-muted">{labels.minPersons}</p>
        </div>
        <PackagePricingTable
          rows={priceRows}
          labels={tableLabels}
          footnote={ubud ? labels.transferNote : undefined}
        />
      </section>

      <section className="border border-line bg-white p-4 md:p-8">
        <h2 className={sectionTitle}>{labels.includedTitle}</h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {includes.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </section>

      {/* Schedule */}
      <section>
        <h2 className={sectionTitle}>
          {lang === 'en' ? 'Schedule' : 'Jadwal'}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          <TabButton
            active={scheduleTab === 'pickup'}
            onClick={() => setScheduleTab('pickup')}
          >
            {labels.pickUpTime}
          </TabButton>
          <TabButton
            active={scheduleTab === 'itinerary'}
            onClick={() => setScheduleTab('itinerary')}
          >
            {labels.itinerary}
          </TabButton>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tripIds.map((id) => {
            const schedule = pkgCopy.schedules.find((s) => s.id === id)
            if (!schedule) return null
            return (
              <TabButton
                key={id}
                active={tripTab === id}
                onClick={() => setTripTab(id)}
              >
                {schedule.label}
              </TabButton>
            )
          })}
        </div>

        <div className="mt-5">
          {scheduleTab === 'pickup' ? (
            <PickupList
              slots={activePickup}
              areaLabels={copy.pickupAreas}
            />
          ) : activeItinerary ? (
            <ItineraryTimeline
              label={activeItinerary.label}
              steps={activeItinerary.steps}
            />
          ) : null}
        </div>
      </section>

      {/* Good to know */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.whatToBring}
          </h3>
          <ul className="mt-4 grid gap-2">
            {copy.whatToBring.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.additionalInfo}
          </h3>
          <ul className="mt-4 grid gap-2">
            {copy.additionalInfo.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.termsConditions}
          </h3>
          <ul className="mt-4 grid gap-2">
            {copy.terms.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
          <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-muted">
            {labels.groupBookingNote}
          </p>
        </div>
      </section>
    </div>
  )
}
