import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="min-h-screen w-full bg-[#3EA66B] flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-10">
          {/* Left Side - Title and Subtitle */}
          <div className="flex flex-col justify-center items-center md:items-start relative">
            {/* Decorative Flowers */}
            <div className="absolute -top-3 left-10 w-20 h-18  rounded-full flex items-center justify-center rotate-10">
              <img
                    src="/img/flower-yellow.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="flower-yellow"
                  />
            </div>

            <div className="absolute top-2 left-60 w-12 h-12  rounded-full flex items-center justify-center rotate-70">
       
              <img
                    src="/img/flower-light-yellow.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="flower-light-yellow"
                  />

            </div>

            <div className="absolute top-26 -left-20 w-16 h-14 rounded-full flex items-center justify-center">
              <img
                    src="/img/flower-blue.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '3s' }}
                    alt="flower-blue"
                  />
            </div>

            <div className="absolute bottom-52 -left-14 w-20 h-18 rounded-full flex items-center justify-center">
              <img
                    src="/img/flower-green.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="flower-green"
                  />
            </div>

            <div className="absolute bottom-42 left-50 w-10 h-10 rounded-full flex items-center justify-center">
              <img
                    src="/img/flower-light-blue.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '3s' }}
                    alt="flower-light-blue"
                  />
            </div>

            <div className="absolute top-42 right-50 w-14 h-14 rounded-full flex items-center justify-center z-20">
              <img
                    src="/img/flower-orange.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '3s' }}
                    alt="flower-orange"
                  />
            </div>

            <div className="absolute top-50 left-8 w-12 h-10 rounded-full flex items-center justify-center">
              <img
                    src="/img/flower-pink.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '4s' }}
                    alt="flower-pink"
                  />
            </div>

            {/* Title Bubble */}
            <div className="bg-[#FFD83F] rounded-full w-120 py-6 mt-18 mb-4 shadow-lg border-2 border-black -rotate-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              <h1
                className="text-4xl md:text-5xl font-black text-[#FF6953] font-['Bernoru'] uppercase tracking-tight scale-x-[0.6] mr-60"
                style={{ WebkitTextStroke: "1px black" }}
              >
                CHALOTHORN'S
              </h1>
            </div>

            {/* Subtitle Bubble */}
            <div className="bg-[#FFFBE0] rounded-full w-100 ml-20 mt-4 px-12 py-6 shadow-lg border-2 border-black rotate-3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              <h2
                className="text-4xl md:text-5xl font-black text-[#FF6953] font-['Bernoru'] uppercase tracking-tight scale-x-[0.6] mr-60"
                style={{ WebkitTextStroke: "1px black" }}
              >
                PORTFOLIO
              </h2>
            </div>

            {/* Subtitle Text */}
            <div className="mt-30 text-center md:text-start">
              <p className="text-3xl md:text-5xl text-white drop-shadow-lg font-['Lexend_Deca'] ml-40">
                Aspiring
              </p>
              <p className="mt-4 text-3xl md:text-5xl text-white drop-shadow-lg font-['Lexend_Deca'] ml-16">
                Web Developer
              </p>
            </div>
          </div>

          {/* Right Side - Navigation Buttons */}
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="md:grid grid-cols-2 gap-20">
              {/* My Projects Button */}
              <button
                onClick={() => handleNavigation("/myprojects")}
                className="relative bg-[#FFFBE0] rounded-sm p-6 shadow-xl  transition-all hover:scale-105 flex items-center  border-3 border-black w-full min-h-25 cursor-pointer duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}
                <div className="absolute -left-6 bg-[#5CD1FF] w-20 h-20 overflow-hidden  rounded-sm border-3 border-black shrink-0 ">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[120%] h-[120%] -mt-2  object-cover scale-110 " // ใช้ object-cover และ scale เพื่อให้เต็มกล่อง
                  >
                    <source src="/img/star.webm" type="video/webm" />
                    {/* อย่าลืมเปลี่ยน type เป็น video/webm ให้ตรงกับนามสกุลไฟล์นะครับ */}
                  </video>
                </div>

                {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
                <span className="text-3xl text-black underline ml-12 font-['Lexend_Deca']">
                  My Projects
                </span>
              </button>

              {/* About Me Button */}
              <button
                onClick={() => handleNavigation("/aboutme")}
                className="relative bg-[#FFFBE0] rounded-sm p-6 shadow-xl mt-5 md:mt-0 transition-all hover:scale-105 flex items-center  border-3 border-black w-full min-h-25 cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}
                <div className="absolute -left-6 bg-[#FF9686]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
                  <img
                    src="/img/smile-face.png"
                    className="w-[120%] h-[120%] max-w-none object-center"
                    alt="smile-face"
                  />
                </div>

                {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
                <span className="text-3xl text-black underline ml-12 font-['Lexend_Deca']">
                  About Me
                </span>
              </button>
            </div>

            {/* Row 2 */}
            <div className="md:grid grid-cols-2 gap-20">
              {/* My Skills Button */}
              <button
                onClick={() => handleNavigation("/myskills")}
                className="relative bg-[#FFFBE0] rounded-sm p-6 shadow-xl mt-5 md:mt-0 transition-all hover:scale-105 flex items-center  border-3 border-black w-full min-h-25 cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}
                <div className="absolute -left-6 bg-[#F9B2DC]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
                  <img
                    src="/img/coding-icon.png"
                    className="w-[90%] h-[85%] max-w-none object-center"
                    alt="coding-icon"
                  />
                </div>

                {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
                <span className="text-3xl text-black underline ml-12 font-['Lexend_Deca']">
                  My Skills
                </span>
              </button>

              {/* Experience Button */}
              <button
                onClick={() => handleNavigation("/experience")}
                className="relative bg-[#FFFBE0] rounded-sm p-6 shadow-xl mt-5 md:mt-0 transition-all hover:scale-105 flex items-center  border-3 border-black w-full min-h-25 cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}
                <div className="absolute -left-6 bg-[#957FFF]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
                  <img
                    src="/img/briefcase.png"
                    className="w-[90%] h-[90%] max-w-none object-center"
                    alt="briefcase"
                  />
                </div>

                {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
                <span className="text-3xl text-black underline ml-12 font-['Lexend_Deca']">
                  Experience
                </span>
              </button>
            </div>

            {/* Row 3 */}
            <div className="md:grid grid-cols-2 gap-20">
              {/* Contact Me Button */}
              <button
                onClick={() => handleNavigation("/contactme")}
                className="relative bg-[#FFFBE0] rounded-sm p-6 shadow-xl mt-5 md:mt-0 transition-all hover:scale-105 flex items-center  border-3 border-black w-full min-h-25 cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}
                <div className="absolute -left-6 bg-[#FF8E51]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
                  <img
                    src="/img/paperplane.png"
                    className="w-[90%] h-[90%] max-w-none object-center"
                    alt="paperplane"
                  />
                </div>

                {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
                <span className="text-3xl text-black underline ml-12 font-['Lexend_Deca']">
                  Contact Me
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
