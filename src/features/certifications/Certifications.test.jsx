import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Certifications from './Certifications';
import { CERTIFICATIONS } from '../../data/portfolioData';

describe('Certifications', () => {
  it('renders certification links and preview images', () => {
    render(<Certifications />);

    expect(screen.getByRole('heading', { name: 'Certifications' })).toBeInTheDocument();

    for (const certification of CERTIFICATIONS) {
      expect(screen.getByRole('link', { name: certification.title })).toHaveAttribute(
        'href',
        certification.link,
      );
      expect(screen.getByAltText(`Preview of ${certification.title}`)).toHaveAttribute(
        'src',
        certification.previewImg,
      );
    }
  });
});
