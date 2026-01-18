import React from "react";

const MySkills = () => {
  const goBack = () => {
    window.history.back();
  };

  const technicalSkills = [
    { name: "React", img: "/img/React.png" },
    { name: "Tailwind", img: "/img/tailwind.png" },
    { name: "JavaScript", img: "/img/Javascript_Logo.png" },
    { name: "CSS", img: "/img/css.png" },
    { name: "HTML", img: "/img/html.png" },
    { name: "Node.js", img: "/img/node.png" },
    { name: "MongoDB", img: "/img/mongodb.png" },
    { name: "Git", img: "/img/git.png" },
  ];

  const softSkills = [
    { name: "Communication", img: "/img/comunication.png" },
    { name: "Teamwork", img: "/img/teamwork.png" },
    { name: "Adaptability", img: "/img/adaptability.png" },
    { name: "Eager to Learn", img: "/img/eager-to-learn.png" },
    { name: "Open-minded", img: "/img/open-minded.png" },
  ];

  const languages = [
    { name: "English", img: "/img/eng-language.png" },
    { name: "French", img: "/img/french-language.png" },
    { name: "Thai", img: "/img/thai-language.png" },
  ];

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
                <polygon
                  points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625"
                  strokeWidth="2"
                ></polygon>
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
      <div className="flex items-center justify-center gap-6 mb-30 w-[60%] mx-auto">
        <button className="relative bg-[#FFD83F] rounded-sm p-6 shadow-xl  flex items-center  border-3 border-black w-full min-h-25">
          {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}

          <div className="absolute -left-6 bg-[#F9B2DC]  w-20 h-20  rounded-sm border-3 border-black shrink-0 flex items-center justify-center">
            <img
              src="/img/coding-icon.png"
              className="w-[90%] h-[85%] max-w-none object-center"
              alt="smile"
            />
          </div>

          {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
          <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]">
            My Skills
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="px-16 pb-16 w-full max-w-screen-2xl mx-auto space-y-12 ">
        {/* Technical Skills */}
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <div className="bg-[#FF9686] rounded-md border-3 border-black shadow-lg p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              <h2 className="text-3xl font-bold text-center font-['Lexend_Deca']">
                Technical skills
              </h2>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-8 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 flex items-center justify-center text-xl">
                  <img
              src={skill.img}
              className="w-full h-full object-contain"
              alt={skill.name}
            />
                </div>
                <span className="text-lg font-semibold text-center text-black font-['Lexend_Deca']">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <div className="bg-[#FF9686] rounded-md border-3 border-black shadow-lg p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              <h2 className="text-3xl font-bold text-center font-['Lexend_Deca']">Soft Skills</h2>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 flex items-center justify-center text-xl">
                  <img
              src={skill.img}
              className="w-full h-full object-contain"
              alt={skill.name}
            />
                </div>
                <span className="text-lg font-semibold text-center text-black font-['Lexend_Deca']">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <div className="bg-[#FF9686] rounded-md border-3 border-black shadow-lg p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              <h2 className="text-3xl font-bold text-center font-['Lexend_Deca']">Languages</h2>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-6 gap-4 ">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 flex items-center justify-center"
                  
                >
                  <img
              src={lang.img}
              className="w-full h-full object-contain"
              alt={lang.name}
            />
                </div>
                <span className="text-lg font-semibold text-black font-['Lexend_Deca']">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const MySkills = () => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#3EA66B] ">
//       {/* Back Button */}
//       <button
//         onClick={goBack}
//         className="bg-[#FEC900] hover:bg-[#eebd0c] rounded-md px-10 py-3 border-2 border-black shadow-lg flex items-center gap-2 ml-10 mb-8 mt-10 transition-transform ease-out active:scale-95 duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
//       >
//         <svg
//           className="w-10 h-10"
//           fill="#FF6953"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           viewBox="-6.07 -6.07 72.87 72.87"
//           xml:space="preserve"
//           stroke="black"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625 " strokeWidth="2"></polygon>{" "}
//               </g>{" "}
//             </g>{" "}
//           </g>
//         </svg>
//         {/* jsx style ไม่สามารถรับ "" ตรงๆได้เหมือน html ต้องมีปีกกาช่วย เข้าถึง JS และ อีกปีกกานึงคือสร้าง object  */}
//         <span
//           className="text-3xl font-black   text-[#FF6953]"
//           style={{ WebkitTextStroke: "1px black" }}
//         >
//           BACK
//         </span>
//       </button>

//       {/* Header */}
//       <div className="flex items-center justify-center gap-6 mb-20 w-[60%] mx-auto">
//         <button className="relative bg-[#FFD83F] rounded-sm p-6 shadow-xl  flex items-center  border-3 border-black w-full min-h-25">
//           {/* Icon Container - ใช้ absolute เพื่อให้เยื้องออกนอกขอบ */}

//           <div className="absolute -left-6 bg-[#F9B2DC]  w-20 h-20  rounded-sm border-3 border-black flex-shrink-0 flex items-center justify-center">
//                   <img
//                     src="/img/coding-icon.png"
//                     className="w-[90%] h-[85%] max-w-none object-center"
//                     alt="smile"
//                   />
//                 </div>

//           {/* Text - ขยับ padding-left เพื่อไม่ให้ตัวหนังสือทับรูปดาว */}
//           <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]">
//             My Skills
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MySkills;
