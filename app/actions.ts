'use server'

import { redirect } from 'next/navigation'
import { Ingredient } from './types'
import { colorHighlight } from '@/lib/colors'

export async function refreshHistory(path: string) {
  redirect(path)
}

export async function getMissingKeys() {
  const keysRequired = ['NEXT_PUBLIC_API_URL']
  return keysRequired
    .map(key => (process.env[key] ? '' : key))
    .filter(key => key !== '')
}

export async function getIngredients(): Promise<Ingredient[]> {
  const ingredients: Ingredient[] = [
    { name: 'Light rum', slug: 'light-rum', color: '#F2C464' },
    { name: 'Bourbon', slug: 'bourbon', color: '#964B00' },
    { name: 'Vodka', slug: 'vodka', color: '#44A3FC' },
    { name: 'Gin', slug: 'gin', color: '#8BC34A' },
    { name: 'Blended whiskey', slug: 'blended-whiskey', color: '#FF9900' },
    { name: 'Tequila', slug: 'tequila', color: '#FF69B4' },
    { name: 'Sweet Vermouth', slug: 'sweet-vermouth', color: '#A8D7F5' },
    { name: 'Apricot brandy', slug: 'apricot-brandy', color: '#FFC499' },
    { name: 'Triple sec', slug: 'triple-sec', color: '#87CEEB' },
    { name: 'Southern Comfort', slug: 'southern-comfort', color: '#E5D8B6' },
    { name: 'Orange bitters', slug: 'orange-bitters', color: '#FFA07A' },
    { name: 'Brandy', slug: 'brandy', color: '#9C0' },
    { name: 'Lemon vodka', slug: 'lemon-vodka', color: '#F7D2C4' },
    { name: 'Dry Vermouth', slug: 'dry-vermouth', color: '#B3E5FC' },
    { name: 'Dark rum', slug: 'dark-rum', color: '#632A12' },
    { name: 'Amaretto', slug: 'amaretto', color: '#C9B8D6' },
    { name: 'Tea', slug: 'tea', color: '#7F7F7F' }, // gray for tea
    { name: 'Applejack', slug: 'applejack', color: '#FFC0CB' },
    { name: 'Champagne', slug: 'champagne', color: '#E6D8C3' },
    { name: 'Scotch', slug: 'scotch', color: '#964B00' }, // same as bourbon for a similar flavor profile
    { name: 'Coffee liqueur', slug: 'coffee-liqueur', color: '#F2DE1A' },
    { name: 'Añejo rum', slug: 'añejo-rum', color: '#9C0' }, // same as brandy for a similar flavor profile
    { name: 'Bitters', slug: 'bitters', color: '#7FFF00' }, // green for the herbal flavors in bitters
    { name: 'Sugar', slug: 'sugar', color: '#F5DEB3' }, // light brown for sugar
    { name: 'Kahlua', slug: 'kahlua', color: '#4A8D6C' },
    { name: 'Dubonnet Rouge', slug: 'dubonnet-rouge', color: '#FF69B4' },
    { name: 'Lime juice', slug: 'lime-juice', color: '#00BFFF' }, // blue-green for lime
    { name: 'Irish whiskey', slug: 'irish-whiskey', color: '#964B00' }, // same as bourbon for a similar flavor profile
    { name: 'Apple brandy', slug: 'apple-brandy', color: '#FFC0CB' },
    { name: 'Carbonated water', slug: 'carbonated-water', color: '#9C9CFF' },
    { name: 'Cherry brandy', slug: 'cherry-brandy', color: '#964B00' },
    { name: 'Creme de Cacao', slug: 'creme-de-cacao', color: '#F2DE1A' },
    { name: 'Grenadine', slug: 'grenadine', color: '#7C38BC' },
    { name: 'Port', slug: 'port', color: '#645649' },
    { name: 'Coffee brandy', slug: 'coffee-brandy', color: '#5F2B0A' },
    { name: 'Red wine', slug: 'red-wine', color: '#8E1E3A' },
    { name: 'Rum', slug: 'rum', color: '#964B00' },
    { name: 'Grapefruit juice', slug: 'grapefruit-juice', color: '#F28500' },
    { name: 'Ricard', slug: 'ricard', color: '#9C0047' },
    { name: 'Sherry', slug: 'sherry', color: '#653A1B' },
    { name: 'Cognac', slug: 'cognac', color: '#4E232E' },
    { name: 'Sloe gin', slug: 'sloe-gin', color: '#7C38BC' },
    {
      name: 'Strawberry schnapps',
      slug: 'strawberry-schnapps',
      color: '#FFA5B6'
    },
    { name: 'Apple juice', slug: 'apple-juice', color: '#9DDE02' },
    { name: 'Pineapple juice', slug: 'pineapple-juice', color: '#F8C03E' },
    { name: 'Lemon juice', slug: 'lemon-juice', color: '#FD6A5B' },
    { name: 'Sugar syrup', slug: 'sugar-syrup', color: '#FFFFFF' },
    { name: 'Milk', slug: 'milk', color: '#E7DAC1' },
    { name: 'Strawberries', slug: 'strawberries', color: '#F8FA62' },
    { name: 'Chocolate syrup', slug: 'chocolate-syrup', color: '#4E232E' },
    { name: 'Yoghurt', slug: 'yoghurt', color: '#FFFFFF' },
    { name: 'Mango', slug: 'mango', color: '#F8FA62' },
    { name: 'Ginger', slug: 'ginger', color: '#F27945' },
    { name: 'Lime', slug: 'lime', color: '#ADFF2F' },
    { name: 'Cantaloupe', slug: 'cantaloupe', color: '#F8E6BF' },
    { name: 'Berries', slug: 'berries', color: '#9C0047' },
    { name: 'Grapes', slug: 'grapes', color: '#7C38BC' },
    { name: 'Kiwi', slug: 'kiwi', color: '#F8FA62' },
    { name: 'Tomato juice', slug: 'tomato-juice', color: '#8E1E3A' },
    { name: 'Cocoa powder', slug: 'cocoa-powder', color: '#532D1A' },
    { name: 'Chocolate', slug: 'chocolate', color: '#964B00' },
    { name: 'Heavy cream', slug: 'heavy-cream', color: '#F2DE1A' },
    { name: 'Galliano', slug: 'galliano', color: '#7C38BC' },
    { name: 'Peach Vodka', slug: 'peach-vodka', color: '#F8FA62' },
    { name: 'Ouzo', slug: 'ouzo', color: '#9C0047' },
    { name: 'Coffee', slug: 'coffee', color: '#5F2B0A' },
    { name: 'Spiced rum', slug: 'spiced-rum', color: '#645649' },
    { name: 'Water', slug: 'water', color: '#FFFFFF' },
    { name: 'Espresso', slug: 'espresso', color: '#8E1E3A' },
    { name: 'Angelica root', slug: 'angelica-root', color: '#F27945' },
    { name: 'Orange', slug: 'orange', color: '#ADFF2F' },
    { name: 'Cranberries', slug: 'cranberries', color: '#8E1E3A' },
    { name: 'Johnnie Walker', slug: 'johnnie-walker', color: '#964B00' },
    { name: 'Apple cider', slug: 'apple-cider', color: '#9DDE02' },
    { name: 'Everclear', slug: 'everclear', color: '#F8FA62' },
    { name: 'Cranberry juice', slug: 'cranberry-juice', color: '#FFA5B6' },
    { name: 'Egg yolk', slug: 'egg-yolk', color: '#FFFFFF' },
    { name: 'Egg', slug: 'egg', color: '#9C0047' },
    { name: 'Grape juice', slug: 'grape-juice', color: '#532D1A' },
    { name: 'Peach nectar', slug: 'peach-nectar', color: '#F8FA62' },
    { name: 'Lemon', slug: 'lemon', color: '#ADFF2F' },
    { name: 'Firewater', slug: 'firewater', color: '#532D1A' },
    { name: 'Lemonade', slug: 'lemonade', color: '#F8FA62' },
    { name: 'Lager', slug: 'lager', color: '#FFFFFF' },
    { name: 'Whiskey', slug: 'whiskey', color: '#8C552E' },
    { name: 'Absolut Citron', slug: 'absolut-citron', color: '#13204D' },
    { name: 'Pisco', slug: 'pisco', color: '#673B9F' },
    { name: 'Irish cream', slug: 'irish-cream', color: '#FFFFFF' },
    { name: 'Ale', slug: 'ale', color: '#4D8051' },
    { name: 'Chocolate liqueur', slug: 'chocolate-liqueur', color: '#673B9F' },
    {
      name: 'Midori melon liqueur',
      slug: 'midori-melon-liqueur',
      color: '#FDC24C'
    },
    { name: 'Sambuca', slug: 'sambuca', color: '#FFB73E' },
    { name: 'Cider', slug: 'cider', color: '#51504D' },
    { name: 'Sprite', slug: 'sprite', color: '#52816D' },
    { name: '7-Up', slug: '7-up', color: '#5C9E73' },
    { name: 'Blackberry brandy', slug: 'blackberry-brandy', color: '#F8476B' },
    {
      name: 'Peppermint schnapps',
      slug: 'peppermint-schnapps',
      color: '#80C5FF'
    },
    { name: 'Creme de Cassis', slug: 'creme-de-cassis', color: '#7E4B6F' },
    { name: 'Jack Daniels', slug: 'jack-daniels', color: '#8C552E' },
    {
      name: 'Baileys irish cream',
      slug: 'baileys-irish-cream',
      color: '#FFFFFF'
    },

    { name: 'Coconut cream', slug: 'coconut-cream', color: '#ffffee' }, // added by gasp
    { name: 'White Rum', slug: 'white-rum', color: '#fefefe' } // added by gasp
  ]
  
  return ingredients.map(ingredient => ({
    ...ingredient,
    highlightedColorLight: colorHighlight(ingredient.color!),
    highlightedColorDark: colorHighlight(ingredient.color!, true),
  }))
}
