import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the CharolDev signature', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'CharolDev' })).toHaveAttribute('href', '#');
  });
});
