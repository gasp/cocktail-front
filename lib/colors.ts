// TODO: this shoud be optimized
// it's still a little buggy
export function applySat(sat: number, color: any) {
  const hash = color.substring(0, 1) === '#'
  let hex = (hash ? color.substring(1) : color).split('')
  if (!hex) return color

  const long = hex.length > 3,
    rgb = [],
    len = 3

  rgb.push(hex.shift()! + (long ? hex.shift() : ''))
  rgb.push(hex.shift()! + (long ? hex.shift() : ''))
  rgb.push(hex.shift()! + (long ? hex.shift() : ''))

  for (let i = 0; i < len; i++) {
    if (!long) {
      rgb[i] += rgb[i]
    }

    rgb[i] = Math.round((parseInt(rgb[i], 16) / 100) * sat).toString(16)

    rgb[i] += rgb[i].length === 1 ? rgb[i] : ''
  }

  return (hash ? '#' : '') + rgb.join('')
}
