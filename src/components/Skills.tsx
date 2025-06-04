import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';

import dot1 from '../components/assests/Patron de Puntos (2).svg';
import highlightImg from './assests/Highlight_10.svg';

const skills = [
  { name: 'Figma / Adobe XD', percentage: 90 },
  { name: 'UI Design', percentage: 80 },
  { name: 'Information Architecture', percentage: 80 },
  { name: 'UX Design', percentage: 70 },
  { name: 'Prototyping', percentage: 70 },
  { name: 'Box Model', percentage: 70 },
  { name: 'Business Model Canvas', percentage: 70 },
  { name: 'Design Systems', percentage: 70 },
];

const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Skills: React.FC = () => {
  const [groupSize, setGroupSize] = useState(4);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 1024) {
        setGroupSize(2);
      } else {
        setGroupSize(4);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const groupedSkills = chunkArray(skills, groupSize);

  return (
    <div
      id="skills"
      className="relative w-full min-h-screen bg-white overflow-x-hidden px-[clamp(8px,3vw,40px)] pt-[clamp(36px,6vh,100px)] pb-[clamp(36px,8vh,120px)]"
    >
      <div className="relative z-20 mb-[clamp(40px,5vh,80px)] flex items-center gap-[clamp(6px,1.5vw,24px)] pl-[clamp(6px,2vw,24px)]">
        <img
          src={dot1}
          alt="Dot Top Left"
          className="w-[clamp(30px,4vw,60px)] h-auto opacity-90 -ml-[clamp(30px,4vw,60px)]"
        />
        <div className="relative">
          <img
            src={highlightImg}
            alt="Highlight"
            className="absolute -top-4 left-[clamp(50px,6vw,90px)] w-[clamp(30px,3.5vw,60px)] opacity-90 pointer-events-none"
          />
          <h2 className="text-[clamp(22px,3.4vw,38px)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-tight leading-none">
            Skills
          </h2>
        </div>
      </div>
      <img
        src={dot1}
        alt="Dot Center Right"
        className="absolute top-1/2 right-[clamp(4px,1vw,32px)] transform -translate-y-1/2 w-[clamp(40px,6vw,80px)] z-10 opacity-90"
      />

      <img
        src={dot1}
        alt="Dot Bottom Left"
        className="absolute bottom-[clamp(8px,1vh,20px)] left-[clamp(1px,1vw,22px)] w-[clamp(40px,6vw,80px)] z-10 opacity-90"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {groupedSkills.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full px-[clamp(8px,2vw,24px)] max-w-[1100px] mx-auto"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 w-full mb-8">
              {group.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center bg-white bg-opacity-20 px-1 py-2 rounded-lg w-full"
                >
                  <div className="relative w-[clamp(50px,6vw,90px)] h-[clamp(50px,6vw,90px)] mb-2 flex items-center justify-center">
           
                    <div className="absolute w-full h-full">
                      <CircularProgress
                        variant="determinate"
                        value={100}
                        thickness={4}
                        sx={{
                          width: '100% !important',
                          height: '100% !important',
                          color: '#E5E7EB',
                        }}
                      />
                    </div>
                    <div className="absolute w-full h-full">
                      <CircularProgress
                        variant="determinate"
                        value={skill.percentage}
                        thickness={4}
                        sx={{
                          width: '100% !important',
                          height: '100% !important',
                          color: '#8B5CF6',
                          transform: 'rotate(-30deg)',
                          '& .MuiCircularProgress-circle': {
                            strokeLinecap: 'round',
                          },
                        }}
                      />
                    </div>
                    <div className="absolute text-black text-[clamp(9px,0.9vw,14px)] font-semibold">
                      {skill.percentage}%
                    </div>
                  </div>
                  <h3 className="text-black text-center text-[clamp(9px,0.85vw,13px)] font-medium leading-tight">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            {groupIndex !== groupedSkills.length - 1 && (
              <hr className="border-t-2 border-gray-200 w-full mb-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
