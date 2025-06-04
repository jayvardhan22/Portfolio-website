import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import eventImage from './assests/eventos.png';
import portalImage from './assests/mi-portal.png';
import lineImage from './assests/Underline_06.svg';
import dotPattern from './assests/Patron de Puntos.svg';
// import acAppimage from './assests/Bannera&c 1 (1).png';
import './portfolio.css';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Eventos Premium',
    description: 'Elegante - Serio - Estatus',
    image: eventImage,
  },
  {
    title: 'Mi Portal U',
    description: 'Amigable - Dashboard - Simple',
    image: portalImage,
  },
  {
    title: 'A&C App',
    description: 'Elegante - Serio - Estatus',
    image: eventImage,
  },
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div
      id="portfolio"
      className="relative w-full bg-white overflow-x-hidden"
      style={{ minHeight: '100vh' }}
    >
      <img
        src={dotPattern}
        alt="Pattern"
        className="absolute bottom-[70px] left-0 w-[clamp(80px,12vw,150px)] z-0 opacity-60 pointer-events-none select-none"
        draggable={false}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-[clamp(16px,4vw,48px)] pt-[clamp(8px,1vw,12px)] text-left relative z-10"
      >
        <div className="inline-flex relative">
          <div className="relative">
            <h1 className="text-purple-400 font-bold text-[clamp(32px,5vw,72px)] leading-none">
              Portfolio
            </h1>
            <img
              src={lineImage}
              alt="Decorative Line"
              className="absolute right-0 pointer-events-none select-none"
              style={{
                width: 'min(40%, clamp(120px, 10vw, 200px))',
                transformOrigin: 'bottom right',
                bottom: '-0.55em',
              }}
              draggable={false}
            />
          </div>
        </div>
      </motion.div>

      <div className="relative w-full z-10">
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide w-full flex justify-start items-start"
          style={{ overflowY: 'visible' }}
        >
          <div className="flex gap-[clamp(32px,5vw,72px)] w-max px-[clamp(16px,4vw,24px)] pt-[clamp(220px,14vw,220px)] pb-[clamp(96px,10vw,160px)]">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className={`relative w-[380px] flex-shrink-0 overflow-visible ${
                  index === 0 ? 'ml-[clamp(16px,4vw,32px)]' : ''
                } ${
                  index === projects.length - 1
                    ? 'mr-[clamp(16px,4vw,32px)]'
                    : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative w-full h-full"
                >
                  <div className="group">
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain object-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="w-full h-[180px] bg-white rounded-3xl shadow-lg border transition-all duration-300 p-[48px] pt-[100px] text-left">
                    <h3 className="text-[20px] font-semibold text-purple-600 mb-0">
                      {project.title}
                    </h3>
                    <hr className="h-px w-[180px] bg-gray-200 border-0" />
                    <p className="text-gray-600 text-[16px] mt-2 leading-snug">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .project-image-container {
          position: absolute;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 1rem;
          overflow: visible;
          z-index: 10;
          transition: transform 0.3s ease;
          width: clamp(220px, 65vw, 300px);
          height: clamp(140px, 40vw, 200px);
        }

        @media (max-width: 767px) {
          .project-image-container {
            width: 320px !important;
            height: 210px !important;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
