import React from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-[#3EA66B] ">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="bg-[#FEC900] hover:bg-[#eebd0c] rounded-md px-10 py-3 border-2 border-black shadow-lg flex items-center gap-2 ml-10 mb-8 mt-10 transition-transform ease-out active:scale-95 duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
      >
        <svg
          className="w-10 h-10"
          fill="#FF6953"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-6.07 -6.07 72.87 72.87"
          xml:space="preserve"
          stroke="black"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625 " strokeWidth="2"></polygon>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        {/* jsx style ไม่สามารถรับ "" ตรงๆได้เหมือน html ต้องมีปีกกาช่วย เข้าถึง JS และ อีกปีกกานึงคือสร้าง object  */}
        <span
          className="text-3xl font-black   text-[#FF6953]"
          style={{ WebkitTextStroke: "1px black" }}
        >
          BACK
        </span>
      </button>

      {/* Header */}
      <div className="flex items-center justify-center gap-6 mb-12 w-[60%] mx-auto">
        <button className="relative bg-[#FFD83F] rounded-sm p-6 shadow-xl  flex items-center  border-3 border-black w-full min-h-25">
          {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}

          <div className="absolute -left-6 bg-[#957FFF]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
            <img
              src="/img/briefcase.png"
              className="w-[90%] h-[90%] max-w-none object-center"
              alt="smile"
            />
          </div>

          {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
          <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]">
            EXPERIENCE
          </span>
        </button>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-3 gap-8 px-16 pb-16 max-w-screen-2xl mx-auto font-['Lexend_Deca']">
        {/* Card 1: My Journey into Tech */}
        <div className="bg-white rounded-md border-3 border-black shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            My Journey
            <br />
            into Tech
          </h2>
          <p className="text-base leading-relaxed mb-4">
            My turning point into tech began when I was given the opportunity to interview for a Software Tester role that required French language skills. At the time, I believed that language ability alone would be enough, and I underestimated how important technical knowledge truly was.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Although I prepared to some extent, my limited technical foundation made it clear that I was not ready. and I didn’t get the role. That experience was disappointing, but it became a powerful wake-up call.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Instead of seeing it as a failure, I used it as motivation to seriously invest in developing my technical skills. This led me to discover and commit to an intensive software development bootcamp, where I began building a strong foundation through hands-on projects and continuous learning.
            </p>
            <div className="flex justify-center items-center">
            <div className="w-10 h-10">
            <img
              src="/img/smile-face.png"
              alt="Student with backpack"
              className="w-full object-cover"
            />
          </div>
          </div>
          

          
        </div>

        {/* Card 2: 500+ Hours of Intensive Coding */}
        <div className="bg-white rounded-md border-3 border-black shadow-lg p-6 font-['Lexend_Deca']">
          <div className="bg-blue-100 rounded-lg border-3 border-black overflow-hidden mb-4">
            <img
              src="./img/generationTH.jpeg"
              alt="GenerationTHLogo"
              className="w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">500+ Hours</h2>
          <h3 className="text-2xl font-bold text-center mb-4">
            of Intensive Coding
          </h3>
          <p className="text-base leading-relaxed mb-4">
            Completed over 500 hours of hands-on coding through an intensive bootcamp focused on full-stack web development.
          </p>
          <p className="text-base leading-relaxed mb-4">
            I built both individual and team projects using React, Node.js, Express, and MongoDB, gaining experience in authentication, CRUD operations, API integration, and responsive design.
          </p>
          <p className="text-base leading-relaxed">
            I built both individual and team projects using React, Node.js, Express, and MongoDB, gaining experience in authentication, CRUD operations, API integration, and responsive design.
          </p>
          
        </div>
        

        {/* Card 3: Professional Background & Soft Skills */}
        <div className="bg-white rounded-md border-3 border-black shadow-lg p-6 font-['Lexend_Deca']">
          <h2 className="text-2xl font-bold text-center mb-2 ">
            Professional Background
          </h2>
          <h3 className="text-2xl font-bold text-center mb-4">
            & Soft Skills
          </h3>
          <p className="text-base leading-relaxed mb-4">
            My professional background spans customer service, education, and international childcare, where clear communication, responsibility, and adaptability were essential.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Working with people from different cultures taught me how to listen, ask the right questions, and stay calm when solving problems — skills I now apply directly when working in development teams and handling technical challenges.
          </p>
          <p className="text-base leading-relaxed">
            I value feedback, teamwork, and continuous learning, and I’m comfortable adapting to new environments and technologies.
          </p>
          <div className="flex justify-center items-center mt-10">
          <p className="text-2xl leading-relaxed ">
           💬 🤝 🌍 🔁
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
