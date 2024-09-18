import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ShakeButton } from '../components/shake-button'

const meta: Meta<typeof ShakeButton> = {
  title: '2. Molecules/ShakeButton',
  component: ShakeButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    onClear: fn(),
    cocktail: {
      name: 'Margarita',
      image: 'https://example.com/image.jpg',
      ingredients: [],
      slug: 'margarita',
      description: 'A classic cocktail'
    }
  }
}

export default meta
type Story = StoryObj<typeof ShakeButton>

export const Default: Story = {
  args: {}
}

export const Generate: Story = {
  args: {
    cocktail: {
      name: 'Margarita',
      image: undefined,
      ingredients: [],
      slug: 'margarita',
      description: 'A classic cocktail'
    }
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
