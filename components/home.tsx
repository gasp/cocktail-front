'use client'

import { socket } from '@/app/socket'
import { CocktailSummary, Ingredient } from '@/app/types'
// import { DeviceMotionFull } from '@/components/device-motion-full'
import { EmptyScreen } from '@/components/empty-screen'
import { IngredientsFinder } from '@/components/ingredients-finder'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Recent } from './recent'
import { Shaker } from './shaker'
import { useClientRenderToString } from '@/lib/hooks/use-client-render-to-string'
import { IconLogo } from '@/components/ui/icons'

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
  const [singleElementMarkup] = useClientRenderToString(
    <IconLogo strokeWidth={1} />
  )

  return (
    <div className="group w-full overflow-auto pt-2 pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
      <div
        className="absolute size-full top-0 left-0 pointer-events-none"
        style={{ zIndex: -1, overflow: 'hidden', opacity: 0.8 }}
      >
        <div
          className="absolute size-full top-0 left-0"
          style={{
            width: '1000px',
            transform: 'rotate(-15deg)',
            backgroundImage: singleElementMarkup
              ? `url("data:image/svg+xml,${encodeURI(singleElementMarkup)}")`
              : '',
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>
      {!selectedIngredients.length && <EmptyScreen />}

      {/* <DeviceMotionFull enabled /> */}
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
