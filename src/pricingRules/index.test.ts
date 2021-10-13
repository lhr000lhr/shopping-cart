import { creatATV, creatIpad, creatMBP, creatVGA } from '../items'
import { appleTVRule } from './index'

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
})
