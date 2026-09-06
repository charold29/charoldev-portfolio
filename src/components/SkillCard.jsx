import PropTypes from 'prop-types';

export default function SkillCard({ title, icon, alt, items }) {
  return (
    <div className="text-center shadow-lg dark:shadow-2xl dark:shadow-emerald-500/30 p-10 rounded-xl my-10 bg-white dark:bg-gray-800 flex-1 border border-gray-100 dark:border-gray-700 transition-all">
      <img src={icon} alt={alt} className="w-32 h-32 object-contain mx-auto" />
      <h4 className="py-4 font-bold text-emerald-600 dark:text-emerald-400">{title}</h4>
      {items.map((item, index) => (
        <p key={index} className="text-gray-800 dark:text-gray-300 py-1">
          {item}
        </p>
      ))}
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};