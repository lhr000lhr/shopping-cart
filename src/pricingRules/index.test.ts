import { creatATV, creatIpad, creatMBP, creatVGA } from '../items'
import { appleTVRule, discountIPadPrice, ipadRule, macbookRule } from './index'

describe('Pricing rules', () => {
  describe('Apple TV rules', () => {
    test('buy 3 items only pay for 2 items', () => {
      const appleTV = creatATV()
      const items = [appleTV, appleTV, appleTV]
      const price = appleTVRule(items)
      const checkedAppleTV = creatATV()
      checkedAppleTV.isChecked = true
      expect(price).toEqual({
        items: [checkedAppleTV, checkedAppleTV, checkedAppleTV],
        currentPrice: checkedAppleTV.price * 2,
      })
    })

    test('buy 4 items only pay for 3 items', () => {
      const appleTV = creatATV()
      const iPad = creatIpad()
      const items = [appleTV, iPad, appleTV, appleTV, appleTV]
      const price = appleTVRule(items)
      const checkedAppleTV = creatATV()
      checkedAppleTV.isChecked = true
      expect(price).toEqual({
        items: [
          checkedAppleTV,
          iPad,
          checkedAppleTV,
          checkedAppleTV,
          checkedAppleTV,
        ],
        currentPrice: checkedAppleTV.price * 3,
      })
    })
  })

  describe('iPad rules', () => {
    test('buy less than 4 items', () => {
      const iPad = creatIpad()
      const checkedIPad = creatIpad()
      checkedIPad.isChecked = true
      expect(ipadRule([iPad, iPad])).toEqual({
        items: [checkedIPad, checkedIPad],
        currentPrice: checkedIPad.price * 2,
      })
      expect(ipadRule([iPad, iPad, iPad])).toEqual({
        items: [checkedIPad, checkedIPad, checkedIPad],
        currentPrice: checkedIPad.price * 3,
      })
      expect(ipadRule([iPad, iPad, iPad, iPad])).toEqual({
        items: [checkedIPad, checkedIPad, checkedIPad, checkedIPad],
        currentPrice: checkedIPad.price * 4,
      })
    })

    test('buy more than 4 items', () => {
      const iPad = creatIpad()
      const checkedIPad = creatIpad()
      checkedIPad.isChecked = true

      expect(ipadRule([iPad, iPad, iPad, iPad, iPad])).toEqual({
        items: [
          checkedIPad,
          checkedIPad,
          checkedIPad,
          checkedIPad,
          checkedIPad,
        ],
        currentPrice: discountIPadPrice * 5,
      })
    })
  })

  describe('Macbook rules', () => {
    test('buy 1 Macbook and 1 VGA', () => {
      const macbook = creatMBP()
      const checkedMacbook = creatMBP()
      checkedMacbook.isChecked = true
      const vga = creatVGA()
      const checkedVGA = creatVGA()
      checkedVGA.isChecked = true

      expect(macbookRule([macbook, vga])).toEqual({
        items: [checkedMacbook, checkedVGA],
        currentPrice: checkedMacbook.price * 1,
      })
    })

    test('buy 1 Macbook and 2 VGA', () => {
      const macbook = creatMBP()
      const checkedMacbook = creatMBP()
      checkedMacbook.isChecked = true
      const vga = creatVGA()
      const checkedVGA = creatVGA()
      checkedVGA.isChecked = true

      expect(macbookRule([macbook, vga, vga])).toEqual({
        items: [checkedMacbook, checkedVGA, checkedVGA],
        currentPrice: checkedMacbook.price * 1 + checkedVGA.price * 1,
      })
    })

    test('buy 2 Macbook and 2 VGA', () => {
      const macbook = creatMBP()
      const checkedMacbook = creatMBP()
      checkedMacbook.isChecked = true
      const vga = creatVGA()
      const checkedVGA = creatVGA()
      checkedVGA.isChecked = true

      expect(macbookRule([macbook, macbook, vga, vga])).toEqual({
        items: [checkedMacbook, checkedMacbook, checkedVGA, checkedVGA],
        currentPrice: checkedMacbook.price * 2,
      })
    })
  })
})
