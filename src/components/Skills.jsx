import SkillCard from './SkillCard';
import { SKILLS_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="lg:flex gap-10 justify-center">
      {SKILLS_CATEGORIES.map((category, index) => (
        <SkillCard
          key={index}
          title={category.title}
          icon={category.icon}
          alt={category.alt}
          items={category.items}
        />
      ))}

      {/* Tarjeta de Certificaciones */}
      <div className="text-center shadow-lg dark:shadow-2xl dark:shadow-emerald-500/30 p-10 rounded-xl my-10 bg-white dark:bg-gray-800 flex-1 border border-gray-100 dark:border-gray-700 transition-all">
        <img src="/medal-dynamic-color.png" alt="Medal icon" className="w-32 h-32 object-contain mx-auto" />
        <h4 className="py-4 font-bold text-emerald-600 dark:text-emerald-400">Certifications</h4>
        {CERTIFICATIONS.map((cert, index) => (
          <p
            key={index}
            className="group relative flex min-h-16 items-center justify-center px-28 py-1 text-gray-800 dark:text-gray-300 underline"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              {cert.title}
            </a>
            <img
              src={cert.previewImg}
              alt={`${cert.title} preview`}
              className="pointer-events-none absolute right-0 top-1/2 h-14 w-24 -translate-y-1/2 rounded-lg object-cover opacity-0 shadow-2xl ring-2 ring-emerald-500/70 scale-95 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 dark:ring-emerald-400/70"
            />
          </p>
        ))}
      </div>
    </div>
  );
}