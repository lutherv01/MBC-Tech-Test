'use client';
import React from 'react';
import { Footer } from '@/components/Footer';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const TentangPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <>
      <div className="w-full bg-[#121212] text-white">
        <main className="pt-10 px-5">
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[1702px] mx-auto mt-12 mb-24"
          >
            {/* Judul */}
            <h1 className={`${montserrat.className} text-6xl font-normal text-center mb-24 max-md:text-5xl max-md:mb-20 max-sm:text-2xl max-sm:mb-10`}>
              Developer
            </h1>

            {/* Konten Utama */}
            <div className="bg-[#0D0D0D] p-12 rounded-2xl border border-gray-600 mb-16 max-md:p-8 max-sm:p-4">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Gambar Profil */}
                <div className="flex-shrink-0">
                  <Image
                    src="/upi.jpg"
                    alt="Aldirafika Luthfi Pamungkas"
                    width={300}
                    height={400}
                    className="w-[300px] h-[400px] object-cover rounded-xl max-sm:w-full max-sm:h-[180px]"
                  />
                </div>

                {/* Deskripsi dan Tautan */}
                <div className="flex-1">
                  <p className={`${geistMono.className} text-[#7D7D7D] text-2xl leading-10 mb-8 text-justify max-sm:text-base max-sm:leading-6`}>
                    Aldirafika Luthfi Pamungkas adalah mahasiswa Telkom University program studi S1 Informatika. Saya memiliki ketertarikan mendalam dalam dunia komputasi, khususnya di bidang Cyber Security (Memiliki pengalaman dalam mengoperasikan Kali Linux dan Xinu Ubuntu). Selain itu, mampu mengoperasikan berbagai bahasa pemrograman seperti Python, Go, JavaScript, HTML, dan lainnya. Saya terbuka untuk berkolaborasi, mencoba teknologi baru, dan berkontribusi dalam proyek-proyek yang berdampak.
                  </p>

                  {/* GitHub */}
                  <div className="flex items-center gap-4 justify-end mt-30 max-sm:gap-2">
                    <a
                      href="https://github.com/lutherv01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Github className="w-8 h-8 text-white max-sm:w-6 max-sm:h-6" />
                      <span className="text-xl font-medium">lutherv01</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TentangPage;
