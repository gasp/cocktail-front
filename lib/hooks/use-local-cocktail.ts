import { Cocktail } from '@/app/types'
import { useEffect, useState } from 'react'
import { uniqBy } from '../utils'

export const useLocalCocktail = (): ((value: Cocktail) => void) => {
  const [cocktails] = useState<Cocktail[]>(() => {
    const storedCocktails = localStorage.getItem('cocktails')
    return storedCocktails ? JSON.parse(storedCocktails) : []
  })

  useEffect(() => {
    // Synchronize state with localStorage whenever cocktails change
    localStorage.setItem('cocktails', JSON.stringify(cocktails))
  }, [cocktails])

  const addCocktail = (newCocktail: Cocktail) => {
    localStorage.setItem(
      'cocktails',
      JSON.stringify(uniqBy([...cocktails, newCocktail], ({ slug }) => slug))
    )
  }
  return addCocktail
}
