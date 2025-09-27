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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
              REA
            </div>
            <span className="ml-3 text-xl font-bold text-text-gray">REA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-gray hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <WhatsappCTA className="btn-accent" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-text-gray hover:text-primary hover:bg-gray-100"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-text-gray hover:text-primary hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <WhatsappCTA className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
