'use client'

import { CocktailSummary } from '@/app/types'
import Link from 'next/link'

export interface RecentProps {
  recentCocktails: CocktailSummary[]
}

export function Recent({ recentCocktails }: RecentProps) {
  const FAKErecentCocktails = [
    ...recentCocktails,
    {
      name: 'Bloody Mary',
      ingredients: [
        { name: 'Tomato juice', slug: 'tomato-juice', color: '#8E1E3A' },
        { name: 'Vodka', slug: 'vodka', color: '#44A3FC' },
        { name: 'Triple sec', slug: 'triple-sec', color: '#87CEEB' }
      ],
      slug: 'bloody-mary'
    },
    {
      name: 'Golden Orchard',
      ingredients: [
        { name: 'Gin', slug: 'gin', color: '#8BC34A' },
        { name: 'Apple juice', slug: 'apple-juice', color: '#9DDE02' },
        { name: 'Egg yolk', slug: 'egg-yolk', color: '#FFFFFF' },
        { name: 'Lemon', slug: 'lemon', color: '#ADFF2F' }
      ],
      slug: 'golden-orchard'
    },
    {
      name: 'Citrus Breeze',
      ingredients: [
        { name: 'Orange bitters', slug: 'orange-bitters', color: '#FFA07A' },
        { name: 'White Rum', slug: 'white-rum', color: '#fefefe' }
      ],
      slug: 'citrus-breeze'
    },
    {
      name: 'Mojito',
      ingredients: [
        { name: 'White Rum', slug: 'white rum', color: '#fefefe' },
        { name: 'Sugar', slug: 'sugar', color: '#F5DEB3' }
      ],
      slug: 'mojito'
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/0 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <div className="mx-auto sm:max-w-2xl sm:px-4 pt-5">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {FAKErecentCocktails.slice(0, 4).map((example, index) => (
            <Link
              key={example.name}
              className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                index > 1 && 'hidden md:block'
              }`}
              href={`/cocktail/${example.slug}`}
            >
              <div className="text-sm font-semibold">{example.name}</div>
              <div className="text-sm text-zinc-600">
                {example.ingredients.map(({ name }) => name).join(', ')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
