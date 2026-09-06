import { BsFillCheckCircleFill } from 'react-icons/bs';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <div>
      <h3 className="text-3xl py-1 dark:text-white">Professional Experience</h3>
      <ul className="list-disc list-inside">
        {EXPERIENCE_DATA.map((item, index) => (
          <li key={index} className="flex place-items-center space-x-5">
            <BsFillCheckCircleFill className="text-emerald-600 font-medium dark:text-emerald-400 flex-shrink-0" />
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.role}</span> ({item.period}) — {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}