export type HexColor = `#${string}`
/**
 * @param {number} h - [0-360] hue
 * @param {number} s - [0-100] saturation
 * @param {number} l - [0-100] lightness
 */
export type HSLColor = Readonly<{
  h: number
  s: number
  l: number
}>

const clamp = function (n: number, min: number, max: number) {
  // return Math.min(Math.max(n, min), max)
  return Math.max(Math.min(n, max), min)
}
/**
 * lerp
 * @param {float} a - start
 * @param {float} b - destination
 * @param {float} t - [0,1] time
 * @returns {float} position
 */
const lerp = (a: number, b: number, t: number): number => (1 - t) * a + t * b

/**
 * Convers hex to hsl
 * Based on https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param {HexColor} hex
 * @returns {HSLColor}
 */
export function convertHexToHSL(hex: HexColor): HSLColor {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0
  if (hex.length === 4) {
    r = Number('0x' + hex[1] + hex[1])
    g = Number('0x' + hex[2] + hex[2])
    b = Number('0x' + hex[3] + hex[3])
  } else if (hex.length === 7) {
    r = Number('0x' + hex[1] + hex[2])
    g = Number('0x' + hex[3] + hex[4])
    b = Number('0x' + hex[5] + hex[6])
  }

  // Then to HSL
  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r, g, b)
  let cmax = Math.max(r, g, b)
  let delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return { h, s, l }
}

/**
 * Converts HSL Colors to Hex Colors.
 * Based on https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
 */
export function convertHSLToHex({ h, s, l }: HSLColor): HexColor {

  const k = (n: number) => (n + h / 30) % 12
  const a = s/100 * Math.min(l/100, 1 - l/100)
  const f = (n: number) => l/100 - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))

  const hex = (n: number) => Math.round(f(n) * 0xff).toString(16).padStart(2, '0').toLowerCase()
  return `#${hex(0)}${hex(8)}${hex(4)}`
}

const DEFAULT_SATURATION = 30
export function colorHighlight(color: HexColor, darkmode = false) {
  const { h, s, l } = convertHexToHSL(color)
  let newLight = l
  let newSat = s + DEFAULT_SATURATION
  if (newSat > 100) {
    // saturation overflows on light
    const overflow = (newSat - 100)
    newLight = lerp(newLight, darkmode ? 0 : 100, overflow / 100)
    console.log(color, 'overflow', {darkmode, newSat, overflow, l, newLight})
    newSat = 100
  }
  // css hsl format https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    return convertHSLToHex({ h, s:newSat, l:newLight })
}
