import React from 'react';
import '@testing-library/jest-dom'
import { Ingredient } from '@/app/types'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { IngredientPill } from './ingredient-pill'
 
const ingredient: Ingredient = {
    name: 'Carrot Juice',
    slug: 'carrot-juice',
    color: '#ffffcc',
  }

  describe('IngredientPill', () => {
    it('renders the ingredient name', () => {
      const mockHandleClick = jest.fn();
  
      render(<IngredientPill ingredient={ingredient} handleClick={mockHandleClick} />);
  
      const pillElement = screen.getByText('Carrot Juice');
      expect(pillElement).toHaveTextContent('Carrot Juice')
    });
  
    it('calls handleClick when clicked', () => {
      const mockHandleClick = jest.fn();
  
      render(<IngredientPill ingredient={ingredient} handleClick={mockHandleClick} />);
  
      const pillElement = screen.getByText('Carrot Juice');
      fireEvent.click(pillElement);
  
      expect(mockHandleClick).toHaveBeenCalledWith(ingredient);
    });
  });