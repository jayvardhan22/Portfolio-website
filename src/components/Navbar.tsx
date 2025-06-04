import React, { useState } from 'react';
import profilePic from './assests/30285.jpg';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 bg-white px-2 z-50 py-2">
      <nav
  className={`bg-navy-900 px-4 sm:px-6 py-3 flex items-center justify-between relative transition-all duration-300
    ${menuOpen ? 'rounded-t-lg' : 'rounded-lg'} md:rounded-t-lg`}
>
        <div className="flex items-center space-x-3">
          <img src={profilePic} alt="Cristian Muñoz" className="w-10 h-10 rounded-full" />
          <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">Cristian Muñoz</span>
        </div>

        <div className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10">
          <a
            href="#home"
            className={`text-white text-base font-medium pb-1 ${activeLink === 'home' ? 'border-b-2 border-blue-400' : 'hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`text-white text-base font-medium pb-1 ${activeLink === 'skills' ? 'border-b-2 border-blue-400' : 'hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className={`text-white text-base font-medium pb-1 ${activeLink === 'portfolio' ? 'border-b-2 border-blue-400' : 'hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => handleLinkClick('portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className={`text-white text-base font-medium pb-1 ${activeLink === 'blog' ? 'border-b-2 border-blue-400' : 'hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => handleLinkClick('blog')}
          >
            Blog
          </a>
        </div>

        <div className="hidden lg:block">
          <button className="bg-purple-500 text-white text-base px-6 py-2 rounded-lg hover:bg-purple-600 transition">
            Contact Me
          </button>
        </div>

        <div className="flex lg:hidden flex-col space-y-1 ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`h-1 w-8 bg-white rounded-full transition-transform ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`ml-auto h-1 w-6 bg-white rounded-full transition-transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </div>

        <div className={`absolute top-16 left-0 right-0 bg-navy-900 rounded-b-lg px-6 py-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white text-lg font-medium"
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-white text-lg font-medium"
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-white text-lg font-medium"
              onClick={() => handleLinkClick('portfolio')}
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className="text-white text-lg font-medium"
              onClick={() => handleLinkClick('blog')}
            >
              Blog
            </a>
            <button className="bg-purple-500 text-white text-lg py-2 rounded-lg hover:bg-purple-600 transition">
              Contact Me
            </button>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
