import {
  Item,
  ItemSKUOption,
  creatATV,
  creatIpad,
  creatMBP,
  creatVGA,
} from '../items'

export interface pricingRule {
  (items: Item[]): pricingResult
}

export type pricingResult = {
  items: Item[]
  currentPrice: number
}

export const discountIPadPrice = 499.99

export const appleTVRule: pricingRule = (items) => {
  // - we're going to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
  const discountItems: Item[] = []
  const countedItem: Item[] = items.map((item) => {
    if (item.sku === ItemSKUOption.ATV) {
      item.isChecked = true
      discountItems.push(item)
    }
    return item
  })

  const appleTV = creatATV()
  const total = discountItems.length
  const discountedPrice = Math.floor(total / 3) * 2 * appleTV.price
  const restPrice = (total % 3) * appleTV.price
  const currentPrice = discountedPrice + restPrice

  return {
    items: countedItem,
    currentPrice,
  }
}

export const ipadRule: pricingRule = (items) => {
  // - the brand new Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4

  const discountItems: Item[] = []
  const countedItem: Item[] = items.map((item) => {
    if (item.sku === ItemSKUOption.IPD) {
      item.isChecked = true
      discountItems.push(item)
    }
    return item
  })

  const iPad = creatIpad()
  const total = discountItems.length
  const currentPrice = total > 4 ? total * discountIPadPrice : total * iPad.price

  return {
    items: countedItem,
    currentPrice,
  }
}

export const macbookRule: pricingRule = (items) => {
  // - we will bundle in a free VGA adapter free of charge with every MacBook Pro sold

  const macbookItems: Item[] = []
  const discountVGAItems: Item[] = []

  const countedItem: Item[] = items.map((item) => {
    if (item.sku === ItemSKUOption.MBP) {
      item.isChecked = true
      macbookItems.push(item)
    } else if (item.sku === ItemSKUOption.VGA) {
      item.isChecked = true
      discountVGAItems.push(item)
    }
    return item
  })

  const macbook = creatMBP()
  const vga = creatVGA()

  const totalMacbook = macbookItems.length
  const totalVGA = discountVGAItems.length
  const currentPrice =
    Math.max(0, totalVGA - totalMacbook) * vga.price +
    totalMacbook * macbook.price

  return {
    items: countedItem,
    currentPrice,
  }
}
