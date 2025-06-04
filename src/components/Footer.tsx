import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import TopDots from './assests/dots.svg';
import BottomDots from './assests/Patron de Puntos (3).svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 relative rounded-t-[4vw] w-full overflow-hidden">
      <img
        src={TopDots}
        alt="Top Dot Pattern"
        className="absolute top-[2vw] right-0 w-[8vw] max-w-[100px] min-w-[32px] h-auto object-contain z-[1]"
      />
      <img
        src={BottomDots}
        alt="Bottom Dot Pattern"
        className="absolute bottom-0 left-0 w-[10vw] max-w-[120px] min-w-[40px] h-auto object-contain z-[1]"
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors"
            >
              <FaTwitter size={28} />
            </a>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">
            Cristian David Muñoz Camayo @tianmunooz © 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
