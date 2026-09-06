import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-10 flex justify-between items-center">
      <a href="#" className="text-xl dark:text-gray-200 font-burtons">
        CharolDev
      </a>
      <ul className="flex items-center space-x-5">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer dark:text-gray-400 text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-4 py-2 rounded-2xl"
            href="https://drive.google.com/file/d/17H1u3tLOwbX2PPbYZO6rYH5yQbqnEsVd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}