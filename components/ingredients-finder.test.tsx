import React from 'react'
import '@testing-library/jest-dom'
import { Ingredient } from '@/app/types'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { IngredientsFinder } from './ingredients-finder'
import { TooltipProvider } from '@/components/ui/tooltip'

const ingredients: Ingredient[] = [
  {
    name: 'Carrot Juice',
    slug: 'carrot-juice',
    color: '#ffffcc' as `#${string}`
  },
  {
    name: 'Tomato juice',
    slug: 'tomato-juice',
    color: '#8E1E3A' as `#${string}`
  },
  { name: 'Vodka', slug: 'vodka', color: '#44A3FC' as `#${string}` },
  { name: 'Triple sec', slug: 'triple-sec', color: '#87CEEB' as `#${string}` }
]

describe('IngredientsFinder', () => {
  it('renders ingredients', () => {
    const mockHandleClick = jest.fn()
    render(
      <TooltipProvider>
        <IngredientsFinder
          ingredients={ingredients}
          selectedIngredients={ingredients.filter((_, i) => i % 2)}
          onSelect={mockHandleClick}
        />
      </TooltipProvider>
    )
    const pillElement = screen.getByText('Carrot Juice')
    expect(pillElement).toHaveTextContent('Carrot Juice')
  })
  it('filters ingredients', () => {
    const mockHandleClick = jest.fn()
    render(
      <TooltipProvider>
        <IngredientsFinder
          ingredients={ingredients}
          selectedIngredients={[]}
          onSelect={mockHandleClick}
        />
      </TooltipProvider>
    )

    const inputElement = screen.getByPlaceholderText('Filter')
    act(() => {
      fireEvent.change(inputElement, { target: { value: 'vodka' } })
    })

    const filteredElement = screen.getByText('Vodka')
    expect(filteredElement).toBeInTheDocument()
    const filteredOutElement = screen.queryByText('Carrot juice')
    expect(filteredOutElement).not.toBeInTheDocument()
  })

  it('returns a clicked ingredient', () => {
    const mockHandleClick = jest.fn()
    render(
      <TooltipProvider>
        <IngredientsFinder
          ingredients={ingredients}
          selectedIngredients={[]}
          onSelect={mockHandleClick}
        />
      </TooltipProvider>
    )
    const carrot = screen.getByText('Carrot Juice');
    fireEvent.click(carrot)
    expect(mockHandleClick).toHaveBeenCalledWith(ingredients[0]);
  })

  it('returns the only element when [Enter] is pressed', () => {
    const mockHandleClick = jest.fn()
    render(
      <TooltipProvider>
        <IngredientsFinder
          ingredients={ingredients}
          selectedIngredients={[]}
          onSelect={mockHandleClick}
        />
      </TooltipProvider>
    )

    const inputElement = screen.getByPlaceholderText('Filter')
    act(() => {
      fireEvent.change(inputElement, { target: { value: 'vodka' } })
    })

    const filteredElement = screen.getByText('Vodka')
    expect(filteredElement).toBeInTheDocument()
    fireEvent.submit(inputElement)
    expect(mockHandleClick).toHaveBeenCalledWith(ingredients[2]);
  })
})
