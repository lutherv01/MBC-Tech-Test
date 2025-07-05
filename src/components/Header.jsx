'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (always visible) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mbc_logo.png"
              alt="MBC Laboratory Logo"
              width={180}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Mobile Menu Button (always visible on mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Items (desktop) */}
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
            {/* Mobile menu overlay */}
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/mbc_logo.png"
                    alt="MBC Laboratory Logo"
                    width={120}
                    height={30}
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
              <ul className="flex flex-col items-center gap-6 mt-10 text-xl font-semibold">
                <li>
                  <Link href="/divisi" onClick={() => setIsOpen(false)} className={isActive('/divisi') ? 'text-white' : 'text-gray-300 hover:text-white'}>
                    Divisi
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" onClick={() => setIsOpen(false)} className={isActive('/kontak') ? 'text-white' : 'text-gray-300 hover:text-white'}>
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" onClick={() => setIsOpen(false)} className={isActive('/tentang') ? 'text-white' : 'text-gray-300 hover:text-white'}>
                    Developer
                  </Link>
                </li>
              </ul>
            </div>
            {/* Desktop menu */}
            <ul className="hidden lg:flex flex-row lg:space-x-8 mt-4 lg:mt-0 text-base">
              <li>
                <Link
                  href="/divisi"
                  className={`block py-2 px-4 ${
                    isActive('/divisi') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Divisi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className={`block py-2 px-4 ${
                    isActive('/kontak') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className={`block py-2 px-4 ${
                    isActive('/tentang') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
