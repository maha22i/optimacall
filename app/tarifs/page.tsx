'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Essentielle',
    subtitle: 'Ne ratez plus aucun appel',
    price: 150,
    period: 'mois',
    description: 'Parfait pour les petites structures et indépendants',
    popular: false,
    color: 'from-blue-400 to-blue-600',
    icon: '📞',
    badge: 'Idéal pour débuter',
    features: [
      { name: '80 appels inclus/mois', included: true },
      { name: 'Décroché au nom de votre société', included: true },
      { name: 'Prise & transmission des messages (email / Whatsapp)', included: true },
      { name: 'Transfert vers fixe ou mobile', included: true },
      { name: 'Filtrage des appels simples', included: true },
      { name: 'Plage horaire 8h-18h (Lun–Ven)', included: true },
    ],
    benefits: [
      'Installation en 24h',
      'Sans engagement après 3 mois',
      'Support par email',
      'Ne perdez plus de clients faute de réponse'
    ]
  },
  {
    name: 'Pro',
    subtitle: 'Le choix des PME ambitieuses',
    price: 250,
    period: 'mois',
    description: 'Scripts personnalisés & prise de RDV intégrée',
    popular: true,
    color: 'from-indigo-500 to-purple-600',
    icon: '🚀',
    badge: 'Plus populaire',
    features: [
      { name: '200 appels inclus/mois', included: true },
      { name: 'Scripts d\'appels sur-mesure', included: true },
      { name: 'Filtrage & qualification avancés', included: true },
      { name: 'Transfert multi-numéros', included: true },
      { name: 'Prise de RDV (Google / Outlook)', included: true },
      { name: 'Plage horaire étendue 8h-19h + Sam 9h-13h', included: true },
      { name: 'Reporting détaillé mensuel', included: true },
    ],
    benefits: [
      'Libérez du temps pour vos équipes internes',
      'Formation de l\'équipe incluse',
      'Support prioritaire',
      'Suivi clair de l\'activité grâce au reporting'
    ]
  },
  {
    name: 'Premium',
    subtitle: 'Votre back-office téléphonique',
    price: 400,
    period: 'mois',
    description: 'Priorité, agenda multi-collaborateurs & relances',
    popular: false,
    color: 'from-purple-600 to-pink-600',
    icon: '👑',
    badge: 'Excellence garantie',
    features: [
      { name: '400 appels inclus/mois', included: true },
      { name: 'Gestion avancée des agendas', included: true },
      { name: 'Relances téléphoniques simples', included: true },
      { name: 'Numéro dédié inclus', included: true },
      { name: 'Plage horaire 8h-21h (Lun–Sam)', included: true },
      { name: 'Superviseur & rendez-vous de suivi', included: true },
    ],
    benefits: [
      'Account manager dédié',
      'SLA 99.9% uptime',
      'Support 24/7',
      'Support bilingue Français / Anglais'
    ]
  },
];

const additionalServices = [
  { 
    name: 'Numéro géographique dédié', 
    price: '15€ / mois', 
    description: 'Affichez un numéro local à vos appelants',
    detailedDescription: 'Choisissez un numéro de téléphone local (01, 02, 03, 04, 05, 09) pour renforcer la confiance de vos clients. Idéal pour les entreprises souhaitant s\'ancrer dans une région spécifique.',
    icon: '📍',
    color: 'from-emerald-400 to-teal-600'
  },
  { 
    name: 'Enregistrement des appels', 
    price: '30€ / mois', 
    description: 'Conformité & contrôle qualité',
    detailedDescription: 'Enregistrez tous vos appels pour garantir la conformité légale, améliorer la formation de vos équipes et analyser la qualité du service client. Stockage sécurisé et conforme RGPD.',
    icon: '🎙️',
    color: 'from-red-400 to-pink-600'
  },
  { 
    name: 'Intégration CRM', 
    price: 'Sur devis', 
    description: 'Zoho, HubSpot, Salesforce...',
    detailedDescription: 'Synchronisez automatiquement vos appels avec votre CRM. Créez des contacts, enregistrez les notes d\'appels et suivez vos opportunités directement depuis votre outil de gestion.',
    icon: '🔗',
    color: 'from-violet-400 to-purple-600'
  },
  { 
    name: 'Support multilingue', 
    price: '40€ / mois', 
    description: 'FR, EN, ES, AR et plus',
    detailedDescription: 'Offrez un service client dans plusieurs langues. Nos téléopérateurs maîtrisent le français, l\'anglais, l\'espagnol, l\'arabe et bien d\'autres langues pour servir votre clientèle internationale.',
    icon: '🌍',
    color: 'from-blue-400 to-indigo-600'
  },
  { 
    name: 'Astreinte 24/7', 
    price: 'Sur devis', 
    description: 'Jamais d\'interruption',
    detailedDescription: 'Assurez une disponibilité totale, 24h/24 et 7j/7, y compris les jours fériés. Parfait pour les services d\'urgence, le support technique ou les entreprises avec une clientèle mondiale.',
    icon: '🌙',
    color: 'from-slate-600 to-gray-800'
  },
  { 
    name: 'Scripts de vente', 
    price: 'Sur devis', 
    description: 'Boostez votre conversion',
    detailedDescription: 'Des scripts de vente personnalisés développés spécifiquement pour votre activité. Optimisez chaque appel pour maximiser vos conversions et transformer vos prospects en clients.',
    icon: '💼',
    color: 'from-amber-400 to-orange-600'
  },
];

const faqs = [
  {
    question: 'Y a-t-il des frais de mise en service ?',
    answer: 'Non, la mise en service est gratuite pour tous nos forfaits. Nous prenons en charge la configuration initiale et la formation de notre équipe.',
    icon: '💰',
  },
  {
    question: 'Puis-je changer de forfait ?',
    answer: 'Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment. Les changements prennent effet au début du mois suivant.',
    icon: '🔄',
  },
  {
    question: 'Comment sont comptabilisés les appels ?',
    answer: 'Un appel est comptabilisé dès lors qu\'il dure plus de 30 secondes. Les appels très courts (erreurs, raccrochages) ne sont pas facturés.',
    icon: '📊',
  },
  {
    question: 'Que se passe-t-il si je dépasse mon quota ?',
    answer: 'Les appels supplémentaires sont facturés à 0,50€/appel. Nous vous prévenons quand vous atteignez 80% de votre quota.',
    icon: '📈',
  },
  {
    question: 'Quelle est la qualité du service ?',
    answer: 'Nos téléopérateurs sont formés aux standards français avec un accent neutre. Taux de satisfaction client : 98%.',
    icon: '⭐',
  },
  {
    question: 'Comment fonctionne l\'intégration ?',
    answer: 'Installation en 24h, formation personnalisée incluse. Compatible avec tous vos outils existants.',
    icon: '⚡',
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPrice = (basePrice: number) => {
    if (billingPeriod === 'yearly') {
      return Math.round(basePrice * 10); // 2 mois offerts
    }
    return basePrice;
  };

  /* Slideshow images for hero */
  const heroImages = ['/image-tarif2.jpg', '/image-tarif3.jpg'];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background image with slow zoom */}
        <div className="absolute inset-0 -z-10">
          {heroImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Offre Optimacall"
              className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out animate-slow-zoom ${idx === slide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white" />

        <div className="container mx-auto px-4 text-center text-white mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Des tarifs clairs & avantageux
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Choisissez la formule qui boostera votre relation client, sans frais cachés
          </p>

          {/* Billing Toggle */}
          {/* <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1 animate-fade-in-up delay-200">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-black text-primary shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-black text-primary shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Annuel
            </button>
          </div> */}
        </div>
      </section>

      {/* Offres Section with Images */}
      <section className="py-20 relative overflow-hidden">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/30 to-blue-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in">
              Nos solutions téléphoniques
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Des offres adaptées à votre croissance
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
              Chaque entreprise a des besoins uniques. Découvrez la formule qui vous correspond.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Essentielle */}
              <div className="text-center animate-fade-in-up">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/30 flex items-center justify-center">
                    {/* Building icon */}
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="5" y="4" width="8" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="11" y="9" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M8 8H10M8 11H10M8 14H10M14 12H16M14 15H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-1">TPE & indépendants</h3>
                <p className="text-gray-600 text-sm">
                  Ne manquez plus un appel important avec l&apos;offre <span className="font-semibold">Essentielle</span>
                </p>
              </div>

              {/* Pro */}
              <div className="text-center animate-fade-in-up delay-100">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/30 flex items-center justify-center">
                    {/* Growth chart icon */}
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19H20"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 15L10 11L13 14L18 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 11V8H15"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-1">PME en croissance</h3>
                <p className="text-gray-600 text-sm">
                  Structurez votre relation client avec l&apos;offre <span className="font-semibold">Pro</span>
                </p>
              </div>

              {/* Premium */}
              <div className="text-center animate-fade-in-up delay-200">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/30 flex items-center justify-center">
                    {/* Trophy icon */}
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4H16V8.5C16 10.9853 13.9853 13 11.5 13C9.01472 13 7 10.9853 7 8.5V4H8Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M9 20H14"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10.5 17H12.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 6H4.5C4.5 6 4 6.5 4 7.75C4 9 5 10 6.5 10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 6H19.5C19.5 6 20 6.5 20 7.75C20 9 19 10 17.5 10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-1">Grandes structures</h3>
                <p className="text-gray-600 text-sm">
                  Offrez-vous un back-office premium avec l&apos;offre <span className="font-semibold">Premium</span>
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-indigo-300/40 to-cyan-300/40 blur-3xl opacity-50 -z-10"></div>
            <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  plan: 'Essentielle',
                  image: '/image-tarif3.jpg',
                  highlights: [
                    { label: 'Appels', value: '80/mois' },
                    { label: 'Horaires', value: '8h-18h' },
                    { label: 'Tarif', value: '150€ HT' },
                  ]
                },
                {
                  plan: 'Pro',
                  image: '/image-tarif2.jpg',
                  highlights: [
                    { label: 'Appels', value: '200/mois' },
                    { label: 'Horaires', value: '8h-19h + Sam' },
                    { label: 'Tarif', value: '250€ HT' },
                  ]
                },
                {
                  plan: 'Premium',
                  image: '/image-tarif3.jpg',
                  highlights: [
                    { label: 'Appels', value: '400/mois' },
                    { label: 'Horaires', value: '8h-21h tous les jours' },
                    { label: 'Tarif', value: '400€ HT' },
                  ]
                },
              ].map((item, idx) => {
                const plan = plans.find(p => p.name === item.plan)!;
                return (
                  <Card
                    key={idx}
                    className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={plan.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-3xl">{plan.icon}</span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${plan.color} text-white`}>
                            {plan.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{h.label}</p>
                            <p className="font-bold text-gray-900 mt-1">{h.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      
                      {/* Services inclus */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Services inclus :</h4>
                        {plan.features.map((feature, i) => (
                          feature.included && (
                            <div key={i} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-700">{feature.name}</span>
                            </div>
                          )
                        ))}
                      </div>
                      
                      {/* Benefits */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                        {plan.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing info */}
                      <div className="bg-gray-50 -mx-6 px-6 py-4 mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold text-gray-900">{plan.price}€</span>
                          <span className="text-gray-600 ml-2">/mois HT</span>
                        </div>
                        {plan.name === 'Essentielle' && (
                          <p className="text-center text-sm text-gray-500 mt-2">Au-delà : 1,20€/appel supp.</p>
                        )}
                        {plan.name === 'Pro' && (
                          <p className="text-center text-sm text-gray-500 mt-2">Au-delà : 1,00€/appel supp.</p>
                        )}
                        {plan.name === 'Premium' && (
                          <p className="text-center text-sm text-gray-500 mt-2">Au-delà : 0,90€/appel supp.</p>
                        )}
                      </div>
                      
                      <div className="mt-6">
                        <Button 
                          href="/contact" 
                          variant={plan.popular ? 'primary' : 'outline'}
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg' 
                              : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                          size="lg"
                        >
                          Commencer maintenant
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-blue-100/80 via-indigo-100/80 to-blue-200/80 text-center border-2 border-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'une solution sur mesure ?
              </h3>
              <p className="text-gray-700 mb-6">
                Nous créons des forfaits personnalisés pour les besoins spécifiques 
                de votre entreprise. Volume d'appels important, horaires particuliers, 
                intégrations complexes... tout est possible !
              </p>
              <Button href="/contact" size="lg" variant="primary" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                Demander un devis personnalisé
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            preTitle="🌟 Services Complémentaires"
            title="Boostez votre permanence téléphonique"
            subtitle="Des options sur-mesure pour maximiser votre satisfaction client"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                <Card className="relative overflow-visible h-full bg-white border border-gray-200 group-hover:border-blue-300 group-hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {service.name}
                    </h4>
                    <p className="text-3xl font-bold mb-4">
                      <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.price}
                      </span>
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-2 font-semibold group-hover:text-gray-900 transition-colors duration-300">
                      {service.description}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.detailedDescription}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-gradient-to-r from-blue-100/80 via-indigo-100/80 to-blue-200/80 border-2 border-dashed border-blue-300 shadow-lg">
              <p className="text-lg font-medium text-gray-800 mb-4">
                💬 Besoin d'une option personnalisée ?
              </p>
              <Button 
                href="/contact" 
                variant="primary"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg border-0"
              >
                Parlons de votre projet
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            preTitle="❓ FAQ"
            title="Vos questions, nos réponses"
            subtitle="Tout est clair et transparent chez OptimaCall"
          />
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <Card 
                    className={`p-6 transition-all duration-500 border-2 ${
                      openFaq === index 
                        ? 'border-primary shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50' 
                        : 'border-transparent hover:border-gray-200 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                          openFaq === index
                            ? 'bg-gradient-to-br from-primary to-secondary shadow-lg scale-110'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-indigo-100'
                        }`}>
                          {faq.icon}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      
                      <svg 
                        className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                          openFaq === index ? 'rotate-180 text-primary' : 'group-hover:text-gray-600'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed pl-16">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B4B] via-[#132D75] to-[#0F1F4C]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] opacity-70 animate-pulse"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-400/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-10 md:px-12 md:py-12 shadow-[0_25px_80px_rgba(8,15,40,0.45)] backdrop-blur-2xl">
          
              
              {/* Main content */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
                Prêt à transformer votre{' '}
                <span className="block mt-1 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                  relation client ?
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto">
                Optimacall, votre nouveau partenaire pour un accueil téléphonique professionnel et réactif
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Satisfaction client', value: '98%' },
                  { label: 'Mise en service', value: '48h' },
                  { label: "Frais d'installation", value: '0€' },
                ].map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/10 border border-white/10 px-6 py-4 text-left md:text-center animate-fade-in-up"
                    style={{ animationDelay: `${200 + idx * 100}ms` }}
                  >
                    <div className="text-2xl font-semibold text-yellow-200">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  size="md"
                  variant="primary"
                  className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white hover:from-sky-300 hover:to-indigo-500 shadow-2xl font-semibold rounded-full px-10 py-4 border border-white/30"
                >
                  <span className="flex items-center gap-3 text-base">
                    <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                      ✨
                    </span>
                    Obtenir mon devis gratuit
                  </span>
                </Button>
                
                <Button
                  href="tel:+33123456789"
                  size="md"
                  variant="outline"
                  className="border border-white/60 text-white hover:bg-white/10 hover:text-white font-semibold rounded-full px-10 py-4 backdrop-blur"
                >
                  <span className="flex items-center gap-3 text-base">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-pink-300">
                      📞
                    </span>
                    Appelez-nous maintenant
                  </span>
                </Button>
              </div>
              
              <p className="mt-8 text-xs md:text-sm text-white/70">
                ✅ Sans frais cachés  • ✅ Devis en 48h • ✅ Conseils personnalisés
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
