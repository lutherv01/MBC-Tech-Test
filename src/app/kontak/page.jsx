'use client';
import React, { useRef } from 'react';
import { Footer } from '@/components/Footer';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Montserrat } from 'next/font/google';
import { motion, useInView } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const KontakPage = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6s996zm',
      'template_vhn899a',
      form.current,
      'G3QdJxKw7PKSQSwoY'
    )
    .then(
      (result) => {
        // Send confirmation email to the sender
        emailjs.send(
          'service_6s996zm',
          'template_2qjer46',
          {
            to_email: form.current.email.value,
            name: form.current.name.value,
            message: form.current.message.value,
            title: form.current.title.value,
          },
          'G3QdJxKw7PKSQSwoY'
        );
        alert('Message sent!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <>
      <div className="w-full bg-[#121212] text-white">
        <main className="pt-10 px-5">
          <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[1702px] mx-auto mt-12 mb-24"
          >
            {/* Judul */}
            <h1 className={`${montserrat.className} text-6xl font-normal text-center mb-24 max-md:text-5xl max-md:mb-20 max-sm:text-2xl max-sm:mb-10`}>
              Kontak Kami
            </h1>

            {/* Konten utama */}
            <div className="bg-[#0D0D0D] p-12 rounded-2xl border border-gray-600 mb-16 max-md:p-8 max-sm:p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-sm:gap-4">

                {/* Google Maps */}
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9999999999995!2d107.6297!3d-6.9738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University!5e0!3m2!1sen!2sid!4v1679999999999!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg max-sm:h-40"
                  />
                </div>

                {/* Info Kontak */}
                <div className="space-y-8 max-sm:space-y-4">
                  {/* Media Sosial */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-4 max-sm:text-lg">Media Sosial</h3>
                    <a
                      href="https://www.instagram.com/mbclab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xl hover:text-gray-300 transition-colors max-sm:text-base"
                    >
                      <Instagram className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="w-8 h-8" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
                    >
                      <MessageCircle className="w-8 h-8" />
                      <span>@sok8073r</span>
                    </a>
                  </div>

                  {/* Alamat */}
                  <div className="pt-8 border-t border-gray-600">
                    <h3 className="text-2xl font-bold mb-4 max-sm:text-lg">Alamat</h3>
                    <p className="text-[#7D7D7D] text-lg leading-8 max-sm:text-sm max-sm:leading-6">
                      Telkom University, TULT 13.04, TULT 11.12, Jl. Telekomunikasi No. 1, Terusan Buahbatu - Bojongsoang, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
        <section className="max-w-5xl mx-auto mb-20 -mt-10 bg-dark border border-gray-600 p-10 rounded-2xl shadow-lg w-full max-sm:p-4">
          <h2 className="text-2xl font-bold mb-6 text-white max-sm:text-lg">Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-sm:gap-2">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 rounded-md bg-[#232B39] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md bg-[#232B39] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-3 rounded-md bg-[#232B39] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of your message"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-3 rounded-md bg-[#232B39] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Tell us about your message content"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-colors max-sm:text-base max-sm:py-2"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default KontakPage;
