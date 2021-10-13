import { Item } from '../items'
import { pricingResult, pricingRule } from '../pricingRules'

const calculate = (items: Item[], pricingRules: pricingRule[]): number => {
  const initialValue = {
    items: items,
    currentPrice: 0,
  }

  const discountPrice = pricingRules.reduce(
    (previousValue, rule): pricingResult => {
      const { items, currentPrice } = rule(previousValue.items)
      return {
        items,
        currentPrice: currentPrice + previousValue.currentPrice,
      }
    },
    initialValue
  )

  const resetPrice = items.reduce((previousValue, item) => {
    return previousValue + (!item.isChecked ? item.price : 0)
  }, 0)

  return resetPrice + discountPrice.currentPrice
}
export default calculate
