import { Cocktail, LocalIngredient } from '@/app/types'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import Link from 'next/link'
import { SocketDebug } from './socket-debug'
import { ThemeToggle } from './theme-toggle'

export function SidebarContent({ close }: { close: () => void }) {
  const [cocktails] = useLocalStorage<Cocktail[]>('cocktails', [])
  const [ingredients] = useLocalStorage<LocalIngredient[]>('ingredients', [])
  return (
    <div className="px-6">
      {!!cocktails.length && (
        <section className="py-2">
          <h2 className="text-lg my-2 font-semibold">
            10 Most recent cocktails
          </h2>
          <ul className="list-disc ml-4">
            {cocktails.slice(0, 5).map(cocktail => (
              <li key={cocktail.slug}>
                <Link
                  onClick={() => close()}
                  href={`/cocktail/${cocktail.slug}`}
                  className="text-primary"
                >
                  {cocktail.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            onClick={() => close()}
            className="block font-semibold text-primary my-2"
            href="/collection"
          >
            Full cocktail collection
          </Link>
        </section>
      )}
      {!!ingredients.length && (
        <section className="py-2">
          <h2 className="text-lg my-2 font-semibold">
            10 Most used ingredients
          </h2>
          <ul className="list-disc ml-4">
            {ingredients
              .sort((a, b) => b.score - a.score)
              .slice(0, 10)
              .map(ingredient => (
                <li key={ingredient.slug}>{ingredient.name}</li>
              ))}
          </ul>
        </section>
      )}

      <section className="py-2">
        <h2 className="text-lg my-2 font-semibold">Tech stuff</h2>
        <div>
          Toggle light/dark theme <ThemeToggle />
        </div>
        <div>
          <SocketDebug />
        </div>
      </section>

      <div>api: {process.env.NEXT_PUBLIC_API_URL}</div>
    </div>
  )
}
