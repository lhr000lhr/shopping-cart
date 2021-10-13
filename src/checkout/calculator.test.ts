import { creatATV, creatIpad, creatMBP, creatVGA } from '../items'
import {
  appleTVRule,
  discountIPadPrice,
  ipadRule,
  macbookRule,
} from '../pricingRules'
import calculate from './calculator'

const iPad = creatIpad()
const macbook = creatMBP()
const vga = creatVGA()
const appleTV = creatATV()

describe('Price calculator', () => {
  test('with no discount', () => {
    const items = [iPad, macbook, vga, appleTV]

    expect(calculate(items, [])).toEqual(
      iPad.price + macbook.price + vga.price + appleTV.price
    )
  })

  test('with macbook discount', () => {
    const items = [iPad, macbook, vga, appleTV]

    expect(calculate(items, [macbookRule])).toEqual(
      iPad.price + macbook.price + appleTV.price
    )
  })

  test('with macbook discount and ipad discount, but only has enought ipad (<= 4)', () => {
    expect(
      calculate([iPad, macbook, vga, appleTV], [macbookRule, ipadRule])
    ).toEqual(iPad.price + macbook.price + appleTV.price)

    expect(
      calculate(
        [iPad, iPad, iPad, iPad, macbook, vga, appleTV],
        [macbookRule, ipadRule]
      )
    ).toEqual(iPad.price * 4 + macbook.price + appleTV.price)
  })

  test('with macbook discount and ipad discount, but only has enought ipad (> 4)', () => {
    expect(
      calculate(
        [iPad, iPad, iPad, iPad, iPad, macbook, vga, appleTV],
        [macbookRule, ipadRule]
      )
    ).toEqual(discountIPadPrice * 5 + macbook.price + appleTV.price)
  })

  test('with macbook discount, ipad discount and Apple TV discount, but only buy 2', () => {
    expect(
      calculate(
        [iPad, iPad, iPad, iPad, iPad, macbook, vga, appleTV, appleTV],
        [macbookRule, ipadRule, appleTVRule]
      )
    ).toEqual(discountIPadPrice * 5 + macbook.price + appleTV.price * 2)
  })

  test('with macbook discount, ipad discount and Apple TV discount, but only buy 7', () => {
    expect(
      calculate(
        [
          iPad,
          iPad,
          iPad,
          macbook,
          vga,
          appleTV,
          appleTV,
          appleTV,
          appleTV,
          appleTV,
          appleTV,
          appleTV,
        ],
        [macbookRule, ipadRule, appleTVRule]
      )
    ).toEqual(iPad.price * 3 + macbook.price + appleTV.price * 5)
  })
})
