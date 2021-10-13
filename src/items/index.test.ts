import { createItem, ItemSKUOption } from './index'

describe('Item creator', () => {
  test('should return Super iPad', () => {
    expect(createItem(ItemSKUOption.IPD)).toEqual({
      sku: 'ipd',
      name: 'Super iPad',
      price: 549.99,
    })
  })
  test('should return MacBook Pro', () => {
    expect(createItem(ItemSKUOption.MBP)).toEqual({
      sku: 'mbp',
      name: 'MacBook Pro',
      price: 1399.99,
    })
  })
  test('should return Apple tv', () => {
    expect(createItem(ItemSKUOption.ATV)).toEqual({
      sku: 'atv',
      name: 'Apple TV',
      price: 109.5,
    })
  })
  test('should return VGA adapter', () => {
    expect(createItem(ItemSKUOption.VGA)).toEqual({
      sku: 'vga',
      name: 'VGA adapter',
      price: 30.00,
    })
  })
})
