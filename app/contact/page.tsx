'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const contactReasons = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'information', label: 'Demande d\'information' },
  { value: 'support', label: 'Support technique' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'carriere', label: 'Opportunité de carrière' },
  { value: 'autre', label: 'Autre' },
];

const faqs = [
  {
    question: 'Comment puis-je tester vos services ?',
    answer: 'Nous offrons 1 mois d\'essai gratuit sans engagement. Contactez-nous via le formulaire ou appelez-nous directement pour activer votre période d\'essai.',
    icon: '🧪',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    question: 'Quel est le délai de mise en service ?',
    answer: 'La mise en service est généralement effectuée sous 48h ouvrées après validation de votre dossier. Pour les configurations complexes, comptez jusqu\'à 5 jours.',
    icon: '⚡',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    question: 'Proposez-vous des services multilingues ?',
    answer: 'Oui, nous proposons des services en français et en anglais. D\'autres langues sont disponibles sur demande pour les forfaits Enterprise.',
    icon: '🌍',
    color: 'from-purple-400 to-pink-500',
  },
  {
    question: 'Comment garantissez-vous la confidentialité ?',
    answer: 'Nous sommes certifiés ISO 27001 et conformes RGPD. Toutes les communications sont chiffrées et nos équipes signent des accords de confidentialité stricts.',
    icon: '🔒',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: 'information',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d\'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        reason: 'information',
        message: '',
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="/contact.jpg"
            alt="Equipe support Optimacall"
            className="object-cover w-full h-full absolute inset-0 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white" />

        <div className="container mx-auto px-4 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-6 animate-fade-in font-medium">
            Parlons ensemble
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-lg">
             Nous Contacter
            </span>
            <br />
            
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-100 text-white/90 leading-relaxed">
            Nous répondons à toutes vos questions en moins de 24h et préparons avec vous la
            meilleure expérience d&apos;accueil téléphonique pour vos clients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/30 to-purple-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Cards with colorful gradients */}
              <Card className="p-6 hover:shadow-2xl transition-all duration-500 group animate-fade-in-left relative overflow-hidden border-2 border-transparent hover:border-blue-300">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">Téléphone</h3>
                    <p className="text-blue-600 font-semibold text-lg">01 89 29 47 41</p>
                    <p className="text-sm text-gray-600">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-2xl transition-all duration-500 group animate-fade-in-left delay-100 relative overflow-hidden border-2 border-transparent hover:border-indigo-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">Email</h3>
                    <p className="text-indigo-600 font-semibold text-lg">contact@optimacall.fr</p>
                    <p className="text-sm text-gray-600">Réponse sous 24h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-2xl transition-all duration-500 group animate-fade-in-left delay-200 relative overflow-hidden border-2 border-transparent hover:border-purple-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">Adresse</h3>
                    <p className="text-gray-700 font-medium">64, allée de la main ferme</p>
                    <p className="text-gray-600">93320 Les Pavillons sous Bois, France</p>
                  </div>
                </div>
              </Card>

              {/* Office Hours with gradient */}
              <Card className="p-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border-2 border-blue-200 animate-fade-in-left delay-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Horaires d&apos;ouverture</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">Lundi - Vendredi</span>
                    <span className="font-bold text-blue-600">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">Samedi</span>
                    <span className="font-bold text-indigo-600">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">Dimanche</span>
                    <span className="font-medium text-gray-500">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700 font-medium flex items-center">
                    <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-2"></span>
                    Service client disponible 24/7
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 animate-fade-in-right shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                {/* Decorative gradient in corner */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Envoyez-nous un message
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">Nous vous répondrons rapidement</p>
                    </div>
                  </div>
                  
                  {showSuccess && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl animate-fade-in shadow-lg">
                      <p className="text-green-700 font-semibold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="jean@entreprise.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-cyan-600 transition-colors">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-gray-300"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                        Objet de votre demande *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 bg-white"
                      >
                        {contactReasons.map(reason => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300 resize-none"
                        placeholder="Décrivez votre besoin ou votre question..."
                      />
                    </div>

                    <div className="flex items-start p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-gray-700 cursor-pointer">
                        J&apos;accepte que mes données soient utilisées pour traiter ma demande. 
                        Voir notre <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">politique de confidentialité</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span>Envoyer le message</span>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden" id="faq">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30"></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in">
              ❓ Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Trouvez rapidement des réponses
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Tout ce que vous devez savoir sur nos services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <Card
                    className={`p-6 transition-all duration-500 border-2 relative overflow-hidden ${
                      openFaq === index
                        ? 'border-blue-300 shadow-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50'
                        : 'border-transparent hover:border-blue-200 hover:shadow-xl'
                    }`}
                  >
                    {/* Gradient background when open */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 transition-opacity duration-500 -z-10 ${
                      openFaq === index ? 'opacity-10' : 'group-hover:opacity-5'
                    }`}></div>
                    
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Icon with gradient */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${faq.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 ${
                          openFaq === index
                            ? 'scale-110 shadow-xl'
                            : 'group-hover:scale-110'
                        }`}>
                          <span className="text-2xl">{faq.icon}</span>
                        </div>
                        
                        <h3 className={`font-bold text-lg transition-colors flex items-start gap-2 ${
                          openFaq === index
                            ? 'text-blue-700'
                            : 'text-gray-900 group-hover:text-blue-700'
                        }`}>
                          <span className="text-blue-600 font-extrabold text-xl">Q.</span>
                          {faq.question}
                        </h3>
                      </div>
                      
                      {/* Arrow icon */}
                      <svg
                        className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${
                          openFaq === index
                            ? 'rotate-180 text-blue-600'
                            : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {/* Answer section with animation */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200 flex items-start gap-2">
                        <span className="text-indigo-600 font-bold mt-1">R.</span>
                        <p className="text-gray-700 leading-relaxed flex-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${faq.color} opacity-0 rounded-full blur-2xl transition-opacity duration-500 -z-10 ${
                      openFaq === index ? 'opacity-15' : 'group-hover:opacity-10'
                    }`}></div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </section>

      {/* Map Section with CTA */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/page-contact.jpg"
            alt="Contact Optimacall"
            className="object-cover w-full h-full"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-2000"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-2xl animate-fade-in-up">
                <div className="flex flex-col items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Vous ne trouvez pas la réponse à votre question ?
                      </span>
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Notre équipe est là pour vous aider. Contactez-nous dès maintenant !
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    href="#contact-form" 
                    variant="primary"
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl border-0 transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span className="font-semibold">Posez-nous votre question</span>
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
