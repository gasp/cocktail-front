'use client'

import { socket } from '@/app/socket'
import { CocktailSummary, Ingredient } from '@/app/types'
import { EmptyScreen } from '@/components/empty-screen'
import { IngredientsFinder } from '@/components/ingredients-finder'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Recent } from './recent'
import { Shaker } from './shaker'

export interface HomeProps extends React.ComponentProps<'div'> {
  missingKeys: string[]
  ingredients: Ingredient[]
}

export function Home({ className, missingKeys, ingredients }: HomeProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  )

  useEffect(() => {
    socket.emit('ping', 'hello')
    missingKeys.map(key => {
      toast.error(`Missing ${key} environment variable!`)
    })
  }, [missingKeys])
  const recentCocktails: Array<CocktailSummary> = []

  const handleAddIngredient = useCallback(
    (newIng: Ingredient) => {
      setSelectedIngredients([...selectedIngredients, newIng])
    },
    [selectedIngredients]
  )
  const handleClearIngredients = useCallback(() => {
    setSelectedIngredients([])
  }, [])

  return (
    <div className="group w-full overflow-auto pt-2 pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
      {!selectedIngredients.length && <EmptyScreen />}
      <IngredientsFinder
        ingredients={ingredients}
        selectedIngredients={selectedIngredients}
        onSelect={handleAddIngredient}
      />
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {!selectedIngredients.length ? (
          <Recent recentCocktails={recentCocktails} />
        ) : (
          <Shaker
            ingredients={selectedIngredients}
            onClear={handleClearIngredients}
          />
        )}
        <div className="w-full h-px" />
      </div>
    </div>
  )
}
