import { creatATV, creatIpad, creatMBP, creatVGA } from '../items'
import {
  appleTVRule,
  discountIPadPrice,
  ipadRule,
  macbookRule,
} from '../pricingRules'
import calculator from './calculator'

const iPad = creatIpad()
const macbook = creatMBP()
const vga = creatVGA()
const appleTV = creatATV()

describe('Price calculator', () => {
  test('with no discount', () => {
    const items = [iPad, macbook, vga, appleTV]

    expect(calculator(items, [])).toEqual(
      iPad.price + macbook.price + vga.price + appleTV.price
    )
  })

  test('with macbook discount', () => {
    const items = [iPad, macbook, vga, appleTV]

    expect(calculator(items, [macbookRule])).toEqual(
      iPad.price + macbook.price + appleTV.price
    )
  })

  test('with macbook discount and ipad discount, but only has enought ipad (<= 4)', () => {
    expect(
      calculator([iPad, macbook, vga, appleTV], [macbookRule, ipadRule])
    ).toEqual(iPad.price + macbook.price + appleTV.price)

    expect(
      calculator(
        [iPad, iPad, iPad, iPad, macbook, vga, appleTV],
        [macbookRule, ipadRule]
      )
    ).toEqual(iPad.price * 4 + macbook.price + appleTV.price)
  })

  test('with macbook discount and ipad discount, but only has enought ipad (> 4)', () => {
    expect(
      calculator(
        [iPad, iPad, iPad, iPad, iPad, macbook, vga, appleTV],
        [macbookRule, ipadRule]
      )
    ).toEqual(discountIPadPrice * 5 + macbook.price + appleTV.price)
  })

  test('with macbook discount, ipad discount and Apple TV discount, but only buy 2', () => {
    expect(
      calculator(
        [iPad, iPad, iPad, iPad, iPad, macbook, vga, appleTV, appleTV],
        [macbookRule, ipadRule, appleTVRule]
      )
    ).toEqual(discountIPadPrice * 5 + macbook.price + appleTV.price * 2)
  })

  test('with macbook discount, ipad discount and Apple TV discount, but only buy 7', () => {
    expect(
      calculator(
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

  test('SKUs Scanned: atv, atv, atv, vga, Total expected: $249.00', () => {
    expect(
      calculator(
        [appleTV, appleTV, appleTV, vga],
        [macbookRule, ipadRule, appleTVRule]
      )
    ).toEqual(249.0)
  })
  test('SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd, Total expected: $2718.95', () => {
    expect(
      calculator(
        [appleTV, iPad, iPad, appleTV, iPad, iPad, iPad],
        [macbookRule, ipadRule, appleTVRule]
      )
    ).toEqual(2718.95)
  })

  test('SKUs Scanned: mbp, vga, ipd, atv, ipd, ipd, ipd, Total expected: $1949.98', () => {
    expect(
      calculator([macbook, vga, iPad], [macbookRule, ipadRule, appleTVRule])
    ).toEqual(1949.98)
  })
})
