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
            This page is a great space to share what's new and what's happening
            with the students in the class.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Keep updates short and easy to read. You can also ask the students
            to share their stories or photos.
          </p>
          <div className="bg-[#FFD83F] rounded-lg border-3 border-black overflow-hidden">
            <img
              src="/api/placeholder/300/200"
              alt="Student with backpack"
              className="w-full h-48 object-cover"
            />
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
            This page is a great space to share what's new and what's happening
            with the students in the class.
          </p>
          <p className="text-base leading-relaxed">
            Keep updates short and easy to read. You can also ask the students
            to share their stories or photos.
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
            This page is a great space to share what's new and what's happening
            with the students in the class.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Keep updates short and easy to read. You can also ask the students
            to share their stories or photos.
          </p>
          <div className="bg-blue-100 rounded-lg border-2 border-black overflow-hidden">
            <img
              src="/api/placeholder/300/200"
              alt="Students showing artwork"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
