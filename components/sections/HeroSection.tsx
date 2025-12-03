'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const words = ['professionnelle', 'disponible 24/7', 'personnalisée', 'efficace'];
  const [wordIndex, setWordIndex] = useState(0);

  const videos = [
    '/slider/video1.mp4',
    '/slider/video2.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeout = setTimeout(typeWriter, 2500);
          return;
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timeout = setTimeout(typeWriter, isDeleting ? 40 : 80);
    };

    timeout = setTimeout(typeWriter, 100);

    return () => clearTimeout(timeout);
  }, [wordIndex]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background with smooth transitions */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {videos.map((video, index) => (
            index === currentVideoIndex && (
              <motion.div
                key={video}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-center px-6"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-sm md:text-base uppercase tracking-[0.3em] font-light mb-4"
          >
            OptimaCall
          </motion.p>

          {/* Main heading */}
          <h1 className="font-light tracking-tight">
            <span className="block text-white text-2xl md:text-3xl lg:text-4xl mb-2 opacity-90">
              Votre solution d'accueil téléphonique
            </span>
            
            {/* Animated word */}
            <span className="block mt-4 md:mt-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium inline-block min-h-[1.2em]">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="text-white ml-1"
                >
                  |
                </motion.span>
              </span>
            </span>
          </h1>

          {/* Decorative line bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-10"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/70 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className="group relative flex items-center justify-end"
            aria-label={`Aller à la vidéo ${index + 1}`}
          >
            <span className={`text-xs mr-3 transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'text-white/80 opacity-100' 
                : 'text-white/0 group-hover:text-white/60 opacity-0 group-hover:opacity-100'
            }`}>
              0{index + 1}
            </span>
            <span className={`block transition-all duration-500 rounded-full ${
              index === currentVideoIndex
                ? 'w-3 h-3 bg-white'
                : 'w-2 h-2 bg-white/40 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  );
};

export default HeroSection;
