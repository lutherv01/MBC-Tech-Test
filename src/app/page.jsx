'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { VisionMission } from '@/components/VisionMission';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 3, type: 'spring' } },
};

const HomePage = () => {
  return (
    <>
      <main>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <VisionMission />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
