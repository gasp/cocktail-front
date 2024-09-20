// TODO: move this to @/lib

export type HexColor = `#${string}`

export type Ingredient = {
  name: string
  slug: string
  // TODO: improve typing of those
  color?: HexColor
  highlightedColorLight?: HexColor
  highlightedColorDark?: HexColor
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
