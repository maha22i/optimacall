'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials, Testimonial } from '@/data/testimonials';

interface TestimonialListProps {
  list: Testimonial[];
  reverse?: boolean;
  duration?: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="shrink-0 w-[380px] rounded-2xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
      {/* Image en haut - hauteur fixe */}
      <div className="relative h-28 w-full overflow-hidden">
        <Image
          src={testimonial.img}
          alt={testimonial.name}
          fill
          sizes="380px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Overlay gradient en bas de l'image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
        
        {/* Guillemet décoratif */}
        <span className="absolute top-3 right-4 text-5xl text-white/40 font-serif leading-none select-none drop-shadow-lg">
          &ldquo;
        </span>
      </div>
      
      {/* Contenu */}
      <div className="p-5 pt-2">
        {/* Étoiles */}
        <div className="flex gap-0.5 mb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Nom et titre */}
        <h4 className="font-bold text-primary-dark text-base leading-tight">
          {testimonial.name}
        </h4>
        <p className="text-sm text-primary/80 mb-3 font-medium">
          {testimonial.title} · {testimonial.company}
        </p>
        
        {/* Témoignage */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          &ldquo;{testimonial.info}&rdquo;
        </p>
      </div>
      
      {/* Bordure gradient subtile */}
      <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }: TestimonialListProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "linear",
        repeatType: "loop"
      }}
      className="flex gap-6 px-3"
    >
      {list.map((testimonial) => (
        <TestimonialCard key={`${testimonial.id}-${testimonial.name}`} testimonial={testimonial} />
      ))}
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
      
      {/* Motif décoratif en arrière-plan */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Cercles décoratifs flous */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-6 sm:px-8 lg:px-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-5 border border-primary/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Témoignages Clients
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 font-display"
          >
            Ils nous font{' '}
            <span className="gradient-text">confiance</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez les retours d&apos;expérience de nos clients satisfaits. 
            Plus de <span className="font-semibold text-primary">500 entreprises</span> nous font déjà confiance.
          </motion.p>
        </div>

        {/* Container des témoignages défilants */}
        <div className="relative">
          {/* Gradient fade gauche */}
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-48 z-20 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
          
          {/* Gradient fade droite */}
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-48 z-20 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none" />
          
          {/* Première rangée - vers la gauche */}
          <div className="flex items-center mb-6 overflow-hidden">
            <TestimonialList list={testimonials.top} duration={70} />
            <TestimonialList list={testimonials.top} duration={70} />
            <TestimonialList list={testimonials.top} duration={70} />
          </div>
          
          {/* Deuxième rangée - vers la droite (reverse) */}
          <div className="flex items-center overflow-hidden">
            <TestimonialList list={testimonials.middle} duration={65} reverse />
            <TestimonialList list={testimonials.middle} duration={65} reverse />
            <TestimonialList list={testimonials.middle} duration={65} reverse />
          </div>
        </div>

        {/* Stats en dessous */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 px-6 sm:px-8 lg:px-12"
        >
          {[
            { value: '50+', label: 'Clients satisfaits' },
            { value: '98%', label: 'Taux de satisfaction' },
            { value: '24/7', label: 'Disponibilité' },
            { value: '+3', label: 'Années d\'expérience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
