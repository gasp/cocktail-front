'use client'

import Link from 'next/link'
import { CocktailSummary } from '@/app/types'
export function RecentCocktail({
  cocktail,
  index
}: {
  cocktail: CocktailSummary
  index: number
}) {
  return (
    <Link
      className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
        index > 1 && 'hidden md:block'
      }`}
      href={`/cocktail/${cocktail.slug}`}
    >
      <div className="text-sm font-semibold">{cocktail.name}</div>
      <div className="text-sm text-zinc-600">
        {cocktail.ingredients.map(({ name }) => name).join(', ')}
      </div>
    </Link>
  )
}
