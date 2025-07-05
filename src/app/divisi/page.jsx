'use client';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Database, Gamepad2, Globe, Lock } from 'lucide-react';
import { Geist_Mono, Montserrat } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const DivisiPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <>
      <div className={`${geistMono.className} w-full bg-[#121212] text-white`}>
        <main className="pt-10 px-5">
          {/* Judul & Content with Animation */}
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[1702px] mx-auto mt-12 mb-24 text-center"
          >
            <h1 className={`${montserrat.className} text-6xl font-normal mb-24 max-md:text-5xl max-md:mb-20 max-sm:text-2xl max-sm:mb-10`}>
              Divisi Kami
            </h1>

            {/* Grid Divisi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-sm:gap-4 max-sm:mb-8">
              {/* === 1. Cyber Security === */}
              <div className="bg-[#0D0D0D] p-8 rounded-2xl border border-gray-600 max-sm:p-4">
                <div className="flex justify-center mb-6">
                  <Shield className="w-12 h-12 text-white max-sm:w-7 max-sm:h-7" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 max-sm:text-lg">Cyber Security</h3>
                <p className="text-[#7D7D7D] text-lg leading-8 text-justify max-sm:text-sm max-sm:leading-6">
                Divisi Riset Cyber Security di Laboratorium MBC Telkom University berfokus pada penelitian dan pengembangan keamanan siber. Tujuannya adalah memperkuat kemampuan teknis dan pengetahuan mahasiswa dalam menghadapi ancaman siber yang kompleks. Selain riset, divisi ini juga berfungsi sebagai grup belajar kolaboratif, mengerjakan proyek seperti analisis malware, keamanan jaringan, kriptografi, dan forensik digital, untuk mencetak ahli keamanan siber yang siap industri dan mendukung perkembangan keamanan IT di Indonesia.
                </p>
              </div>

              {/* === 2. Big Data === */}
              <div className="bg-[#0D0D0D] p-8 rounded-2xl border border-gray-600 max-sm:p-4">
                <div className="flex justify-center mb-6">
                  <Database className="w-12 h-12 text-white max-sm:w-7 max-sm:h-7" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 max-sm:text-lg">Big Data</h3>
                <p className="text-[#7D7D7D] text-lg leading-8 text-justify max-sm:text-sm max-sm:leading-6">
                Divisi Big Data di Laboratorium MBC Telkom University fokus pada riset dan pengembangan teknologi data skala besar untuk mendukung pengambilan keputusan berbasis data. Divisi ini mengeksplorasi teknik pengolahan data seperti data mining dan machine learning, serta berfungsi sebagai grup belajar kolaboratif untuk mengimplementasikan teknologi big data seperti Hadoop dan Spark, dengan tujuan menghasilkan solusi inovatif untuk industri.
                </p>
              </div>

              {/* === 3. Game Tech === */}
              <div className="bg-[#0D0D0D] p-8 rounded-2xl border border-gray-600 max-sm:p-4">
                <div className="flex justify-center mb-6">
                  <Gamepad2 className="w-12 h-12 text-white max-sm:w-7 max-sm:h-7" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 max-sm:text-lg">Game Tech</h3>
                <p className="text-[#7D7D7D] text-lg leading-8 text-justify max-sm:text-sm max-sm:leading-6">
                Divisi Game Tech di Laboratorium MBC Telkom University adalah kelompok riset dan pengembangan yang berfokus pada teknologi permainan, meliputi desain, pemrograman, dan optimasi game. Divisi ini menjadi wadah bagi mahasiswa untuk mendalami game engine, animasi, grafis 3D, dan VR melalui riset dan kolaborasi proyek, bertujuan mencetak talenta kreatif dan terampil untuk industri game.
                </p>
              </div>

              {/* === 4. Geographic Information System === */}
              <div className="bg-[#0D0D0D] p-8 rounded-2xl border border-gray-600 max-sm:p-4">
                <div className="flex justify-center mb-6">
                  <Globe className="w-12 h-12 text-white max-sm:w-7 max-sm:h-7" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 max-sm:text-lg">Geographic Information System</h3>
                <p className="text-[#7D7D7D] text-lg leading-8 text-justify max-sm:text-sm max-sm:leading-6">
                Divisi Geographic Information System (GIS) di Laboratorium MBC Telkom University berfokus pada riset dan pengembangan teknologi pemetaan serta analisis data geospasial. Divisi ini membekali mahasiswa dengan konsep dan praktik GIS menggunakan perangkat lunak seperti ArcGIS dan QGIS, sekaligus menjadi grup belajar kolaboratif. Tujuannya adalah menghasilkan ahli GIS yang mampu menciptakan solusi inovatif untuk perencanaan kota, manajemen sumber daya, dan mendukung pembangunan berkelanjutan di Indonesia.
                </p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DivisiPage;
