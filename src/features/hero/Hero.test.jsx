import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the profile information and social links', () => {
    const { container } = render(<Hero />);

    expect(screen.getByRole('heading', { name: 'Harold Rojas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Senior Java Backend Engineer' })).toBeInTheDocument();
    expect(screen.getByAltText('Harold Rojas Avatar')).toHaveAttribute('src', '/avatar.webp');
    expect(container.querySelector('a[href="mailto:harolrop14@gmail.com"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://www.linkedin.com/in/haroldrojasp/"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://github.com/charol29"]')).toBeInTheDocument();
  });
});
