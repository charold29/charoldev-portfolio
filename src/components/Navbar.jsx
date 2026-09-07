import { BsFillMoonStarsFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-10 flex justify-between items-center">
      <a
        className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-4 py-2 rounded-2xl"
        href="/Harold_Rojas_CV_EN_v2.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
        className="flex items-center cursor-pointer dark:text-gray-400 text-2xl"
      >
        <BsFillMoonStarsFill />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};