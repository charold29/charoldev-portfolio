import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Hero from './features/hero/Hero';
import Experience from './features/experience/Experience';
import Certifications from './features/certifications/Certifications';
import Footer from './components/Footer';
import InfinitePageScroll from './components/InfinitePageScroll';
import './Portfolio.css';

function SiteContent({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="px-10 md:px-20 lg:px-40">
        <Hero />
        <Experience />
        <Certifications />
      </div>
      <Footer />
    </>
  );
}

SiteContent.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="h-screen overflow-hidden bg-white dark:bg-gray-900 font-karla select-none transition-colors duration-300">
        <InfinitePageScroll>
          <SiteContent darkMode={darkMode} setDarkMode={setDarkMode} />
        </InfinitePageScroll>
      </main>
    </div>
  );
}