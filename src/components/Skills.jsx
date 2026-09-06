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
          <div
            key={index}
            className="group relative w-full py-1"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 text-gray-800 underline transition-colors hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
            >
              {cert.title}
            </a>
            <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-50 mb-3 w-72 max-w-[calc(100vw-4rem)] -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-2xl ring-1 ring-emerald-500/20 backdrop-blur-md dark:border-emerald-500/30 dark:bg-gray-900/95">
                <div className="aspect-video overflow-hidden rounded-xl border border-gray-100 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
                  <img
                    src={cert.previewImg}
                    alt={`Preview of ${cert.title}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2 px-1 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Official Credential
                  </span>
                  <span className="whitespace-nowrap text-[10px] text-gray-400">Click to verify ↗</span>
                </div>
              </div>
              <div className="mx-auto -mt-1.5 h-3 w-3 rotate-45 border-b border-r border-gray-200 bg-white dark:border-emerald-500/30 dark:bg-gray-900" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}