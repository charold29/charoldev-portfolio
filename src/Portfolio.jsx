import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './features/hero/Hero';
import Experience from './features/experience/Experience';
import Skills from './features/certifications/Certifications';
import Footer from './components/Footer';
import './Portfolio.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-karla select-none transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}