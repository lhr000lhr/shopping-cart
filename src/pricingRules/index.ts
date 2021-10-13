import { Item, ItemSKUOption, creatATV } from '../items'

interface pricingRule {
  (items: Item[]): {
    items: Item[]
    currentPrice: number
  }
}

export const appleTVRule: pricingRule = (items) => {
  // - we're going to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
  const appleTVs: Item[] = []
  const countedItem: Item[] = items.map((item) => {
    if (item.sku === ItemSKUOption.ATV) {
      item.isChecked = true
      appleTVs.push(item)
    }
    return item
  })

  const appleTV = creatATV()
  const total = appleTVs.length
  const discountedPrice = Math.floor(total / 3) * 2 * appleTV.price
  const restPrice = (total % 3) * appleTV.price
  const currentPrice = discountedPrice + restPrice

  return {
    items: countedItem,
    currentPrice,
  }
}

export const ipadRule: pricingRule = (item) => {
  let items: Item[]

  return {
    items,
    currentPrice: 0,
  }
}

export const macbookRule: pricingRule = (item) => {
  let items: Item[]

  return {
    items,
    currentPrice: 0,
  }
}
