import {
  createItem,
  ItemSKUOption,
  creatATV,
  creatIpad,
  creatMBP,
  creatVGA,
} from './index'

describe('Item creator', () => {
  test('should return Super iPad', () => {
    const item = {
      sku: 'ipd',
      name: 'Super iPad',
      price: 549.99,
    }
    expect(createItem(ItemSKUOption.IPD)).toEqual(item)
    expect(creatIpad()).toEqual(item)
  })
  test('should return MacBook Pro', () => {
    const item = {
      sku: 'mbp',
      name: 'MacBook Pro',
      price: 1399.99,
    }
    expect(createItem(ItemSKUOption.MBP)).toEqual(item)
    expect(creatMBP()).toEqual(item)
  })
  test('should return Apple tv', () => {
    const item = {
      sku: 'atv',
      name: 'Apple TV',
      price: 109.5,
    }
    expect(createItem(ItemSKUOption.ATV)).toEqual(item)
    expect(creatATV()).toEqual(item)
  })
  test('should return VGA adapter', () => {
    const item = {
      sku: 'vga',
      name: 'VGA adapter',
      price: 30.0,
    }
    expect(createItem(ItemSKUOption.VGA)).toEqual(item)
    expect(creatVGA()).toEqual(item)
  })
})
