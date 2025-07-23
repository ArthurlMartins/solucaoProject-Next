'use client'

import Link from "next/link"
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

//   function to open and close the menu

  const toggleMenu = () => {
  setIsOpen(!isOpen);
  if (!isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset'; 
  }
};

//   accessibility

useEffect(() => {
    return () => {
        document.body.style.overflow = 'unset';
    };
}, []);

  return (
    <header className="w-full bg-white py-7 shadow-md relative z-30">
      <nav className="container mx-auto px-4 flex items-center justify-end md:justify-start">
        <div className="md:hidden absolute top-4 right-4 z-50">

            {/* button to open the menu on mobile */}
          <button
            onClick={toggleMenu}
            className="bg-amber-400 p-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-120"
            aria-label="Alternar menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="text-black">
              {isOpen ? (
                <>
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </>
                    
              ) : (
                <>
                    <path d="M4 6h16"/>
                    <path d="M4 12h16"/>
                    <path d="M4 18h16"/>
                </>
              )}
            </svg>
          </button>
        </div>

        

        {/* menu styles, animation, rules... */}
        <div
          className={`
            absolute top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white shadow-md z-40 /* mobile -- visible */
            transition-all duration-300 ease-in-out transform /* animation */
            ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
            md:block md:relative md:h-auto md:w-auto md:bg-transparent md:shadow-none md:translate-x-0 md:opacity-100 md:pointer-events-auto
          `}
        >
            {/* links */}
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 p-4 md:p-0 items-end md:items-start h-full pt-30 mr-5 md:mr-0 md:pt-0">
            <li>
              <Link
                href="#hero"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="#objetivo"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Objetivo
              </Link>
            </li>
            <li>
              <Link
                href="#servicos"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Quem somos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}