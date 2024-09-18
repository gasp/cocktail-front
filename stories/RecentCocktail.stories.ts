import type { Meta, StoryObj } from '@storybook/react'
import { RecentCocktail } from '../components/recent-cocktail'

const meta: Meta<typeof RecentCocktail> = {
  title: '1. Atoms/RecentCocktail',
  component: RecentCocktail,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    index: 42,
    cocktail: {
      name: 'Bloody Mary',
      ingredients: [
        { name: 'Tomato juice', slug: 'tomato-juice', color: '#8E1E3A' as `#${string}` },
        { name: 'Vodka', slug: 'vodka', color: '#44A3FC' as `#${string}` },
        { name: 'Triple sec', slug: 'triple-sec', color: '#87CEEB' as `#${string}` }
      ],
      slug: 'bloody-mary'
    }
    
  }
}

export default meta
type Story = StoryObj<typeof RecentCocktail>

export const Default: Story = {
  args: {}
}