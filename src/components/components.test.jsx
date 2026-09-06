import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import SkillCard from './SkillCard';
import Footer from './Footer';
import { CERTIFICATIONS, EXPERIENCE_DATA, SKILLS_CATEGORIES } from '../data/portfolioData';

describe('Navbar', () => {
  it('renders the brand and resume link', () => {
    render(<Navbar darkMode={false} setDarkMode={vi.fn()} />);

    expect(screen.getByRole('link', { name: 'CharolDev' })).toHaveAttribute('href', '#');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/17H1u3tLOwbX2PPbYZO6rYH5yQbqnEsVd/view?usp=share_link',
    );
  });

  it('toggles dark mode through the moon button', () => {
    const setDarkMode = vi.fn();
    const { container } = render(<Navbar darkMode={false} setDarkMode={setDarkMode} />);

    fireEvent.click(container.querySelector('svg'));

    expect(setDarkMode).toHaveBeenCalledWith(true);
  });
});

describe('Hero', () => {
  it('renders the profile information and social links', () => {
    const { container } = render(<Hero />);

    expect(screen.getByRole('heading', { name: 'Harold Rojas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Senior Java Backend Engineer' })).toBeInTheDocument();
    expect(screen.getByAltText('Harold Rojas Avatar')).toHaveAttribute('src', '/avatar.webp');
    expect(container.querySelector('a[href="mailto:harolrop14@gmail.com"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://www.linkedin.com/in/haroldrojasp/"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://github.com/charold29"]')).toBeInTheDocument();
  });
});

describe('Experience', () => {
  it('renders every experience entry from the portfolio data', () => {
    render(<Experience />);

    for (const item of EXPERIENCE_DATA) {
      expect(screen.getByText(item.role)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.period))).toBeInTheDocument();
    }
  });
});

describe('SkillCard', () => {
  it('renders its title, icon and skill items', () => {
    render(
      <SkillCard
        title="Testing Skills"
        icon="/testing.png"
        alt="Testing icon"
        items={['Vitest', 'Testing Library']}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Testing Skills' })).toBeInTheDocument();
    expect(screen.getByAltText('Testing icon')).toHaveAttribute('src', '/testing.png');
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByText('Testing Library')).toBeInTheDocument();
  });
});

describe('Skills', () => {
  it('renders skill categories and certification links', () => {
    render(<Skills />);

    for (const category of SKILLS_CATEGORIES) {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument();
      expect(screen.getByAltText(category.alt)).toHaveAttribute('src', category.icon);
      expect(screen.getByText(category.items[0])).toBeInTheDocument();
    }

    for (const certification of CERTIFICATIONS) {
      expect(screen.getByRole('link', { name: certification.title })).toHaveAttribute(
        'href',
        certification.link,
      );
    }
  });
});

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2026 - All rights reserved');
  });
});