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
import { Filter } from 'lucide-react';

export default function TramitesYServiciosPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
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
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-gray mb-4">
            Trámites y servicios
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Encuentra el servicio que necesitas para tu situación fiscal
          </p>
          
          {/* Barra de búsqueda */}
          <div className="mb-6">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Buscar servicios..."
              className="max-w-2xl"
            />
          </div>

          {/* Filtros móviles */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-text-gray">Filtros</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-blue-700"
                >
                  Limpiar
                </button>
              </div>
              <Filters
                selectedCategory={selectedCategory}
                selectedAudience={selectedAudience}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onAudienceChange={handleAudienceChange}
                onPriceRangeChange={handlePriceRangeChange}
              />
            </div>
          </div>

          {/* Contenido principal */}
          <div className="lg:w-3/4">
            {/* Resultados */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  {filteredServices.length} servicio{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
                </p>
                {(query || selectedCategory !== 'Todas' || selectedAudience !== 'Todos' || priceRange.min > 0 || priceRange.max > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-blue-700"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>

            {/* Grid de servicios */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            ) : (
              <EmptyState 
                title="No se encontraron servicios"
                description="Intenta ajustar tus filtros de búsqueda o explorar nuestras categorías."
                showSearch={true}
                onSearch={handleSearch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
