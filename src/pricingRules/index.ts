import { Item } from '../items'

interface pricingRule {
  (items: [Item]): {
    items: [Item]
    currentPrice: number
  }
}

export const appleTVRule: pricingRule = (item) => {
  let items: [Item]

  return {
    items,
    currentPrice: 0,
  }
}

export const ipadRule: pricingRule = (item) => {
  let items: [Item]

  return {
    items,
    currentPrice: 0,
  }
}

export const macbookRule: pricingRule = (item) => {
  let items: [Item]

  return {
    items,
    currentPrice: 0,
  }
}
