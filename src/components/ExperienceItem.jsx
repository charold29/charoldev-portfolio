import PropTypes from 'prop-types';

export default function ExperienceItem({ role, period, description }) {
  return (
    <div className="relative pl-8 md:pl-10 group">
      {/* Nodo/Punto de la Línea de Tiempo */}
      <div className="absolute -left-[9px] top-1.5 flex items-center justify-center">
        <span className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 group-hover:ring-emerald-500/30 transition-all duration-300" />
        <span className="absolute h-8 w-8 rounded-full bg-emerald-500/20 animate-ping pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Tarjeta de Contenido */}
      <div className="p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm group-hover:border-emerald-500/40 dark:group-hover:border-emerald-500/40 transition-all duration-300 shadow-sm group-hover:shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {role}
          </h4>
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit">
            {period}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};