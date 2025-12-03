'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAnimate, motion } from 'framer-motion';
import { FiMenu, FiArrowUpRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/tarifs', label: 'Nos offres' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isNavElement = target.classList.contains('glass-nav');

    if (isNavElement && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      setHovered(true);
      const top = offsetY + 'px';
      const left = offsetX + 'px';
      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: hovered ? 'none' : 'auto' }}
      className={`glass-nav fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md'
      }`}
    >
      <div className="glass-nav flex items-center justify-between px-5 py-4">
        {/* Cursor Effect */}
        <Cursor hovered={hovered} scope={scope} />

        {/* Links - Left */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 3).map((link) => (
            <GlassLink
              key={link.href}
              href={link.href}
              text={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </div>

        {/* Logo - Center */}
        <Link
          href="/"
          className="pointer-events-auto relative z-10 flex-shrink-0 transition-transform duration-300 hover:scale-105 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src="/logo-optimacall-transparent.png"
            alt="OptimaCall Logo"
            width={180}
            height={70}
            className="h-12 md:h-14 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Buttons - Right */}
        <div className="flex items-center gap-3">
          {/* More Links on Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(3).map((link) => (
              <GlassLink
                key={link.href}
                href={link.href}
                text={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            Demander un devis
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-2 block scale-100 text-2xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={isOpen} navLinks={navLinks} pathname={pathname} setIsOpen={setIsOpen} />
    </nav>
  );
};

interface CursorProps {
  hovered: boolean;
  scope: React.RefObject<HTMLSpanElement>;
}

const Cursor = ({ hovered, scope }: CursorProps) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${hovered ? 1 : 0}) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

interface GlassLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const GlassLink = ({ href, text, isActive }: GlassLinkProps) => {
  return (
    <Link
      href={href}
      className={`group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 ${
        isActive ? 'bg-white/10' : ''
      }`}
    >
      <span
        className={`relative z-10 font-medium transition-colors ${
          isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
        }`}
      >
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
};

interface MobileMenuProps {
  menuOpen: boolean;
  navLinks: { href: string; label: string }[];
  pathname: string;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ menuOpen, navLinks, pathname, setIsOpen }: MobileMenuProps) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="block overflow-hidden lg:hidden"
    >
      <div ref={ref} className="px-5 pb-5">
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
