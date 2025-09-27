'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import WhatsappCTA from './WhatsappCTA';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Trámites y servicios', href: '/tramites-y-servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="bg-bg-primary/95 backdrop-blur-sm border-b border-border-light sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-800 to-accent-600 flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-200">
              <span className="text-white font-bold text-lg tracking-wide">REA</span>
            </div>
            <div className="ml-4">
              <span className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors duration-200">REA</span>
              <p className="text-xs text-text-tertiary font-medium">Despacho Contable</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-text-secondary hover:text-primary-800 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <WhatsappCTA className="btn-accent flex items-center gap-2" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary-800 hover:bg-primary-50 transition-all duration-200"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-bg-secondary rounded-xl mt-4 border border-border-light shadow-soft">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-text-secondary hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <WhatsappCTA className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
