'use client'
import { Ingredient } from '@/app/types'
import { IngredientFilter } from '@/components/ingredient-filter'
import { IngredientsList } from '@/components/ingredients-list'
import Fuse from 'fuse.js'
import { useCallback, useEffect, useState } from 'react'

type IngredientsFinderProps = {
  ingredients: Ingredient[]
  selectedIngredients: Ingredient[]
  onSelect: (ingredient: Ingredient) => void
}

export function IngredientsFinder({
  ingredients,
  selectedIngredients,
  onSelect
}: IngredientsFinderProps) {
  const [input, setInput] = useState<string>('')
  const [filtered, setFiltered] = useState<Ingredient[]>(ingredients)
  const [fuse, setFuseInstance] = useState<Fuse<Ingredient>>()
  useEffect(() => {
    const fuseSingleton = new Fuse(ingredients, {
      keys: ['slug'],
      minMatchCharLength: 2,
      threshold: 0.0001,
      distance: 10
    })
    setFuseInstance(fuseSingleton)
  }, [ingredients])

  const handleFilter = useCallback(
    (inp: string) => {
      setInput(inp)
      if (!inp.length) return setFiltered(ingredients)
      if (!fuse) return
      const f = fuse.search(inp)
      setFiltered(f.map(({ item }) => item))
    },
    [setInput, ingredients, fuse]
  )

  const handleSelect = (ing: Ingredient) => {
    onSelect(ing)
    setInput('')
    setFiltered(ingredients)
  }

  const handleEnter = () => {
    handleSelect(filtered[0])
  }

  return (
    <div className="bg-background space-y-4 border-t px-4 py-2 shadow ">
      <IngredientFilter
        setInput={handleFilter}
        input={input}
        setEnter={handleEnter}
      />
      <IngredientsList
        ingredients={filtered}
        selectIngredient={handleSelect}
        selectedIngredients={selectedIngredients}
      />
    </div>
  )
}
