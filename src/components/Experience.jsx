import PropTypes from 'prop-types';
import ExperienceItem from './ExperienceItem';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience({ items = EXPERIENCE_DATA }) {
  return (
    <section className="py-12">
      <h3 className="text-3xl font-bold mb-10 dark:text-white">
        Professional Experience
      </h3>

      {/* Contenedor con la línea vertical */}
      <div className="relative border-l-2 border-emerald-500/20 dark:border-emerald-500/30 ml-4 md:ml-6 space-y-12">
        {items.map((item, index) => (
          <ExperienceItem
            key={index}
            role={item.role}
            period={item.period}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

Experience.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};