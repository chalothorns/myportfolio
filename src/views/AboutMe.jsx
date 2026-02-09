import React from "react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };


  const email = "chalot.loy@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  
  return (
    <div className="min-h-screen w-full bg-[#FFFBE0]">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="bg-[#FEC900] hover:bg-[#eebd0c] rounded-md px-10 py-3 border-2 border-black shadow-lg flex items-center gap-2 ml-10 mb-8 mt-10 transition-transform ease-out active:scale-95 duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
      >
        <svg
          className="w-10 h-10"
          fill="#FF6953"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-6.07 -6.07 72.87 72.87"
          stroke="black"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <g>
              <g>
                <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625" strokeWidth="2"></polygon>
              </g>
            </g>
          </g>
        </svg>
        <span
          className="text-3xl font-black text-[#FF6953]"
          style={{ WebkitTextStroke: "1px black" }}
        >
          BACK
        </span>
      </button>

      {/* Header */}
       <div className="flex items-center justify-center gap-6 mb-20 w-[60%] mx-auto">
        <button className="relative bg-[#FFD83F] rounded-sm p-6 shadow-xl  flex items-center  border-3 border-black w-full min-h-25">
           {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}

           <div className="absolute -left-6 bg-[#FF9686]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
                   <img
                    src="/img/smile-face.png"
                    className="w-[120%] h-[120%] max-w-none object-center"
                    alt="myprofilepic"
                  />
                </div>

          {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
          <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]">
            About Me
          </span>
        </button>
      </div>



      {/* Content Section */}
      <div className="px-16 pb-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Introduction Card */}
            <div className="bg-[#F9B2DC] rounded-lg border-3 border-black shadow-lg px-16 py-8">
              <h2 className="text-2xl font-bold mb-6 font-['Lexend_Deca']">Hi, I'm Chalothorn :)</h2>
              <ul className="space-y-4 text-xl">
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">•</span>
                  <div className="font-['Lexend_Deca']">
                    <span className="font-bold font-['Lexend_Deca']">Who I Am:</span> A passionate Career Switcher who recently completed an intensive Web Development Bootcamp.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">•</span>
                  <div className="font-['Lexend_Deca']">
                    <span className="font-bold font-['Lexend_Deca']">My Goal:</span> Looking for my first role as a Junior Developer where I can apply my problem-solving skills and grow with a team.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold shrink-0">•</span>
                  <div className="font-['Lexend_Deca']">
                    <span className="font-bold font-['Lexend_Deca']">Fun Fact:</span> I'm a fast learner who spent over 500+ hours coding over the past 16 weeks!
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Information Card */}
            <div className="bg-[#F4F4F7] rounded-lg border-3 border-black shadow-lg p-8">
              <h2 className="text-4xl font-bold text-center mb-6 font-['Lexend_Deca']">Contact Information</h2>
              <div className="flex justify-center gap-6 ">
                
                {/* Email icon */}
                <button
            onClick={handleCopy}
            className="w-14 h-14 flex items-center justify-center cursor-pointer "
            title="Copy Email"
          >
                   <img
                    src="/img/email.png"
                    className="w-[120%] h-[120%] max-w-none object-center"
                    alt="email icon"
                  />
                 
                </button>

                {/* LinkedIn icon */}
                <a
                  href="https://linkedin.com/in/chalothornloy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <img
                    src="/img/linkedIn.png"
                    className="w-full h-full max-w-none object-center"
                    alt="linkedIn icon"
                  />
                 
                </a>

                {/* github icon */}
                <a
                  href="https://github.com/chalothorns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <img
                    src="/img/github.png"
                    className="w-full h-full max-w-none object-center"
                    alt="linkedIn icon"
                  />
                  
                </a>

                {/* CV icon */}
                <a
                  href="https://drive.google.com/file/d/1OT20DpFOKPOPFNIpcTINtPzAps4HjHLl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 flex items-center justify-center"
                >
                  <img
                    src="/img/CV-icon.png"
                    className="w-full h-full max-w-none object-center -mt-2"
                    alt="linkedIn icon"
                  />
                  
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex justify-center items-start pt-8">
            <div className="relative">
              {/* Decorative Flowers */}
              <div className="absolute -top-18 left-40 w-12 h-12">
                <img
                    src="/img/flower-yellow.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="smile"
                  />
              </div>

              <div className="absolute -top-10 right-30 w-14 h-14">
                <img
                    src="/img/flower-blue.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="smile"
                  />
              </div>
              <div className="absolute top-0 left-0 w-16 h-16">
                <img
                    src="/img/flower-purple.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="smile"
                  />
              </div>
              <div className="absolute -top-12 right-0 w-22 h-20">
                <img
                    src="/img/flower-pink.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="smile"
                  />
              </div>
              <div className="absolute top-20 -right-8 w-18 h-18">
                <img
                    src="/img/flower-green.png"
                    className="w-[120%] h-[120%] max-w-none object-center hover:animate-spin"
                    style={{ animationDuration: '2s' }}
                    alt="smile"
                  />
              </div>

              {/* Avatar Circle */}
              <div className="w-[440px] h-[440px] bg-[#FF9686] hover:bg-linear-to-b from-[#FF9686] to-[#f84e65] rounded-full ml-10 border-4 border-black shadow-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-end justify-center ">
                
                    <img
                    src="/img/me-pro.png"
                    className="w-full max-w-none object-center"
                    alt="myprofilepic"
                  />

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

