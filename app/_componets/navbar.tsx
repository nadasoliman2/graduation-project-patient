"use client";

import logo from "../../public/Picsart_25-11-23_21-40-53-171.png";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto p-2 flex items-center justify-between">

        {/* Logo */}
        <a href="/clinify" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Clinify Logo"
            priority
            width={70}
            height={100}
          />
          <span className="text-3xl font-bold text-[#11A4D4]">Clinify</span>
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <svg
            className="w-7 h-7 text-main"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Menu icon
              }
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-gray-700 font-medium">

            <li>
              <a
                href="#"
                className="py-2 px-3 text-[#11A4D4] font-semibold border-b-2 border-[#11A4D4]"
              >
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="py-2 px-3 hover:text-[#11A4D4] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#doctors" className="py-2 px-3 hover:text-[#11A4D4] transition">
                Doctors
              </a>
            </li>

            <li>
              <a href="#contact" className="py-2 px-3 hover:text-[#11A4D4] transition">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-3 py-4 px-5 text-gray-700 font-medium">

            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#11A4D4] font-semibold"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#11A4D4]"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#doctors"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#11A4D4]"
              >
                Doctors
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#11A4D4]"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
