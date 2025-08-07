'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Novo useEffect para gerenciar o scroll apenas em mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="w-full z-30">
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-start">
        {/* Mobile menu button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={toggleMenu}
            className="bg-amber-400 p-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-120"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
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
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation menu */}
        <nav
          aria-label="Menu principal"
          className={`
            fixed top-0 right-0 h-screen w-full max-w-sm bg-white shadow-md z-40
            transition-all duration-300 ease-in-out transform
            ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            md:relative md:h-auto md:w-auto md:max-w-none md:bg-transparent md:shadow-none
            md:translate-x-0 md:opacity-100 md:pointer-events-auto
            md:flex md:items-center md:justify-end
          `}
        >
          <ul className="flex flex-col space-y-6 p-4 mt-8 items-end mr-4 h-full pt-20 md:flex-row md:space-y-0 md:space-x-20 md:p-0 md:items-center md:mr-0 md:pt-0">
            <li>
              <Link
                href="#footer"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                href="#objective"
                className="text-black hover:text-amber-400 block py-2 transition-all duration-300 transform hover:scale-110"
                onClick={toggleMenu}
              >
                Objetivo
              </Link>
            </li>
            <li>
              <Link
                href="#services"
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
            <li>
              <Link
                href="https://wa.me/555183251697?text=Tudo bem? Vim pelo site e gostaria de fazer um orçamento."
                className="text-black block py-2 bg-amber-400 px-3 rounded-4xl transition-all duration-300 hover:scale-110"
                onClick={toggleMenu}
              >
                Faça seu orçamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}