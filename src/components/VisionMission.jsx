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

export const VisionMission = () => {
  return (
    <section className={`${geistMono.className} w-full max-w-[1702px] mx-auto px-4 mt-[138px] mb-0`}>
      <h2 className={`${montserrat.className} text-white text-center font-normal text-[3.5rem] mb-12`}>
        Visi dan Misi
      </h2>

      <div className="relative bg-black rounded-[20px] px-6 py-[46px] pb-[50px] mb-12">
        {/* VISI */}
        <h3 className="text-white text-center font-bold text-[45px] leading-[50px] mb-6">
          VISI
        </h3>
        <p className="text-[#7D7D7D] font-semibold text-justify text-[20px] leading-[50px] mb-12 max-w-[1615px] mx-auto">
          Menjadi Laboratorium unggulan dalam pengembangan teknologi
          Multimedia Application, Big Data, dan Cybersecurity dengan
          mendorong eksplorasi dan merancang riset yang memberikan dampak
          positif dan mengikuti perkembangan teknologi masa kini serta
          menjadi lingkungan yang membentuk, mematangkan, dan mempersiapkan
          skill asisten MBC Laboratory agar dapat bersaing di Industri.
        </p>

        <blockquote className="text-[#7D7D7D] text-center font-semibold text-[20px] leading-[50px] mb-12 rotate-[0.164deg]">
          "Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka"
        </blockquote>

        {/* MISI */}
        <h3 className="text-white text-center font-bold text-[45px] leading-[50px] mb-6">
          MISI
        </h3>
        <div className="text-[#7D7D7D] font-semibold text-justify text-[20px] leading-[50px] max-w-[1615px] mx-auto mb-12 space-y-3">
          <p>1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka panjang.</p>
          <p>2. Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan profesional serta mendukung karier.</p>
          <p>3. Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa.</p>
        </div>

        <blockquote className="text-[#7D7D7D] text-center font-semibold text-[20px] leading-[50px] rotate-[0.164deg]">
          "Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif"
        </blockquote>
      </div>
    </section>
  );
};
