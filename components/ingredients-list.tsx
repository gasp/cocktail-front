'use client'
import { Ingredient } from '@/app/types'
import { IngredientPill } from '@/components/ingredient-pill'
import { useEffect, useState } from 'react'

type IngredientsListProps = {
  ingredients: Ingredient[]
  selectedIngredients: Ingredient[]
  selectIngredient: (ingredient: Ingredient) => void
}

export function IngredientsList({
  ingredients,
  selectIngredient,
  selectedIngredients
}: IngredientsListProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>()
  useEffect(() => {
    setSelectedSlugs(selectedIngredients.map(({slug})=>slug))
  }, [selectedIngredients])
  const handleSelect = (ingredient: Ingredient) => () =>
    selectIngredient(ingredient)

  return (
    <div>
      {ingredients.map(ingredient => {
        const disabled = selectedSlugs?.includes(ingredient.slug)
        return (
          <IngredientPill
            key={ingredient.slug}
            ingredient={ingredient}
            handleClick={disabled ? console.log : handleSelect(ingredient)}
            disabled={disabled}
          />
        )
      })}
    </div>
  )
}
