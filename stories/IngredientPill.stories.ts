import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { IngredientPill } from '../components/ingredient-pill'

const meta: Meta<typeof IngredientPill> = {
  title: '1. Atoms/IngredientPill',
  component: IngredientPill,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    ingredient: { name: 'Tomato', slug: 'tomato', color: '#FF6347' }
  }
}

export default meta
type Story = StoryObj<typeof IngredientPill>

export const Default: Story = {
  args: {
    // Add default props here
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
