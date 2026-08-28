import { useState, type ReactNode } from 'react'
import type { ComboId } from '../../data/combos'
import { useLanguage } from '../../i18n/LanguageContext'
import { comboContent } from '../../i18n/comboContent'
import { packageDetailContent } from '../../i18n/packageDetailContent'
import { sectionTitle } from '../../lib/styles'
import { ComboPricingTable } from './ComboPricingTable'

type ComboDetailSectionsProps = {
  comboId: ComboId
}

type ScheduleTab = 'pickup' | 'itinerary'

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

export function ComboDetailSections({ comboId }: ComboDetailSectionsProps) {
  const { lang } = useLanguage()
  const combo = comboContent[lang].combos[comboId]
  const shared = packageDetailContent[lang]
  const { labels } = shared
  const [scheduleTab, setScheduleTab] = useState<ScheduleTab>('pickup')

  const whatToBring = combo.whatToBring ?? shared.whatToBring

  return (
    <div className="ml-5 grid gap-10 md:ml-0">
      <section>
        <h2 className={sectionTitle}>
          {lang === 'en' ? 'Prices' : 'Harga'}
        </h2>
        <div className="mt-5">
          <ComboPricingTable
            groups={combo.priceGroups}
            perPersonLabel={labels.perPerson}
          />
        </div>
      </section>

      <section className="border border-line bg-white p-4 md:p-8">
        <h2 className={sectionTitle}>{labels.includedTitle}</h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {combo.includes.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </section>

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

        <div className="mt-5">
          {scheduleTab === 'pickup' ? (
            <ul className="divide-y divide-line rounded-sm border border-line bg-white">
              {combo.pickupSlots.map((slot) => (
                <li
                  key={slot.areaKey}
                  className="flex flex-col gap-1.5 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-forest">
                    {shared.pickupAreas[slot.areaKey]}
                  </span>
                  <span className="w-fit shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-semibold text-river">
                    {slot.time}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <ol className="grid gap-4">
                {combo.itinerary.map((step) => (
                  <li
                    key={step.time}
                    className="grid gap-3 border border-line bg-white p-4 sm:grid-cols-[7.5rem_1fr]"
                  >
                    <p className="text-xs font-bold tracking-wider text-river uppercase sm:pt-0.5">
                      {step.time}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
              {combo.itineraryNote ? (
                <p className="mt-4 text-sm leading-relaxed text-muted italic">
                  {combo.itineraryNote}
                </p>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.whatToBring}
          </h3>
          <ul className="mt-4 grid gap-2">
            {whatToBring.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.additionalInfo}
          </h3>
          <ul className="mt-4 grid gap-2">
            {shared.additionalInfo.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
        <div className="border border-line bg-white p-5 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-forest">
            {labels.termsConditions}
          </h3>
          <ul className="mt-4 grid gap-2">
            {shared.terms.map((item) => (
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
