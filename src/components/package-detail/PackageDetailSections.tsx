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
import { DetailAccordion } from './DetailAccordion'

type PackageDetailSectionsProps = {
  packageId: PackageId
  includes: string[]
}

function PriceLine({
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
    <div className="text-center">
      <p className="font-semibold text-river">{label}</p>
      <p className="mt-2 text-accent">
        {labels.single} IDR {single}
        {labels.perPerson}
      </p>
      <p className="mt-1 text-accent">
        {labels.tandem} IDR {tandem} {labels.twoPersons}
      </p>
    </div>
  )
}

function PickupBlock({
  title,
  slots,
  areaLabels,
}: {
  title: string
  slots: PickupSlot[]
  areaLabels: Record<string, string>
}) {
  return (
    <div>
      <p className="font-semibold text-forest">{title}</p>
      <ul className="mt-2 grid gap-1.5">
        {slots.map((slot) => (
          <li key={`${title}-${slot.areaKey}`} className="text-muted">
            <span className="font-medium text-forest">
              {areaLabels[slot.areaKey]}:
            </span>{' '}
            {slot.time}
          </li>
        ))}
      </ul>
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

  return (
    <div className="mt-12 grid gap-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border-2 border-river-bright/70 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-river/10 text-river">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="7" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <h2 className="font-display text-xl font-semibold text-accent">
            {labels.pricesTitle}
          </h2>
          <div className="mt-6 grid gap-6">
            {ubud ? (
              <>
                <PriceLine
                  label={labels.withoutTransfer}
                  single={ubudPrices[packageId].withoutTransfer.single}
                  tandem={ubudPrices[packageId].withoutTransfer.tandem}
                  labels={labels}
                />
                <PriceLine
                  label={labels.withUbudTransfer}
                  single={ubudPrices[packageId].withUbudTransfer.single}
                  tandem={ubudPrices[packageId].withUbudTransfer.tandem}
                  labels={labels}
                />
                <PriceLine
                  label={labels.withOutsideUbudTransfer}
                  single={ubudPrices[packageId].withOutsideUbudTransfer.single}
                  tandem={ubudPrices[packageId].withOutsideUbudTransfer.tandem}
                  labels={labels}
                />
              </>
            ) : (
              <>
                <PriceLine
                  label={labels.withCangguTransfer}
                  single={beachPrices.withCangguTransfer.single}
                  tandem={beachPrices.withCangguTransfer.tandem}
                  labels={labels}
                />
                <PriceLine
                  label={labels.withOutsideCangguTransfer}
                  single={beachPrices.withOutsideCangguTransfer.single}
                  tandem={beachPrices.withOutsideCangguTransfer.tandem}
                  labels={labels}
                />
              </>
            )}
          </div>
        </div>

        <div className="rounded-xl border-2 border-river-bright/70 bg-white p-6 text-center shadow-sm">
          <h2 className="font-display text-xl font-semibold text-accent">
            {labels.includedTitle}
          </h2>
          <ul className="mt-6 grid gap-2 text-left text-muted">
            {includes.map((item) => (
              <li
                key={item}
                className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
              >
                {item}
              </li>
            ))}
          </ul>
          {ubud && (
            <p className="mt-6 text-sm font-semibold text-accent">{labels.transferNote}</p>
          )}
        </div>
      </div>

      <DetailAccordion title={labels.pickUpTime}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ubud ? (
            <>
              <PickupBlock
                title={labels.morningTrip}
                slots={ubudPickupSlots.morning}
                areaLabels={copy.pickupAreas}
              />
              <PickupBlock
                title={labels.afternoonTrip}
                slots={ubudPickupSlots.afternoon}
                areaLabels={copy.pickupAreas}
              />
            </>
          ) : (
            <>
              <PickupBlock
                title={labels.morningTrip}
                slots={beachPickupSlots.morning}
                areaLabels={copy.pickupAreas}
              />
              <PickupBlock
                title={labels.afternoonTrip}
                slots={beachPickupSlots.afternoon}
                areaLabels={copy.pickupAreas}
              />
              <PickupBlock
                title={labels.sunsetTrip}
                slots={beachPickupSlots.sunset}
                areaLabels={copy.pickupAreas}
              />
            </>
          )}
        </div>
      </DetailAccordion>

      <DetailAccordion title={labels.itinerary}>
        <div className="grid gap-8 lg:grid-cols-2">
          {pkgCopy.schedules.map((schedule) => (
            <div key={schedule.id}>
              <p className="font-semibold text-forest">{schedule.label}</p>
              <ul className="mt-3 grid gap-2">
                {schedule.steps.map((step) => (
                  <li key={`${schedule.id}-${step.time}`} className="text-muted">
                    <span className="font-medium text-forest">{step.time}:</span>{' '}
                    {step.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DetailAccordion>

      <DetailAccordion title={labels.whatToBring}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {copy.whatToBring.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-muted before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
            >
              {item}
            </li>
          ))}
        </ul>
      </DetailAccordion>

      <DetailAccordion title={labels.additionalInfo}>
        <ul className="grid gap-2">
          {copy.additionalInfo.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-muted before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
            >
              {item}
            </li>
          ))}
        </ul>
      </DetailAccordion>

      <DetailAccordion title={labels.termsConditions}>
        <ul className="grid gap-2">
          {copy.terms.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-muted before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold text-accent">{labels.groupBookingNote}</p>
      </DetailAccordion>
    </div>
  )
}
