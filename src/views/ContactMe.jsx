import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const goBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ใส่ logic ส่งข้อมูลตรงนี้
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFBE0] pb-20">
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
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-6.07 -6.07 72.87 72.87"
          xmlSpace="preserve"
          stroke="black"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625 " strokeWidth="2"></polygon>
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
      <div className="flex items-center justify-center gap-6 w-[60%] mx-auto mb-20">
        <button className="relative bg-[#FFD83F] rounded-md p-6 shadow-xl flex items-center border-3 border-black w-full min-h-25">
          {/* Icon Container */}
          <div className="absolute -left-6 bg-[#FF8E51] w-20 h-20 rounded-md border-3 border-black shrink-0 flex items-center justify-center">
            <img
              src="/img/paperplane.png"
              className="w-[90%] h-[90%] max-w-none object-center"
              alt="paper plane"
            />
          </div>

          {/* Text */}
          <span className="flex-1 text-5xl text-black font-['Bernoru'] text-center uppercase tracking-tight scale-x-[0.6]">
            CONTACT ME
          </span>
        </button>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-[#FFFBE0] border-3 border-black rounded-lg shadow-xl py-10 px-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-xl font-bold mb-2 font-['Lexend_Deca']">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-3 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-colors 
                ${formData.name ? 'bg-[#FFFBE0]' : 'bg-[#FF9686]'} focus:bg-[#FFFBE0]`}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xl font-bold mb-2 font-['Lexend_Deca']">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-3 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-colors 
                ${formData.email ? 'bg-[#FFFBE0]' : 'bg-[#FABD26]'} focus:bg-[#FFFBE0]`}
                required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-xl font-bold mb-2 font-['Lexend_Deca']">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-3 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-colors 
                ${formData.subject ? 'bg-[#FFFBE0]' : 'bg-[#81FFBB]'} focus:bg-[#FFFBE0]`}

              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xl font-bold mb-2 font-['Lexend_Deca']">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 border-3 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-colors 
                ${formData.message ? 'bg-[#FFFBE0]' : 'bg-[#5CD1FF]'} focus:bg-[#FFFBE0]`}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-[#FEC900] hover:bg-[#eebd0c] px-12 py-4 rounded-full border-3 border-black shadow-lg font-['Bernoru'] text-2xl transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none text-center uppercase tracking-tight scale-x-[0.6]"
            >
              Leave a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
