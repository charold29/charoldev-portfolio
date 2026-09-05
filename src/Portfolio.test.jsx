import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
  it('renders the name and title', () => {
    render(<Portfolio />)
    expect(screen.getByText('Harold Rojas')).toBeInTheDocument()
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
  })

  it('toggles dark mode when the moon icon is clicked', () => {
    const { container } = render(<Portfolio />)
    const root = container.firstChild
    expect(root).not.toHaveClass('dark')

    fireEvent.click(container.querySelector('svg'))
    expect(root).toHaveClass('dark')
  })
})
