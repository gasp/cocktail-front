import { Cocktail } from '@/app/types'
import Image from 'next/image'

export interface CollectionCocltailProps extends React.ComponentProps<'div'> {
  cocktail: Cocktail
}

export function CollectionCocktail({ cocktail }: CollectionCocltailProps) {
  return (
    <div className="flex flex-col space-y-1.5 p-2 sm:w-[130px] cursor-pointer relative">
      <div className="space-y-3">
        <div className="overflow-hidden rounded-md">
          <Image
            alt={cocktail.alt || ''}
            width="250"
            height="330"
            className="size-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
            src={cocktail.image || ''}
          />
        </div>
        <div className="truncate ...">{cocktail.name}</div>
      </div>
    </div>
  )
}
