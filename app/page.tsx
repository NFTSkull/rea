'use client';

import { services } from '@/data/services';
import SearchBar from '@/app/components/SearchBar';
import ServiceCard from '@/app/components/ServiceCard';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import Link from 'next/link';
import { 
  FileText, 
  Calculator, 
  TrendingUp, 
  Star
} from 'lucide-react';

export default function HomePage() {
  const popularServices = services.slice(0, 6);
  const testimonials = [
    {
      name: "María González",
      role: "Empresaria",
      content: "REA me ayudó a regularizar mi situación fiscal y ahora tengo todo en orden. Excelente servicio.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Contador independiente",
      content: "La capacitación fue muy práctica y me ayudó a entender mejor las obligaciones fiscales.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Dueña de negocio",
      content: "Implementaron mi facturación electrónica sin problemas. Muy profesionales.",
      rating: 5
    }
  ];

  const pillars = [
    {
      icon: FileText,
      title: "Trámites SAT",
      description: "RFC, e.firma, Buzón Tributario y regularizaciones",
      color: "text-primary"
    },
    {
      icon: Calculator,
      title: "Facturación & Nómina",
      description: "CFDI 4.0, nómina timbrada y reportes",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Planeación fiscal",
      description: "RESICO, RIF y optimización de impuestos",
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Qué trámite necesitas hoy?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Contabilidad y trámites ante el SAT para personas y empresas
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar 
                onSearch={() => {}}
                placeholder="Buscar servicios contables..."
                className="text-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsappCTA className="btn-accent bg-accent hover:bg-green-600" />
              <Link href="/contacto" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Agendar llamada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Nuestros servicios principales
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones completas para tus necesidades contables y fiscales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-gray mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Trámites y servicios populares
            </h2>
            <p className="text-xl text-gray-600">
              Los servicios más solicitados por nuestros clientes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tramites-y-servicios" className="btn-primary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de personas que confían en nosotros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text-gray">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Confianza y experiencia
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Cumplimiento SAT</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Soporte disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para regularizar tu situación fiscal?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos hoy mismo y recibe una asesoría personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappCTA className="bg-accent hover:bg-green-600" />
            <Link href="/contacto" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Agendar consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
