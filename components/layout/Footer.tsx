import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Accueil Téléphonique', href: '/services#accueil' },
      { label: 'Support Client', href: '/services#support' },
      { label: 'Prise de Rendez-vous', href: '/services#rdv' },
      { label: 'Service 24/7', href: '/services#24-7' },
    ],
    entreprise: [
      { label: 'À Propos', href: '/a-propos' },
      { label: 'Notre Équipe', href: '/a-propos#equipe' },
      { label: 'Nos Valeurs', href: '/a-propos#valeurs' },
      { label: 'Carrières', href: '/contact#carrieres' },
    ],
    support: [
      { label: 'Centre d\'Aide', href: '/contact#aide' },
      { label: 'FAQ', href: '/contact#faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Mentions Légales', href: '/mentions-legales' },
    ],
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#204B99' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Blob Shapes with Movement */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/8 rounded-full blur-3xl blob animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/8 rounded-full blur-3xl blob animate-float-reverse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white/8 rounded-full blur-3xl blob animate-float animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/6 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Rotating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-white/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/8 rotate-12 animate-spin-slow"></div>
        <div className="absolute top-3/4 left-1/2 w-20 h-20 border-2 border-white/12 rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/20 rounded-full animate-float-particle"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-float-particle-reverse animation-delay-1000"></div>
        <div className="absolute top-40 right-1/3 w-4 h-4 bg-white/15 rounded-full animate-float-particle animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-float-particle-reverse animation-delay-500"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-float-particle animation-delay-1500"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-white/18 rounded-full animate-float-particle-reverse animation-delay-3000"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-white/22 rounded-full animate-float-particle animation-delay-2500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/18 rounded-full animate-float-particle-reverse animation-delay-3500"></div>
        
        {/* Pulsing Circles */}
        <div className="absolute top-1/4 left-1/5 w-40 h-40 border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/5 w-36 h-36 border border-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 border border-white/8 rounded-full animate-pulse-slow animation-delay-2000"></div>
        
        {/* Animated Wave Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" 
              fill="white"
              className="animate-pulse-slow"
            ></path>
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-bl from-white/8 to-transparent rounded-full blur-3xl animate-float animation-delay-3000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group ml-12">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <Image
                  src="/logo-optimacall-transparent.png"
                  alt="OptimaCall"
                  width={380}
                  height={212}
                  className="relative h-32 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/90 mb-6 max-w-sm text-base leading-relaxed">
              Votre partenaire de confiance pour l'externalisation de votre accueil téléphonique. 
              Service professionnel 24/7.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-light/50"
                  aria-label={link.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">{link.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-light to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
              Entreprise
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-light to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-light to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-light/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Appelez-nous</p>
                <p className="font-bold text-white text-lg">01 89 29 47 41</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Email</p>
                <p className="font-bold text-white text-lg">contact@optimacall.fr</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Disponibilité</p>
                <p className="font-bold text-white text-lg">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-white/80 mb-3 md:mb-0">
              &copy; {currentYear} <span className="font-semibold text-white">OptimaCall</span>. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/confidentialite" 
                className="text-white/80 hover:text-white transition-colors duration-300 relative group"
              >
                Politique de confidentialité
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-white/40">|</span>
              <Link 
                href="/cgv" 
                className="text-white/80 hover:text-white transition-colors duration-300 relative group"
              >
                CGV
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
