'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { services, getServicesByCategory, getServicesByAudience, searchServices } from '@/data/services';
import type { Category, Audience } from '@/data/services';
import SearchBar from '@/app/components/SearchBar';
import Filters from '@/app/components/Filters';
import ServiceCard from '@/app/components/ServiceCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import EmptyState from '@/app/components/EmptyState';
import PromoCarousel from '@/app/components/PromoCarousel';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import Link from 'next/link';
import { 
  User,
  Shield,
  FileCheck,
  Calendar,
  Receipt,
  Building,
  AlertTriangle,
  MoreHorizontal
} from 'lucide-react';
import { Filter } from 'lucide-react';

export default function TramitesYServiciosPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const specificServices = [
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
  
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todas'>(
    (searchParams.get('categoria') as Category) || 'Todas'
  );
  const [selectedAudience, setSelectedAudience] = useState<Audience | 'Todos'>(
    (searchParams.get('audiencia') as Audience) || 'Todos'
  );
  const [priceRange, setPriceRange] = useState({
    min: parseInt(searchParams.get('min') || '0') || 0,
    max: parseInt(searchParams.get('max') || '0') || 0
  });
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar servicios
  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filtro por texto
    if (query) {
      filtered = searchServices(query);
    }

    // Filtro por categoría
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filtro por audiencia
    if (selectedAudience !== 'Todos') {
      filtered = filtered.filter(service => 
        service.audience === selectedAudience || service.audience === 'Ambos'
      );
    }

    // Filtro por precio
    if (priceRange.min > 0) {
      filtered = filtered.filter(service => service.price >= priceRange.min);
    }
    if (priceRange.max > 0) {
      filtered = filtered.filter(service => service.price <= priceRange.max);
    }

    return filtered;
  }, [query, selectedCategory, selectedAudience, priceRange]);

  // Actualizar URL cuando cambien los filtros
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (query) params.set('q', query);
    if (selectedCategory !== 'Todas') params.set('categoria', selectedCategory);
    if (selectedAudience !== 'Todos') params.set('audiencia', selectedAudience);
    if (priceRange.min > 0) params.set('min', priceRange.min.toString());
    if (priceRange.max > 0) params.set('max', priceRange.max.toString());

    const newUrl = params.toString() ? `?${params.toString()}` : '/tramites-y-servicios';
    router.replace(newUrl, { scroll: false });
  }, [query, selectedCategory, selectedAudience, priceRange, router]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleCategoryChange = (category: Category | 'Todas') => {
    setSelectedCategory(category);
  };

  const handleAudienceChange = (audience: Audience | 'Todos') => {
    setSelectedAudience(audience);
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    setPriceRange(range);
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedCategory('Todas');
    setSelectedAudience('Todos');
    setPriceRange({ min: 0, max: 0 });
  };

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Trámites y servicios' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="container-custom section-padding">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Trámites y servicios
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Encuentra el servicio que necesitas para cumplir con tus obligaciones fiscales
          </p>
        </div>

        {/* Promotional Carousel */}
        <div className="mb-16">
          <PromoCarousel />
        </div>

        {/* Specific Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Nuestros servicios principales
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Servicios especializados para personas y empresas ante el SAT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {specificServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
              >
                <div className="card text-center hover:shadow-large transition-all duration-200 group-hover:-translate-y-1">
                  <div className="icon-wrapper mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-accent-600 text-sm font-medium group-hover:text-accent-700 transition-colors duration-200">
                    Ver más →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            ¿Necesitas asesoría personalizada?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte con cualquier trámite o consulta fiscal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappCTA className="btn-accent" />
            <Link href="/contacto" className="btn-secondary">
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
