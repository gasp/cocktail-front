import { Ingredient } from '@/app/types'
import { ImageShaker } from '@/components/ui/icons'
import React from 'react'

type ShakerImageProps = React.ComponentProps<'svg'> & {
  ingredients: Ingredient[]
}

export function ShakerImage({ ingredients }: ShakerImageProps) {
  const len = ingredients.length
  return (
    <div className="size-32">
      <ImageShaker className="absolute size-32" />
      {ingredients.map(({ color, slug }) => (
        <div key={slug} style={{ background: color, height: 128 / len }}></div>
      ))}
    </div>
  )
}
