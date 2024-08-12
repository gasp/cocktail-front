// TODO: move this to @/lib

type HexColor = `#${string}`

export type Ingredient = {
  name: string
  slug: string
  color?: HexColor
}

export type LocalIngredient = Ingredient & {
  score: number
}

export type CocktailSummary = {
  name: string
  slug: string
  ingredients: Ingredient[]
}

export type Cocktail = CocktailSummary & {
  description: string
  image?: string
  alt?: string
  recipe?: string[]
  instructions?: string[]
}
