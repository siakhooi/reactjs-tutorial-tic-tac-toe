import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Game from '../Game'

it('Game/screen', () => {
  render(<Game />)
  const linkElement1 = screen.getByText(/Next player:/i)
  expect(linkElement1).toBeInTheDocument()

  const linkElement2 = screen.getByText(/Go to game start/i)
  expect(linkElement2).toBeInTheDocument()
})
