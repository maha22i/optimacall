'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Import dynamique pour éviter les erreurs SSR avec Three.js
const ParticleRing = dynamic(() => import('@/components/3d/ParticleRing'), {
  ssr: false,
  loading: () => null,
});

const features = [
  {
    id: 'quality',
    title: 'Qualité Premium',
    description: 'Une équipe formée et expérimentée pour un accueil irréprochable',
    details: 'Nos téléopérateurs sont rigoureusement sélectionnés et formés pour offrir un service d\'excellence. Chaque appel est traité avec professionnalisme et courtoisie.',
    stats: [
      { label: 'Satisfaction client', value: '99%' },
      { label: 'Temps de réponse', value: '< 3s' },
    ],
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    image: '/photo1.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'technology',
    title: 'Technologie Avancée',
    description: 'Des outils modernes pour une gestion optimale de vos appels',
    details: 'Intégration CRM, enregistrement d\'appels, statistiques en temps réel, et bien plus. Notre plateforme technologique est à la pointe de l\'innovation.',
    stats: [
      { label: 'Uptime garanti', value: '99.9%' },
      { label: 'Intégrations', value: '50+' },
    ],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    image: '/photo2.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'flexibility',
    title: 'Flexibilité Totale',
    description: 'Des formules adaptées à vos besoins et votre budget',
    details: 'Que vous soyez une TPE ou une grande entreprise, nous avons la solution qui vous convient. Ajustez votre forfait selon votre activité.',
    stats: [
      { label: 'Formules', value: '4+' },
      { label: 'Sans engagement', value: '✓' },
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    image: '/photo3.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Sécurité Maximale',
    description: 'Protection totale de vos données et confidentialité garantie',
    details: 'Conformité RGPD, chiffrement des données, accès sécurisés. Vos informations et celles de vos clients sont entre de bonnes mains.',
    stats: [
      { label: 'Conformité RGPD', value: '100%' },
      { label: 'Chiffrement', value: 'AES-256' },
    ],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
    image: '/photo4.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 bg-gradient-to-br from-[#04152f] via-[#061f43] to-[#0a2f68] overflow-hidden"
    >
      {/* Animation 3D en arrière-plan */}
      <ParticleRing />
      
      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04152f]/40 via-transparent to-[#0a2f68]/40 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Effets lumineux subtils */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(88,140,255,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,_rgba(0,255,255,0.3),_transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-down animate-once animate-duration-700">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-200">
              Pourquoi nous choisir
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-up animate-once animate-duration-700 animate-delay-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">
              L&apos;excellence au service de
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              votre accueil
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300/90 text-lg leading-relaxed animate-fade-up animate-once animate-duration-700 animate-delay-200">
            Des fonctionnalités pensées pour optimiser votre relation client
          </p>
          
          {/* Decorative line */}
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Feature Tabs - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setActiveFeature(feature)}
                className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeFeature.id === feature.id
                    ? 'bg-white/95 shadow-2xl shadow-blue-500/20'
                    : 'bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20'
                }`}
              >
                {/* Active indicator */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-500 ${
                  activeFeature.id === feature.id 
                    ? `h-12 bg-gradient-to-b ${feature.gradient}` 
                    : 'h-0'
                }`} />
                
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    activeFeature.id === feature.id 
                      ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg` 
                      : 'bg-white/20 text-white/80 group-hover:bg-white/30'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      activeFeature.id === feature.id ? 'text-gray-900' : 'text-white group-hover:text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeFeature.id === feature.id ? 'text-gray-600' : 'text-white/60 group-hover:text-white/80'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg 
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeFeature.id === feature.id 
                        ? 'text-gray-900 translate-x-0 opacity-100' 
                        : 'text-white/40 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Feature Details - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Main card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/50">
                  {/* Decorative circles */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${activeFeature.gradient} rounded-full opacity-20 blur-2xl`} />
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr ${activeFeature.gradient} rounded-full opacity-15 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${activeFeature.gradient} text-white text-sm font-medium mb-4 shadow-lg`}>
                      {activeFeature.icon}
                      <span>{activeFeature.title}</span>
                    </div>

                    {/* Details */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {activeFeature.details}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {activeFeature.stats.map((stat, index) => (
                        <div 
                          key={`${activeFeature.id}-${stat.label}`}
                          className={`bg-gradient-to-br ${activeFeature.bgGradient} backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 animate-fade-in`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <p className={`text-3xl font-bold bg-gradient-to-r ${activeFeature.gradient} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Image */}
                    <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${activeFeature.gradient} opacity-20`} />
                      
                      {/* Floating badge on image */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeFeature.gradient} animate-pulse`} />
                        <span className="text-sm font-medium text-gray-800">Service actif 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${activeFeature.gradient} rounded-2xl rotate-12 opacity-90 shadow-xl flex items-center justify-center text-white`}
                >
                  {activeFeature.icon}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
