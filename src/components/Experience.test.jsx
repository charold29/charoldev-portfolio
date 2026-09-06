import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './Experience';
import ExperienceItem from './ExperienceItem';

describe('Experience Component', () => {
  it('renders correctly individual item props', () => {
    render(
      <ExperienceItem
        role="Backend Developer"
        period="2023 - 2024"
        description="Built REST APIs"
      />
    );

    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('2023 - 2024')).toBeInTheDocument();
    expect(screen.getByText('Built REST APIs')).toBeInTheDocument();
  });

  it('renders custom list of items in timeline', () => {
    const mockExperience = [
      { role: 'Lead Eng', period: '2025', description: 'Desc 1' },
      { role: 'Senior Eng', period: '2024', description: 'Desc 2' },
    ];

    render(<Experience items={mockExperience} />);

    expect(screen.getAllByText(/Eng/)).toHaveLength(2);
    expect(screen.getByText('Lead Eng')).toBeInTheDocument();
    expect(screen.getByText('Senior Eng')).toBeInTheDocument();
  });
});