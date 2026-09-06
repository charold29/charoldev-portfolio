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
          <p key={index} className="text-gray-800 dark:text-gray-300 underline py-1">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              {cert.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}