import type { PackageId } from './site'

export type PricePair = { single: string; tandem: string }

export type UbudPriceTiers = {
  withoutTransfer: PricePair
  withUbudTransfer: PricePair
  withOutsideUbudTransfer: PricePair
}

export type BeachPriceTiers = {
  withCangguTransfer: PricePair
  withOutsideCangguTransfer: PricePair
}

export const ubudPrices: Record<'north-ubud' | 'south-ubud', UbudPriceTiers> = {
  'south-ubud': {
    withoutTransfer: { single: '495.000', tandem: '750.000' },
    withUbudTransfer: { single: '555.000', tandem: '975.000' },
    withOutsideUbudTransfer: { single: '645.000', tandem: '1.170.000' },
  },
  'north-ubud': {
    withoutTransfer: { single: '720.000', tandem: '900.000' },
    withUbudTransfer: { single: '825.000', tandem: '1.335.000' },
    withOutsideUbudTransfer: { single: '930.000', tandem: '1.575.000' },
  },
}

export const beachPrices: BeachPriceTiers = {
  withCangguTransfer: { single: '975.000', tandem: '1.575.000' },
  withOutsideCangguTransfer: { single: '1.050.000', tandem: '1.725.000' },
}

export type PickupSlot = { areaKey: string; time: string }

/** Shared morning / afternoon pickup windows for North & South Ubud tours */
export const ubudPickupSlots: Record<'morning' | 'afternoon', PickupSlot[]> = {
  morning: [
    { areaKey: 'nusaDuaJimbaran', time: '08.00 – 08.15' },
    { areaKey: 'kutaSeminyakLegian', time: '08.00 – 08.15' },
    { areaKey: 'canggu', time: '08.00 – 08.15' },
    { areaKey: 'sanur', time: '08.30 – 08.45' },
    { areaKey: 'ubud', time: '09.00 – 09.15' },
  ],
  afternoon: [
    { areaKey: 'nusaDuaJimbaran', time: '11.00 – 11.15' },
    { areaKey: 'kutaSeminyakLegian', time: '11.00 – 11.15' },
    { areaKey: 'canggu', time: '11.00 – 11.15' },
    { areaKey: 'sanur', time: '11.30 – 11.45' },
    { areaKey: 'ubud', time: '12.00 – 12.15' },
  ],
}

/** Beach tour pickup windows (morning, afternoon, sunset) */
export const beachPickupSlots: Record<
  'morning' | 'afternoon' | 'sunset',
  PickupSlot[]
> = {
  morning: [
    { areaKey: 'nusaDuaJimbaran', time: '07.45 – 08.00' },
    { areaKey: 'kutaSeminyakLegian', time: '07.45 – 08.00' },
    { areaKey: 'canggu', time: '08.00 – 08.15' },
    { areaKey: 'sanur', time: '07.45 – 08.00' },
    { areaKey: 'ubud', time: '07.45 – 08.00' },
  ],
  afternoon: [
    { areaKey: 'nusaDuaJimbaran', time: '10.45 – 11.00' },
    { areaKey: 'kutaSeminyakLegian', time: '10.45 – 11.00' },
    { areaKey: 'canggu', time: '11.00 – 11.15' },
    { areaKey: 'sanur', time: '10.45 – 11.00' },
    { areaKey: 'ubud', time: '10.45 – 11.00' },
  ],
  sunset: [
    { areaKey: 'nusaDuaJimbaran', time: '13.45 – 14.00' },
    { areaKey: 'kutaSeminyakLegian', time: '13.45 – 14.00' },
    { areaKey: 'canggu', time: '14.00 – 14.15' },
    { areaKey: 'sanur', time: '13.45 – 14.00' },
    { areaKey: 'ubud', time: '13.45 – 14.00' },
  ],
}

export function isUbudPackage(
  id: PackageId,
): id is 'north-ubud' | 'south-ubud' {
  return id === 'north-ubud' || id === 'south-ubud'
}
