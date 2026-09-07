import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  it('renders the name and title', () => {
    render(<Portfolio />);
    expect(screen.getAllByText('Harold Rojas').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Senior Java Backend Engineer').length).toBeGreaterThan(0);
    expect(document.querySelector('.fixed.inset-0')).toBeInTheDocument();
  });

  it('toggles dark mode when the theme button is clicked', () => {
    const { container } = render(<Portfolio />);
    const root = container.firstChild;
    expect(root).not.toHaveClass('dark');

    fireEvent.click(screen.getAllByRole('button', { name: /dark mode/i })[0]);
    expect(root).toHaveClass('dark');
  });
});