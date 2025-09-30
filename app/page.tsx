"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function ComingSoon() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src="/hero-sec.webp"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Sky Holding Logo"
            width={90}
            height={90}
            className="mr-3"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white/70 ">
        <motion.div className="space-y-6" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <div>Coming Soon</div>
            <div className="mt-4">Something Great Awaits</div>
          </h1>

          <p className="text-xl text-[#033250]  max-w-2xl mx-auto">
            Stay tuned for the launch of our exciting new Sky Holding website.
          </p>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Phone className="w-8 h-8" />
              <a
                href="tel:15759"
                className="text-4xl font-semibold hover:text-blue-300 transition-colors"
              >
                15759
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/sky-leasing-factoring"
                className="hover:text-blue-400 transition-colors"
                target="_blank"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/skyleasingfactoring"
                className="hover:text-blue-600 transition-colors"
                target="_blank"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="mailto:info@sky.eg"
                className="hover:text-rose-700 transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
