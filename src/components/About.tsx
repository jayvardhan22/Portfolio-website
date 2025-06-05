// import React from "react";
import icon1 from "./assests/Icono (2).png";
import icon2 from "./assests/Icono (1).png";
import colombianImage from "./assests/Group 27 (1).svg";
import patronPuntosTop from "./assests/Patron de Puntos (2).svg";
import patronPuntosBottom from "./assests/Patron de Puntos (3).svg";
import highlightImage from "./assests/Highlight_04.svg";
import gridImage from "./assests/Vector-Cuadros.svg";

const AboutMeCard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-16 pb-40 relative bg-navy-900 overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        <img src={gridImage} alt="Grid Background" className="w-full h-full object-cover" />
      </div>

      <img
        src={patronPuntosTop}
        alt="Pattern Top Left"
        className="absolute top-1/6 left-1 md:left-2 lg:left-6 w-14 md:w-16 lg:w-20 h-auto object-contain z-10 opacity-70"
      />
      <img
        src={patronPuntosBottom}
        alt="Pattern Bottom Right"
        className="absolute bottom-20 right-0 md:bottom-28 md:right-0 lg:bottom-28 lg:right-0 w-14 md:w-16 lg:w-20 h-auto object-contain z-30 opacity-100"
      />

      <h1 className="text-white text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] 2xl:text-[56px] font-semibold mb-24 text-center z-20 leading-snug">
        About Me
      </h1>

      <div className="relative z-20 w-full flex justify-center">
        <div className="relative w-full max-w-[1600px] flex flex-col items-center">
          <div className="relative flex justify-center items-start w-full max-w-[850px] z-20">

            <img
              src={highlightImage}
              alt="Highlight"
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[50px] md:w-[70px] lg:w-[90px] xl:w-[100px] z-30 object-contain"
            />

            <div
              className={`
                bg-white rounded-[20px] md:rounded-[30px] lg:rounded-[40px] 
                px-3 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 shadow-xl 
                flex justify-between text-center mt-6 md:mt-8 lg:mt-10 w-full relative
              `}
            >
              <div className="absolute -top-[200px] left-1/2 transform -translate-x-[45%] z-30">
                <img
                  src={colombianImage}
                  alt="Colombian"
                  className="object-contain h-[460px] sm:h-[480px] md:h-[500px] lg:h-[520px] xl:h-[540px] w-auto pointer-events-none"
                />
              </div>

              <div className="w-1/2 flex flex-col items-center justify-start z-20 ml-[-10%]">
                <img
                  src={icon1}
                  alt="Responsibility Icon"
                  className="w-[36px] sm:w-[42px] md:w-[48px] lg:w-[52px] h-auto mb-2"
                />
                <p className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-black leading-none">
                  100%
                </p>
                <p className="text-black font-poppins text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] mt-1">
                  Responsibility
                </p>
              </div>

              <div className="w-1/2 flex flex-col items-center justify-start z-20 mr-[-8%]">
                <img
                  src={icon2}
                  alt="Punctuality Icon"
                  className="w-[36px] sm:w-[42px] md:w-[48px] lg:w-[52px] h-auto mb-2"
                />
                <p className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-black leading-none">
                  100%
                </p>
                <p className="text-black font-poppins text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] mt-1">
                  Punctuality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 90"
          preserveAspectRatio="none"
          className="w-full"
          style={{
            height: "clamp(60px, 8vw, 90px)",
            transform: "scaleY(-1)",
            display: "block",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutMeCard;
