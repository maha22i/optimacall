'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Accueil Téléphonique',
    description: 'Un accueil professionnel et personnalisé pour chaque appel, avec prise de message et transmission en temps réel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    bgGradient: 'from-blue-500/10 to-cyan-400/10',
    features: ['Réponse personnalisée', 'Prise de message', 'Transmission instantanée'],
    number: '01',
  },
  {
    title: 'Support Client',
    description: 'Une équipe dédiée pour gérer vos demandes clients, résoudre les problèmes et assurer leur satisfaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-purple-400',
    bgGradient: 'from-indigo-500/10 to-purple-400/10',
    features: ['Support technique', 'Gestion des réclamations', 'Suivi personnalisé'],
    number: '02',
  },
  {
    title: 'Prise de Rendez-vous',
    description: 'Gestion complète de votre agenda avec prise de rendez-vous, rappels et confirmations automatiques.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-emerald-500/10 to-teal-400/10',
    features: ['Agenda synchronisé', 'Rappels automatiques', 'Confirmation SMS/Email', 'Prise de RDV'],
    number: '03',
  },
  {
    title: 'Service 24/7',
    description: 'Une permanence téléphonique assurée jour et nuit, week-ends et jours fériés pour ne jamais manquer un appel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-amber-400',
    bgGradient: 'from-orange-500/10 to-amber-400/10',
    features: ['Disponibilité continue', 'Équipe de nuit', 'Gestion des urgences'],
    number: '04',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-2">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Number watermark */}
        <span className="absolute -right-4 -top-4 text-[120px] font-bold text-gray-100 group-hover:text-gray-200/80 transition-colors duration-500 select-none leading-none">
          {service.number}
        </span>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors"
              >
                <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Link */}
          <Link
            href="/services"
            className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/link`}
          >
            <span>En savoir plus</span>
            <svg 
              className="w-4 h-4 ml-2 text-gray-400 group-hover/link:translate-x-1 group-hover/link:text-current transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesOverview = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Nos Services
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Une solution{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              complète
            </span>{' '}
            pour votre accueil téléphonique
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base leading-relaxed">
            Découvrez comment OptimaCall peut transformer votre relation client et optimiser votre productivité
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Découvrir tous nos services</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
