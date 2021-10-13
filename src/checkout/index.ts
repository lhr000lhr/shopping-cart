import { Item } from '../items'
import { pricingRule } from '../pricingRules'
import calculate from './calculate'

export default class Checkout {
  pricingRules: pricingRule[]
  items: Item[] = []
  constructor(pricingRules: pricingRule[]) {
    this.pricingRules = pricingRules
  }

  scan(item: Item) {
    this.items.push(item)
  }

  total() {
    const totalPrice = calculate(this.items, this.pricingRules)
    console.log('total price:', totalPrice)
  }
}
