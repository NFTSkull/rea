'use client';

import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import ServiceDetailTabs from '@/app/components/ServiceDetailTabs';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import { useQuoteStore } from '@/store/quoteStore';
import { ShoppingCart, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);
  const addItem = useQuoteStore(state => state.addItem);

  if (!service) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToQuote = () => {
    addItem(service);
  };

  // Servicios relacionados (misma categoría, excluyendo el actual)
  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Trámites y servicios', href: '/tramites-y-servicios' },
    { label: service.title }
  ];

  // Datos estructurados para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.summary,
    "provider": {
      "@type": "LocalBusiness",
      "name": "REA Despacho Contable",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Monterrey",
        "addressRegion": "Nuevo León",
        "addressCountry": "MX"
      }
    },
    "areaServed": "MX",
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "MXN"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    })) || []
  };

  return (
    <>
      {/* Datos estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {service.audience}
                  </span>
                  {service.oldPrice && (
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                      En promoción
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-text-gray mb-4">
                  {service.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {service.summary}
                </p>

                {/* Características principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">✓</span>
                      <span className="text-text-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar de precio y acciones */}
              <div className="lg:w-80">
                <div className="card text-center">
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-primary">
                        {formatPrice(service.price)}
                      </span>
                      {service.oldPrice && (
                        <span className="text-xl text-gray-400 line-through">
                          {formatPrice(service.oldPrice)}
                        </span>
                      )}
                    </div>
                    {service.oldPrice && (
                      <p className="text-sm text-accent font-medium">
                        Ahorras {formatPrice(service.oldPrice - service.price)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <WhatsappCTA 
                      serviceName={service.title}
                      price={service.price}
                      className="w-full"
                    />
                    <button
                      onClick={handleAddToQuote}
                      className="btn-secondary w-full flex items-center justify-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Agregar a cotización
                    </button>
                  </div>

                  {/* Información adicional */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Tiempo estimado: {service.timesAndCosts[0]?.replace('Tiempo estimado: ', '') || 'Variable'}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Para: {service.audience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs de contenido */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <ServiceDetailTabs service={service} />
          </div>

          {/* Servicios relacionados */}
          {relatedServices.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-text-gray mb-6">
                Servicios relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <div key={relatedService.slug} className="card">
                    <h3 className="text-lg font-semibold text-text-gray mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {relatedService.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(relatedService.price)}
                      </span>
                      <Link
                        href={`/servicio/${relatedService.slug}`}
                        className="btn-primary text-sm"
                      >
                        Ver detalle
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
