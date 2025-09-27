'use client';

import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/hooks/useGoogleAnalytics';

interface WhatsappCTAProps {
  serviceName?: string;
  price?: number;
  userName?: string;
  className?: string;
}

export default function WhatsappCTA({ 
  serviceName, 
  price, 
  userName,
  className = "" 
}: WhatsappCTAProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '528121102005';
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const buildMessage = () => {
    let message = '¡Hola! Me interesa solicitar información sobre ';
    
    if (serviceName) {
      message += `el servicio: ${serviceName}`;
      if (price) {
        message += ` (${formatPrice(price)})`;
      }
    } else {
      message += 'sus servicios contables';
    }
    
    message += '. ¿Podrían ayudarme?';
    
    if (userName) {
      message += `\n\nMi nombre es: ${userName}`;
    }
    
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildMessage()}`;

  const handleClick = () => {
    trackWhatsAppClick(serviceName);
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`btn-accent flex items-center justify-center ${className}`}
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      Solicitar asesoría por WhatsApp
    </a>
  );
}
