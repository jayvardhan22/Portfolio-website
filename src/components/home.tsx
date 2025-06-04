import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './assests/Allura UI Windows (2).svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dot1 from './assests/Patron de Puntos (2).svg';
import Dot2 from './assests/Patron de Puntos.svg';
import arrow from './assests/Arrow_01.svg';
import './home.css';

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-[clamp(16px,4vw,64px)] pt-[clamp(64px,8vh,144px)] pb-[clamp(64px,8vh,144px)]"
    >
      <div className="relative z-10 w-full max-w-[2480px] flex flex-col lg:flex-row items-center justify-between gap-[clamp(24px,3vw,64px)]">

        <div className="absolute top-[clamp(32px,6vh,120px)] right-[clamp(24px,3vw,80px)] z-0 w-[clamp(300px,40vw,800px)] hidden lg:block">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-auto object-contain opacity-90"
          />
        </div>

        <div className="absolute z-0 top-[-10%] right-[-5%] w-[clamp(36px,6vw,120px)] hidden lg:block">
          <img
            src={Dot1}
            alt="Dot 1"
            className="w-full h-auto object-contain opacity-90"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-left px-[clamp(8px,2vw,32px)] w-full"
        >
          <h1 className="text-black font-bold mb-4 leading-tight text-[clamp(32px,6vw,80px)]">
            Hi, I aḿ
            <span className="block text-[clamp(32px,6vw,80px)]">Cristian 🎨</span>
          </h1>

          <div className="space-y-2 max-w-[clamp(300px,70vw,620px)]">
            {[
              "I am a UI/UX Designer, I like to make interfaces simple",
              "and aesthetically pleasing for users. The idea is not to",
              "create an interface for creating it, it is that users",
              "prefer you because your product is easy to use.",
            ].map((line, i) => (
              <p
                key={i}
                className="text-gray-700 text-[clamp(10px,1vw,16px)] leading-relaxed max-w-[600px] text-left"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="relative flex flex-wrap items-center justify-start gap-x-[clamp(16px,2vw,32px)] gap-y-[clamp(16px,2vw,32px)] mt-[clamp(16px,2vh,32px)]">
            
            <div className="absolute z-0 left-[-10%] top-1/2 -translate-y-1/2 w-[clamp(72px,9vw,220px)] hidden lg:block">
              <img
                src={Dot2}
                alt="Dot 2"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="relative z-10">
              <button className="bg-purple-600 text-white px-[clamp(24px,4vw,64px)] py-[clamp(10px,1vw,20px)] rounded-lg hover:bg-purple-700 transition-colors flex items-center text-[clamp(12px,1.1vw,18px)] min-w-[clamp(160px,20vw,260px)]">
                <sub className="mr-1 text-white font-bold text-[1em] relative bottom-[-0.2em]">i</sub>
                Contact Me!
                <span className="w-[clamp(20px,2vw,24px)] h-[clamp(20px,2vw,24px)] rounded-full border-2 border-white flex items-center justify-center ml-2">
                  <ArrowForwardIosIcon sx={{ fontSize: 'clamp(10px,1vw,14px)' }} />
                </span>
              </button>
            </div>

            <div className="relative z-10 w-[clamp(64px,10vw,140px)] min-w-[64px]">
              <img
                src={arrow}
                alt="Arrow"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
