'use client'

import { Ingredient } from '@/app/types'
import { applySat } from '@/lib/colors'

interface IngredientOutPillProps extends React.ComponentProps<'div'> {
  ingredient: Ingredient
  onClick?: () => void
}

export function IngredientOutsidePill({
  ingredient,
  onClick
}: IngredientOutPillProps) {
  const color = ingredient.color ?? '#add78e6'
  const style = {
    backgroundColor: applySat(80, color),

    border: `2px solid ${color}`,
    '--hover-backgroundColor': color,
    cursor: 'pointer'
  }

  const cssText = ' text-xs font-medium leading-normal'

  return (
    <div className={`p-1 flex items-center space-x-2 ${cssText}`} onClick={onClick}>
      <span
        className={`inline-block rounded-full p-1`}
        style={style}
      ></span>
      <span className={cssText}>{ingredient.name}</span>
    </div>
  )
}
