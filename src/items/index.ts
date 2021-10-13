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

const items = {
  [ItemSKUOption.IPD]: (): Item => {
    return { sku: ItemSKUOption.IPD, name: 'Super iPad', price: 549.99 }
  },
  [ItemSKUOption.MBP]: (): Item => {
    return { sku: ItemSKUOption.MBP, name: 'MacBook Pro', price: 1399.99 }
  },
  [ItemSKUOption.ATV]: (): Item => {
    return { sku: ItemSKUOption.ATV, name: 'Apple TV', price: 109.5 }
  },
  [ItemSKUOption.VGA]: (): Item => {
    return { sku: ItemSKUOption.VGA, name: 'VGA adapter', price: 30.0 }
  },
}

export const createItem = (optin: ItemSKUOption): Item => {
  return items[optin]()
}
