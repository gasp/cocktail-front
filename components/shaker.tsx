import { socket } from '@/app/socket'
import { Cocktail, Ingredient } from '@/app/types'
import { IngredientsPillList } from '@/components/ingredients-pill-list'
import { ShakerImage } from '@/components/shaker-image'
import { useLocalIngredient } from '@/lib/hooks/use-local-ingredient'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShakeButton } from './shake-button'

const MIN_INGREDIENTS = 2

type ShakerProps = {
  ingredients: Ingredient[]
  onClear: () => void
}

export function Shaker({ ingredients, onClear }: ShakerProps) {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const ENOUGH_INGREDIENTS = ingredients.length >= MIN_INGREDIENTS
  const [cocktail, setCocktail] = useState<Cocktail | null>(null)
  const addLocalIngredient = useLocalIngredient()
  const router = useRouter()
  useEffect(() => {
    if (ENOUGH_INGREDIENTS) {
      socket.emit('ingredients', ingredients)
      setLoading(true)
    }
  }, [ingredients, ENOUGH_INGREDIENTS])

  const handleOnClick = () => {
    // add to local storage
    addLocalIngredient(ingredients)
    // launch image generation if needed
    if (!cocktail?.image) socket.emit('generate-image', cocktail)
    else router.push(`/cocktail/${cocktail.slug}`)
  }

  socket.on('message-cocktail', (cocktail: Cocktail) => {
    // it's async, is this the cocktail we are looking for ?
    if (!ingredients || !cocktail.ingredients) return
    const currentIngredientsSlug = ingredients
      .map(({ slug }) => slug)
      .sort()
      .join('_')
    const incomingIngredientsSlug = cocktail.ingredients
      .map(({ slug }) => slug)
      .sort()
      .join('_')

    if (incomingIngredientsSlug === currentIngredientsSlug) {
      setLoading(false)
      setName(cocktail.name)
      setCocktail(cocktail)
    }
  })

  socket.on('message-image', (cocktail: Cocktail) => {
    router.push(`/cocktail/${cocktail.slug}`)
  })

  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex items-center justify-center [&>div]:w-full">
        <div className="rounded-xl border bg-card text-card-foreground shadow pb-10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className={cn(
                loading ? 'animate-pulse rounded-md bg-muted' : '',
                'font-semibold leading-none tracking-tight'
              )}
            >
              {!ENOUGH_INGREDIENTS && 'Selected ingredients'}
              {loading ? '★' : name}
            </h3>
            <p className="text-sm text-muted-foreground">Shake to mix</p>
          </div>
          <div className="flex flex-row">
            <div className="pl-6 hidden sm:flex">
              <ShakerImage ingredients={ingredients} />
            </div>
            <IngredientsPillList ingredients={ingredients} />
            <ShakeButton
              disabled={loading || !ENOUGH_INGREDIENTS || !socket.connected}
              onClear={onClear}
              cocktail={cocktail}
              onClick={handleOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
