'use client';

import Link from 'next/link';
import { Service } from '@/data/services';
import { useQuoteStore } from '@/store/quoteStore';
import { trackServiceRequest } from '@/hooks/useGoogleAnalytics';
import { Eye, ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const addItem = useQuoteStore(state => state.addItem);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(service);
    trackServiceRequest(service.title, service.price);
  };

  return (
    <div className="card group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-3 line-clamp-2 group-hover:text-accent-600 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-sm text-text-secondary mb-4 line-clamp-3 leading-relaxed">
            {service.summary}
          </p>
        </div>
        {service.oldPrice && (
          <span className="badge badge-accent ml-3">
            En promoción
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-primary-800">
            {formatPrice(service.price)}
          </span>
          {service.oldPrice && (
            <span className="text-lg text-text-tertiary line-through">
              {formatPrice(service.oldPrice)}
            </span>
          )}
        </div>
        <span className="badge badge-neutral">
          {service.audience}
        </span>
      </div>

      <div className="flex space-x-3">
        <Link
          href={`/servicio/${service.slug}`}
          className="flex-1 btn-secondary text-center flex items-center justify-center gap-2"
        >
          <Eye className="h-4 w-4" />
          Ver detalle
        </Link>
        <button
          onClick={handleAddToQuote}
          className="flex-1 btn-primary flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Solicitar
        </button>
      </div>
    </div>
  );
}
