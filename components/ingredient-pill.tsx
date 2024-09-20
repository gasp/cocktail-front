'use client'

import { Ingredient } from '@/app/types'
import { useTheme } from 'next-themes'

interface IngredientPillProps extends React.ComponentProps<'div'> {
  ingredient: Ingredient
  handleClick: (ingredient: Ingredient) => void
  disabled?: boolean
}

export function IngredientPill({
  ingredient,
  handleClick,
  disabled
}: IngredientPillProps) {
  const { theme } = useTheme() // TODO: this can be optimized and instanciated only once in parent component
  const color = ingredient.color ?? '#add78e6'
  const style = {
    backgroundColor: theme === 'dark' ? ingredient.highlightedColorDark : ingredient.highlightedColorLight,
    textShadow: `#${theme === 'dark' ? '000' : 'fff'} 1px 0 5px`,
    border: `2px solid ${color}`,
    '--hover-backgroundColor': color,

    ...(disabled
      ? {
          // experiment if disabled
          backgroundImage:
            'linear-gradient(45deg, transparent 25%, #000 25%, #000 50%, transparent 50%, transparent 75%, #000 75%, #000 100%)',
          backgroundSize: '50px 50px'
        }
      : {
          cursor: 'pointer'
        })
  }

  const cssAnimation = ' ease-in-out animate-in duration-500'
  const cssText = ' text-xs font-medium leading-normal'

  return (
    <div
      onClick={() => handleClick(ingredient)}
      className={`m-2 inline-block rounded-full px-4 pb-1.5 pt-2 ${cssAnimation} ${cssText}`}
      style={style}
    >
      {ingredient.name}
    </div>
  )
}
