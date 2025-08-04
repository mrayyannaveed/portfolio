'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use any icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <Link
        className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
        href="/"
      >
        About
      </Link>
      <Link
        className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
        href="/skills"
      >
        Skills
      </Link>
      <Link
        className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
        href="/services"
      >
        Services
      </Link>
      <Link
        className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
        href="/contact"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md shadow-lg bg-gray-900/80 text-white p-4 px-8 rounded-b-2xl mb-20 md:mb-0">
      {/* Mobile view */}
      <div className="flex items-center  md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          {navLinks}
        </div>
      )}

      {/* Desktop view */}
      <div className="hidden md:flex justify-center gap-6 flex-wrap">
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
