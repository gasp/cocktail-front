import { Ingredient, LocalIngredient } from '@/app/types'
import { useEffect, useState } from 'react'
import { uniqBy } from '../utils'

export const useLocalIngredient = (): ((value: Ingredient[]) => void) => {
  const [ingredients] = useState<LocalIngredient[]>(() => {
    const storedIngredients = localStorage.getItem('ingredients')
    return storedIngredients ? JSON.parse(storedIngredients) : []
  })

  useEffect(() => {
    // Synchronize state with localStorage whenever ingredients change
    localStorage.setItem('ingredients', JSON.stringify(ingredients))
  }, [ingredients])

  const addIngredient = (newIngredients: Ingredient[]) => {
    console.log('adding new local ingredients')
    // TODO: optimize this with a hashmap
    let newIngredientsList: LocalIngredient[] = ingredients

    for (let newIngredient of newIngredients) {
      const match = ingredients.find(ing => ing.slug === newIngredient.slug)
      newIngredientsList = match
        ? uniqBy(
            [{ ...match, score: match.score + 1 }, ...newIngredientsList],
            ({ slug }) => slug
          )
        : [...newIngredientsList, { ...newIngredient, score: 1 }]
    }

    localStorage.setItem('ingredients', JSON.stringify(newIngredientsList))
  }
  return addIngredient
}
