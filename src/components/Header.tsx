'use client'

import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = 'unset'; 
      }, 300);
    } else {
      setIsMounted(true);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setIsOpen(true);
      }, 50); 
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        toggleMenu();
      }
      if (window.innerWidth >= 768) {
          setIsOpen(false);
          setIsMounted(false);
          document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="w-full py-7 relative z-30">
      <nav className="container mx-auto px-4 flex items-center justify-end md:justify-start">
        {/* Botão para abrir o menu no mobile (ESCONDIDO no desktop) */}
        <div className="md:hidden absolute top-4 right-4 z-50">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
              aria-hidden="true">
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

        {/* Menu para MOBILE (Exibido apenas no mobile e controlado por isMounted) */}
        {isMounted && (
          <div
            ref={menuRef}
            className={`
              absolute top-0 right-0 h-screen w-full max-w-sm bg-white shadow-md z-40
              transition-all duration-300 ease-in-out transform
              ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
              md:hidden /* ESCONDIDO no desktop */
            `}
          >
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 p-4 md:p-0 items-end md:items-start h-full pt-30 md:mr-0 md:pt-0">
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
        )}

        {/* Menu para DESKTOP (Sempre visível no desktop, escondido no mobile) */}
        <div
          className={`
            hidden md:block /* Escondido no mobile, bloco no desktop */
            md:relative md:h-auto md:w-auto md:bg-transparent md:shadow-none md:translate-x-0 md:opacity-100 md:pointer-events-auto
          `}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 p-4 md:p-0 items-end md:items-start h-full pt-30 md:mr-0 md:pt-0">
            <li>
              <Link
                href="#hero"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="#objetivo"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
              >
                Objetivo
              </Link>
            </li>
            <li>
              <Link
                href="#servicos"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
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