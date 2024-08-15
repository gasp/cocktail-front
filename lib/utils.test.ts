import { applySat, hexToHSL } from './colors'

describe('hexToHSL', () => {
  it('transcribes red', () => {
    expect(hexToHSL('#f00')).toEqual({ h: 0, s: 100, l: 50 })
    expect(hexToHSL('#FF0000')).toEqual({ h: 0, s: 100, l: 50 })
  })
})
describe('applySat', () => {
  it('saturates red', () => {
    // red is already fully staurated, can't get higher
    expect(applySat(0.2, '#f00')).toBe('hsl(0 100% 50%)')
    expect(applySat(0.2, '#FF0000')).toBe('hsl(0 100% 50%)')
  })
  it('desaturates red', () => {
    expect(applySat(-0.2, '#f00')).toBe('hsl(0 80% 50%)')
    expect(applySat(-0.2, '#FF0000')).toBe('hsl(0 80% 50%)')
  })
  it('saturates light blue', () => {
    expect(applySat(0.2, '#add8e6')).toBe('hsl(195 64% 79%)')
  })
})
