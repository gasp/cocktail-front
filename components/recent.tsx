'use client'

import { CocktailSummary } from '@/app/types'
import { RecentCocktail} from './recent-cocktail'
export interface RecentProps {
  recentCocktails: CocktailSummary[]
}

export function Recent({ recentCocktails }: RecentProps) {
  const FAKErecentCocktails = [
    ...recentCocktails,
    {
      name: 'Bloody Mary',
      ingredients: [
        { name: 'Tomato juice', slug: 'tomato-juice', color: '#8E1E3A' as `#${string}` },
        { name: 'Vodka', slug: 'vodka', color: '#44A3FC' as `#${string}` },
        { name: 'Triple sec', slug: 'triple-sec', color: '#87CEEB' as `#${string}` }
      ],
      slug: 'bloody-mary'
    },
    {
      name: 'Golden Orchard',
      ingredients: [
        { name: 'Gin', slug: 'gin', color: '#8BC34A' as `#${string}` },
        { name: 'Apple juice', slug: 'apple-juice', color: '#9DDE02' as `#${string}` },
        { name: 'Egg yolk', slug: 'egg-yolk', color: '#FFFFFF' as `#${string}` },
        { name: 'Lemon', slug: 'lemon', color: '#ADFF2F' as `#${string}` }
      ],
      slug: 'golden-orchard'
    },
    {
      name: 'Citrus Breeze',
      ingredients: [
        { name: 'Orange bitters', slug: 'orange-bitters', color: '#FFA07A' as `#${string}` },
        { name: 'White Rum', slug: 'white-rum', color: '#fefefe' as `#${string}` }
      ],
      slug: 'citrus-breeze'
    },
    {
      name: 'Mojito',
      ingredients: [
        { name: 'White Rum', slug: 'white rum', color: '#fefefe' as `#${string}` },
        { name: 'Sugar', slug: 'sugar', color: '#F5DEB3' as `#${string}` }
      ],
      slug: 'mojito'
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/0 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <div className="mx-auto sm:max-w-2xl sm:px-4 pt-5">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {FAKErecentCocktails.slice(0, 4).map((example, index) => (
            <RecentCocktail cocktail={example} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
