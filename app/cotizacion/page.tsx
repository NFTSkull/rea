'use client';

import { useQuoteStore } from '@/store/quoteStore';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CotizacionPage() {
  const { items, updateQuantity, removeItem, getTotal, getItemCount, clearQuote } = useQuoteStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const buildWhatsAppMessage = () => {
    let message = 'Hola REA, me interesa solicitar una cotización con los siguientes servicios:\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.service.title} (${item.service.slug})\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: ${formatPrice(item.service.price)} MXN\n`;
      message += `   Subtotal: ${formatPrice(item.service.price * item.quantity)} MXN\n\n`;
    });
    
    message += `Total: ${formatPrice(getTotal())} MXN\n\n`;
    message += '¿Podrían ayudarme con esta cotización?';
    
    return encodeURIComponent(message);
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '528121102005';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Cotización' }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-text-gray mb-4">
              Tu cotización está vacía
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Agrega servicios a tu cotización para obtener un presupuesto personalizado
            </p>
            
            <Link href="/tramites-y-servicios" className="btn-primary">
              Explorar servicios
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-gray mb-4">
            Tu cotización
          </h1>
          <p className="text-xl text-gray-600">
            Revisa los servicios seleccionados y solicita tu presupuesto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de servicios */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-text-gray">
                  Servicios seleccionados ({getItemCount()})
                </h2>
                <button
                  onClick={clearQuote}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Limpiar todo
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.service.slug} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-gray mb-1">
                          {item.service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.service.summary}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">
                            Precio unitario: {formatPrice(item.service.price)}
                          </span>
                          <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {item.service.audience}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.service.slug)}
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label="Eliminar servicio"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.service.slug, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.service.slug, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-text-gray">
                          {formatPrice(item.service.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen y acciones */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-text-gray mb-6">
                Resumen de cotización
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.service.slug} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.service.title} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      {formatPrice(item.service.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-text-gray">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(getTotal())}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full flex items-center justify-center"
                >
                  <WhatsappCTA serviceName="" price={0} className="hidden" />
                  Solicitar cotización por WhatsApp
                </a>
                
                <Link href="/contacto" className="btn-secondary w-full text-center block">
                  Contactar por teléfono
                </Link>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-text-gray mb-2">
                  ¿Necesitas ayuda?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Nuestro equipo está disponible para resolver tus dudas y personalizar tu cotización.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📞 +52 81 2110 2005</p>
                  <p>✉️ contacto@rea.com.mx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
