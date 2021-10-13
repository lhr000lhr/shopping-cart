export type Item = {
  sku: string
  name: string
  price: number
  isChecked?: boolean
}

export enum ItemSKUOption {
  IPD = 'ipd',
  MBP = 'mbp',
  ATV = 'atv',
  VGA = 'vga',
}

export const itemCreator =
  (sku: string) => (name: string) => (price: number) => (): Item => {
    return { sku, name, price }
  }

export const creatIpad = itemCreator(ItemSKUOption.IPD)('Super iPad')(549.99)
export const creatMBP = itemCreator(ItemSKUOption.MBP)('MacBook Pro')(1399.99)
export const creatATV = itemCreator(ItemSKUOption.ATV)('Apple TV')(109.5)
export const creatVGA = itemCreator(ItemSKUOption.VGA)('VGA adapter')(30.0)

const items = {
  [ItemSKUOption.IPD]: (): Item => creatIpad(),
  [ItemSKUOption.MBP]: (): Item => creatMBP(),
  [ItemSKUOption.ATV]: (): Item => creatATV(),
  [ItemSKUOption.VGA]: (): Item => creatVGA(),
}

export const createItem = (optin: ItemSKUOption): Item => {
  return items[optin]()
}
