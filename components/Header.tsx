'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const servicesDropdownItems = [
  { href: '/services', label: 'All Services' },
  { href: '/services/landscaping-design', label: 'Landscaping Design' },
  { href: '/services/lawn-care', label: 'Lawn Care & Maintenance' },
  { href: '/services/snow-removal', label: 'Snow Removal' },
  { href: '/services/hardscaping', label: 'Hardscaping' },
] as const;

const navLinks = [
  { href: '/', label: 'Home' },
  { href: null, label: 'Our Services', isDropdown: true },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname === '/services' || pathname.startsWith('/services/');
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!servicesDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesDropdownOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesAccordionOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Aesthetic Gardener"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="block text-2xl font-display font-bold text-white">
                  Aesthetic Gardener
                </span>
                <p className="text-xs text-gray-400 font-body">Holland, Michigan</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => {
                if (item.href === null && 'isDropdown' in item && item.isDropdown) {
                  return (
                    <div
                      key="our-services"
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className={`font-medium transition-colors duration-300 flex items-center gap-1 ${
                          isServicesActive
                            ? 'text-accent-light font-semibold underline underline-offset-4 decoration-2'
                            : 'text-gray-300 hover:text-accent-light'
                        }`}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        Our Services
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`absolute left-0 top-full pt-2 origin-top transition-all duration-300 ease-out ${
                          servicesDropdownOpen
                            ? 'opacity-100 translate-y-0 visible animate-fade-in-fast'
                            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                        }`}
                      >
                        <div className="bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 min-w-[220px] overflow-hidden">
                          {servicesDropdownItems.map(({ href, label }, index) => {
                            const isActive = pathname === href || (href !== '/services' && pathname.startsWith(href));
                            return (
                              <Link
                                key={href}
                                href={href}
                                className={`block px-4 py-3 font-medium transition-colors ${
                                  isActive
                                    ? 'bg-accent/10 text-accent-light font-semibold'
                                    : index % 2 === 0
                                      ? 'bg-[#1a1a1a] text-gray-300 hover:bg-white/5'
                                      : 'bg-[#1e1e1e] text-gray-300 hover:bg-white/5'
                                }`}
                              >
                                {label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                const href = item.href as string;
                const isActive =
                  href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-accent-light font-semibold underline underline-offset-4 decoration-2'
                        : 'text-gray-300 hover:text-accent-light'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+16162182698"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent-light px-5 py-2.5 rounded-full font-semibold hover:bg-accent/10 transition-all duration-300"
                aria-label="Call (616) 218-2698"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call
              </a>
              <Link
                href="/contact#quote-form"
                className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-light hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </Link>
            </nav>

            <button
              type="button"
              className="md:hidden p-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      <div
        role="presentation"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(320px,85vw)] bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <span className="font-display text-lg font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2.5 text-gray-300 hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((item) => {
            if (item.href === null && 'isDropdown' in item && item.isDropdown) {
              return (
                <div key="our-services-mobile" className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setServicesAccordionOpen((prev) => !prev)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium transition-colors duration-300 text-left ${
                      isServicesActive
                        ? 'bg-accent/10 text-accent-light font-semibold'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    aria-expanded={servicesAccordionOpen}
                    aria-haspopup="true"
                  >
                    Our Services
                    <svg
                      className={`w-5 h-5 shrink-0 ml-2 transition-transform duration-300 ease-out ${servicesAccordionOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      servicesAccordionOpen ? 'grid-template-rows-[1fr]' : 'grid-template-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pl-6 pr-2 flex flex-col gap-0.5 py-1">
                        {servicesDropdownItems.map(({ href, label }) => {
                          const isActive = pathname === href || (href !== '/services' && pathname.startsWith(href));
                          return (
                            <Link
                              key={href}
                              href={href}
                              onClick={closeMenu}
                              className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                                isActive
                                  ? 'bg-accent/10 text-accent-light font-semibold'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                              }`}
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            const href = item.href as string;
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-300 ${
                  isActive
                    ? 'bg-accent/10 text-accent-light font-semibold'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="tel:+16162182698"
            onClick={closeMenu}
            className="mt-4 mx-2 flex items-center justify-center gap-2 border-2 border-accent text-accent-light px-6 py-3.5 rounded-full font-semibold hover:bg-accent/10 transition-all duration-300"
            aria-label="Call (616) 218-2698"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call
          </a>
          <Link
            href="/contact#quote-form"
            onClick={closeMenu}
            className="mt-3 mx-2 text-center bg-accent text-white px-6 py-3.5 rounded-full font-semibold hover:bg-accent-light hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
