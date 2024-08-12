import { Cocktail } from '@/app/types'
import { CocktailView } from '@/components/cocktail-view'

export interface CocktailPageProps {
  params: {
    id: string
  }
}

export default async function ChatPage({ params }: CocktailPageProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/c/${params.id}`
  const res = await fetch(url)
  const cocktail = (await res.json()) as Cocktail
  return <CocktailView cocktail={cocktail} />
}
