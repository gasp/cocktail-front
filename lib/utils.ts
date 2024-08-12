import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// thanks https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
type UniqByKeyFunction<T, K extends keyof any> = (item: T) => K

export function uniqBy<T, K extends keyof any>(
  a: T[],
  key: UniqByKeyFunction<T, K>
): T[] {
  let seen = new Set()
  return a.filter(item => {
    let k = key(item)
    return seen.has(k) ? false : seen.add(k)
  })
}
