import { Ingredient } from '@/app/types'
import { IngredientOutsidePill } from '@/components/ingredient-outside-pill'

const SMALL = 4
const MEDIUM = 5
type IngredientsPillListProps = {
  ingredients: Ingredient[]
}

export function IngredientsPillList({ ingredients }: IngredientsPillListProps) {
  if (ingredients.length < SMALL) {
    return (
      <div className="p-6 pt-0 flex flex-col gap-1">
        {ingredients.map(ingredient => (
          <IngredientOutsidePill
            key={ingredient.slug}
            ingredient={ingredient}
          />
        ))}
      </div>
    )
  }
  if (ingredients.length < MEDIUM) {
    return (
      <div className="p-6 pt-0 flex flex-start flex-wrap ">
        {ingredients.map(ingredient => (
          <IngredientOutsidePill
            key={ingredient.slug}
            ingredient={ingredient}
          />
        ))}
      </div>
    )
  }

  const first = ingredients.slice(0, MEDIUM)
  const last = ingredients.slice(MEDIUM, ingredients.length)
  return (
    <div className="p-6 pt-0 flex flex-wrap justify-start">
      {first.map(ingredient => (
        <IngredientOutsidePill key={ingredient.slug} ingredient={ingredient} />
      ))}
      {last.map(ingredient => (
        <div key={ingredient.slug} className="flex p-1 my-auto">
          <span
            className="inline-block text-xs leading-normal p-1.5 rounded-full "
            style={{ backgroundColor: ingredient.color || 'purple' }}
          ></span>
        </div>
      ))}
    </div>
  )
}
