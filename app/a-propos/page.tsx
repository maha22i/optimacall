'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Import dynamique pour éviter les erreurs SSR avec Three.js
const ParticleRing = dynamic(() => import('@/components/3d/ParticleRing'), {
  ssr: false,
  loading: () => null,
});

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque interaction client, avec une formation continue de nos équipes.',
  },
  {
    icon: '🤝',
    title: 'Confiance',
    description: 'La confiance est au cœur de nos relations, garantissant confidentialité et professionnalisme.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Nous investissons dans les dernières technologies pour offrir un service toujours plus performant.',
  },
  {
    icon: '🌟',
    title: 'Engagement',
    description: 'Notre engagement va au-delà du service : nous sommes de véritables partenaires de votre succès.',
  },
];

const clientTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'PME & TPE',
    description: 'Entreprises de services, commerces, agences, prestataires B2B/B2C…',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverBg: 'group-hover:bg-blue-100',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Cabinets d\'avocats & Professions juridiques',
    description: 'Avocats, notaires, huissiers, experts-comptables…',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    hoverBg: 'group-hover:bg-indigo-100',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Secteur médical & paramédical',
    description: 'Médecins, cliniques, cabinets infirmiers, kinésithérapeutes, dentistes, laboratoires…',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    hoverBg: 'group-hover:bg-rose-100',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Professions libérales',
    description: 'Consultants, coachs, architectes, formateurs, conseillers…',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    hoverBg: 'group-hover:bg-amber-100',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Start-up & Entrepreneurs',
    description: 'Structures en croissance qui ont besoin d\'un accueil professionnel sans recruter en interne.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    hoverBg: 'group-hover:bg-emerald-100',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Immobilier & Gestion locative',
    description: 'Agences immobilières, syndics, gestionnaires de biens, promoteurs…',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    hoverBg: 'group-hover:bg-sky-100',
  },
];

const services = [
  { icon: '📝', text: 'Prise de messages' },
  { icon: '📞', text: 'Filtrage des appels' },
  { icon: '🚨', text: 'Gestion des urgences' },
  { icon: '🔀', text: 'Orientation des interlocuteurs' },
  { icon: '✨', text: 'Valorisation de votre image' },
];

const team = [
  {
    name: 'Jean Dupont',
    role: 'CEO & Fondateur',
    bio: 'Visionnaire passionné par l\'excellence du service client',
    avatar: '👨‍💼',
  },
  {
    name: 'Marie Martin',
    role: 'Directrice des Opérations',
    bio: '15 ans d\'expérience dans la gestion de centres d\'appels',
    avatar: '👩‍💼',
  },
  {
    name: 'Pierre Bernard',
    role: 'Directeur Technique',
    bio: 'Expert en solutions télécom et intégrations CRM',
    avatar: '👨‍💻',
  },
  {
    name: 'Sophie Laurent',
    role: 'Responsable Qualité',
    bio: 'Garante de l\'excellence de notre service client',
    avatar: '👩‍🏫',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="/page-propos3.jpg"
            alt="À propos d'OptimaCall"
            className="object-cover w-full h-full absolute inset-0 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white" />

        <div className="container mx-auto px-4 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-6 animate-fade-in font-medium">
            Découvrez notre histoire
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-lg">
             À Propos d'OptimaCall
            </span>
            <br />
            
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-100 text-white/90 leading-relaxed">
            Votre partenaire de confiance pour une relation client d'exception
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
              Notre Histoire
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 inline-block">
              Une Vision Devenue Réalité
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in-left space-y-6">
              <div className="space-y-5">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                  Fondée en <span className="font-semibold text-primary">2025</span>, OptimaCall est née d'une ambition simple mais exigeante : permettre aux entreprises de toutes tailles d'offrir un accueil téléphonique professionnel, humain et disponible, sans les contraintes d'une gestion interne.
                </p>
                
                <div className="relative pl-6 border-l-4 border-primary py-2 rounded-r-lg bg-gray-50 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    Nos fondateurs, forts d'une solide expérience dans les services aux entreprises et la relation client, ont identifié un besoin essentiel : celui d'un partenaire fiable, flexible et réellement impliqué dans l'image et la satisfaction de ses clients.
                  </p>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-left" style={{ animationDelay: '300ms' }}>
                  Aujourd'hui, OptimaCall accompagne déjà plusieurs entreprises dans la gestion de leur accueil téléphonique et de leurs appels entrants. Avec une équipe de téléconseillers francophones en pleine croissance, nous avons pour mission de devenir le partenaire de référence pour tous les professionnels souhaitant offrir une expérience d'accueil irréprochable, tout en se concentrant sur leur cœur de métier.
                </p>
              </div>
              
              <div className="pt-4">
                <Button href="/contact" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Rejoignez l'aventure
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column - Image with Animations */}
            <div className="relative animate-fade-in-right">
              {/* Main Image Container */}
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100 animate-fade-in-right" style={{ animationDelay: '150ms' }}>
                  <Image
                    src="/image-defauts.jpg"
                    alt="L'équipe OptimaCall"
                    fill
                    className="object-cover animate-fade-in-right"
                  />
                </div>
              </div>
              
              {/* Enhanced Stats Cards */}
              <div className="absolute -bottom-6 -left-6 group/stat">
                <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      50+
                    </p>
                  </div>
                  <p className="text-gray-700 font-medium">Professionnels</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 group/stat animate-fade-in-right" style={{ animationDelay: '500ms' }}>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      7000+
                    </p>
                  </div>
                  <p className="text-gray-700 font-medium">Appels/jour</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#04152f] via-[#061f43] to-[#0a2f68] overflow-hidden" id="valeurs">
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
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 mb-3">
              Nos Valeurs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200 animate-pulse">
              Ce qui nous anime au quotidien
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 mx-auto mt-5 rounded-full"></div>
            <p className="text-base text-slate-200/80 mt-5">
              Des principes fondamentaux qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative p-8 text-left rounded-3xl bg-white/90 border border-blue-100 shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(7,89,133,0.8)] transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-6">
                    {value.icon}
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Clients Section */}
      <section className="py-12 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" id="clients">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3 animate-fade-in">
              Nos Clients
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 inline-block animate-fade-in-up">
              Des solutions pensées pour les professionnels exigeants
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full animate-fade-in-up" style={{ animationDelay: '100ms' }}></div>
            <p className="text-base text-gray-600 mt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Chez OptimaCall, nous accompagnons tous les professionnels pour qui l'accueil téléphonique est essentiel à l'image de leur activité
            </p>
          </div>

          {/* Client Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl ${client.bgColor} ${client.borderColor} border-2 
                  hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 
                  transition-all duration-500 ease-out cursor-pointer overflow-hidden
                  animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${client.hoverBg}`} />
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${client.color} opacity-10 rounded-bl-full 
                  transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 
                  transition-transform duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} text-white 
                    flex items-center justify-center mb-6 shadow-lg
                    transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {client.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {client.title}
                  </h3>
                  
                  {/* Animated underline */}
                  <div className={`h-0.5 w-0 bg-gradient-to-r ${client.color} rounded-full 
                    group-hover:w-16 transition-all duration-500 mb-4`} />
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {client.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

          {/* Services Banner */}
          <div className="relative max-w-5xl mx-auto">
            {/* Background card */}
            <div className="relative bg-gradient-to-br from-[#04152f] via-[#061f43] to-[#0a2f68] rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
              </div>
              
              {/* Animated dots pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in-up">
                    Quel que soit votre secteur, nous gérons vos appels comme si nous faisions partie de votre équipe
                  </h3>
                  <p className="text-cyan-200 text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    100% aux couleurs de votre entreprise
                  </p>
                </div>
                
                {/* Services Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 
                        rounded-full px-6 py-3 hover:bg-white/20 hover:border-white/40 
                        transform hover:scale-105 transition-all duration-300 cursor-default
                        animate-fade-in-up"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <span className="text-xl group-hover:animate-bounce">{service.icon}</span>
                      <span className="text-white font-medium text-sm md:text-base">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
              bg-white rounded-full px-8 py-4 shadow-xl border border-gray-100
              animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-700 font-semibold">Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Bubble Text Title */}
            <div className="text-center mb-12 animate-fade-in-down">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin text-indigo-300 mb-4">
                {"Notre Mission".split("").map((char, idx) => (
                  <span 
                    key={idx} 
                    className="hoverText inline-block transition-all duration-300 hover:text-blue-500 hover:scale-125"
                    style={{ 
                      transitionDelay: `${idx * 20}ms`,
                      display: char === ' ' ? 'inline' : 'inline-block'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Mission Content Card */}
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/50 animate-fade-in-up">
                {/* Quote icon */}
                <div className="absolute top-6 left-6 text-blue-200/30 text-6xl font-serif">"</div>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 text-center leading-relaxed relative z-10 font-light">
                  <span className="text-blue-600 font-semibold">Permettre à chaque entreprise</span>, quelle que soit sa taille, d'offrir un accueil téléphonique d'excellence. Nous croyons que chaque appel est une opportunité de créer une connexion humaine authentique et de contribuer au succès de nos clients. 
                  <br /><br />
                  <span className="text-indigo-600 font-medium">En nous confiant la gestion de vos appels, de votre agenda et de vos messages</span>, vous libérez un temps précieux pour vous concentrer sur l'essentiel : <span className="text-blue-600 font-semibold">développer votre business</span>.
                </p>

                {/* Signature */}
                <div className="flex flex-col items-center mt-12 pt-8 border-t border-gray-200/50 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      FG
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">Frédérick Guerlin</p>
                      <p className="text-sm text-blue-600 font-medium">CEO & Co-Fondateur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
