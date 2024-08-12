import { getIngredients, getMissingKeys } from '@/app/actions'
import { Home } from '@/components/home'



export const metadata = {
  title: 'Cocktail generator'
}

export default async function IndexPage() {
  const missingKeys = await getMissingKeys()
  const ingredients = await getIngredients()

  return (<Home missingKeys={missingKeys} className="home" ingredients={ingredients} />)
}
