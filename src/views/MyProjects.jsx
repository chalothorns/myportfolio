import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MyProjects = () => {

  const projects = [
    {
      title: "Nesta(Property Management)",
      video: "/video/nesta.mp4",
      features: [
        "Management Dashboard",
        "Tenant Management with Form Submission",
        "Utility Meter Tracking",
        "Maintenance Request System",
        "User Authentication with Token Verification",
        "Responsive Design for Mobile and Desktop"
      ],
      description: "My personal project in Bootcamp",
      tech: "Tech: React, Tailwind CSS, Node.js, Express, MongoDB"
    },
    {
      title: "R Relief (E-commerce Platform)",
      video: "/video/R-rerief.mp4",
      features: [
        "Product Catalog & Details",
        "Shopping Cart & Total Summary",
        "User Registration and Login",
        "Token-Based Authentication",
        "Mobile-Friendly Responsive Design"
      ],
      description: "A team project in Bootcamp.",
      tech: "Tech: React, Tailwind CSS, Node.js, Express, MongoDB",
      role: "Role: Fullstack Developer"
    },
    {
      title: "Fullstack express app",
      video: "/video/fullstack-app-express.mp4",
      features: [
        "User CRUD Operations",
        "User Authentication with Token Verification",
        "Backend Middleware Handling with Express",
        "AI-Powered Chat Interface for Database Queries (RAG)"
      ],
      description: "A classroom project focused on understanding backend architecture, middleware, and API design using Express, with a React-based frontend.",
      tech: "Tech: Node.js, Express, MongoDB, React, Tailwind CSS"
    },
    {
      title: "Dice roller",
      video: "/video/dice-roller.mp4",
      features: [
        "Interactive Dice Roll",
        "User Goal Selection & Result Validation",
        "Animated UI with DOM Manipulation",
        "Roll History Tracking"
      ],
      description: "A classroom project focused on understanding DOM Manipulation",      
      tech: "Tech: HTML, Tailwind CSS, Vanilla JavaScript, SVG"
    }
  ]

  const navigate = useNavigate();

  const goBack = () => { 
    navigate("/");
   }

  const displayProjects = [...projects, ...projects, ...projects];
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null);


const handleNext = () => {
  setCurrentIndex((prev) => {
    const next = prev + 1;
    
    // ถ้าเลื่อนจนถึงจุดที่ต้อง Reset
    if (next >= projects.length) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          setCurrentIndex(0);
          
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition = 'transform 0.7s ease-in-out';
            }
          }, 50);
        }
      }, 700); // 700 ต้องเท่ากับ duration ของ transition
    }
    return next;
  });
};

const handlePrevious = () => {
  if (currentIndex === 0) {
    if (containerRef.current) {
      containerRef.current.style.transition = 'none';
      // กระโดดไปตัวสุดท้ายของชุดข้อมูล (ถ้าใช้เทคนิค Clone)
      setCurrentIndex(projects.length);
      
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'transform 0.7s ease-in-out';
          setCurrentIndex(projects.length - 1);
        }
      }, 50);
    }
  } else {
    setCurrentIndex((prev) => prev - 1);
  }
};

  return (
    <div className="min-h-screen w-full bg-[#3EA66B] ">
      {/* Back Button */}
      <button 
      onClick={goBack}
      className="bg-[#FEC900] hover:bg-[#eebd0c] rounded-md px-10 py-3 border-2 border-black shadow-lg flex items-center gap-2 ml-10 mb-8 mt-10 transition-transform ease-out active:scale-95 duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
        <svg className="w-10 h-10" fill="#FF6953" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-6.07 -6.07 72.87 72.87" xml:space="preserve" stroke="black">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
          </g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625 " strokeWidth="2"></polygon> 
          </g> </g> </g></svg>
        {/* jsx style ไม่สามารถรับ "" ตรงๆได้เหมือน html ต้องมีปีกกาช่วย เข้าถึง JS และ อีกปีกกานึงคือสร้าง object  */}
        <span className="text-3xl font-black   text-[#FF6953]" style={{ WebkitTextStroke: '1px black' }}>
          BACK
        </span>
      </button>
      

      {/* Header */}
      <div className="flex items-center justify-center gap-6 mb-20 w-[60%] mx-auto">
       
<button 
            
            className="relative bg-[#FFD83F] rounded-sm p-6 shadow-xl  flex items-center  border-3 border-black w-full min-h-25">
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
              <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]" >
                MY PROJECTS
              </span>
            </button>
       

      </div>

      {/* Projects Container */}
      <div className="flex items-center gap-4 justify-center">
        {/* Previous Button */}
        <button 
          onClick={handlePrevious}
          className="bg-[#FFFBE0] hover:bg-white w-12 h-12 rounded-lg border-3 border-black shadow-lg  hover:scale-110 flex items-center justify-center shrink-0  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:z-20 px-[1.2em] py-[0.6em] transition-all duration-100 active:scale-95"
        >
          <span className="text-2xl font-bold">&lt;</span>
        </button>



        {/* Project Cards */}
        <div className="flex items-center gap-8 flex-1 max-w-screen-2xl overflow-hidden relative group py-10 px-4">
          <div 
          ref={containerRef}
    className="flex transition-transform duration-700 ease-in-out gap-8"
  style={{ 
    transform: `translateX(calc(-1 * ${currentIndex} * (370px + 32px)))` 
  }}>
          {displayProjects.map((project, index) => (
            <div 
              key={index}
              className="shrink-0 w-92.5 px-4"
            >
              <div className="bg-[#FFFBE0] h-137.5 rounded-md border-4 border-black shadow-xl p-6 flex flex-col transition-all hover:scale-105 duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:z-20 relative">
              {/* Video Placeholder */}
              <div className="bg-black rounded-lg mb-4 h-55 shrink-0 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full"> {/* หรือ container ที่คุณคุมขนาดไว้ */}
              {/* แทนที่จะใช้ span ให้ใช้โครงสร้างนี้แทน */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-md border-2 border-black"
              >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
              </video>
              </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-black mb-3 font-['Lexend_Deca']">
                {project.title}
              </h3>
              <div className="grow overflow-y-auto pr-2 custom-scrollbar">
              {/* Features List */}
              {project.features.length > 0 && (
                <ul className="mb-4 space-y-2 font-['Lexend_Deca'] text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-black flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.description && (
                  <p className="text-black font-['Lexend_Deca'] font-semibold">{project.description}</p>
                )}

              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-4 border-t-2 border-black/10">
                {project.tech && (
                  <p className="text-black font-['Lexend_Deca'] font-semibold">{project.tech}</p>
                )}
                {project.role && (
                  <p className="text-black font-['Lexend_Deca'] font-semibold">{project.role}</p>
                )}
              </div>
            </div>
            </div>
          ))}
          
        </div>
        
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="bg-[#FFFBE0] hover:bg-white w-12 h-12 rounded-lg border-3 border-black shadow-lg  hover:scale-110 flex items-center justify-center shrink-0  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:z-20 px-[1.2em] py-[0.6em] transition-all duration-100 active:scale-95"
        >
          <span className="text-2xl font-bold">&gt;</span>
        </button>
      
    </div>
    </div>
  )
}

export default MyProjects