"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/nebula.jpg";
import { FaRegUserCircle } from "react-icons/fa";

const UserIcon = () => (
  <div className="flex items-end justify-end rounded-full">
    <FaRegUserCircle className="text-black h-10 w-10" />
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between lg:px-6 py-4 bg-white shadow-md md:px-12 p-2">
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center flex-grow md:flex-none">
        <Image src={logo} alt="Nebula Logo" width={200} height={100} />
      </div>
      </Link>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold flex-grow justify-evenly items-center">
        <Link href="/" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          HOME
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          ABOUT
        </Link>
        <Link href="/service" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          SERVICES
        </Link>
        <Link href="/work" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          WORK
        </Link>
        <Link href="/social" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          <span className="p-4">MEMBERSHIP</span> 
        </Link>
        <Link href="/tedx" className="hover:text-black transition-colors duration-1000 text-xl text-white bg-[#2baee2]">
          <span className="p-10 ">TEDx</span> 
        </Link>
        <UserIcon />
      </div>

      {/* Mobile Menu Button and User Icon */}
      <div className="md:hidden flex items-center space-x-4">
        <div className="flex items-end justify-end w-10 h-10  rounded-full">
          <FaRegUserCircle className="text-black h-8 w-8" />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center space-y-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white h-screen mt-10 shadow-lg md:hidden z-50 overflow-hidden transition-max-height duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 py-4 px-6 text-lg font-semibold text-left">
          <li>
            <Link href="/" className="block hover:underline text-black py-10 text-2xl">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:underline text-black py-10 text-2xl">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/service" className="block hover:underline text-black py-10 text-2xl">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/work" className="block hover:underline text-black py-10 text-2xl">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/social" className="block hover:underline text-black py-10 text-2xl">
              MEMBERSHIP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;