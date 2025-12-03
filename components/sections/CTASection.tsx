'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Composant Drip pour l'effet goutte
interface DripProps {
  left: string;
  height: number;
  delay: number;
  color: string;
  hoverColor: string;
}

const Drip = ({ left, height, delay, color, hoverColor }: DripProps) => {
  return (
    <motion.div
      className="absolute top-[99%] origin-top"
      style={{ left }}
      initial={{ scaleY: 0.75 }}
      animate={{ scaleY: [0.75, 1, 0.75] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 1],
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div
        style={{ height }}
        className={`w-2 rounded-b-full ${color} transition-colors ${hoverColor}`}
      />
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-0"
      >
        <g clipPath="url(#clip0_drip)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className={`${color.replace('bg-', 'fill-')} transition-colors ${hoverColor.replace('bg-', 'fill-')}`}
          />
        </g>
        <defs>
          <clipPath id="clip0_drip">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-full top-0 rotate-90"
      >
        <g clipPath="url(#clip1_drip)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className={`${color.replace('bg-', 'fill-')} transition-colors ${hoverColor.replace('bg-', 'fill-')}`}
          />
        </g>
        <defs>
          <clipPath id="clip1_drip">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <motion.div
        initial={{ y: -8, opacity: 1 }}
        animate={{ y: [-8, 50], opacity: [1, 0] }}
        transition={{
          duration: 2,
          times: [0, 1],
          delay,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className={`absolute top-full h-2 w-2 rounded-full ${color} transition-colors ${hoverColor}`}
      />
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-14 overflow-hidden bg-gradient-to-br from-[#003566] via-[#0077B6] to-[#00B4D8]">
      
      {/* Motif géométrique subtil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)`
          }}
        />
      </div>
      
      {/* Formes flottantes subtiles */}
      <div className="absolute top-6 left-[10%] w-16 h-16 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-6 right-[15%] w-20 h-20 bg-white/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
        
          
          {/* Heading compact */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
          >
            Prêt à transformer votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
              accueil téléphonique
            </span>
            ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm md:text-base text-white/80 mb-5 max-w-xl mx-auto"
          >
            Faites comme de nombreuses entreprises : confiez-nous vos appels en toute sérénité
          </motion.p>
          
          {/* Features inline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6"
          >
            {['Sans engagement', 'Installation rapide', 'Support dédié'].map((feature, index) => (
              <div key={index} className="flex items-center gap-1.5 text-xs text-white/90">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Buttons avec effet Wet Paint */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Bouton principal avec effet goutte blanc */}
            <Link
              href="/contact"
              className="group relative rounded-lg bg-white px-6 py-3 font-semibold text-[#0077B6] transition-colors hover:bg-gray-100 shadow-lg shadow-black/20 text-sm flex items-center gap-2"
            >
              <span>Commencer maintenant</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <Drip left="15%" height={20} delay={0.5} color="bg-white" hoverColor="group-hover:bg-gray-100" />
              <Drip left="45%" height={14} delay={2.5} color="bg-white" hoverColor="group-hover:bg-gray-100" />
              <Drip left="75%" height={18} delay={1.2} color="bg-white" hoverColor="group-hover:bg-gray-100" />
            </Link>
            
            {/* Bouton secondaire avec effet goutte cyan */}
            <Link
              href="/tarifs"
              className="group relative rounded-lg border-2 border-white/40 bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60 text-sm"
            >
              Voir nos tarifs
              <Drip left="20%" height={16} delay={1.8} color="bg-white/40" hoverColor="group-hover:bg-white/60" />
              <Drip left="70%" height={12} delay={3.2} color="bg-white/40" hoverColor="group-hover:bg-white/60" />
            </Link>
          </motion.div>
          
      
        </div>
      </div>
    </section>
  );
};

export default CTASection;
