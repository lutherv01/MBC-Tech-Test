import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Footer = () => {
  return (
    <footer className={`${montserrat.className} w-full text-white text-center font-bold text-3xl max-w-[1153px] mx-auto px-4 mt-10 mb-10 max-w-full max-sm:text-lg max-sm:mt-6 max-sm:mb-6`}>
      We <span className="text-red-600">Attack</span>, We <span className="text-red-600">Protect</span>.
      <div className="mt-4">
        <div className="text-lg mb-1 max-sm:text-base">Connect with us</div>
        <div className="flex justify-center gap-6 max-sm:gap-3">
          <a
            href="https://www.instagram.com/mbclab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8 max-sm:w-6 max-sm:h-6 text-white hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8 max-sm:w-6 max-sm:h-6 text-white hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINE"
          >
            <MessageCircle className="w-8 h-8 max-sm:w-6 max-sm:h-6 text-white hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};
