import {
  convertHexToHSL,
  convertHSLToHex,
  colorHighlight
} from './colors'

describe('convertHexToHSL', () => {
  it('transcribes red', () => {
    expect(convertHexToHSL('#f00')).toEqual({ h: 0, s: 100, l: 50 })
    expect(convertHexToHSL('#FF0000')).toEqual({ h: 0, s: 100, l: 50 })
  })
  it('transcribes parma', () => {
    expect(convertHexToHSL('#854747')).toEqual({ h: 0, s: 30.4, l: 40 })
  })
})

describe('convertHSLToHex', () => {
  /*
   * references:
   * https://htmlcolors.com/hsl-to-hex
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
   */
  it('transcribes red', () => {
    expect(convertHSLToHex({ h: 0, s: 100, l: 50 })).toEqual('#ff0000')
  })
  it('transcribes parma', () => {
    expect(convertHSLToHex({ h: 0, s: 30, l: 40 })).toEqual('#854747')
  })
  it('transcribes gold', () => {
    expect(convertHSLToHex({ h: 50, s: 80, l: 40 })).toEqual('#b89c14')
  })
})

describe('colorHighlight', () => {
  it('highlights red', () => {
    expect(colorHighlight('#f00')).toEqual('#ff4d4d')
    expect(colorHighlight('#f00', true)).toEqual('#b30000')
  })
  it('highlights parma', () => {
    expect(colorHighlight('#854747')).toEqual('#a42828')
  })
  it('highlights gold', () => {
    expect(colorHighlight('#b89c14')).toEqual('#ecc500')
    expect(colorHighlight('#b89c14', true)).toEqual('#b79800')
  })
  it('does not highlight white', () => {
    expect(colorHighlight('#fff')).toEqual('#ffffff')
    expect(colorHighlight('#fff', true)).toEqual('#ffffff')
    expect(colorHighlight('#fefefe', true)).toEqual('#fefefe')
  })
  it('does not highlight black', () => {
    expect(colorHighlight('#000')).toEqual('#000000')
    expect(colorHighlight('#000', true)).toEqual('#000000')
  })
  it('somehow handles greys', () => {
    expect(colorHighlight('#222', true)).toEqual('#2c1818')
    expect(colorHighlight('#ccc')).toEqual('#dbbdbd')
    expect(colorHighlight('#ccc', true)).toEqual('#dbbdbd')
    expect(colorHighlight('#bbb', true)).toEqual('#cfa6a6')
  })
})
