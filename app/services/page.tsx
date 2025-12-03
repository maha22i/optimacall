'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import VerticalAccordion from '@/components/ui/VerticalAccordion';

// Import dynamique pour éviter les erreurs SSR avec Three.js
const ParticleRing = dynamic(() => import('@/components/3d/ParticleRing'), {
  ssr: false,
  loading: () => null,
});

// Services Appels Entrants
const appelsEntrants = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Accueil téléphonique personnalisé',
    description: 'Nous déccrochons au nom de votre entreprise avec la phrase d\'accueil de votre choix. Vos clients bénéficient d\'un accueil chaleureux et professionnel qui reflète votre image de marque.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Identification et qualification',
    description: 'Chaque appelant est identifié avec soin. Nous recueillons les informations essentielles : nom, société, motif de l\'appel, et niveau d\'urgence pour une prise en charge optimale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Prise de message détaillée',
    description: 'Aucune information n\'est perdue. Nos télésecrétaires rédigent des messages clairs et complets, incluant toutes les données nécessaires au bon suivi de chaque demande.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Transmission en temps réel',
    description: 'Recevez instantanément vos messages par email, SMS ou via notre application. Vous êtes informé(e) en quelques secondes, où que vous soyez.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Mise en relation directe',
    description: 'Si vous êtes disponible, nous transférons l\'appel directement vers votre ligne fixe ou mobile. Une continuité de service transparente pour vos interlocuteurs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Scripts d\'appel sur-mesure',
    description: 'Nous créons avec vous des scripts personnalisés qui respectent vos process métier. Chaque situation est anticipée pour garantir des réponses cohérentes et professionnelles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Connexion logiciel métier',
    description: 'Notre système s\'interface avec vos outils existants : CRM, ERP, logiciels de gestion. Les informations sont synchronisées automatiquement pour une productivité maximale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Gestion d\'agenda & prise de RDV',
    description: 'Nous gérons votre agenda en temps réel. Prise de rendez-vous, confirmations, rappels : votre planning est optimisé et vos clients ne manquent jamais un créneau.',
  },
];

// Services Appels Sortants
const appelsSortants = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Enquête de satisfaction client',
    description: 'Mesurez la satisfaction de vos clients après chaque prestation. Nous collectons des retours précieux pour améliorer continuellement votre service.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Service Après-Vente (SAV)',
    description: 'Suivi proactif de vos clients après achat. Nous vérifions leur satisfaction, répondons à leurs questions et anticipons d\'éventuels problèmes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Invitation événement',
    description: 'Organisez des événements réussis. Nous contactons vos invités, présentons le programme, collectons les confirmations et gérons les relances.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Rappel d\'entretiens & maintenance',
    description: 'Ne laissez plus passer une échéance. Nous rappelons à vos clients leurs rendez-vous d\'entretien préventif, révisions et maintenances programmées.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Qualification de fichiers clients',
    description: 'Valorisez votre base de données. Nous vérifions, actualisons et enrichissons les informations de vos contacts pour des actions commerciales ciblées.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Mise à jour de compte client',
    description: 'Gardez vos fiches clients à jour. Nous contactons vos clients pour vérifier leurs coordonnées, préférences et informations contractuelles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Demande de témoignage',
    description: 'Collectez des avis authentiques. Nous sollicitons vos clients satisfaits pour recueillir témoignages et recommandations valorisant votre expertise.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Campagne de rappel produit',
    description: 'Gérez efficacement vos rappels produits. Nous contactons les clients concernés avec tact et professionnalisme pour assurer leur sécurité et votre conformité.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Retour sur événement récent',
    description: 'Capitalisez sur vos événements. Nous recontactons les participants pour recueillir leurs impressions, mesurer l\'impact et préparer vos prochaines actions.',
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'entrant' | 'sortant'>('entrant');

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="/page-service.jpg"
            alt="Nos Services OptimaCall"
            className="object-cover w-full h-full absolute inset-0 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white" />

        <div className="container mx-auto px-4 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-6 animate-fade-in font-medium">
            Solutions sur mesure
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-lg">
             Nos Services
            </span>
            <br />
            
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-100 text-white/90 leading-relaxed">
            Des solutions sur mesure pour optimiser votre relation client et libérer votre potentiel
          </p>
        </div>
      </section>

      {/* Services Détaillés - Appels Entrants & Sortants */}
      <section className="py-12 relative overflow-hidden">
        {/* Background decoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Nos Prestations
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight whitespace-nowrap">
              Des services adaptés à <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">chaque besoin</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Découvrez nos prestations pour la gestion de vos appels entrants et sortants.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-lg shadow-blue-500/10 border border-gray-100">
              <button
                onClick={() => setActiveTab('entrant')}
                className={`relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'entrant'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  Appels Entrants
                </span>
              </button>
              <button
                onClick={() => setActiveTab('sortant')}
                className={`relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'sortant'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appels Sortants
                </span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'entrant' ? (
              <motion.div
                key="entrant"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header Card Entrant */}
                <div className="max-w-4xl mx-auto mb-12">
                  <Card className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Appels Entrants</h3>
                        <p className="text-white/90 leading-relaxed">
                          Nous réceptionnons vos appels comme si nous étions dans vos locaux. 
                          Un accueil professionnel, chaleureux et entièrement personnalisé selon vos consignes.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Services Grid Entrant */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {appelsEntrants.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Card className="h-full p-6 bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group border border-gray-100 hover:border-blue-200">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="sortant"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header Card Sortant */}
                <div className="max-w-4xl mx-auto mb-12">
                  <Card className="p-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Appels Sortants</h3>
                        <p className="text-white/90 leading-relaxed">
                          Selon votre cahier des charges, nous réalisons vos campagnes d'appels sortants. 
                          Prospection, relances, enquêtes : nous représentons votre entreprise avec professionnalisme.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Services Grid Sortant */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {appelsSortants.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Card className="h-full p-6 bg-white hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group border border-gray-100 hover:border-emerald-200">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Bottom */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.3),_transparent_50%)]" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">Besoin d&apos;un service sur mesure ?</h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  Chaque entreprise est unique. Discutons de vos besoins spécifiques pour créer une solution adaptée.
                </p>
                <Button href="/contact" size="lg" variant="ghost" className="!bg-white !text-gray-900 hover:!bg-gray-100 !border-0 shadow-lg">
                  Contactez-nous
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#04152f] via-[#061f43] to-[#0a2f68] overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-200">
                Comment ça marche
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">
                Un processus simple{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                et efficace
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300/90 text-lg leading-relaxed">
              De la prise de contact à la mise en service, nous vous accompagnons
            </p>
            
            {/* Decorative line */}
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Contact Initial',
                description: 'Échangez avec nos conseillers pour définir vos besoins',
                icon: '💬',
              },
              {
                step: '02',
                title: 'Personnalisation',
                description: 'Création de scripts et protocoles adaptés à votre activité',
                icon: '⚙️',
              },
              {
                step: '03',
                title: 'Formation',
                description: 'Notre équipe est formée spécifiquement à votre entreprise',
                icon: '🎓',
              },
              {
                step: '04',
                title: 'Lancement',
                description: 'Activation du service et suivi qualité continu',
                icon: '🚀',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up bg-white rounded-2xl p-6 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-gray-200 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Accordion Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Nos garanties pour votre entreprise
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ce qui rend <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">OptimaCall</span> unique
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Découvrez les avantages qui font la différence
            </p>
          </div>
          <VerticalAccordion />
        </div>
      </section>
    </div>
  );
}
