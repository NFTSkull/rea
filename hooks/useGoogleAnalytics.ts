'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function useGoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!GA_ID) return;

    // Cargar Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Configurar gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!GA_ID || !window.gtag) return;

    // Track page view
    window.gtag('config', GA_ID, {
      page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
    });
  }, [pathname, searchParams]);
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  
  if (!GA_ID || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

export function trackServiceRequest(serviceName: string, price: number) {
  trackEvent('service_request', 'engagement', serviceName, price);
}

export function trackWhatsAppClick(serviceName?: string) {
  trackEvent('whatsapp_click', 'contact', serviceName);
}
