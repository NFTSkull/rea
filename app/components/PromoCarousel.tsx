'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, BarChart3, DollarSign, FileText, Zap } from 'lucide-react';

interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  bgColor: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const promotions: Promotion[] = [
  {
    id: 'declaracion-anual',
    title: '¡Declaración Anual 2024!',
    subtitle: 'Tiempo limitado',
    description: 'Presenta tu declaración anual con descuento especial. Incluye asesoría personalizada y seguimiento completo.',
    cta: 'Solicitar ahora',
    ctaLink: '/tramites-y-servicios?categoria=Contabilidad',
    bgColor: 'bg-gradient-to-r from-accent-600 to-accent-700',
    textColor: 'text-white',
    icon: BarChart3
  },
  {
    id: 'resico-promo',
    title: 'Migra a RESICO',
    subtitle: 'Ahorra en impuestos',
    description: 'Te ayudamos a migrar al Régimen Simplificado de Confianza con beneficios fiscales hasta 3.5%.',
    cta: 'Conocer más',
    ctaLink: '/tramites-y-servicios?categoria=Planeación fiscal',
    bgColor: 'bg-gradient-to-r from-success-600 to-success-700',
    textColor: 'text-white',
    icon: DollarSign
  },
  {
    id: 'facturacion-promo',
    title: 'Facturación Electrónica',
    subtitle: 'Implementación completa',
    description: 'CFDI 4.0, nómina timbrada y capacitación incluida. Todo lo que necesitas para facturar correctamente.',
    cta: 'Implementar',
    ctaLink: '/tramites-y-servicios?categoria=Facturación & Nómina',
    bgColor: 'bg-gradient-to-r from-primary-600 to-primary-700',
    textColor: 'text-white',
    icon: FileText
  },
  {
    id: 'regularizacion-promo',
    title: 'Regulariza tu situación',
    subtitle: 'Sin multas adicionales',
    description: 'Ponte al día con tus obligaciones fiscales. Te ayudamos a minimizar multas y regularizar tu situación.',
    cta: 'Regularizar',
    ctaLink: '/tramites-y-servicios?categoria=Trámites SAT',
    bgColor: 'bg-gradient-to-r from-orange-600 to-orange-700',
    textColor: 'text-white',
    icon: Zap
  }
];

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentPromo = promotions[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-xl shadow-large">
      {/* Main Banner */}
      <div className={`${currentPromo.bgColor} ${currentPromo.textColor} p-6 md:p-8 transition-all duration-500 ease-in-out`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <currentPromo.icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-sm font-medium opacity-90">{currentPromo.subtitle}</span>
                <h3 className="text-xl md:text-2xl font-bold">{currentPromo.title}</h3>
              </div>
            </div>
            <p className="text-sm md:text-base opacity-90 mb-4 max-w-2xl">
              {currentPromo.description}
            </p>
            <a
              href={currentPromo.ctaLink}
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm"
            >
              {currentPromo.cta}
            </a>
          </div>
          
          {/* Close button */}
          <button
            onClick={closeBanner}
            className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            aria-label="Cerrar banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Promoción anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a promoción ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Siguiente promoción"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: '100%',
            animation: `progress 5s linear infinite`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
