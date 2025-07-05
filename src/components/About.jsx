import React from 'react';
import { Geist_Mono } from 'next/font/google';
import { Montserrat } from 'next/font/google';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const About = () => {
  return (
    <section className={`${geistMono.className} w-full max-w-[1702px] mx-auto px-4 mt-[138px] mb-0`}>
      <h2 className={`${montserrat.className} text-white text-center font-normal text-[3.5rem] mb-12`}>
        Tentang Kami
      </h2>

      <div className="bg-black rounded-[20px] px-6 py-8 flex flex-col">
        {/* Logo Container */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <img
            src="/mbc_logo.png"
            alt="MBC Laboratory"
            className="w-[225px] h-[105px] object-contain"
          />
          <img
            src="/ncm_logo.png"
            alt="NCM Logo"
            className="w-[300px] h-[100px] object-contain mt-6 md:mt-0"
          />
        </div>

        {/* Deskripsi */}
        <p className="text-[#7D7D7D] font-semibold text-justify text-[20px] leading-[50px] max-w-[1615px]">
          MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia. Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam tiga bidang utamanya.
        </p>
      </div>
    </section>
  );
};
