import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the brand and resume link', () => {
    render(<Navbar darkMode={false} setDarkMode={vi.fn()} />);

    expect(screen.getByRole('link', { name: 'CharolDev' })).toHaveAttribute('href', '#');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href',
      '/Harold_Rojas_CV_EN_v2.pdf',
    );
  });

  it('toggles dark mode through the moon button', () => {
    const setDarkMode = vi.fn();
    const { container } = render(<Navbar darkMode={false} setDarkMode={setDarkMode} />);

    fireEvent.click(container.querySelector('svg'));

    expect(setDarkMode).toHaveBeenCalledWith(true);
  });
});
