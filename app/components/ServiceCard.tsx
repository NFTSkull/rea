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
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-gray mb-2 line-clamp-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {service.summary}
          </p>
        </div>
        {service.oldPrice && (
          <span className="bg-accent text-white text-xs px-2 py-1 rounded-full ml-2 font-medium">
            En promoción
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(service.price)}
          </span>
          {service.oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(service.oldPrice)}
            </span>
          )}
        </div>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {service.audience}
        </span>
      </div>

      <div className="flex space-x-2">
        <Link
          href={`/servicio/${service.slug}`}
          className="flex-1 btn-secondary text-center flex items-center justify-center"
        >
          <Eye className="h-4 w-4 mr-2" />
          Ver detalle
        </Link>
        <button
          onClick={handleAddToQuote}
          className="flex-1 btn-primary flex items-center justify-center"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Solicitar
        </button>
      </div>
    </div>
  );
}
