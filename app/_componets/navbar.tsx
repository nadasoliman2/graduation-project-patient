import logo from "../src/assets/favicon.jpg";
import Image from "next/image";
import WOW from "wowjs";
import "animate.css";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">

        {/* Logo */}
        <a href="/clinify" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Clinicify Logo"
            priority
            width={60}
            height={100}
          />
          <span className="text-2xl font-bold text-[#11A4D4]">Clinify</span>
        </a>

        {/* Mobile button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links */}
        <div className="hidden md:block" id="navbar-default">
          <ul className="flex gap-8 text-gray-700 font-medium">

            {/* ACTIVE LINK */}
            <li>
              <a
                href="#"
                className="py-2 px-3 text-[#11A4D4] font-semibold border-b-2 border-[#11A4D4]"
              >
                Home
              </a>
            </li>

            {/* Default links */}
            <li>
              <a
                href="#services"
                className="py-2 px-3 hover:text-[#11A4D4] transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#doctors"
                className="py-2 px-3 hover:text-[#11A4D4] transition"
              >
                Doctors
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="py-2 px-3 hover:text-[#11A4D4] transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
