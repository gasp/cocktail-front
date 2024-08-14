'use client'

import { Cocktail, Ingredient, LocalIngredient } from '@/app/types'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { CollectionCocktail } from './collection-cocktail'
import { IngredientPill } from './ingredient-pill'
import { Button } from './ui/button'

export interface CollectionViewProps extends React.ComponentProps<'div'> {}

export function CollectionView({}: CollectionViewProps) {
  const [localCocktails] = useLocalStorage<Cocktail[]>('cocktails', [])
  const [localIngredients] = useLocalStorage<LocalIngredient[]>(
    'ingredients',
    []
  )
  const [ingredients, setIngredients] = useState<LocalIngredient[]>([])
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null)

  useEffect(() => {
    const mainIngredients = localIngredients
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
    setIngredients(mainIngredients)
  }, [localIngredients])

  useEffect(() => {
    if (!!selectedIngredient) {
      // TODO: optimizatio tip, we can use a Map instead of an array
      // map.get(selectedIngredient.slug): Cocktail[]
      const filteredCocktails = localCocktails.filter(({ ingredients }) =>
        ingredients.find(
          cIngredient => selectedIngredient.slug === cIngredient.slug
        )
      )
      setCocktails(filteredCocktails)
    } else setCocktails(localCocktails)
  }, [selectedIngredient, localCocktails])

  const handleClickIngredient = useCallback(
    (ingredient: Ingredient) => {
      setSelectedIngredient(ingredient)
    },
    [setSelectedIngredient]
  )

  return (
    <div className="group w-full overflow-auto pt-2 pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
      <div className="mx-auto my-5 max-w-2xl px-4">
        <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
          <h1 className="text-lg font-semibold">My cocktails</h1>
          <p className="leading-normal text-muted-foreground">
            Filter recently consulted cocktails by ingredients
          </p>
          <div>
            <Button onClick={() => setSelectedIngredient(null)}>
              All ingredients
            </Button>
            {ingredients.map(ingredient => (
              <IngredientPill
                key={ingredient.slug}
                ingredient={ingredient}
                handleClick={handleClickIngredient}
                disabled={ingredient.slug === selectedIngredient?.slug}
              />
            ))}
          </div>

          <div className="sm:grid grid-cols-4 gap-4">
            {cocktails.map(cocktail => (
              <Link key={cocktail.slug} href={`/cocktail/${cocktail.slug}`}>
                <CollectionCocktail cocktail={cocktail} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
