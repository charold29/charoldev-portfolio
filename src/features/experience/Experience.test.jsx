import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './Experience';
import ExperienceItem from './ExperienceItem';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

describe('Experience', () => {
  it('renders every experience entry and its technology chips', () => {
    render(<Experience />);

    for (const item of EXPERIENCE_DATA) {
      expect(screen.getByText(item.role)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.period))).toBeInTheDocument();

      for (const skill of item.skills) {
        expect(screen.getByText(skill)).toBeInTheDocument();
      }
    }
  });

  it('renders a custom list of items in the timeline', () => {
    const mockExperience = [
      { role: 'Lead Eng', period: '2025', description: 'Desc 1', skills: [] },
      { role: 'Senior Eng', period: '2024', description: 'Desc 2', skills: [] },
    ];

    render(<Experience items={mockExperience} />);

    expect(screen.getByText('Lead Eng')).toBeInTheDocument();
    expect(screen.getByText('Senior Eng')).toBeInTheDocument();
  });
});

describe('ExperienceItem', () => {
  it('renders individual item props', () => {
    render(
      <ExperienceItem
        role="Backend Developer"
        period="2023 - 2024"
        description="Built REST APIs"
        skills={[]}
      />,
    );

    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('2023 - 2024')).toBeInTheDocument();
    expect(screen.getByText('Built REST APIs')).toBeInTheDocument();
  });
});