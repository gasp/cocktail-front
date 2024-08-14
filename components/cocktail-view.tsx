'use client'

import { Cocktail } from '@/app/types'
import { useLocalCocktail } from '@/lib/hooks/use-local-cocktail'
import Image from 'next/image'
import { useEffect } from 'react'

export interface CocktailViewProps extends React.ComponentProps<'div'> {
  cocktail: Cocktail
}

export const CocktailView = ({ cocktail }: CocktailViewProps) => {
  const setCocktail = useLocalCocktail()

  useEffect(() => {
    setCocktail(cocktail)
  }, [cocktail])

  return (
    <div className="mx-auto sm:max-w-2xl sm:px-4 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {cocktail.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            Your daily cocktail inspiration
          </p>
        </div>
      </div>
      <div role="none" className="shrink-0 bg-border h-px w-full my-4"></div>

      <div className="size-full rounded-[inherit]">
        <div className="flex flex-wrap flex-row">
          <div id="image" className="flex space-x-4 pb-4 sm:basis-3/12">
            <div className="space-y-3 w-[250px]">
              <div className="overflow-hidden rounded-md">
                <Image
                  alt={cocktail.alt || ''}
                  width="250"
                  height="330"
                  className="size-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                  src={cocktail.image || ''}
                />
              </div>
              <div className="space-y-1 text-sm hidden sm:block ">
                <h3 className="font-medium leading-none">{cocktail.name}</h3>
                <p className="text-xs text-muted-foreground">{cocktail.alt}</p>
              </div>
            </div>
          </div>
          <div id="text" className="flex flex-col sm:basis-7/12 sm:px-7">
            <div className="mb-4">
              <h2 className="text-xl font-semibold tracking-tight">
                About this cocktail
              </h2>
              <div className="flex-1 whitespace-pre-wrap text-base">
                {cocktail.description}
              </div>
            </div>
            {cocktail.recipe && (
              <div className="my-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  Ingredients
                </h2>
                <ul className="px-3">
                  {cocktail.recipe.map((item, index) => (
                    <li className="list-disc text-base" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cocktail.instructions && (
              <div className="my-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  How to prepare it
                </h2>
                <ul className="px-4">
                  {cocktail.instructions.map((instruction, index) => (
                    <li className="list-decimal text-base" key={index}>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
