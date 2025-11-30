"use client";
import hero from "../src/assets/clinc hero.jpg"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ahmed from "../src/assets/dr ahmed.png";
import hamza from "../src/assets/dr hamza.png";
import  sarah from "../src/assets/dr.sarah.png";
import { useEffect } from "react";
import WowClient from "../_componets/WowClient";
import { motion } from "framer-motion";

export default function Clinify() {
    
  return (
    <>
          <WowClient /> {/* مهم لتشغيل WOW.js */}

      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10"
        style={{ "--color-main": "#11A4D4" }}
      >
        {/* Left */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }} 
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Care that puts you first
          </h1>
          <p className="text-gray-700 text-lg">
            Comprehensive outpatient services, expert physicians, and an easy
            booking experience through our friendly chatbot.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 rounded-lg bg-[var(--color-main)] text-white font-semibold hover:bg-[#0e8bb4] transition">
              Book Appointment
            </button>
            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }} 
        >
          <div className="w-full max-w-lg h-[34rem] bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src={hero}
              alt="Clinic Hero"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* WHY PATIENTS TRUST US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Why Patients <span className="text-[#11A4D4]">Trust Us</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            We ensure the highest level of care with expertise, compassion,
            and advanced medical support.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Experienced Doctors",
                text: "Our specialists bring years of trusted medical experience.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M448 0c-48.6 0-96.1 17.9-133.5 50.3L288 76 253.5 50.3C216.1 17.9 168.6 0 120 0 53.7 0 0 53.7 0 120c0 45.7 22.3 88.5 62.4 113.9L256 448l193.6-214.1C553.7 208.5 576 165.7 576 120 576 53.7 522.3 0 456 0h-8z" />
                  </svg>
                ),
              },
              {
                title: "High-Quality Care",
                text: "Using modern equipment for precise and effective treatment.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504.5 75.5c-10-10-26.2-10-36.2 0L256 287.8 43.7 75.5c-10-10-26.2-10-36.2 0s-10 26.2 0 36.2L219.8 324.5c10 10 26.2 10 36.2 0L504.5 111.7c10-10 10-26.2 0-36.2z" />
                  </svg>
                ),
              },
              {
                title: "Personalized Attention",
                text: "Every patient receives care tailored to their unique needs.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32H134.4C60.2 288 0 348.2 0 422.4c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64 0-74.2-60.2-134.4-134.4-134.4z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition text-center"
              
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#11A4D4]/10">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Our <span className="text-[#11A4D4]">Services</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Providing high-quality medical care through expert specialists in multiple departments.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: "fa-heart", title: "Cardiology", text: "Advanced diagnosis & treatment for heart-related conditions." },
              { icon: "fa-tooth", title: "Dentistry", text: "Professional dental care including cleaning & whitening." },
              { icon: "fa-children", title: "Pediatrics", text: "Dedicated care for infants, children, & teenagers." },
              { icon: "fa-spray-can-sparkles", title: "Dermatology", text: "Skin treatments, laser therapy & cosmetic dermatology." },
              { icon: "fa-bone", title: "Orthopedics", text: "Bone, joint & sports injury care with expert specialists." },
              { icon: "fa-brain", title: "Neurology", text: "Specialized care for nervous system disorders." },
              { icon: "fa-x-ray", title: "Radiology", text: "Digital X-rays, MRI, CT & ultrasound imaging services." },
              { icon: "fa-person-running", title: "Physiotherapy", text: "Rehabilitation & mobility treatments for all ages." },
              { icon: "fa-stethoscope", title: "General Checkups", text: "Full-body examinations & routine health assessments." },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#11A4D4]/40 transition duration-300"
                
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                bg-[#11A4D4]/10 group-hover:bg-[#11A4D4]/20 text-[#11A4D4] text-3xl transition">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Meet Our <span className="text-[#11A4D4]">Doctors</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Our team of highly skilled and compassionate professionals.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[ahmed, hamza, sarah].map((doc, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
               
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 bg-[#0096FF] border-[#11A4D4] shadow-lg">
                  <Image
                    src={doc}
                    alt="Doctor"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   



{/* CONTACT SECTION */}
<section id="contact" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Get in <span className="text-[#11A4D4]">Touch</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Reach out to us for inquiries or to schedule an appointment.
    </p>

    <div className="mt-14 max-w-3xl mx-auto">
      <form className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11A4D4] resize-none h-32"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-[var(--color-main)] text-white font-semibold hover:bg-[#0e8bb4] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-white text-gray-300 py-12">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold text-main">Clinify</h3>
      <p className="mt-2 text-gray-400 text-sm">
        © 2025 Clinify. All rights reserved.
      </p>
    </div>

    <div className="flex gap-6">
      <a href="#" className="hover:text-main transition">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:text-main transition">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-main transition">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  </div>
</footer>


    </>
  );
}
