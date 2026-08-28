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
import { DetailAccordion } from './DetailAccordion'

type PackageDetailSectionsProps = {
  packageId: PackageId
  includes: string[]
}

type AccordionId = 'pickup' | 'itinerary' | 'bring' | 'info' | 'terms'

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-[1.1rem] before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright">
      {children}
    </li>
  )
}

function PriceTier({
  label,
  single,
  tandem,
  labels,
}: {
  label: string
  single: string
  tandem: string
  labels: (typeof packageDetailContent)['en']['labels']
}) {
  return (
    <div className="border border-line bg-foam/50 p-5">
      <h3 className="text-[0.8rem] font-bold tracking-wider text-river uppercase">
        {label}
      </h3>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold text-muted">{labels.single}</dt>
          <dd className="mt-1 font-display text-xl font-semibold text-forest">
            IDR {single}
            <span className="text-sm font-sans font-normal text-muted">
              {labels.perPerson}
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold text-muted">{labels.tandem}</dt>
          <dd className="mt-1 font-display text-xl font-semibold text-forest">
            IDR {tandem}
            <span className="ml-1 text-sm font-sans font-normal text-muted">
              {labels.twoPersons}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  )
}

function PickupSchedule({
  title,
  slots,
  areaLabels,
}: {
  title: string
  slots: PickupSlot[]
  areaLabels: Record<string, string>
}) {
  return (
    <div className="border border-line bg-foam/40">
      <p className="border-b border-line bg-white px-4 py-3 text-sm font-bold tracking-wider text-forest uppercase">
        {title}
      </p>
      <ul className="divide-y divide-line">
        {slots.map((slot) => (
          <li
            key={`${title}-${slot.areaKey}`}
            className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
          >
            <span className="text-forest">{areaLabels[slot.areaKey]}</span>
            <span className="shrink-0 font-medium text-river">{slot.time}</span>
          </li>
        ))}
      </ul>
    </div>
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
    <div className="border border-line bg-white p-5">
      <h3 className="font-display text-lg font-semibold text-forest">{label}</h3>
      <ol className="mt-4 grid gap-0">
        {steps.map((step, i) => (
          <li
            key={`${label}-${step.time}`}
            className={`relative border-l-2 border-river/35 pb-5 pl-5 last:pb-0 ${
              i === steps.length - 1 ? 'border-l-transparent' : ''
            }`}
          >
            <span
              className="absolute top-0 -left-[5px] size-2 rounded-full bg-river-bright"
              aria-hidden="true"
            />
            <p className="text-xs font-bold tracking-wider text-river uppercase">
              {step.time}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
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

  const [openSection, setOpenSection] = useState<AccordionId | null>('itinerary')

  const toggle = (id: AccordionId) =>
    setOpenSection((prev) => (prev === id ? null : id))

  return (
    <div className="grid gap-12">
      {/* Prices */}
      <section>
        <div className="mb-5">
          <h2 className={sectionTitle}>{labels.pricesTitle}</h2>
          <p className="mt-2 text-sm text-muted">{labels.minPersons}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {ubud ? (
            <>
              <PriceTier
                label={labels.withoutTransfer}
                single={ubudPrices[packageId].withoutTransfer.single}
                tandem={ubudPrices[packageId].withoutTransfer.tandem}
                labels={labels}
              />
              <PriceTier
                label={labels.withUbudTransfer}
                single={ubudPrices[packageId].withUbudTransfer.single}
                tandem={ubudPrices[packageId].withUbudTransfer.tandem}
                labels={labels}
              />
              <PriceTier
                label={labels.withOutsideUbudTransfer}
                single={ubudPrices[packageId].withOutsideUbudTransfer.single}
                tandem={ubudPrices[packageId].withOutsideUbudTransfer.tandem}
                labels={labels}
              />
            </>
          ) : (
            <>
              <PriceTier
                label={labels.withCangguTransfer}
                single={beachPrices.withCangguTransfer.single}
                tandem={beachPrices.withCangguTransfer.tandem}
                labels={labels}
              />
              <PriceTier
                label={labels.withOutsideCangguTransfer}
                single={beachPrices.withOutsideCangguTransfer.single}
                tandem={beachPrices.withOutsideCangguTransfer.tandem}
                labels={labels}
              />
            </>
          )}
        </div>
        {ubud ? (
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-forest">*</span> {labels.transferNote}
          </p>
        ) : null}
      </section>

      {/* Included */}
      <section className="border border-line bg-white p-6 md:p-8">
        <h2 className={sectionTitle}>{labels.includedTitle}</h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {includes.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </section>

      {/* Accordions */}
      <section className="grid gap-2">
        <DetailAccordion
          title={labels.pickUpTime}
          open={openSection === 'pickup'}
          onToggle={() => toggle('pickup')}
        >
          <div
            className={`grid gap-4 ${
              ubud ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3'
            }`}
          >
            {ubud ? (
              <>
                <PickupSchedule
                  title={labels.morningTrip}
                  slots={ubudPickupSlots.morning}
                  areaLabels={copy.pickupAreas}
                />
                <PickupSchedule
                  title={labels.afternoonTrip}
                  slots={ubudPickupSlots.afternoon}
                  areaLabels={copy.pickupAreas}
                />
              </>
            ) : (
              <>
                <PickupSchedule
                  title={labels.morningTrip}
                  slots={beachPickupSlots.morning}
                  areaLabels={copy.pickupAreas}
                />
                <PickupSchedule
                  title={labels.afternoonTrip}
                  slots={beachPickupSlots.afternoon}
                  areaLabels={copy.pickupAreas}
                />
                <PickupSchedule
                  title={labels.sunsetTrip}
                  slots={beachPickupSlots.sunset}
                  areaLabels={copy.pickupAreas}
                />
              </>
            )}
          </div>
        </DetailAccordion>

        <DetailAccordion
          title={labels.itinerary}
          open={openSection === 'itinerary'}
          onToggle={() => toggle('itinerary')}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {pkgCopy.schedules.map((schedule) => (
              <ItineraryTimeline
                key={schedule.id}
                label={schedule.label}
                steps={schedule.steps}
              />
            ))}
          </div>
        </DetailAccordion>

        <DetailAccordion
          title={labels.whatToBring}
          open={openSection === 'bring'}
          onToggle={() => toggle('bring')}
        >
          <ul className="grid gap-2 sm:grid-cols-2">
            {copy.whatToBring.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </DetailAccordion>

        <DetailAccordion
          title={labels.additionalInfo}
          open={openSection === 'info'}
          onToggle={() => toggle('info')}
        >
          <ul className="grid gap-2">
            {copy.additionalInfo.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </DetailAccordion>

        <DetailAccordion
          title={labels.termsConditions}
          open={openSection === 'terms'}
          onToggle={() => toggle('terms')}
        >
          <ul className="grid gap-2">
            {copy.terms.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
          <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
            {labels.groupBookingNote}
          </p>
        </DetailAccordion>
      </section>
    </div>
  )
}
