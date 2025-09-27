'use client';

import { services } from '@/data/services';
import SearchBar from '@/app/components/SearchBar';
import ServiceCard from '@/app/components/ServiceCard';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import PromoCarousel from '@/app/components/PromoCarousel';
import Link from 'next/link';
import { 
  FileText, 
  Calculator, 
  TrendingUp, 
  Star,
  User,
  Shield,
  FileCheck,
  Calendar,
  Receipt,
  Building,
  AlertTriangle,
  MoreHorizontal,
  BarChart3,
  DollarSign,
  FileSpreadsheet,
  Zap
} from 'lucide-react';
import Image from 'next/image';

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

  const solutions = [
    {
      icon: User,
      title: "RFC, personas",
      description: "Alta y actualización de RFC para personas físicas",
      href: "/tramites-y-servicios?categoria=Trámites SAT&audiencia=Persona"
    },
    {
      icon: Shield,
      title: "e.firma, personas",
      description: "Generación y renovación de e.firma para personas",
      href: "/tramites-y-servicios?categoria=Trámites SAT&audiencia=Persona"
    },
    {
      icon: FileCheck,
      title: "Declaraciones para personas",
      description: "Presentación de declaraciones mensuales y anuales",
      href: "/tramites-y-servicios?categoria=Contabilidad&audiencia=Persona"
    },
    {
      icon: Calendar,
      title: "Cita",
      description: "Agendamiento de citas ante el SAT",
      href: "/contacto"
    },
    {
      icon: Receipt,
      title: "Factura electrónica",
      description: "Implementación de CFDI 4.0 y facturación",
      href: "/tramites-y-servicios?categoria=Facturación & Nómina"
    },
    {
      icon: Building,
      title: "RFC, empresas",
      description: "Alta y actualización de RFC para empresas",
      href: "/tramites-y-servicios?categoria=Trámites SAT&audiencia=Empresa"
    },
    {
      icon: Shield,
      title: "e.firma, empresas",
      description: "Generación y renovación de e.firma para empresas",
      href: "/tramites-y-servicios?categoria=Trámites SAT&audiencia=Empresa"
    },
    {
      icon: FileCheck,
      title: "Declaraciones para empresas",
      description: "Presentación de declaraciones empresariales",
      href: "/tramites-y-servicios?categoria=Contabilidad&audiencia=Empresa"
    },
    {
      icon: AlertTriangle,
      title: "Adeudos fiscales",
      description: "Regularización de adeudos y multas fiscales",
      href: "/tramites-y-servicios?categoria=Trámites SAT"
    },
    {
      icon: MoreHorizontal,
      title: "Más trámites y servicios",
      description: "Consulta todos nuestros servicios disponibles",
      href: "/tramites-y-servicios"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ¿Qué trámite necesitas hoy?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
                Contabilidad y trámites ante el SAT para personas y empresas
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-primary-100">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium">Declaraciones anuales</span>
                </div>
                <div className="flex items-center gap-3 text-primary-100">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium">RESICO y RIF</span>
                </div>
                <div className="flex items-center gap-3 text-primary-100">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <FileSpreadsheet className="h-4 w-4 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium">Facturación electrónica</span>
                </div>
                <div className="flex items-center gap-3 text-primary-100">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium">Regularizaciones</span>
                </div>
              </div>

              <div className="max-w-xl mx-auto lg:mx-0 mb-8">
                <SearchBar 
                  onSearch={() => {}}
                  placeholder="Buscar servicios contables..."
                  className="text-lg"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsappCTA className="btn-accent" />
                <Link href="/contacto" className="btn-secondary">
                  Agendar llamada
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Servicios contables REA - Contabilidad y trámites ante el SAT"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-bg-primary rounded-xl p-4 shadow-large border border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <Star className="h-5 w-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-text-primary">500+</div>
                    <div className="text-xs text-text-tertiary">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-bg-primary rounded-xl p-4 shadow-large border border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success-100 flex items-center justify-center">
                    <FileCheck className="h-5 w-5 text-success-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-text-primary">100%</div>
                    <div className="text-xs text-text-tertiary">Cumplimiento SAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 to-accent-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para regularizar tu situación fiscal?
          </h2>
          <p className="text-xl mb-12 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy mismo y recibe una asesoría personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappCTA className="btn-accent" />
            <Link href="/contacto" className="btn-secondary">
              Agendar consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
