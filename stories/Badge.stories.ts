import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Badge } from '../components/ui/badge'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '0. Abstracts/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: 'what is in the badge',
      type: { name: 'string', required: true },
      defaultValue: 'Badge'
    },
    variant: {
      control: 'select',
      description: 'what is in the badge',
      options: ['default', 'secondary']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Badge' }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
}
